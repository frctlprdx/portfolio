import { Canvas } from "@react-three/fiber";    
import { Link } from "react-router-dom";
import StarField from "./StarField";
import Organization1 from "./Organization1";
import Organization2 from "./Organization2";
import Organization3 from "./Organization3";

const CertificateOrganization = () => {
  return (
    <section className="relative w-screen min-h-screen overflow-hidden bg-gradient-to-b from-galaxyLight via-galaxyDark to-black text-white">
      
      {/* Background StarField */}
      <div className="absolute w-screen h-screen">
        <Canvas camera={{ position: [0, 0, 5] }} className="absolute inset-0 z-0">
          <ambientLight intensity={0.5} />
          <StarField />
        </Canvas>
      </div>

      {/* Konten utama */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center gap-6 pt-10">
        <h1 className="text-2xl font-bold text-center">Organization Certification</h1>

        {/* Semua organisasi dalam w-full */}
        <div className="w-full space-y-4">
          <Organization1 />
          <Organization2 />
          <Organization3 />
        </div>

        {/* Tombol read more */}
        <Link
          to="/more-organization"
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

export default CertificateOrganization;
