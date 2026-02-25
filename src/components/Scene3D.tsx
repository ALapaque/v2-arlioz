"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function WireframeIcosahedron() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => { if (ref.current) { ref.current.rotation.x = s.clock.elapsedTime * 0.08; ref.current.rotation.y = s.clock.elapsedTime * 0.12; } });
  return <mesh ref={ref} scale={3}><icosahedronGeometry args={[1, 1]} /><meshBasicMaterial color="#0ef" wireframe transparent opacity={0.06} /></mesh>;
}

function WireframeOctahedron() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => { if (ref.current) { ref.current.rotation.x = s.clock.elapsedTime * -0.06; ref.current.rotation.z = s.clock.elapsedTime * 0.1; } });
  return <mesh ref={ref} scale={5} position={[0, 0, -3]}><octahedronGeometry args={[1, 0]} /><meshBasicMaterial color="#0ef" wireframe transparent opacity={0.03} /></mesh>;
}

function seededRandom(seed: number) {
  let s = seed;
  return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
}

function NodeNetwork() {
  const pRef = useRef<THREE.Points>(null);
  const lRef = useRef<THREE.LineSegments>(null);

  const { positions, linePositions } = useMemo(() => {
    const rand = seededRandom(123);
    const count = 60;
    const positions = new Float32Array(count * 3);
    const nodes: THREE.Vector3[] = [];
    for (let i = 0; i < count; i++) {
      const x = (rand() - 0.5) * 16, y = (rand() - 0.5) * 12, z = (rand() - 0.5) * 8 - 4;
      positions[i * 3] = x; positions[i * 3 + 1] = y; positions[i * 3 + 2] = z;
      nodes.push(new THREE.Vector3(x, y, z));
    }
    const lines: number[] = [];
    for (let i = 0; i < count; i++) for (let j = i + 1; j < count; j++) {
      if (nodes[i].distanceTo(nodes[j]) < 4) {
        lines.push(nodes[i].x, nodes[i].y, nodes[i].z, nodes[j].x, nodes[j].y, nodes[j].z);
      }
    }
    return { positions, linePositions: new Float32Array(lines) };
  }, []);

  useFrame((s) => {
    const t = s.clock.elapsedTime * 0.015;
    if (pRef.current) pRef.current.rotation.y = t;
    if (lRef.current) lRef.current.rotation.y = t;
  });

  return (
    <>
      <points ref={pRef}><bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} /></bufferGeometry><pointsMaterial color="#0ef" size={0.04} transparent opacity={0.5} sizeAttenuation /></points>
      <lineSegments ref={lRef}><bufferGeometry><bufferAttribute attach="attributes-position" args={[linePositions, 3]} /></bufferGeometry><lineBasicMaterial color="#0ef" transparent opacity={0.04} /></lineSegments>
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 55 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }} style={{ background: "transparent" }}>
        <WireframeIcosahedron /><WireframeOctahedron /><NodeNetwork />
      </Canvas>
    </div>
  );
}
