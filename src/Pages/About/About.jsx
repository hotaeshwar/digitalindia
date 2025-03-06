import React, { useEffect, useState } from "react";
import vision from "../../assets/Images/vision.png";
import mission from "../../assets/Images/mission.png";
import aboutBg2 from "../../assets/Images/about-bg2.png";

const About = () => {
  // State to track which elements are visible
  const [visionVisible, setVisionVisible] = useState(false);
  const [missionVisible, setMissionVisible] = useState(false);
  
  useEffect(() => {
    // Make vision appear first
    const visionTimer = setTimeout(() => {
      setVisionVisible(true);
    }, 300); // 300ms delay before vision appears
    
    // Make mission appear second
    const missionTimer = setTimeout(() => {
      setMissionVisible(true);
    }, 900); // 900ms delay before mission appears (600ms after vision)
    
    // Clean up timers on unmount
    return () => {
      clearTimeout(visionTimer);
      clearTimeout(missionTimer);
    };
  }, []);
  
  return (
    <div className="bg-white py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14">
      {/* Hero section with background image and vision/mission content */}
      <div 
        className="w-full bg-cover bg-center h-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16"
        style={{ backgroundImage: `url(${aboutBg2})` }}
      >
        <div className="container mx-auto h-full flex items-center justify-end">
          {/* Vision and mission section with adjusted positioning for Nest Hub */}
          <div className="flex flex-col lg:flex-row justify-center items-start gap-6 md:gap-8 lg:gap-20 mt-28 md:mt-20 lg:mt-0 px-4 md:px-6 w-full md:w-3/4 lg:w-1/2">
            {/* Vision - with fade-in and slide-in effect */}
            <div 
              className={`w-full lg:w-1/2 p-4  md:p-8 lg:pt-14  flex flex-col items-start mb-6 lg:mb-0 bg-orange-400 lg:bg-transparent rounded-lg lg:rounded-none shadow-xl lg:shadow-none transition-all duration-700 ease-out transform ${
                visionVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="flex items-center mb-3">
                <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center mr-3">
                  <img src={vision} alt="vision" className="w-6 h-6" />
                </div>
                <h2 className="text-lg font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-white text-left text-sm">
                Our vision is to become a leading digital marketing agency that
                helps businesses of all sizes achieve their marketing goals
                through data-driven and innovative solutions. We aim to be a
                trusted partner for our clients and provide them with the
                expertise and support they need to succeed in the ever-evolving
                digital landscape.
              </p>
            </div>
            {/* Mission - with fade-in and slide-in effect */}
            <div 
              className={`w-full lg:w-1/2 p-4 md:p-8 lg:pt-14 flex flex-col items-start mb-8 lg:mb-4 bg-orange-400 lg:bg-transparent rounded-lg lg:rounded-none shadow-xl lg:shadow-none transition-all duration-700 ease-out transform ${
                missionVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="flex items-center mb-3">
                <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center mr-3">
                  <img src={mission} alt="mission" className="w-6 h-6" />
                </div>
                <h2 className="text-lg font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-white text-left text-sm">
                Our mission is to provide our clients with customized and
                effective digital marketing solutions that drive measurable
                results. We believe in using a data-driven approach to marketing
                and staying up-to-date with the latest trends and best practices
                in the industry. We are committed to delivering exceptional
                service and value to our clients and helping them achieve their
                marketing goals.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4">
        <div className="mt-6 sm:mt-8 p-3 sm:p-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Why Choose Us</h2>
          <p className="mt-3 sm:mt-4 text-gray-700">
            At Building India Digital, we pride ourselves on delivering
            high-quality services that exceed our clients' expectations. Our
            team of experts works closely with our clients to understand their
            unique requirements and deliver customized solutions that meet
            their needs. Here are some reasons why you should choose us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;