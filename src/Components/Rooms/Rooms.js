import React from 'react';
import './Rooms.css'; // Link to the CSS file for styling
import home1 from '../../Images/home1.jpg'
import home2 from '../../Images/home2.jpg'
import home4 from '../../Images/home4.jpg'
import home5 from '../../Images/home5.jpg'
const roomData = [
  {
    name: "Deluxe Suite",
    description: "Experience luxury in our spacious Deluxe Suite, equipped with a king-sized bed, modern amenities, and a stunning view of the mountains.",
    price: "$250 per night",
    image:home1 // Replace with your image path
  },
  {
    name: "Family Room",
    description: "A cozy room perfect for families, featuring two queen-sized beds, a private balcony, and kid-friendly amenities.",
    price: "$200 per night",
    image:home2 // Replace with your image path
  },
  {
    name: "Standard Room",
    description: "Our Standard Room offers comfort and convenience with a queen-sized bed, free Wi-Fi, and a city view.",
    price: "$150 per night",
    image:home4 // Replace with your image path
  },
  {
    name: "Oceanfront Villa",
    description: "Enjoy the sound of the waves in our Oceanfront Villa, complete with a private pool, outdoor shower, and direct beach access.",
    price: "$500 per night",
    image:home5 // Replace with your image path
  }
];

const Rooms = () => {
  return (
    <section className="rooms-section">
      <h2 className="rooms-title">Our Rooms</h2>
      <div className="rooms-grid">
        {roomData.map((room, index) => (
          <div key={index} className="room-card">
            <img src={room.image} alt={room.name} className="room-image" />
            <div className="room-details">
              <h3 className="room-name">{room.name}</h3>
              <p className="room-description">{room.description}</p>
              <p className="room-price">{room.price}</p>
              <button className="book-now-btn">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rooms;

