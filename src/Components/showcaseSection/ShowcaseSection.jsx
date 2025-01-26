import React from 'react';
import './ShowcaseSection.css';
import image1 from '../../asest/Kopie von IMG_4176 1.jpg';
import image2 from '../../asest/Kopie von IMG_4207 1.jpg';

const ShowcaseSection = () => {
  return (
    <section className="showcase-section">
      {/* Main content */}
      <div className="showcase-grid">
        {/* Left Image */}
        <div className="showcase-image-container">
          <img 
            src={image1} 
            alt="Bike with LED Lights"
            className="showcase-image" 
          />
        </div>

        {/* Right Image */}
        <div className="showcase-image-container">
          <img 
            src={image2}  
            alt="BE Light Close-up"
            className="showcase-image" 
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          {/* Dots Navigation */}
          <div className="dots-nav">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <span className="join-us">JOIN US</span>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ShowcaseSection;
