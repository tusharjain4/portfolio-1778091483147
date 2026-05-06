'use client';

import React from 'react';

interface SkillCategory {
  name: string;
  skills: string[];
}

interface SkillsProps {
  skills: SkillCategory[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  // Hardcoded icons for illustrative purposes as per asset manifest,
  // mapping them to categories or just using generic ones.
  const icons = [
    '/assets/images/img_subtract.svg',
    '/assets/images/img_icon_building_2.svg',
    '/assets/images/img_frame_410.svg',
    '/assets/images/img_squares.svg',
    '/assets/images/img_line_container.svg',
    '/assets/images/img_subtract.svg', // Repeat for more categories
    '/assets/images/img_icon_building_2.svg',
  ];

  return (
    <section id="skills" className="section-padding bg-background text-text">
      <div className="max-w-1100px mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Column: Title */}
        <div className="md:sticky md:top-20 md:h-fit">
          <h2 className="text-4xl font-bold text-primary mb-6">My Skills</h2>
          <p className="text-lg leading-relaxed text-secondary">
            A comprehensive overview of my technical proficiencies and core competencies.
          </p>
        </div>

        {/* Right Side: Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skills.map((category, catIndex) => (
            <div key={category.name} className="bg-pageBackground p-6 rounded-xl shadow-adizen-shadow border border-border flex flex-col items-start hover:shadow-project-hover transition-shadow duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 border border-border">
                {/* Using a generic icon from the manifest for each category */}
                <img
                  src={icons[catIndex % icons.length]}
                  alt={`${category.name} icon`}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{category.name}</h3>
              <ul className="text-secondary text-lg leading-relaxed space-y-1">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <span className="text-primary mr-2">&bull;</span> {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;