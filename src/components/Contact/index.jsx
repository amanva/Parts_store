import React, { useState } from 'react';
import './index.scss'

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
                <i className="fa-solid fa-mobile-screen"></i>&nbsp; (555) 234-5678
              </a>
              <a href="/">
                <i className="fa-solid fa-envelope"></i>&nbsp; GearHeadGarage@gmail.com
              </a>
        <div className="contact-container-main-text-socials">
          <h1> Find us: </h1>
        <i className="fa-brands fa-facebook-f px-[16px] py-[13px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white"></i>
        <i className="fa-brands fa-twitter p-[13.5px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white"></i>
        <i className="fa-brands fa-instagram p-[13.5px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white"></i>
        <i className="fa-brands fa-pinterest-p p-[13.5px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white"></i>
        </div>
        </div>
      <div className="contact-container-main-form">
              <form>
                <label>
                  Full Name 
                </label>
                <input type="text" placeholder='Jane Doe'></input>

                <label>
                  Email 
                </label>
                <input type="email" placeholder="email@gmail.com"></input>

                <label>
                  Comment 
                </label>
                <textarea placeholder="Enter message"></textarea>

                <button type="submit">
                  <i className="fa-solid fa-envelope-circle-check"></i> Send
                </button>
              </form>
            </div>
            </div>
    </div>
    </div>
    </section>
  );
};

export default Contact;