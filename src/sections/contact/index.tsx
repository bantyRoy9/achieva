import React, { useState, type ChangeEvent, type FormEvent } from 'react';
import './style.css';

const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    emailAddress: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission, e.g., send data to an API
    console.log('Form data submitted:', formData);
  };

  return (
    <section className="contact-form-section">
      <div className='contact-form-container'>
          <div className='background-images'>
            <img src='assets/contact/image.jpg' alt="Background Left" className="contant-bg-left" /> 
            <div className="contactoverlay"></div>
          </div>
          <div className="content-container">
            <div className="text-content">
              <h2 className="title">Leverage Cloud,<span> Grow Faster.</span></h2>
              <p className="subtitle">Explore New Possibilities with Salesforce.</p>
            </div>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="input-row">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name*"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone*"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="email"
                name="emailAddress"
                placeholder="Email Address*"
                value={formData.emailAddress}
                onChange={handleChange}
                required
              />
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
      </div>
      <div className="info-bar">
        <div className="info-item">
          <p>We are Salesforce <span>Gold Consulting Partners,</span></p>
          <p>taking care of all your Salesforce needs and concerns.</p>
        </div>
        <div className="info-item">
          <p>Feel free to call us at +1-609-632-0350 or write</p>
          <p>to us at info@achieva.com</p>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;