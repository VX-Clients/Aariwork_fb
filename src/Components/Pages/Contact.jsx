import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import '../CSS/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content animate-fadeIn">
          <h1>Contact Us</h1>
          <p>Get in touch with us to start your creative journey</p>
        </div>
      </section>

      <div className="container py-16">
        <div className="grid grid-2">
          {/* Contact Information */}
          <div className="contact-info">
            <h2 className="mb-8">Get in Touch</h2>
            <div className="contact-details">
              <div className="contact-item">
                <MapPin className="icon" />
                <div>
                  <h3>Location</h3>
                  <p>Chennai, India</p>
                </div>
              </div>

              <div className="contact-item">
                <Mail className="icon" />
                <div>
                  <h3>Email</h3>
                  <a href="mailto:kalaiarasi6067@gmail.com">kalaiarasi6067@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <Phone className="icon" />
                <div>
                  <h3>Phone</h3>
                  <a href="tel:+919445738281">+91 94457 38281</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h2 className="mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="course">Interested Course</label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a course</option>
                  <option value="aari">Aari Work</option>
                  <option value="brooch">Brooch Making</option>
                  <option value="saree">Saree Pre-Plating</option>
                  <option value="fabric">Fabric Painting</option>
                  <option value="bangles">Thread Bangles</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                <Send className="icon" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
