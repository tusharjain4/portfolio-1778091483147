'use client';

import React from 'react';

interface AboutProps {
  about: string;
  experience: number;
  currentRole: string;
  highlights: string[];
}

const About: React.FC<AboutProps> = ({ about, experience, currentRole, highlights }) => {
  return (
    <section id="about" className="section-padding bg-pageBackground text-text">
      <div className="max-w-1100px mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column: About Text */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-primary">About Me</h2>
          <p className="text-lg leading-relaxed mb-6">
            {about}
          </p>
          <div className="space-y-4">
            <p className="text-lg font-semibold">
              Experience: <span className="text-primary">{experience} years</span>
            </p>
            <p className="text-lg font-semibold">
              Current Role: <span className="text-primary">{currentRole}</span>
            </p>
          </div>
        </div>

        {/* Right Column: Highlights */}
        <div>
          <h3 className="text-3xl font-bold mb-6">Key Highlights</h3>
          <ul className="space-y-4">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-3 text-xl">&bull;</span>
                <p className="text-lg leading-relaxed">{highlight}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;