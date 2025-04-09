import { Canvas } from "@react-three/fiber";    
import StarField from "./StarField";
import Organization4 from "./Organization4";
import Organization5 from "./Organization5";
import Organization6 from "./Organization6";

const Organize2 = () => {
  return (
    <section className="relative w-screen h-auto flex flex-col items-center justify-start bg-gradient-to-b from-galaxyLight via-galaxyDark to-black text-white px-8 overflow-hidden">
    <div  className="absolute w-screen h-screen">
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <StarField />
    </Canvas>
    </div>

    {/* Container teks */}
    <div className="relative z-10 flex flex-col items-center gap-4 p-6 bg-opacity-50 rounded-lg">
      <Organization4 />
      <Organization5 />
      <Organization6 />
    </div>
  </section>
  );
}
export default Organize2;