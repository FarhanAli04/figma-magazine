import React from 'react';
import hero from '../../asest/hero.svg';
import './HeroSection.css';
import { Box, Typography } from '@mui/material';
import text from '../../asest/text-img.png';

const HeroSection = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div
        className="flex items-center justify-center text-white text-4xl relative"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100%',
        }}
      >
        <Box 
          className="container px-4 md:px-6" 
          style={{ 
            marginTop: '-70px',
            maxWidth: '100%' 
          }}
        >
          {/* Main Heading */}
          <Typography
            variant="span"
            className="text-white block text-left max-w-full break-words"
            style={{
              textTransform: 'uppercase',
            }}
          >
            Revolutionize night cycling with
          </Typography>

          {/* Image below the heading */}
          <div className="max-w-full overflow-hidden">
            <img
              className="w-auto h-auto max-w-[250px]"
              src={text}
              alt="Spectralite Logo"
            />
          </div>

          {/* Subtext */}
          <Typography
            variant="span"
            className="text-white uppercase block mt-5 max-w-lg"
            sx={{
              fontSize: { xs: '0.875rem', sm: '1rem' },
              lineHeight: '1.5',
              wordBreak: 'break-word'
            }}
          >
            Experience unmatched visibility & safety with Spectralite's
            innovative lighting for every night cyclist.
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default HeroSection;
