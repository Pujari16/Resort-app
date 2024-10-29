import React from 'react';
import './Contact.css';
import Booking from '../Booking/Booking';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="hero-section">
                <div className='hero-section-content'>
                <h1>Contact Us</h1>
                <p>We would love to hear from you! Reach out with any questions or inquiries.</p>
                </div>
            </div>
            <div className="contact-content">
                <div className="contact-details">
                    <h2>Get in Touch</h2>
                    <p><strong>Address:</strong> 123 Resort Lane, Paradise City, PR 12345,123 Resort Lane, Paradise City, 
                    PR 12345</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                    <p><strong>Email:</strong> info@paradiseresort.com</p>
                    <p><strong>Hours:</strong> Mon - Sun: 9 AM - 7 PM</p>
                </div>
                <div className="contact-form">
                    {/* <h2>Contact Form</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" required></textarea>
                        </div>
                        <button type="submit">Send Message</button>
                    </form> */}
                    <Booking/>
                </div>
            </div>
        </div>
    );
};

export default Contact;
