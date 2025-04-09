import { Canvas } from "@react-three/fiber";
import StarField from "./StarField";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
    <section className="relative w-screen h-screen flex items-center justify-center bg-black text-white">
        <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <StarField />
      </Canvas>
      {/* Container teks */}
      <div className="absolute z-10 text-center">
            <h1>FIND</h1>
            <h2>&</h2>
            <h2>Connect With Me On</h2>
            <div className="flex justify-center space-x-6 mt-4">
  <a href="https://github.com/frctlprdx" target="_blank" rel="noopener noreferrer" className="group">
    <div className="w-12 h-12 flex items-center justify-center rounded-full transition duration-300 group-hover:bg-violet-400">
      <FaGithub size={30} className="text-violet-400 group-hover:text-black" />
    </div>
  </a>
  
  <a href="https://linkedin.com/in/iivanpratama16" target="_blank" rel="noopener noreferrer" className="group">
    <div className="w-12 h-12 flex items-center justify-center rounded-full transition duration-300 group-hover:bg-violet-400">
      <FaLinkedin size={30} className="text-violet-400 group-hover:text-black" />
    </div>
  </a>
  
  <a href="https://wa.me/+6281326926776" target="_blank" rel="noopener noreferrer" className="group">
    <div className="w-12 h-12 flex items-center justify-center rounded-full transition duration-300 group-hover:bg-violet-400">
      <FaWhatsapp size={30} className="text-violet-400 group-hover:text-black" />
    </div>
  </a>
  
  <a href="mailto:iivanpratama16@gmail.com" target="_blank" rel="noopener noreferrer" className="group">
    <div className="w-12 h-12 flex items-center justify-center rounded-full transition duration-300 group-hover:bg-violet-400">
      <FaEnvelope size={30} className="text-violet-400 group-hover:text-black" />
    </div>
  </a>
</div>

          <p className="text-sm mt-4">2025. Ivan Putra Pratama. All rights reserved.</p>
        </div>
    </section>
    );
  };
  
  export default Footer;