import { Canvas } from "@react-three/fiber";    
import StarField from "./StarField";
import HardSkill1 from "./Hardskill1";
import HardSkill2 from "./Hardskill2";
import HardSkill3 from "./Hardskill3";

const Competence1 = () => {
  return (
    <section className="relative w-screen h-screen flex items-center justify-center bg-gradient-to-b from-black via-galaxyDark to-galaxyLight text-white">
        <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <StarField />
      </Canvas>
      {/* Container teks */}
      <div className="absolute z-10 flex flex-col items-center gap-4 p-6 bg-opacity-50 rounded-lg mt-40">
          <h1>Certification Of Competence</h1>
          <HardSkill1 />
          <HardSkill2 />
          <HardSkill3 />
      </div>
    </section>
  );
}
export default Competence1;