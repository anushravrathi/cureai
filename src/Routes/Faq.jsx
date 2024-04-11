// FAQ.js

import React, { useState } from 'react';

const FAQ = () => {
  const faqData = [
    {
      question: 'How does AI technology contribute to disease detection?',
      answer: 'AI technology enables us to analyze vast amounts of medical data with speed and precision, identifying patterns and indicators of diseases that may be missed by traditional methods. This allows for earlier detection and intervention, leading to better health outcomes.      ',
    },
    {
      question: 'What types of diseases can your platform detect?',
      answer: 'Our platform is designed to detect a wide range of diseases, including but not limited to cardiovascular diseases, infectious diseases, neurological disorders, and various types of cancer. We continually expand our capabilities to address emerging health challenges.      ',
    },
    {
      question: 'How accurate are the AI algorithms used for disease detection?',
      answer: '   Our AI algorithms are rigorously tested and validated to ensure high levels of accuracy and reliability. While no diagnostic tool is perfect, our platform consistently demonstrates strong performance in detecting diseases with precision.      ',
    },
    {
      question: 'Is the platform accessible to individuals without medical expertise?',
      answer: 'Yes, our platform is designed to be user-friendly and accessible to individuals from all backgrounds, including those without medical training. We provide clear and intuitive interfaces, along with educational resources to help users understand their health data.      ',
    },
    // Add more FAQ items as needed
  ];

  const [openItems, setOpenItems] = useState(Array(faqData.length).fill(false));

  const toggleAnswer = (index) => {
    const newOpenItems = [...openItems];
    newOpenItems[index] = !newOpenItems[index];
    setOpenItems(newOpenItems);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 mb-4 h-auto">
      <h2 className="text-[45px] font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-md">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <button
                className="text-blue-500 focus:outline-none"
                onClick={() => toggleAnswer(index)}
              >
                {openItems[index] ? 'Hide' : 'Show'}
              </button>
            </div>
            {openItems[index] && (
              <div className="mt-4">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
