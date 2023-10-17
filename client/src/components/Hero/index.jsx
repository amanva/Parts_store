import './index.scss'
// import Model from "../Car";
import { Canvas, useFrame } from 'react-three-fiber';
import React, { Suspense, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import Spoiler from "../../assets/wing.jpg";
import intake from "../../assets/intake.png";
import exhaust from "../../assets/exhaust.jpg";
import brakes from "../../assets/breaks.jpg";
import rims from "../../assets/rims.jpg";
import rearLights from "../../assets/headlights.jpg";
import Footer from '../Footer/Footer';

import WSPGallery from '../Gallery';
import Company from "../Company"
import { Color } from 'three';
import car from "../../assets/homePage.png"

function Hero(){
  const galleryImages =[
    {
      img: Spoiler,
      name: 'SPOILER',
      text: 'Used to add downforce to vehicle'
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
      name: 'BRAKES',
      text: 'Enable the vehicle to slow down or stop'
    },
    {
      img: rims,
      name: 'RIMS',
      text: 'Provide leverage for your vehicle'
    },
    {
      img: rearLights,
      name: 'REARLIGHTS',
      text: 'Provide safety at night'
    }
    
  ]
  
 
    return (
    <>
    <section id="home" className="hero-container">
      <div className="container">
    <div className="hero-main">
      {/* <div className="hero-main-title">
        <span>Gear Head Garage</span>
      </div> */}
      <div className= "car">
        <img  src ={car}></img>
      </div>
    {/* <div className="hero-main-rotatingCar"> */}
    {/* <Canvas>
    <ambientLight intensity={4} />
      <spotLight position={[10, 10, 10]} angle={0.45} penumbra={0} />
      <pointLight position={[-100, -10, -10]} />
    <Suspense fallback={null}>
    <Model></Model>
    <OrbitControls enableZoom={true}
        enablePan={false} autoRotate autoRotateSpeed={3}/>
    </Suspense>
    </Canvas>
    </div> */}
    {/* <div className="hero-main-title">
    <h1>rev up your ride with quality parts</h1>
    </div> */}
    </div>
    </div>
   
    <div className="wspGallery">
      <WSPGallery galleryImages = {galleryImages}/>
    </div>
    <div className='companyHeading'>
      <div><br></br></div>
      <h2>These Are Our Top Manufacturers</h2>
    </div>
    <div>
        <Company slides={galleryImages}/>
    </div>
    <Footer/>

    </section>
    </>
    )
}

export default Hero