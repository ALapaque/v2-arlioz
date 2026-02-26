"use client";

import { useEffect, useRef, useCallback } from "react";
import { useTheme } from "./ThemeProvider";

// ─── Shaders ───────────────────────────────────────────────

const VERTEX = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

// Gradient mesh approach — large smooth color fields, NOT noise-based blobs.
// Each "source" is a moving color emitter with gaussian falloff.
// Colors blend where sources overlap → Stripe/Linear-like gradient mesh.
const FRAGMENT = `
precision highp float;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
uniform float u_dark;

// Soft simplex for subtle edge warping only
vec3 mod289v3(vec3 x){ return x - floor(x*(1.0/289.0))*289.0; }
vec4 mod289v4(vec4 x){ return x - floor(x*(1.0/289.0))*289.0; }
vec4 perm(vec4 x){ return mod289v4(((x*34.0)+1.0)*x); }
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0);
  vec3 i=floor(v+dot(v,C.yyy)),x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz),l=1.0-g;
  vec3 i1=min(g,l.zxy),i2=max(g,l.zxy);
  vec3 x1=x0-i1+C.xxx,x2=x0-i2+C.yyy,x3=x0-0.5;
  i=mod289v3(i);
  vec4 p=perm(perm(perm(i.z+vec4(0,i1.z,i2.z,1))+i.y+vec4(0,i1.y,i2.y,1))+i.x+vec4(0,i1.x,i2.x,1));
  vec4 j=p-49.0*floor(p/49.0);
  vec4 gx=floor(j/7.0)/7.0-0.5,gy=floor(j-7.0*floor(j/7.0))/7.0-0.5;
  vec4 gz=1.0-abs(gx)-abs(gy),tz=step(gz,vec4(0));
  gx-=tz*(step(vec4(0),gx)-0.5);gy-=tz*(step(vec4(0),gy)-0.5);
  vec3 g0=vec3(gx.x,gy.x,gz.x),g1=vec3(gx.y,gy.y,gz.y);
  vec3 g2=vec3(gx.z,gy.z,gz.z),g3=vec3(gx.w,gy.w,gz.w);
  vec4 norm=1.79284-0.85374*vec4(dot(g0,g0),dot(g1,g1),dot(g2,g2),dot(g3,g3));
  g0*=norm.x;g1*=norm.y;g2*=norm.z;g3*=norm.w;
  vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
  m=m*m;return 42.0*dot(m*m,vec4(dot(g0,x0),dot(g1,x1),dot(g2,x2),dot(g3,x3)));
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  float aspect = u_resolution.x / u_resolution.y;
  vec2 st = uv * vec2(aspect, 1.0);

  float t = u_time * 0.08;

  // Mouse influence
  vec2 mouseOffset = (u_mouse - 0.5) * 0.15;

  // ── Color sources: position + color + radius ──
  // Each source orbits slowly on sinusoidal paths

  // Source 1 — Amber (top-right area)
  vec2 p1 = vec2(
    0.62 * aspect + sin(t * 0.7) * 0.18 + mouseOffset.x,
    0.58 + cos(t * 0.5) * 0.15 + mouseOffset.y
  );
  vec3 c1 = vec3(0.961, 0.620, 0.043); // #F59E0B amber

  // Source 2 — Orange (center-right)
  vec2 p2 = vec2(
    0.52 * aspect + cos(t * 0.6 + 1.0) * 0.22 + mouseOffset.x,
    0.42 + sin(t * 0.45 + 2.0) * 0.18 + mouseOffset.y
  );
  vec3 c2 = vec3(0.976, 0.451, 0.086); // #F97316 orange

  // Source 3 — Deep orange (lower-right)
  vec2 p3 = vec2(
    0.7 * aspect + sin(t * 0.5 + 3.5) * 0.15 + mouseOffset.x,
    0.35 + cos(t * 0.65 + 1.5) * 0.2 + mouseOffset.y
  );
  vec3 c3 = vec3(0.918, 0.345, 0.047); // #EA580C deep

  // Source 4 — Warm gold (accent, more subtle)
  vec2 p4 = vec2(
    0.45 * aspect + cos(t * 0.55 + 5.0) * 0.2 + mouseOffset.x,
    0.6 + sin(t * 0.7 + 3.0) * 0.12 + mouseOffset.y
  );
  vec3 c4 = vec3(0.98, 0.72, 0.15); // warm gold

  // ── Compute influence per source (gaussian falloff) ──
  // Very large sigma → ultra smooth gradients
  float sigma = 0.32;
  float sigma2 = sigma * sigma * 2.0;

  // Subtle warp for organic feel (very low freq noise)
  vec2 warp = vec2(
    snoise(vec3(st * 0.8, t * 0.3)) * 0.04,
    snoise(vec3(st * 0.8 + 50.0, t * 0.3)) * 0.04
  );
  vec2 stw = st + warp;

  float w1 = exp(-dot(stw - p1, stw - p1) / sigma2);
  float w2 = exp(-dot(stw - p2, stw - p2) / sigma2);
  float w3 = exp(-dot(stw - p3, stw - p3) / sigma2);
  float w4 = exp(-dot(stw - p4, stw - p4) / (sigma2 * 0.7));

  float totalW = w1 + w2 + w3 + w4;

  // ── Blend colors by weighted influence ──
  vec3 gradientColor = (c1 * w1 + c2 * w2 + c3 * w3 + c4 * w4);
  gradientColor = totalW > 0.001 ? gradientColor / totalW : vec3(0.0);

  // ── Total intensity (how much color vs background) ──
  // Use max influence to determine opacity envelope
  float intensity = max(max(w1, w2), max(w3, w4));
  // Power curve for softer edges
  intensity = pow(intensity, 0.45);

  // Theme-adapted opacity
  float baseOpacity = mix(0.35, 0.55, u_dark);
  float alpha = intensity * baseOpacity;

  // ── Background ──
  vec3 bg = mix(
    vec3(0.992, 0.988, 0.98),  // light bg
    vec3(0.024, 0.024, 0.024), // dark bg
    u_dark
  );

  // ── Inner glow (dark mode only) — subtle ambient light ──
  float glowIntensity = exp(-dot(st - vec2(0.55 * aspect, 0.48), st - vec2(0.55 * aspect, 0.48)) / 0.5) * 0.04 * u_dark;
  vec3 glow = vec3(0.961, 0.620, 0.043) * glowIntensity;

  // ── Compose ──
  vec3 finalColor = mix(bg, gradientColor, alpha) + glow;

  gl_FragColor = vec4(finalColor, 1.0);
}
`;

// ─── Component ─────────────────────────────────────────────

export default function HeroBlob() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const rafRef = useRef<number>(0);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const locRef = useRef<{
    time: WebGLUniformLocation | null;
    resolution: WebGLUniformLocation | null;
    mouse: WebGLUniformLocation | null;
    dark: WebGLUniformLocation | null;
  }>({ time: null, resolution: null, mouse: null, dark: null });
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const mouseSmoothRef = useRef({ x: 0.5, y: 0.5 });

  const initGL = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return false;

    const gl = canvas.getContext("webgl", {
      alpha: false,
      antialias: false,
      premultipliedAlpha: false,
    });
    if (!gl) return false;

    const vs = gl.createShader(gl.VERTEX_SHADER)!;
    gl.shaderSource(vs, VERTEX);
    gl.compileShader(vs);

    const fs = gl.createShader(gl.FRAGMENT_SHADER)!;
    gl.shaderSource(fs, FRAGMENT);
    gl.compileShader(fs);

    if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
      console.error("Fragment shader error:", gl.getShaderInfoLog(fs));
      return false;
    }

    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    const verts = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    locRef.current = {
      time: gl.getUniformLocation(program, "u_time"),
      resolution: gl.getUniformLocation(program, "u_resolution"),
      mouse: gl.getUniformLocation(program, "u_mouse"),
      dark: gl.getUniformLocation(program, "u_dark"),
    };

    glRef.current = gl;
    return true;
  }, []);

  useEffect(() => {
    if (!initGL()) return;

    const canvas = canvasRef.current!;
    const gl = glRef.current!;
    const loc = locRef.current;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 1.5);
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();

    const onResize = () => resize();
    window.addEventListener("resize", onResize, { passive: true });

    const onMouse = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: 1.0 - e.clientY / window.innerHeight,
      };
    };
    window.addEventListener("mousemove", onMouse, { passive: true });

    const startTime = performance.now();

    const render = () => {
      const t = (performance.now() - startTime) * 0.001;

      const s = mouseSmoothRef.current;
      const m = mouseRef.current;
      s.x += (m.x - s.x) * 0.03;
      s.y += (m.y - s.y) * 0.03;

      gl.uniform1f(loc.time, t);
      gl.uniform2f(loc.resolution, canvas.width, canvas.height);
      gl.uniform2f(loc.mouse, s.x, s.y);
      gl.uniform1f(loc.dark, theme === "dark" ? 1.0 : 0.0);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      rafRef.current = requestAnimationFrame(render);
    };
    rafRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, [initGL, theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
