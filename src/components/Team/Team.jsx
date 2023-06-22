import './Team.scss'
import Person1 from '../../assets/person1.jpg'
import Person2 from '../../assets/person2.jpg'
import Begin from '../Begin/Begin';

function Team(){
    const testimonials = [
        {
          name: 'Hillary Cline',
          image: Person1,
          review: '"Shopping at Gear Head Garage has been a game-changer for all my automotive needs. From the moment I stepped into the store, I was greeted by a knowledgeable and friendly staff who were eager to assist me. Their expertise and passion for auto parts were evident, making me feel confident in my purchase decisions."',
          position: 'General Manager'
        },
        {
          name: 'Jane Smith',
          image: Person2,
          review: '"One aspect that sets Gear Head Garage apart is their commitment to customer satisfaction. The staff went above and beyond to ensure I found exactly what I needed. They patiently answered all my questions, provided valuable recommendations, and even offered helpful installation tips. Their dedication to exceptional service made the entire shopping experience smooth and enjoyable."',
          position: 'Manager'
        },

      ];

    return(
      
<section className="team">
<Begin names = "team"/>
<div className="container">
<div className="team-container">
    <div className="team-text">
        <h1>Check out what our customers have said about us.</h1>
        <p>When you read our testimonies, you embark on a journey of trust-building. You can hear the voices of our loyal customers, sharing their stories and affirming their confidence in our brand. Each testimony is a reflection of the trust, credibility, and exceptional service that form the foundation of our business.</p>
</div>
<div className="team-box">
{testimonials.map((testimonial, index) => (
        <TeamBox key={index} name={testimonial.name} image = {testimonial.image} review = {testimonial.review} position = {testimonial.position}/>
      ))}
</div>
    </div>
</div>



</section>



    )
}
const TeamBox = ({ name, image, review, position}) => {
    return (
      <div className="team-innerBox">
        <div className="imageBox">
        <img src={image} alt={name} className="testimonial-image" />
        </div>
        <div className="team-author">
          <span className="team-name">{name}</span>
          <span className="team-name">{position}</span>
        </div>
        <p className="team-content">{review}</p>
        
      </div>
    );
  };
  

export default Team

