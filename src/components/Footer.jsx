import React from 'react';
import { FaGlobe } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2025 Abdul Rehman. All rights reserved.</p>
          <p className="footer-tagline">Building the future with Agentic AI & Generative AI</p>
          <div className="footer-links">
            <span><FaGlobe /> English, Urdu, Punjabi</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
