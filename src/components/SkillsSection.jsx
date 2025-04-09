import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SkillsSection = ({ triggerAnimation }) => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1); // Setiap masuk, key berubah
  }, [triggerAnimation]); // Dependensi dari parent

  const skills = [
    { name: "Python (Machine Learning)", width: "83%" },
    { name: "Python (Django)", width: "25%" },
    { name: "PHP (Laravel)", width: "83%" },
    { name: "Frontend (React)", width: "25%" },
    { name: "Database (MySQL)", width: "83%" },
  ];

  return (
    <div className="w-screen flex flex-col justify-center items-center snap-center px-8">
      <h2 className="text-5xl tracking-widest mb-8">My Skills</h2>

      {/* Label Level */}
      <div className="w-full max-w-xl flex justify-between text-sm text-white mb-2">
        <span>Beginner</span>
        <span>Advanced</span>
        <span>Expert</span>
      </div>

      {/* Skill List */}
      <div className="w-full max-w-xl space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <p className="text-lg">{skill.name}</p>
            <div className="w-full bg-gray-700 rounded-full h-2">
              {/* Progress Bar dengan Animasi */}
              <motion.div
                key={animationKey} // Paksa re-render saat masuk halaman
                className="bg-violet-400 h-2 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: skill.width }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
