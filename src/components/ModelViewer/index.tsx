'use client'
import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, ContactShadows } from '@react-three/drei';
import { Fog } from 'three';

function Model() {
  const gltf = useGLTF('/TV(GLB Export)(v1).glb') as any;
    console.log(gltf)
  return (
    <group position={[0, -0.8, -0.7]} rotation={[0, -0.15, 0]}>
        <primitive object={gltf.scene} scale={.7} castShadow receiveShadow />
    </group>
  );
}

export default function ModelViewer() {
  const controlsRef = useRef<any>(null);
  const cameraRef = useRef<any>(null);

  // // Функция для логирования позиции камеры
  // const handleControlChange = () => {
  //   if (controlsRef.current && controlsRef.current.object) {
  //     const pos = controlsRef.current.object.position;
  //     console.log('Camera position:', [pos.x, pos.y, pos.z]);
  //   }
  // };

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 0 }}>
      <Canvas camera={{ position: [3.36, 1.41, -0.88], fov: 50 }} ref={cameraRef} shadows>
        <Environment
          files="/hdr_v2.hdr"
          environmentIntensity={8}
          background
          ground={{
              height: 1,
              radius: 5,
              scale: 600
          }}
          // ground={{
          //   height: 1,
          //   radius: 100,
          //   scale: 100
          // }}
        />
        <Model />
        <ContactShadows position={[0, 0, 0]} opacity={0.5} scale={10} blur={2.5} far={10} />
        <OrbitControls
          target={[0, 1, 0]}
          ref={controlsRef}
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          // minPolarAngle={1.267}
          maxPolarAngle={1.567}
          // minAzimuthAngle={1}
          // maxAzimuthAngle={2.45}
          // minDistance={3.5}
          // maxDistance={8}
          // onChange={handleControlChange}
        />
      </Canvas>
    </div>
  );
} 