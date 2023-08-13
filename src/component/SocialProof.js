import React from 'react';
import SocialProofCount from './SocialProofCount';

const socialProofCounts = [
  {
    label: 'Total Students',
    initialCount: 0,
    stopCount: 2.5,
    Add:"K+",
  },
  {
    label: 'Placement',
    initialCount: 0,
    stopCount: 100,
    Add:"%",
  },
  {
    label: 'Available Course',
    initialCount: 0,
    stopCount: 22,
    Add:"+",
  },
  // Add more social proof counts as needed
];

function SocialProof() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl text-center text-orange-500 font-bold mb-4">Facts About Our College</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {socialProofCounts.map((proof, index) => (
          <SocialProofCount key={index} {...proof} />
        ))}
      </div>
    </div>
  );
}

export default SocialProof;
