import './index.scss'
import Model from "../Car";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
function Hero(){
    return (
    <>
    <section id="home" className="hero-container">
    <div className="carContainer">
    <Canvas>
    <ambientLight intensity={0.3} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
    <Suspense fallback={null}>
    <Model></Model>
    <OrbitControls />
    </Suspense>
    </Canvas>
    </div>

    </section>
    </>
    )
}



export default Hero
