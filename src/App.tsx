import React from "react";
import { Canvas } from "@react-three/fiber";
import { Box } from "./components";

export const App: React.FC = () => {
  return (
    <div id="canvas-container">
      Hello World
      <Canvas>
        <Box />
      </Canvas>
    </div>
  );
};
