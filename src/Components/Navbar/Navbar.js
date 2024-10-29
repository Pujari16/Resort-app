import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import ResortLogo from "../../Images/ResortLogo.jpeg"
// import NL from '../Resourses/Header&Footer/NL.svg';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showContact, setShowContact] = useState(false);
    const contactRef = useRef(null);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const closeDropdown = () => {
        setShowDropdown(false);
    };

    const handleContactClick = () => {
        setShowContact(!showContact);
    };

    const handleClick = (event) => {
        if (contactRef.current && !contactRef.current.contains(event.target)) {
            setShowContact(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, []);

    return (
        <header>
            <div className="logo">
                <img src={ResortLogo} alt="logo" />
            </div>
            <nav>
                <ul className={showMenu ? 'menu show' : 'menu'}>
                    <li><a href="/Home">Home</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Room">Rooms</a></li>
                    <li><a href="/Contact">Contact</a></li>
                    <li><button className='enquiry-button' style={{backgroundColor:'orange'}}>Enquiry Now</button></li>
                
                </ul>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                
            </nav>
        </header>
    );
};

export default Navbar;