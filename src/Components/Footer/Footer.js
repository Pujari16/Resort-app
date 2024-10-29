import React from 'react';
import './Footer.css'; // Import the CSS file
import fb from '../../Images/fb.png'
import wa from '../../Images/wa.png'
import ig from '../../Images/ig.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <h3>Contact Us</h3>
          <p>123 Resort Lane, Paradise City, PC 12345</p>
          <p>Email: info@resortwebsite.com</p>
          <p>Phone: +1 (234) 567-8900</p>
        </div>
        
        
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#rooms">Rooms</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={fb} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={ig} alt="Instagram" />
          </a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
            <img src={wa} alt="Whatsapp" />
          </a>
          
        </div>
      </div>

        <div className="footer-map">
          <h3>Find Us Here</h3>
          <div className="map-container">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.4824826476644!2d-122.40743968468182!3d37.784337279757476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809d69cf23cb%3A0xd4c7216d5f3aa382!2sResort%20Name!5e0!3m2!1sen!2sus!4v1649841546516!5m2!1sen!2sus"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Mount Edge. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
