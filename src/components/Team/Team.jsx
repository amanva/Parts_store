import './Team.scss'
import team1 from '../../assets/team1.jpg'
import team2 from '../../assets/team2.jpg'
import team3 from '../../assets/team3.jpg'
import Begin from '../Begin/Begin';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram,faXTwitter } from "@fortawesome/free-brands-svg-icons"

import { ShopContextProvider } from "../../shop-context";
import { Shop } from '../../shop';

function Team(){
    const testimonials = [
        {
          name: 'Jacob Lowe',
          image: team1,
          position: 'General Manager'
        },
        {
          name: 'Tom Smith',
          image: team2,
          position: 'Employee'
        },
        {
          name: 'Bill Cline',
          image: team3,
          position: 'Owner'
        },
      ];
      
    return(
<>
<section className="team">
<Begin names = "Team"/>
<div className="container">
<div className="team-container">
    <div className="team-text">
        <h1>Check out what our Awesome Team.</h1>
        <p>At GHG, we are more than just a team. We are a diverse group of individuals that are dedicated to providing the best customer service.</p>
</div>
<div className="team-box">
{testimonials.map((testimonial, index) => (
        <TeamBox key={index} name={testimonial.name} image = {testimonial.image} position = {testimonial.position}/>
      ))}
    
</div>
  </div>
</div>

{/* <Shop></Shop> */}
</section>
<Footer></Footer>
</>


    )
}

const TeamBox = ({ name, image, position}) => {
    return (
      <>
      <div className="team-innerBox">
        <div className="team-boxContent">
        <div className="imageBox">
        <img src={image} alt={name} className="testimonial-image" />
        </div>
        <div className="hover-socials">
        <ul className="team-socials">
          <li className="icons">
          <a href="https://facebook.com">
          <FontAwesomeIcon icon={faFacebook} /> 
          </a>
          </li>
          
          <li className="icons">
          <a href="https://instagram.com">
          <FontAwesomeIcon icon={faInstagram} />
          </a>
          </li>
          <li className="icons">
          <a href="https://twitter.com">
          <FontAwesomeIcon icon={faXTwitter} />
          </a>
          </li>
        </ul>
        </div>
        </div>
        <div className="nameTag">
        <div className="team-author">
          <span className="team-name">{name}</span>
          <span className="team-name">{position}</span>
        </div>
        </div>
      </div>
      
      </>
    );
  };
export default Team;