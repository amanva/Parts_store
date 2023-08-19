import './Reviews.scss'
import Person1 from '../../assets/person1.jpg'
import Person2 from '../../assets/person2.jpg'
import Begin from '../Begin/Begin';
import Footer from '../Footer/Footer';

function Reviews(){
    const testimonials = [
        {
          name: 'Hillary Cline',
          title: 'Store Owner',
          image: Person1,
          review: '"Shopping at Gear Head Garage has been a game-changer for all my automotive needs. From the moment I stepped into the store, I was greeted by a knowledgeable and friendly staff who were eager to assist me. Their expertise and passion for auto parts were evident, making me feel confident in my purchase decisions."'
        },
        {
          name: 'Jane Smith',
          title: 'Director',
          image: Person2,
          review: '"One aspect that sets Gear Head Garage apart is their commitment to customer satisfaction. The staff went above and beyond to ensure I found exactly what I needed. They patiently answered all my questions, provided valuable recommendations, and even offered helpful installation tips."'
        },

      ];

    return(
<>
<section className="reviews">
<Begin names = "Reviews"/>
<div className="container">
<div className="reviews-container">
    <div className="reviews-text">
        <h1>Check out what our customers have said about us.</h1>
        <p>When you read our testimonies, you embark on a journey of trust-building. You can hear the voices of our loyal customers, sharing their stories and affirming their confidence in our brand. Each testimony is a reflection of the trust, credibility, and exceptional service that form the foundation of our business.</p>
</div>
<div className="reviews-box">
{testimonials.map((testimonial, index) => (
        <ReviewBox key={index} name={testimonial.name} title = {testimonial.title} image = {testimonial.image} review = {testimonial.review} />
      ))}
</div>
    </div>
</div>



</section>
<Footer/>
</>

    )
}
const ReviewBox = ({ name, title, image, review }) => {
    return (
      <div className="reviews-innerBox">
        <p className="reviews-content">{review}</p>
        <div className="reviews-author">
        <img src={image} alt={name} className="testimonial-image" />
        <div className="reviews-namesBox">
          <span className="reviews-name">{name}</span>
          <span className="reviews-name text-red-600">{title}</span>
          </div>
        </div>
      </div>
    );
  };
  

export default Reviews

