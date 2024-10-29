import React, { useState } from "react";
import "./Booking.css";

const Booking = () => {
  const [form, setForm] = useState({
    checkInDate: "",
    checkOutDate: "",
    guests: 1,
    roomType: "Standard",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking submitted!");
    // Add booking submission logic here (e.g., API call)
  };

  return (
    <div className="booking-section">
      <h2>Book Your Stay</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <label>
          Check-in Date:
          <input
            type="date"
            name="checkInDate"
            value={form.checkInDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Check-out Date:
          <input
            type="date"
            name="checkOutDate"
            value={form.checkOutDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Guests:
          <input
            type="number"
            name="guests"
            min="1"
            value={form.guests}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Room Type:
          <select
            name="roomType"
            value={form.roomType}
            onChange={handleChange}
            required
          >
            <option value="Standard">Standard</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Suite">Suite</option>
          </select>
        </label>
        <button type="submit" className="submit-btn">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default Booking;
