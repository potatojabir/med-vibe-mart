import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Medicine3D } from './Medicine3D';

interface Scene3DProps {
  children?: React.ReactNode;
  enableControls?: boolean;
  className?: string;
  cameraPosition?: [number, number, number];
}

export function Scene3D({ 
  children, 
  enableControls = true, 
  className = "w-full h-full",
  cameraPosition = [0, 0, 5]
}: Scene3DProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: cameraPosition, fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Environment preset="studio" />
          {children || <Medicine3D />}
          {enableControls && (
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
}