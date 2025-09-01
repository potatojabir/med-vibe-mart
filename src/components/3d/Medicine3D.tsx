import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Cylinder, Sphere } from '@react-three/drei';
import { Mesh } from 'three';

interface Medicine3DProps {
  type?: 'pill' | 'capsule' | 'bottle' | 'tablet';
  color?: string;
  autoRotate?: boolean;
  scale?: number;
}

export function Medicine3D({ 
  type = 'pill', 
  color = '#3B82F6', 
  autoRotate = true,
  scale = 1 
}: Medicine3DProps) {
  const meshRef = useRef<Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      if (autoRotate) {
        meshRef.current.rotation.y += delta * 0.5;
      }
      if (hovered) {
        meshRef.current.rotation.x += delta * 2;
      }
    }
  });

  const renderMedicine = () => {
    switch (type) {
      case 'pill':
        return (
          <Cylinder
            ref={meshRef}
            args={[0.8, 0.8, 0.3, 16]}
            scale={scale}
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)}
          >
            <meshStandardMaterial color={color} metalness={0.1} roughness={0.3} />
          </Cylinder>
        );
      
      case 'capsule':
        return (
          <group
            ref={meshRef}
            scale={scale}
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)}
          >
            <Cylinder args={[0.3, 0.3, 1.2, 16]} position={[0, 0, 0]}>
              <meshStandardMaterial color={color} metalness={0.1} roughness={0.3} />
            </Cylinder>
            <Sphere args={[0.3, 16, 16]} position={[0, 0.6, 0]}>
              <meshStandardMaterial color={color} metalness={0.1} roughness={0.3} />
            </Sphere>
            <Sphere args={[0.3, 16, 16]} position={[0, -0.6, 0]}>
              <meshStandardMaterial color="#E5E7EB" metalness={0.1} roughness={0.3} />
            </Sphere>
          </group>
        );
      
      case 'bottle':
        return (
          <group
            ref={meshRef}
            scale={scale}
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)}
          >
            <Cylinder args={[0.6, 0.8, 2, 8]} position={[0, 0, 0]}>
              <meshStandardMaterial color={color} metalness={0.2} roughness={0.4} />
            </Cylinder>
            <Cylinder args={[0.4, 0.4, 0.3, 8]} position={[0, 1.15, 0]}>
              <meshStandardMaterial color="#374151" metalness={0.8} roughness={0.2} />
            </Cylinder>
          </group>
        );
      
      default: // tablet
        return (
          <Box
            ref={meshRef}
            args={[1.2, 0.2, 0.8]}
            scale={scale}
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)}
          >
            <meshStandardMaterial color={color} metalness={0.1} roughness={0.3} />
          </Box>
        );
    }
  };

  return (
    <>
      {renderMedicine()}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
    </>
  );
}