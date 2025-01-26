import React from "react"
import bikeImage from "../../asest/Bike Evolution-27 1.png"
import icon1 from "../../asest/icons/Component1.png"
import icon2 from "../../asest/icons/Component2.png"
import icon3 from "../../asest/icons/Component3.png"
import icon4 from "../../asest/icons/Component4.png"

const BikeFeatureSection = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="relative min-h-[400px] h-screen">
        {/* Background Image Container */}
        <div className="absolute inset-0">
          <img 
            src={bikeImage} 
            alt="Bike Evolution"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Feature List Container */}
        <div className="absolute left-0 right-0 bottom-0 md:left-auto md:right-4 md:bottom-4">
          <div className="w-full md:w-auto bg-black/80 text-white">
            <div className="p-4 md:p-6 md:rounded-lg max-w-screen-sm md:max-w-[300px] mx-auto md:mx-0">
              <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
                <FeatureItem icon={icon1} text="8+ Hours Runtime" />
                <FeatureItem icon={icon2} text="Water Proof" />
                <FeatureItem icon={icon3} text="Enhanced Safety" />
                <FeatureItem icon={icon4} text="Clear Visibility" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const FeatureItem = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-2">
      <img src={icon} alt={text} className="w-6 h-6 object-contain" />
      <span>{text}</span>
    </div>
  )
}

export default BikeFeatureSection
