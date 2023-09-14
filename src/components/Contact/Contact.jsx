import React, { useState } from 'react';
import './Contact.scss'
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook , faInstagram,faXTwitter, faPinterest } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
    <section className="contact">
    <div className="contact-container">
    <div className="contact-initial">
      <div className="contact-initial-text">
      <h2>Have questions?</h2>
      </div>
      </div>
      <div className="container">
        <div className='contact-container-main'>
        <div className="contact-container-main-text">
          <h1>Reach out to us:</h1>
          <p>Our dedicated contact team is here to assist you with any questions or inquiries you may have. 
            With their extensive knowledge and expertise, 
            they are equipped to provide you with the support and guidance you need. Whether you have inquiries about our products, 
            services, or any other aspect of our business, 
            our contact team is committed to delivering prompt and accurate responses.</p>
            <a href="/">
              <FontAwesomeIcon icon={faPhone} />&nbsp; (555) 234-5678
              </a>
              <a href="/">
              <FontAwesomeIcon icon={faEnvelope} />&nbsp; GearHeadGarage@gmail.com
              </a>
        <div className="contact-container-main-text-socials">
          <h1> Find us: </h1>
          {/* <FontAwesomeIcon icon="fa-brands fa-twitter" /> */}
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faXTwitter} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faPinterest} />
        </div>
        </div>
      <div className="contact-container-main-form">
              <form>
                <label className='contact-label'>
                  Full Name 
                </label>
                <input type="text" placeholder='Jane Doe'></input>

                <label className='contact-label'>
                  Email 
                </label>
                <input type="email" placeholder="email@gmail.com"></input>

                <label className='contact-label'>
                  Comment 
                </label>
                <textarea placeholder="Enter message"></textarea>

                <button type="submit">
                <FontAwesomeIcon icon={faPhone} />
                <FontAwesomeIcon icon={faEnvelope} />    
                </button>
              </form>
            </div>
            </div>
    </div>
    </div>
    </section>
    <Footer></Footer>
    </>
  );
};

export default Contact;