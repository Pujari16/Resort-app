import React from 'react'
import './About.css'
import image_1 from '../../Images/image_1.jpg'
import AboutImg1 from '../../Images/AboutImg1.jpeg'
const About = () => {
  return (
    <div className="about-container">
    {/* Hero Section */}
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Mount Edge Resort</h1>
        <p>Escape to the ultimate tropical paradise, where your relaxation and comfort is our priority.</p>
      </div>
    </section>

    {/* Our Story */}
    {/* Our Story */}
<section className="our-story">
  <div className="our-story-content">
    <div className="story-text">
      <h2>Our Story</h2>
      <p>
        Established in 2005, Paradise Resort has grown from a hidden gem into a world-renowned destination. 
        Nestled in a pristine tropical landscape, we have stayed true to our roots while constantly evolving 
        to offer luxury and an authentic experience for every guest.
      </p>
    </div>
    <div className="story-images">
      <img src={AboutImg1} alt="Resort view 1" />
      <img src={image_1} alt="Resort view 2" />
      <img src={image_1} alt="Resort view 3" />
      <img src={AboutImg1} alt="Resort view 4" />
    </div>
  </div>
</section>

    {/* Our Commitment */}
    <section className="vision-mission-values">
  <div className="vmv-item">
    <h2>Our Vision</h2>
    <p>
      To be the leading destination for travelers seeking authentic experiences, 
      luxury, and relaxation in a stunning tropical paradise.
    </p>
  </div>

  <div className="vmv-item">
    <h2>Our Mission</h2>
    <p>
      We aim to provide our guests with world-class hospitality and comfort while 
      maintaining sustainable and eco-friendly practices.
    </p>
  </div>

  <div className="vmv-item">
    <h2>Our Values</h2>
    <p>
      We believe in personalized service, respect for nature, and fostering a deep 
      connection between our guests and the local culture.
    </p>
  </div>
</section>

    {/* What Our Guests Say */}
    <section className="guest-reviews">
      <h2>What Our Guests Say</h2>
      <div className="reviews-container">
        <div className="review">
          <p>"An unforgettable experience! The views, the staff, everything was perfect!"</p>
          <h4>- Sarah K.</h4>
        </div>
        <div className="review">
          <p>"A true slice of paradise. The food, the rooms, the ambiance...simply amazing."</p>
          <h4>- Michael D.</h4>
        </div>
        <div className="review">
          <p>"I’ve traveled the world and Paradise Resort is by far the best. I will be back!"</p>
          <h4>- Olivia R.</h4>
        </div>
      </div>
    </section>

    {/* Book Now */}
    <section class="book-now">
  <h2>Book Your Stay Today!</h2>
  <p>"Experience paradise at its finest. Your perfect getaway awaits!"</p>
  <button onclick="window.location.href='#booking-form'">BOOK NOW</button>
</section>

  </div>
  )
}

export default About

