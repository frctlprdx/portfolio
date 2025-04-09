import { Canvas } from "@react-three/fiber";    
import { Link } from "react-router-dom";
import StarField from "./StarField";
import HardSkill1 from "./Hardskill1";
import HardSkill2 from "./Hardskill2";
import HardSkill3 from "./Hardskill3";

const CertificateHardSkill = () => {
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
          <Link
          to="/more-competence"
          className="mt-4 text-violet-400 bg-transparent px-6 py-2 rounded-md relative text-lg font-semibold overflow-hidden group transition-all duration-300 focus:outline-none focus:ring-0 inline-block 
          hover:text-violet-400 focus:text-violet-400" // Warna violet-400 dalam HEX
        >
          Read More
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-violet-400 opacity-0 group-hover:opacity-100 animate-lexus-sign" />
        </Link>
      </div>
    </section>
  );
}

export default CertificateHardSkill;
