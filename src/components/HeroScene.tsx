import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import * as THREE from "three";

function NetworkNode({ position, color }: { position: [number, number, number]; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.3;
      ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={ref} position={position}>
        <octahedronGeometry args={[0.15, 0]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} wireframe />
      </mesh>
    </Float>
  );
}

function ServerCube({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.15;
      ref.current.rotation.y = state.clock.elapsedTime * 0.25;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={ref} position={position}>
        <boxGeometry args={[0.3, 0.5, 0.3]} />
        <meshStandardMaterial color="#00ffc8" emissive="#00ffc8" emissiveIntensity={0.2} wireframe />
      </mesh>
    </Float>
  );
}

function NetworkLines() {
  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < 18; i++) {
      pts.push(new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 5
      ));
    }
    return pts;
  }, []);

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions: number[] = [];
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        if (points[i].distanceTo(points[j]) < 3) {
          positions.push(points[i].x, points[i].y, points[i].z);
          positions.push(points[j].x, points[j].y, points[j].z);
        }
      }
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    return geometry;
  }, [points]);

  return (
    <>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#00ffc8" opacity={0.08} transparent />
      </lineSegments>
      {points.slice(0, 12).map((p, i) => (
        <NetworkNode key={i} position={[p.x, p.y, p.z]} color={i % 3 === 0 ? "#a855f7" : "#00ffc8"} />
      ))}
    </>
  );
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Stars radius={70} depth={50} count={700} factor={2} saturation={0} fade speed={0.4} />
      <NetworkLines />
      <ServerCube position={[-3, 1.5, -2]} />
      <ServerCube position={[3.5, -1, -1]} />
      <ServerCube position={[0, -2, -3]} />
      <ambientLight intensity={0.15} />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#00ffc8" />
      <pointLight position={[-5, -5, 5]} intensity={0.3} color="#a855f7" />
    </group>
  );
}

const HeroScene = () => (
  <div className="absolute inset-0">
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      dpr={[1, 1.25]}
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
    >
      <Scene />
    </Canvas>
  </div>
);

export default HeroScene;
