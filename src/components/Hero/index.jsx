import './index.scss'
import Model from "../Car";
import { Canvas, useFrame } from 'react-three-fiber';
import React, { Suspense, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
function Hero(){
 
    return (
    <>
    <section id="home" className="hero-container">
      <div className="container">
    <div className="hero-main">
      <div className="hero-main-title">
        {/* <h1>Welcome to <span>Gear Head Garage</span> where you can rev up your ride with quality parts</h1> */}
        <span>Gear Head Garage</span>
      </div>
    <div className="hero-main-rotatingCar">
    <Canvas>
    <ambientLight intensity={0.3} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
    <Suspense fallback={null}>
    <Model></Model>
    <OrbitControls enableZoom={false}
        enablePan={false} autoRotate autoRotateSpeed={3}/>
    </Suspense>
    </Canvas>
    </div>
    <div className="hero-main-title">
    <h1>rev up your ride with quality parts</h1>
    </div>
    </div>
    </div>
    </section>
    </>
    )
}



export default Hero
