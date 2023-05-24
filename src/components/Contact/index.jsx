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
    // Handle form submission logic here
    console.log(formData);
    // Reset the form
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
      <h2>Want to get in touch with us?</h2>
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
        </div>
      <div className="contact-container-main-form">
              <form>
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder='Jane Doe'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="email@gmail.com"></input>

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Enter message"></textarea>

                <button type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Send
                  Message
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