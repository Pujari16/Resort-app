
import React from "react";
import { useNavigate } from "react-router-dom";

import "./RoomSection.css"; // Import CSS file for styling
import room1 from "../../Images/home1.jpg";
import room2 from "../../Images/home2.jpg";
import room3 from "../../Images/home4.jpg";
import gallery1 from "../../Images/home1.jpg";
import gallery2 from "../../Images/home2.jpg";
import gallery3 from "../../Images/home4.jpg";
import Booking from "../Booking/Booking";


const RoomSection = () => {
  const navigate = useNavigate();
    return(
    <div className="rooms-page">
    {/* Hero Section */}
    <section className="room-page-section">
      <div className="room-page-content">
      <h1>Welcome to Paradise</h1>
      <p>Discover our luxurious rooms designed for comfort and elegance.</p>
      </div>
    </section>

    {/* Rooms Section */}
    <section className="rooms-section">
      <h2>Our Rooms</h2>
      <div className="rooms-container">
        <div className="room-card">
          <img src={room1} alt="Standard Room" />
          <h3>Standard Room</h3>
          <p>Perfect for a cozy and affordable stay.</p>
          <p className="price">$120/night</p>
          <button className="book-now-btn" onClick={() => navigate("/contact")}>
              Book Now
            </button>
        </div>
        <div className="room-card">
          <img src={room2} alt="Deluxe Room" />
          <h3>Deluxe Room</h3>
          <p>Enjoy extra space and premium amenities.</p>
          <p className="price">$180/night</p>
          <button className="book-now-btn" onClick={() => navigate("/contact")}>
              Book Now
            </button>
        </div>
        <div className="room-card">
          <img src={room3} alt="Suite" />
          <h3>Suite</h3>
          <p>Indulge in our luxurious suite with ocean views.</p>
          <p className="price">$250/night</p>
          <button className="book-now-btn" onClick={() => navigate("/contact")}>
              Book Now
            </button>
        </div>
      </div>
    </section>

    {/* Gallery Section */}
    <section className="gallery-section">
      <h2>Gallery</h2>
      <div className="gallery-container">
        <img src={gallery1} alt="Resort View 1" />
        <img src={gallery2} alt="Resort View 2" />
        <img src={gallery3} alt="Resort View 3" />
        <img src={gallery1} alt="Resort View 1" />
        <img src={gallery2} alt="Resort View 2" />
        <img src={gallery3} alt="Resort View 3" />
        <img src={gallery1} alt="Resort View 1" />
        <img src={gallery2} alt="Resort View 2" />
        <img src={gallery3} alt="Resort View 3" />
        
      </div>
    </section>
    <Booking/>
  </div>
);
}

export default RoomSection




