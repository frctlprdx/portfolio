import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <motion.div 
      className="w-screen flex flex-col justify-center items-center snap-center px-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }} // Tambahkan exit agar smooth saat berpindah halaman
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        className="text-5xl tracking-widest"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        About Me
      </motion.h2>
      
      <motion.p
        className="max-w-xl mt-6 text-lg leading-relaxed text-justify"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
      >
        Hello, I'm Ivan Putra Pratama. A passionate programmer with a strong foundation in Full Stack Web Development and AI technologies.
        I specialize in Python, React, Laravel, and Machine Learning to build scalable and efficient solutions. On progress learning Django
        and FastAPI to expand my knowledge in the backend. Actively seeking for internship and job opportunities to expand my skills.
      </motion.p>
    </motion.div>
  );
};

export default AboutSection;
