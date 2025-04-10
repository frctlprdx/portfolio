import { Canvas } from "@react-three/fiber";    
import StarField from "./StarField";
import Organization1 from "./Organization1";
import Organization2 from "./Organization2";
import Organization3 from "./Organization3";

const Organize1 = () => {
  return (
    <section className="relative w-screen h-auto flex flex-col items-center justify-start bg-gradient-to-b from-black via-galaxyDark to-galaxyLight text-white px-8 overflow-hidden">
      <div className="absolute h-screen w-full">
      <Canvas camera={{ position: [0, 0, 5] }} className="absolute inset-0 z-0">
        <ambientLight intensity={0.5} />
        <StarField />
      </Canvas>
      </div>

      {/* Container teks */}
      <div className="relative h-screen z-10 max-w-6xl flex flex-col items-center gap-6 pt-20">
      <h1 className="text-2xl font-bold text-center">Certification Of Organization</h1>
        <Organization1 />
        <Organization2 />
        <Organization3 />
      </div>
    </section>
  );
}
export default Organize1;