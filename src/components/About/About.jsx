import './About.scss'
import Begin from '../Begin/Begin';
import React, { useState, useEffect} from 'react';
import Parts from '../../assets/parts.png';
import Price from '../../assets/price.png';
import Return from '../../assets/return.jpg';
import Footer from '../Footer/Footer';
// import fetch from 'node-fetch';
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
const clientId = '205e2b8aa78049319c66f6cebf3a10f9';
const clientSecret = '0af61f2f9fbf4e8fac669fc584a72d68';
const [accessToken, setAccessToken] = useState("");
// useEffect(() => {
// var auth = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     body: 'grant_type=client_credentials&client_id=' + clientId + '&client_secret=' + clientSecret
// }

// fetch('https://accounts.spotify.com/api/token', auth).then(result => result.json())
// .then(data => setAccessToken(data.access_token))
// }, [])

async function search(){
    var auth = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Basic MTI3MzMxZDItMmZjZS00MzRhLTg4OTAtZDlhYWJmMjkxYjQ0",
            "partner-token": "cdb0fed1bf7e4fe9bfe392f8eabd65a7"
        },
    }
    
    fetch('http://api.carmd.com/v3.0/image?year=2022&make=Toyota&model=Camry&engine=2.5L 4-cylinder', auth)
    .then(result => result.json())
    .then(data => console.log(data))


    // var artistPar = {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer ' + accessToken
    //     },
    //     params: {
    //         country: 'US'
    //       }
    // }
    
    // var artistID = await fetch('https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02/top-tracks?country=US', artistPar)
    // .then(result => result.json())
    // .then(data => console.log(data))

}

    return(
        <>
<section className="about">
<Begin names = "About"/>
<div className="container">
<div className="aboutGHG">
    <h1>Why GHG</h1>
    <p>Driving excellence, one part at a time</p>
</div>

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
<button onClick={search}>
    Search
</button>
</div>
</div>

</section>
<Footer/>
</>

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