import { useRef, useEffect } from "react";
import { Mesh } from "three";

import React from "react";

export const Box: React.FC = () => {
  const meshRef = useRef<Mesh>(null!);

  useEffect(() => {
    console.log(Boolean(meshRef.current));
  }, []);

  return (
    <mesh ref={meshRef}>
      <boxGeometry />
      <meshBasicMaterial />
    </mesh>
  );
};
