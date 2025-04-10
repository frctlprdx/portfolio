import { Canvas } from "@react-three/fiber";    
import StarField from "./StarField";
import HardSkill4 from "./Hardskill4";
import HardSkill5 from "./Hardskill5";
import HardSkill6 from "./Hardskill6";

const Competence2 = () => {
    return (
      <section className="relative w-screen min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-galaxyLight via-galaxyDark to-black text-white px-8 overflow-hidden ">
        <div className="absolute h-screen w-full">
        <Canvas camera={{ position: [0, 0, 5] }} className="absolute inset-0 z-0">
          <ambientLight intensity={0.5} />
          <StarField />
        </Canvas>
      </div>
  
        {/* Container teks */}
        <div className="relative min-h-screen z-10 flex flex-col items-center gap-6">
          <HardSkill4 />
          <HardSkill5 />
          <HardSkill6 />
        </div>
      </section>
    );
  }
  export default Competence2;