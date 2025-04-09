import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useState } from "react";
import StarField from "./StarField";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  const sections = [
    <AboutSection key="about" />, 
    <SkillsSection key="skills" triggerAnimation={triggerAnimation} />
  ];

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -100 && currentIndex < sections.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setTriggerAnimation((prev) => !prev);
    } else if (info.offset.x > 100 && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setTriggerAnimation((prev) => !prev);
    }
  };

  return (
    <section className="relative w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-b from-galaxyLight via-galaxyDark to-black text-white px-8 overflow-hidden">
      {/* Background Bintang */}
      <Canvas camera={{ position: [0, 0, 5] }} className="absolute inset-0">
        <ambientLight intensity={0.5} />
        <StarField />
      </Canvas>

      {/* Wrapper utama */}
      <div className="absolute z-10 text-center top-1/4 w-full">
        <h1 className="text-7xl tracking-widest">Beyond The Code:</h1>

        {/* Carousel Container */}
        <motion.div
          className="w-screen flex justify-center mt-10"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          style={{ display: "flex", width: `${sections.length * 100}vw` }}
        >
          {sections.map((Component, index) => (
            <motion.div
              key={index}
              className="w-screen flex justify-center items-center"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {Component}
            </motion.div>
          ))}
        </motion.div>

        {/* Dots Indicator */}
        <div className="mt-16 flex justify-center space-x-2">
          {sections.map((_, index) => (
            <div
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setTriggerAnimation((prev) => !prev);
              }}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                currentIndex === index ? "bg-white scale-125" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
