// AboutSection.js

import React from 'react';

const AboutSection = () => {
  return (
    <div className="max-w-screen px-40 mx-auto mt-10 py-8 bg-white rounded-md shadow-md">
      <h2 className="text-[40px] font-bold mb-6">About Our Offered Services</h2>
      
      {/* Image */}
      {/* <img
        src={frenchClassroomImage}
        alt="French Classroom"
        className="mb-6 rounded-md shadow-md"
      /> */}

      {/* Why The French Language Course in Delhi? */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Why Cure.AI?</h3>
        <p className="text-gray-700">
        Welcome to Cure.ai, we are driven by a commitment to innovation and excellence in healthcare. Through the power of cutting-edge AI technology, we revolutionize disease detection, striving to make a meaningful impact on global health outcomes. 
        </p>
      </div>

      {/* Why Should I Learn the French Language? */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Why Should I trust Cure.AI?</h3>
        <p className="text-gray-700">
        Welcome to Cure.ai, we are driven by a commitment to innovation and excellence in healthcare. Through the power of cutting-edge AI technology, we revolutionize disease detection, striving to make a meaningful impact on global health outcomes. 
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
