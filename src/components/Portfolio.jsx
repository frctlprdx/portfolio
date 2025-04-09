import React from "react";
import { Canvas } from "@react-three/fiber";
import StarField from "../components/StarField";
import Project from "../components/Project";

const Portfolio = () => {
    return (
      <section className="relative w-screen flex items-center justify-center bg-gradient-to-b from-black via-galaxyDark to-galaxyLight text-white">
        <div className="absolute h-screen w-full">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <StarField />
        </Canvas>
        </div>
      {/* Container teks */}
      <div className="z-10 text-center">
        <Project />
      </div>
    </section>
    );
  };
  
  export default Portfolio;