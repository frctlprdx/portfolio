import React from "react";
import { Canvas } from "@react-three/fiber";
import StarField from "../components/StarField";
import Project from "../components/Project";

const Portfolio = () => {
    return (
      <section className="relative w-screen h-screen flex items-center justify-center bg-gradient-to-b from-black via-galaxyDark to-galaxyLight text-white">
        <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <StarField />
      </Canvas>
      {/* Container teks */}
      <div className="absolute z-10 text-center">
        <Project />
      </div>
    </section>
    );
  };
  
  export default Portfolio;