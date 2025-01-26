import React from 'react';
import './SpectraliteSection.css';
import image1 from '../../asest/BIke Evolution-30 (1) 1.png';
import image2 from '../../asest/Logo.PNG';
import image3 from '../../asest/Mask group (1).png';

const SpectraliteSection = () => {
  return (
    <section className="spectralite-section">
      <div className="spectralite-grid">
        <div className="content-grid">
          {/* Left side - Main BE Logo Image */}
          <div className="main-image">
            <img 
              src={image1} 
              alt="BE Logo"
              className="be-logo-image" 
            />
            <div className="image-overlay"></div>
          </div>

          {/* Right side - Info Panel */}
          <div className="info-panel">
            {/* Blue Spectralite Card */}
            <div className="spectralite-card">
              <img 
                src={image2}        
                alt="Spectralite Text"
                className="spectralite-text-image" 
              />
            </div>
            
            {/* Bike Light Image */}
            <div className="bike-light">
              <img 
                src={image3} 
                alt="Bike Light"
                className="bike-light-image" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpectraliteSection;
