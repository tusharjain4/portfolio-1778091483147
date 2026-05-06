'use client';

import React from 'react';
import Link from 'next/link';

interface NavbarProps {
  name: string;
}

const Navbar: React.FC<NavbarProps> = ({ name }) => {
  const brandInitials = name.split(' ').map(n => n[0]).join(''); // "Pooja R. Sonar" -> "PRS" or if just "Pooja Sonar" -> "PS"

  return (
    <header className="sticky top-0 z-50 w-full bg-white bg-opacity-90 backdrop-blur-sm transition-all duration-300 shadow-sm border-b border-border">
      <nav className="max-w-1100px mx-auto px-48px flex items-center justify-between h-20 mobile:px-4">
        {/* Left brand: "NN" (Source Serif), thin vertical divider */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center text-text text-2xl font-sourceSerif font-bold uppercase tracking-wide">
            {brandInitials}
          </Link>
          <div className="h-6 w-px bg-border hidden sm:block"></div> {/* Thin vertical divider */}
          <span className="text-secondary text-base hidden sm:block">Product Designer</span> {/* Placeholder role from template, can be dynamic if needed */}
        </div>

        {/* Right nav: Home / Work / About (DotGothic16 large display style) */}
        <div className="flex space-x-6">
          <Link href="#home" className="text-text hover:text-primary font-dotGothic text-lg transition-colors duration-200">
            Home
          </Link>
          <Link href="#works" className="text-text hover:text-primary font-dotGothic text-lg transition-colors duration-200">
            Work
          </Link>
          <Link href="#about" className="text-text hover:text-primary font-dotGothic text-lg transition-colors duration-200">
            About
          </Link>
          {/* Added Skills and Journey to navigation for better access */}
          <Link href="#skills" className="text-text hover:text-primary font-dotGothic text-lg transition-colors duration-200 hidden md:block">
            Skills
          </Link>
          <Link href="#journey" className="text-text hover:text-primary font-dotGothic text-lg transition-colors duration-200 hidden md:block">
            Journey
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;