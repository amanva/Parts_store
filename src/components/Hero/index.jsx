import './index.scss'
import Model from "../Car";
import { Canvas, useFrame } from 'react-three-fiber';
import React, { Suspense, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import engine from "../../assets/wing.jpg";
import intake from "../../assets/intake.png";
import exhaust from "../../assets/exhaust.jpg";
import brakes from "../../assets/breaks.jpg";
import rims from "../../assets/rims.jpg";
import headlights from "../../assets/headlights.jpg";

import WSPGallery from '../Gallery';
import Company from "../Company"


function Hero(){
  const galleryImages =[
    {
      img: engine,
      name: 'ENGINE',
      text: 'Used to improve performance'
    },
    {
      img: intake,
      name: 'INTAKE',
      text: 'Bring oxygen into the engine"s combustion chamber'
    },
    {
      img: exhaust,
      name: 'EXHAUST',
      text: 'Pipes the harmful exhuast fumes away from engine'
    },
    {
      img: brakes,
      name: 'BRAKES'
    },
    {
      img: rims,
      name: 'RIMS',
    },
    {
      img: headlights,
      name: 'HEADLIGHTS'
    }
    
  ]
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
 
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
   
    <div>
        <Company slides={galleryImages}/>
    </div>
    </section>
    </>
    )
}

export default Hero
