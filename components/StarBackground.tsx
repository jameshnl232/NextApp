/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

const StarBackground = React.memo((props: any) => {
  const ref: any = useRef();

const [positions, setPositions] =      React.useState( new Float32Array(5000 * 3));

useEffect(() => {
    for (let i = 0; i < 5000; i++) {
      positions[i] = Math.random() * 2 - 1
     
    }
    setPositions(positions);
}, [ positions]);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.003}
          sizeAttenuation={true}
          dethWrite={false}
        />
      </Points>
    </group>
  );
});

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[0]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

StarBackground.displayName = "StarBackground";

export default StarsCanvas;
