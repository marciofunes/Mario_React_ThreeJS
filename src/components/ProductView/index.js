import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useRef } from 'react';

function Shoe(){
  const { scene } = useGLTF("./mario/marioKart/scene.gltf");
  const shoeRef = useRef();
  useFrame(() =>{
    shoeRef.current.rotation.y += 0.01;
  });

  return <primitive ref={shoeRef} object={scene} scale={0.99} />;
}

function ProductView() {
  return <Canvas camera={{ fov: 2, position: [60, 45, 20] }}
                 style={{height: window.innerHeight - 90}}  >
    <OrbitControls />
    <ambientLight intensity={0.5} />
    <spotLight position={[10, 15, 10]} angle={0.3} />
    <Shoe />
  </Canvas>;
}

export default ProductView;
