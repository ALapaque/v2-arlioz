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

const FRAGMENT = `
precision highp float;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
uniform float u_dark; // 1.0 = dark theme, 0.0 = light theme

// ── Simplex 3D noise (Ashima Arts) ──
vec4 mod289(vec4 x){ return x - floor(x * (1.0/289.0)) * 289.0; }
vec3 mod289(vec3 x){ return x - floor(x * (1.0/289.0)) * 289.0; }
vec2 mod289(vec2 x){ return x - floor(x * (1.0/289.0)) * 289.0; }
vec4 permute(vec4 x){ return mod289(((x*34.0)+1.0)*x); }
vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314*r; }

float snoise(vec3 v){
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
  + i.y + vec4(0.0, i1.y, i2.y, 1.0))
  + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}

// ── FBM (fractal brownian motion) ──
float fbm(vec3 p) {
  float val = 0.0;
  float amp = 0.5;
  float freq = 1.0;
  for (int i = 0; i < 4; i++) {
    val += amp * snoise(p * freq);
    freq *= 2.0;
    amp *= 0.5;
  }
  return val;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  float aspect = u_resolution.x / u_resolution.y;
  vec2 st = (uv - 0.5) * vec2(aspect, 1.0);

  // Mouse influence — subtle pull toward cursor
  vec2 mouse = (u_mouse - 0.5) * vec2(aspect, 1.0);
  vec2 center = vec2(0.22 * aspect, 0.0) + mouse * 0.12;
  vec2 pos = st - center;

  float t = u_time * 0.12;

  // ── Primary blob ──
  float dist = length(pos);
  float noise1 = fbm(vec3(pos * 2.2, t));
  float noise2 = fbm(vec3(pos * 1.4 + 3.0, t * 0.7 + 10.0));
  float blobRadius = 0.35 + noise1 * 0.15 + noise2 * 0.08;
  float blob = smoothstep(blobRadius + 0.15, blobRadius - 0.08, dist);

  // ── Secondary blob (offset) ──
  vec2 center2 = center + vec2(0.15, -0.1) + vec2(sin(t * 0.5) * 0.06, cos(t * 0.4) * 0.05);
  vec2 pos2 = st - center2;
  float dist2 = length(pos2);
  float noise3 = fbm(vec3(pos2 * 2.5, t * 0.8 + 5.0));
  float blob2Radius = 0.22 + noise3 * 0.12;
  float blob2 = smoothstep(blob2Radius + 0.12, blob2Radius - 0.06, dist2);

  // ── Tertiary accent (small) ──
  vec2 center3 = center + vec2(-0.12, 0.15) + vec2(cos(t * 0.6) * 0.04, sin(t * 0.5) * 0.06);
  vec2 pos3 = st - center3;
  float dist3 = length(pos3);
  float noise4 = fbm(vec3(pos3 * 3.0, t * 1.1 + 20.0));
  float blob3Radius = 0.14 + noise4 * 0.08;
  float blob3 = smoothstep(blob3Radius + 0.1, blob3Radius - 0.04, dist3);

  // ── Brand colors ──
  vec3 amber    = vec3(0.961, 0.620, 0.043);  // #F59E0B
  vec3 orange   = vec3(0.976, 0.451, 0.086);  // #F97316
  vec3 deep     = vec3(0.918, 0.345, 0.047);  // #EA580C

  // Color mixing per blob
  float colorNoise = snoise(vec3(pos * 1.5, t * 0.3));
  vec3 blobColor = mix(amber, orange, smoothstep(-0.3, 0.5, colorNoise));
  blobColor = mix(blobColor, deep, smoothstep(0.2, 0.8, colorNoise + 0.2));

  vec3 blob2Color = mix(orange, deep, 0.4 + 0.3 * sin(t * 0.5));
  vec3 blob3Color = mix(amber, orange, 0.6);

  // ── Compose ──
  float alpha = blob * 0.55 + blob2 * 0.35 + blob3 * 0.2;
  vec3 color = blobColor * blob * 0.55
             + blob2Color * blob2 * 0.35
             + blob3Color * blob3 * 0.2;

  // Normalize color when alpha > 0
  color = alpha > 0.001 ? color / alpha : vec3(0.0);

  // Theme-adapted opacity
  float maxOpacity = mix(0.22, 0.35, u_dark);
  alpha *= maxOpacity;

  // Soft glow at edges
  float glow = exp(-dist * 2.2) * 0.06 * u_dark;

  // Final output — premultiplied alpha
  vec3 bg = mix(vec3(0.992, 0.988, 0.98), vec3(0.024), u_dark);
  vec3 finalColor = mix(bg, color, alpha) + vec3(glow) * amber;

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

    // Compile shaders
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

    // Fullscreen quad
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

      // Smooth mouse interpolation
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
      style={{ opacity: 1 }}
      aria-hidden="true"
    />
  );
}
