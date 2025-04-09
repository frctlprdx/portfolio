import { Canvas } from "@react-three/fiber";
import StarField from "./StarField";
import {
  FaReact,
  FaPython,
  FaGithubAlt,
  FaNodeJs,
  FaLaravel,
  FaSwift,
  FaDatabase,
} from "react-icons/fa";

import { TbBrandVscode } from "react-icons/tb";
import { SiXcode, SiPostman, SiFlutter} from "react-icons/si";
import { RiFirebaseLine } from "react-icons/ri";

const tools = [
  { name: "React", icon: <FaReact className="text-cyan-400 text-3xl mb-2" /> },
  { name: "Python", icon: <FaPython className="text-yellow-300 text-3xl mb-2" /> },
  { name: "Github", icon: <FaGithubAlt className="text-orange-400 text-3xl mb-2" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-400 text-3xl mb-2" /> },
  { name: "Laravel", icon: <FaLaravel className="text-red-500 text-3xl mb-2" /> },
  { name: "Swift", icon: <FaSwift className="text-orange-300 text-3xl mb-2" /> },
  { name: "MySQL", icon: <FaDatabase className="text-teal-300 text-3xl mb-2" /> },
  { name: "VSCode", icon: <TbBrandVscode className="text-blue-400 text-3xl mb-2" /> },
  { name: "XCode", icon: <SiXcode className="text-blue-400 text-3xl mb-2" /> },
  { name: "Firebase", icon: <RiFirebaseLine className="text-orange-400 text-3xl mb-2" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400 text-3xl mb-2" /> },
  { name: "Flutter", icon: <SiFlutter className="text-teal-400 text-3xl mb-2" /> },
];

const Tools = () => {
  return (
    <section className="relative w-screen h-screen flex flex-col items-center justify-start bg-gradient-to-b from-galaxyLight via-galaxyDark to-black text-white px-8 overflow-hidden">
      {/* Background Bintang */}
      <Canvas camera={{ position: [0, 0, 5] }} className="absolute inset-0">
        <ambientLight intensity={0.5} />
        <StarField />
      </Canvas>

      {/* Judul */}
      <h1 className="absolute z-10 text-4xl font-bold mb-10 text-center top-20">Tools</h1>

      {/* Grid Tools */}
      <div className="absolute z-10 grid grid-cols-6 gap-6 top-40">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border-2 border-violet-500 rounded-xl p-4 w-36 h-36 bg-black bg-opacity-30 backdrop-blur"
          >
            {tool.icon}
            <span className="text-sm font-medium">{tool.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;
