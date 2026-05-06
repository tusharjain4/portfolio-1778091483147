'use client';

import React from 'react';

interface HeroProps {
  name: string;
  role: string;
  tagline: string;
}

const Hero: React.FC<HeroProps> = ({ name, role, tagline }) => {
  const [firstName, ...lastNameParts] = name.split(' ');
  const lastName = lastNameParts.join(' ');

  return (
    <section id="home" className="hero min-h-80vh flex items-center justify-center bg-background text-text section-padding pb-0 md:pb-0">
      <div className="max-w-1100px mx-auto w-full relative">
        {/* Hero content */}
        <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
          {/* Main Headline */}
          <div className="md:col-span-8 lg:col-span-7 text-center md:text-left">
            <h1 className="text-[clamp(5rem,15vw,12rem)] font-bold leading-none font-inter uppercase tracking-tight mb-4 lg:mb-0">
              <span className="block">Hello</span>
              <span className="flex items-center justify-center md:justify-start gap-4">
                <span className="block">I&apos;m</span>
                <span className="text-primary">{firstName}</span>
                <span className="flex flex-wrap gap-2 md:ml-4">
                  <span className="inline-block bg-primary text-white text-base py-2 px-4 rounded-full font-semibold">Software</span>
                  <span className="inline-block bg-primary text-white text-base py-2 px-4 rounded-full font-semibold">Developer</span>
                </span>
              </span>
            </h1>
            <p className="text-2xl mt-4 text-secondary font-semibold max-w-lg mx-auto md:mx-0">
              {tagline}
            </p>
          </div>

          {/* Image and Scroll text */}
          <div className="md:col-span-4 lg:col-span-5 flex flex-col items-center md:items-end mt-8 md:mt-0">
            <img
              src="/assets/images/img_rectangle_1.png"
              alt="Pooja R. Sonar"
              className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto object-cover rounded-xl shadow-lg border border-border"
            />
            <p className="mt-6 text-secondary text-lg underline">Scroll to explore</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;