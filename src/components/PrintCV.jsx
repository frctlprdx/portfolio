import { Canvas } from "@react-three/fiber";
import StarField from "./StarField";
import cv from "../assets/pdf/CV.pdf";

const PrintCV = () => {
  return (
    <section className="relative w-screen min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-galaxyLight via-galaxyDark to-black text-white px-4 py-16 overflow-y-auto">
      
      {/* Background Bintang */}
      <div className="absolute h-full w-full z-0">
        <Canvas camera={{ position: [0, 0, 5] }} className="absolute inset-0">
          <ambientLight intensity={0.5} />
          <StarField />
        </Canvas>
      </div>

      {/* Konten PDF Bersih */}
      <div className="relative z-10 w-full max-w-5xl min-h-screen bg-transparent">
        <iframe
          src={cv}
          title="CV Ivan"
          className="w-full min-h-screen"
          style={{
            border: "none",
            backgroundColor: "white"
          }}
        ></iframe>
      </div>

      {/* Tombol Download */}
      <a
        href={cv}
        download="CV_Ivan_Putra_Pratama.pdf"
        className="relative z-10 mt-6 mb-20 inline-block px-6 py-2 bg-violet-400 text-black rounded-full font-semibold hover:bg-violet-800 hover:text-white transition"
      >
        Download CV
      </a>
    </section>
  );
};

export default PrintCV;
