import './index.scss'
import Model from "../Car";
import { Canvas, useFrame } from 'react-three-fiber';
import React, { Suspense, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import engine from "../../assets/engine.jpg";
import intake from "../../assets/intake.jpg";
import exhaust from "../../assets/exhaust.jpg";
import breaks from "../../assets/break.jpg";
import rims from "../../assets/rims.jpg";
import headlights from "../../assets/headlights.jpg";

import WSPGallery from '../Gallery';


function Hero(){
  const galleryImages =[
    {
      img: engine,
      name: 'engine'
    },
    {
      img: intake,
      name: 'intake'
    },
    {
      img: exhaust,
      name: 'exhaust'
    },
    {
      img: breaks,
      name: 'breaks'
    },
    {
      img: rims,
      name: 'rims',
    },
    {
      img: headlights,
      name: 'headlights'
    }
    
  ]
 
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
    <ambientLight intensity={4} />
      <spotLight position={[10, 10, 10]} angle={0.45} penumbra={0} />
      <pointLight position={[-100, -10, -10]} />
    <Suspense fallback={null}>
    <Model></Model>
    <OrbitControls enableZoom={true}
        enablePan={false} autoRotate autoRotateSpeed={3}/>
    </Suspense>
    </Canvas>
    </div>
    <div className="hero-main-title">
    <h1>rev up your ride with quality parts</h1>
    </div>
    </div>
   
    </div>
    {/* <div className="gallery-photos">
      <img src = {engine} class = "gallery"></img>
      <img src = {intake} class = "intake"></img>
      <img src = {exhaust} class = "exhaust"></img>
      <img src = {breaks} class = "breaks"></img>
      <img src = {rims} class = "rims"></img>
    </div> */}
    <div className="wspGallery">
      <WSPGallery galleryImages = {galleryImages}/>
    </div>

    </section>
    </>
    )
}



export default Hero
