import './About.scss'
import Begin from '../Begin/Begin';
import React, { useState } from 'react';
import Parts from '../../assets/parts.png';
import Price from '../../assets/price.png';
import Return from '../../assets/return.jpg';
import { Color } from 'three';
function About(){
    const aboutContent = [
        {
            icon: 'fa-sharp fa-solid fa-clipboard-list text-3xl text-red-500',
            header: 'Extensive Search List',
            desc: 'our website boasts an unparalleled inventory of car parts, ranging from engine components to suspension systems, electrical parts to body panels, and everything in between. ',
            backImage: Parts
        },
        {
            icon: 'fa-solid fa-money-bill-1-wave text-3xl text-red-500',
            header: 'Competitive Pricing and Value',
            desc: 'Despite offering high-quality parts, our store maintains competitive pricing, ensuring customers get the best value for their money. We regularly compare prices with competitors to provide affordable options without compromising on the quality.',
            backImage: Price
        },
        {
            icon: 'fa-sharp fa-solid fa-clipboard-list text-3xl text-red-500',
            header: 'Return and Warranty Policies',
            desc: 'We offers hassle-free returns and warranty policies, demonstrating confidence in the quality of the parts we sell. This provides our customers with peace of mind, knowing they can return or exchange a product if it doesnt meet their expectations or if they encounter any issues.',
            backImage: Return 
        }
       
    ]
    return(
<section className="about">
<Begin names = "About"/>
<div className="container">
<div className="aboutGHG">
    <h1>Why GHG</h1>
    <p>Driving excellence, one part at a time</p>
</div>
{/* <div className="gridContainer">
<div className="aboutGrid">
<div className="products">
<img src={Parts} alt="about_img" className='h-[300px] w-[500px]'/>
</div>
<div className="products-desc">
<i class="fa-sharp fa-solid fa-clipboard-list text-3xl"></i>
<h2>Extensive Search List</h2>
<p>our website boasts an unparalleled inventory of car parts, ranging from engine components to suspension systems, electrical parts to body panels, and everything in between. We have meticulously curated our collection to ensure that you can find the exact part you need for your vehicle, regardless of make, model, or year.</p>
</div>

<div className="products-desc">
<i class="fa-solid fa-money-bill-1-wave text-3xl"></i>
<h2>Competitive Pricing and Value</h2>
<p>Despite offering high-quality parts, our store maintains competitive pricing, ensuring customers get the best value for their money. We regularly compare prices with competitors to provide affordable options without compromising on the quality.</p>
</div>
<div className="products">
<img src={Price} alt="about_img" className='h-[300px] w-[500px]'/>
</div>

<div className="products">
<img src={Return} alt="about_img" className='h-[300px] w-[500px]'/>
</div>
<div className="products-desc">
<i class="fa-sharp fa-solid fa-clipboard-list text-3xl"></i>
<h2>Hassle-Free Returns and Warranty Policies</h2>
<p>We offers hassle-free returns and warranty policies, demonstrating confidence in the quality of the parts we sell. This provides our customers with peace of mind, knowing they can return or exchange a product if it doesn't meet their expectations or if they encounter any issues.</p>
</div>
</div>
</div> */}
<div className="aboutItems">
{aboutContent.map((contents, index) => (
    <CardFlip key = {index} {...contents}/>
    ))}
</div>
<div className="clients">
    
<div className="clients-box">
    <div className="clients-box-content">
    <div className="firstBox">
        <div className="firstBox-innerContent">
            <h2>Our Clients</h2>
            <p>Take a look at the clients we work with the most.</p>
    </div>
    </div>
    <div className="secondBox">
    <div className="secondBox-outerContainer">
        <div className="secondBox-outerContainer-inner1">
        <div className="leftText">
        <h2>Shops</h2>
        <h2>20%</h2>
        </div>
        <div className="progressline">
            <div className="h-full bg-red-600 rounded w-[30%]"></div>
        </div>
        <div className="leftText">
        <h2>Auto dealerships</h2>
        <h2>50%</h2>
        </div>
        <div className="progressline">
            <div className="h-full bg-red-600 rounded w-[50%]"></div>
        </div>
        <div className="leftText">
        <h2>Corporate clients</h2>
        <h2>25%</h2>
        </div>
        <div className="progressline">
            <div className="h-full bg-red-600 rounded w-[25%]"></div>
        </div>
        </div>
        <div className="secondBox-outerContainer-inner2">
        <div className="leftText">
        <h2>personal clients</h2>
        <h2>60%</h2>
        </div>
        <div className="progressline">
            <div className="h-full bg-red-600 rounded w-[60%]"></div>
        </div>
        <div className="leftText">
        <h2>Private clients</h2>
        <h2>10%</h2>
        </div>
        <div className="progressline">
            <div className="h-full bg-red-600 rounded w-[10%]"></div>
        </div>
        <div className="leftText">
        <h2>Other clients</h2>
        <h2>10%</h2>
        </div>
        <div className="progressline">
            <div className="h-full bg-red-600 rounded w-[10%]"></div>
        </div>
        </div>
    </div>
    </div>
    </div>
</div>

</div>
</div>

</section>

 

    );
}


function CardFlip({icon, header, desc, backImage}){
    
    return (
<div className="container">
<div className="flip-card">
<div className="flip-card-inner" style={{backgroundImage: `url(${backImage})` , backgroundSize: 'cover', backgroundPosition: 'center'}}>
    <div className="flip-card-front">
        <div className="flip-card-content">
        
                <i class={icon}></i>
        <h2>{header}</h2>
       
        
        </div>
        </div>
        <div className="flip-card-back" /*style={{backgroundImage: `url(${backImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}} */>
        <div className="flip-card-content-back">
        
        <h2>{header}</h2>
        <p>{desc}</p>
        
    </div>
    </div>
    </div>
    </div>
    </div>


    );
}
export default About;