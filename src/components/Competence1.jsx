import { Canvas } from "@react-three/fiber";    
import StarField from "./StarField";
import HardSkill1 from "./Hardskill1";
import HardSkill2 from "./Hardskill2";
import HardSkill3 from "./Hardskill3";

const Competence1 = () => {
  return (
    <section className="relative w-screen h-screen overflow-hidden flex items-center justify-center bg-gradient-to-b from-black via-galaxyDark to-galaxyLight text-white">
      
      {/* Background bintang 3D */}
      <div className="absolute h-screen w-full">
      <Canvas camera={{ position: [0, 0, 5] }} className="absolute inset-0 z-0">
        <ambientLight intensity={0.5} />
        <StarField />
      </Canvas>
      </div>


      {/* Konten utama */}
      <div className="relative h-screen z-10 max-w-6xl flex flex-col items-center gap-6 pt-20">
        <h1 className="text-2xl font-bold text-center">Certification Of Competence</h1>
        
        {/* HardSkill Cards */}
        <div className="w-full space-y-4">
          <HardSkill1 />
          <HardSkill2 />
          <HardSkill3 />
        </div>
      </div>
    </section>
  );
}

export default Competence1;
