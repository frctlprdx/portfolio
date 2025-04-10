import { Canvas } from "@react-three/fiber";    
import { Link } from "react-router-dom";
import StarField from "./StarField";
import HardSkill1 from "./Hardskill1";
import HardSkill2 from "./Hardskill2";
import HardSkill3 from "./Hardskill3";

const CertificateHardSkill = () => {
  return (
    <section className="relative w-screen min-h-screen overflow-hidden bg-gradient-to-b from-black via-galaxyDark to-galaxyLight text-white">
      <div className="absolute w-screen h-screen">
  <Canvas camera={{ position: [0, 0, 5] }} className="absolute inset-0 z-0">
    <ambientLight intensity={0.5} />
    <StarField />
  </Canvas>
      </div>
  

  {/* Konten utama */}
  <div className="relative z-10  max-w-6xl mx-auto flex flex-col items-center gap-6 pt-20">
    <h1 className="text-2xl font-bold text-center">Certification Of Competence</h1>

    {/* Semua HardSkill dalam w-full */}
    <div className=" space-y-4">
      <HardSkill1 />
      <HardSkill2 />
      <HardSkill3 />
    </div>

    {/* Tombol read more */}
    <Link
      to="/more-competence"
      className="text-violet-400 bg-transparent py-2 px-6 rounded-md relative text-lg font-semibold overflow-hidden group transition-all duration-300 focus:outline-none focus:ring-0 
        hover:text-violet-400 focus:text-violet-400"
    >
      Read More
      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-violet-400 opacity-0 group-hover:opacity-100 animate-lexus-sign" />
    </Link>
  </div>
</section>

  );
};

export default CertificateHardSkill;
