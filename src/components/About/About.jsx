import './About.scss'
import Begin from '../Begin/Begin';
import { ReactComponent as Wheel } from '../../assets/wheel.svg';
import Parts from '../../assets/parts.png';
import Price from '../../assets/price.png';
function About(){
    return(
<section className="about">
<Begin names = "About"/>
<div className="container">
<div className="aboutGHG">
    <h1>Why GHG</h1>
    <p>Driving excellence, one part at a time</p>
</div>
<div className="aboutGrid">
<div className="products">
<img src={Parts} alt="about_img" className='h-[250px]'/>
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
<img src={Price} alt="about_img" className='h-[270px] w-[500px]'/>
</div>
</div>
</div>

</section>

 

    );
}

export default About;