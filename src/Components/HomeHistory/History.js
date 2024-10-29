import React from "react";

import "./History.css"; // Importing the CSS file
import home1 from '../../Images/home1.jpg'
import { useNavigate } from "react-router-dom";
const OurStory = () => {
     const navigate = useNavigate();
  return (
  <div className="ourstory-container">
    <div className="ourstory-image">
      <img  src={home1} alt="no image"/>
    </div>
    <div className="ourstory-content" >
    <h2>Our Story</h2>
            <p>
              Nestled in the heart of paradise, our resort offers a tranquil escape
              from the hustle and bustle of everyday life. Built with passion and
              designed with luxury in mind, we have been welcoming guests for over
              a decade, ensuring every stay is an unforgettable experience.
            </p>
            <button className="learn-more-btn" onClick={()=>navigate('/About')}>
              Learn More
            </button>
    </div>
  </div>
     
  );
};

export default OurStory;
