import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const StarField = () => {
  const starsRef = useRef();
  const starCount = 100; // Jumlah bintang

  // Buat posisi random untuk bintang
  const positions = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10; // Area bintang dalam ruang 3D
  }

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    starsRef.current.rotation.y = t * 0.01; // Rotasi bintang perlahan
  });

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={starCount}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="violet" />
    </points>
  );
};

export default StarField;
