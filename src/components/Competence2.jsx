import { Canvas } from "@react-three/fiber";    
import StarField from "./StarField";
import HardSkill4 from "./Hardskill4";
import HardSkill5 from "./Hardskill5";
import HardSkill6 from "./Hardskill6";

const Competence2 = () => {
    return (
      <section className="relative w-screen h-screen flex flex-col items-center justify-start bg-gradient-to-b from-galaxyLight via-galaxyDark to-black text-white px-8 overflow-hidden">
        <Canvas className="absolute top-0 left-0 w-full h-full" camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <StarField />
        </Canvas>
  
        {/* Container teks */}
        <div className="absolute z-10 flex flex-col items-center gap-4 p-6 bg-opacity-50 rounded-lg">
          <HardSkill4 />
          <HardSkill5 />
          <HardSkill6 />
        </div>
      </section>
    );
  }
  export default Competence2;