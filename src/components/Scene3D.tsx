"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function FloatingTorus({
  position,
  color,
  scale,
  speed,
}: {
  position: [number, number, number];
  color: string;
  scale: number;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
    meshRef.current.rotation.z = state.clock.elapsedTime * speed * 0.2;
  });

  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusGeometry args={[1, 0.35, 32, 64]} />
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.15}
          roughness={0.6}
          metalness={0.3}
          transparent
          opacity={0.35}
          distort={0.2}
          speed={1.5}
        />
      </mesh>
    </Float>
  );
}

// Deterministic pseudo-random for particle generation
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function Particles() {
  const particlesRef = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const rand = seededRandom(42);
    const count = 300;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const palette = [
      new THREE.Color("#F5A623"),
      new THREE.Color("#2BA88C"),
      new THREE.Color("#4A8AF5"),
      new THREE.Color("#E85D4A"),
    ];

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (rand() - 0.5) * 20;
      positions[i * 3 + 1] = (rand() - 0.5) * 20;
      positions[i * 3 + 2] = (rand() - 0.5) * 15;
      const c = palette[Math.floor(rand() * palette.length)];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (!particlesRef.current) return;
    particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function AuroraPlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const shaderData = useMemo(
    () => ({
      uniforms: {
        uTime: { value: 0 },
        uColor1: { value: new THREE.Color("#F5A623") },
        uColor2: { value: new THREE.Color("#2BA88C") },
        uColor3: { value: new THREE.Color("#4A8AF5") },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform vec3 uColor3;
        varying vec2 vUv;

        void main() {
          float t = uTime * 0.15;
          float wave1 = sin(vUv.x * 3.0 + t) * 0.5 + 0.5;
          float wave2 = sin(vUv.y * 2.0 - t * 0.7) * 0.5 + 0.5;
          float wave3 = sin((vUv.x + vUv.y) * 2.5 + t * 0.5) * 0.5 + 0.5;

          vec3 color = mix(uColor1, uColor2, wave1);
          color = mix(color, uColor3, wave2 * 0.5);

          float alpha = smoothstep(0.0, 0.5, vUv.y) * smoothstep(1.0, 0.6, vUv.y);
          alpha *= 0.08 * (wave3 * 0.5 + 0.5);

          gl_FragColor = vec4(color, alpha);
        }
      `,
    }),
    []
  );

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -5]} scale={[20, 12, 1]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        ref={materialRef}
        args={[shaderData]}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.4} />
        <pointLight position={[-5, -5, 3]} intensity={0.2} color="#F5A623" />

        <AuroraPlane />
        <Particles />

        <FloatingTorus position={[-3.5, 1.5, -2]} color="#F5A623" scale={0.7} speed={1.2} />
        <FloatingTorus position={[3, -1, -3]} color="#2BA88C" scale={0.5} speed={0.8} />
        <FloatingTorus position={[0, 2.5, -4]} color="#4A8AF5" scale={0.4} speed={1} />
        <FloatingTorus position={[-2, -2.5, -2.5]} color="#E85D4A" scale={0.35} speed={1.4} />
      </Canvas>
    </div>
  );
}
