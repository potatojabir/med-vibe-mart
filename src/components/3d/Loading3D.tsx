import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Torus } from '@react-three/drei';
import { Mesh } from 'three';

interface Loading3DProps {
  color?: string;
  size?: number;
}

export function Loading3D({ color = '#3B82F6', size = 1 }: Loading3DProps) {
  const sphereRef = useRef<Mesh>(null!);
  const torusRef = useRef<Mesh>(null!);

  useFrame((state, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += delta * 0.5;
      sphereRef.current.rotation.y += delta * 0.3;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x += delta * 0.2;
      torusRef.current.rotation.z += delta * 0.4;
    }
  });

  return (
    <group scale={size}>
      <Sphere ref={sphereRef} args={[0.5, 32, 32]}>
        <meshStandardMaterial 
          color={color} 
          metalness={0.3} 
          roughness={0.1} 
          transparent
          opacity={0.8}
        />
      </Sphere>
      
      <Torus ref={torusRef} args={[1, 0.2, 16, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color={color} 
          metalness={0.6} 
          roughness={0.1} 
          transparent
          opacity={0.6}
        />
      </Torus>
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
    </group>
  );
}