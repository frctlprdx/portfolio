import React from "react";
import { Typewriter } from 'react-simple-typewriter';
import { Canvas } from "@react-three/fiber";
import StarField from "./StarField";


const Hero = () => {
  return (
    <section className="relative w-screen h-screen flex items-center justify-center bg-gradient-to-b from-black via-galaxyDark to-galaxyLight text-white">
        <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <StarField />
      </Canvas>
      {/* Container teks */}
      <div className="absolute z-10 text-center">
        <h1 className="text-7xl tracking-widest">
            Welcome Aboard!
        </h1>
        <h2 className="text-5xl tracking-wider">
            I'm {' '}
            <span className="text-white">
                <Typewriter
                words={['Ivan Putra Pratama', 'Fullstack Web Developer', 'Machine Learning Engineer']}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1500}
                />
            </span>
        </h2>
      </div>
    </section>
  );
};

export default Hero;
