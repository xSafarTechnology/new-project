import React, { useState, useEffect } from 'react';

const SocialProofCount = ({ label, initialCount, stopCount, Add }) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    if (count < stopCount) {
      const interval = setInterval(() => {
        // Simulate an increment of the count
        setCount((prevCount) => {
          const newCount = prevCount + 1;
          return newCount > stopCount ? stopCount : newCount;
        });
      }, 5); // Change the interval as desired

      return () => {
        clearInterval(interval);
      };
    }
  }, [count, stopCount]);

  return (
    <div className="flex items-center justify-center p-4 bg-white shadow-md rounded-lg"
    data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
      <div className="text-4xl font-bold text-teal-600">{count}</div>
      <div className="text-4xl font-bold text-teal-600">{Add}</div>
      <div className="ml-2 text-gray-600 text-2xl">{label}</div>
    </div>
  );
};

export default SocialProofCount;
