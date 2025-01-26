import React from 'react';
import rightImage from '../../asest/Mask group.png'; // Ensure this path is correct

const SafetyAndStyleSection = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <section className="flex flex-col md:flex-row items-center bg-black text-white px-4 py-8 max-w-full">
        {/* Left Content */}
        <div className="w-full md:w-1/2 md:pr-4 lg:pr-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 break-words">
            Redefine{' '}
            <span className="text-blue-500">Safety</span>{' '}
            And{' '}
            <span className="text-blue-500">Style</span>{' '}
            With Spectralite.
          </h2>
          <ul className="space-y-3 text-base md:text-lg">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
              <span className="break-words">Full-Width Visibility - Drivers See Your Entire Bike.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
              <span className="break-words">Ground Laser Safety Zone - Stay Safe With A Visible Perimeter.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
              <span className="break-words">360° Lighting - Front, Rear, And Laser In One System.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
              <span className="break-words">Sleek Design - Seamlessly Integrated, No Bulky Attachments.</span>
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
          <img
            src={rightImage}
            alt="Spectralite Lighting"
            className="w-auto h-auto max-w-[90%] md:max-w-[80%] object-contain"
          />
        </div>
      </section>
    </div>
  );
};

export default SafetyAndStyleSection;
