'use client';

import React from 'react';

interface JourneyProps {
  currentRole: string;
  about: string;
  experience: number;
}

const Journey: React.FC<JourneyProps> = ({ currentRole, about, experience }) => {
  // Create simplified journey timeline entries based on provided data
  const journeyTimeline = [
    {
      year: '2023 - Present',
      title: currentRole,
      description: "Currently contributing as a Software Developer, focusing on architecting real-time systems and scalable web applications. Integral to developing and maintaining key features as described in my highlights.",
      icon: '/assets/images/img_icon_building_2.svg', // Building icon for current role
    },
    {
      year: `Prior to ${new Date().getFullYear() - Math.floor(experience)}`, // Estimate start year of professional experience
      title: 'Internships & Early Career',
      description: "Gained foundational experience through impactful internships, where I honed my skills in the MERN stack and contributed to various development projects, laying the groundwork for my professional career.",
      icon: '/assets/images/img_frame_410.svg', // Generic icon for early career
    },
    // Add more granular entries if the 'about' field allowed parsing specific past roles/companies
  ];

  return (
    <section id="journey" className="section-padding bg-pageBackground text-text">
      <div className="max-w-1100px mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Column: Title */}
        <div className="md:sticky md:top-20 md:h-fit">
          <h2 className="text-4xl font-bold text-primary mb-6">My Journey</h2>
          <p className="text-lg leading-relaxed text-secondary">
            A glimpse into my professional path, from foundational learning to current contributions.
          </p>
        </div>

        {/* Right Side: Stacked timeline cards */}
        <div className="space-y-8">
          {journeyTimeline.map((entry, index) => (
            <div key={index} className="bg-background p-6 rounded-xl shadow-adizen-shadow border border-border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pageBackground rounded-full flex items-center justify-center mr-4 border border-border">
                  <img src={entry.icon} alt="timeline icon" className="w-6 h-6 object-contain" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold text-primary">{entry.title}</h3>
                  <p className="text-secondary text-sm">{entry.year}</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed text-text">
                {entry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;