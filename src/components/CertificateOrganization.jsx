import { Canvas } from "@react-three/fiber";    
import { Link } from "react-router-dom";
import StarField from "./StarField";
import Organization1 from "./Organization1";
import Organization2 from "./Organization2";
import Organization3 from "./Organization3";

const CertificateOrganization = () => {
  return (
    <section className="relative w-screen h-auto flex flex-col items-center justify-start bg-gradient-to-b from-galaxyLight via-galaxyDark to-black text-white px-8 overflow-hidden">
      <Canvas className="absolute top-0 left-0 w-full h-full" camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <StarField />
      </Canvas>

      {/* Container teks */}
      <div className="relative z-10 flex flex-col items-center gap-4 p-6 bg-opacity-50 rounded-lg">
        <h1>Organization Certification</h1>
        <Organization1 />
        <Organization2 />
        <Organization3 />
        <Link
          to="/more-organization"
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

export default CertificateOrganization;
