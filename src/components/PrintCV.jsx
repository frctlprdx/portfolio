import { Canvas } from "@react-three/fiber";    
import StarField from "./StarField";

const PrintCV = () => {
  return (
    <section className="relative w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-b from-galaxyLight via-galaxyDark to-black text-white px-8 overflow-hidden">
      {/* Background Bintang */}
      <Canvas camera={{ position: [0, 0, 5] }} className="absolute inset-0">
        <ambientLight intensity={0.5} />
        <StarField />
      </Canvas>
      <div className="absolute z-10 text-center">
      </div>
    </section>
  );
}

export default PrintCV;