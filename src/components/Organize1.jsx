import { Canvas } from "@react-three/fiber";    
import StarField from "./StarField";
import Organization1 from "./Organization1";
import Organization2 from "./Organization2";
import Organization3 from "./Organization3";

const Organize1 = () => {
  return (
    <section className="relative w-screen h-auto flex flex-col items-center justify-start bg-gradient-to-b from-black via-galaxyDark to-galaxyLight text-white px-8 overflow-hidden">
      <Canvas className="absolute top-0 left-0 w-full h-full" camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <StarField />
      </Canvas>

      {/* Container teks */}
      <div className="relative z-10 flex flex-col items-center gap-4 p-6 bg-opacity-50 rounded-lg">
      <h1>Certification Of Organization</h1>
        <Organization1 />
        <Organization2 />
        <Organization3 />
      </div>
    </section>
  );
}
export default Organize1;