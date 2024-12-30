import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Art Store. All rights reserved.</p>
                <ul className="footer-links">
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/about">About Us</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;