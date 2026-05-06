'use client';

import React from 'react';

interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
}

interface FooterProps {
  contact: ContactInfo;
}

const Footer: React.FC<FooterProps> = ({ contact }) => {
  // Array to generate the pixel grid
  const pixelGrid = Array.from({ length: 100 }).map((_, i) => {
    const colors = ['pixel1', 'pixel2', 'pixel3', 'pixel4', 'pixel5', 'pixel6', 'pixel7', 'pixel8'];
    return colors[i % colors.length];
  });

  return (
    <footer className="footer bg-background text-secondary border-t border-border mt-16">
      <div className="max-w-1100px mx-auto px-48px py-10 flex flex-col md:flex-row items-center justify-between mobile:px-4">
        {/* Top line: "© 2023 All rights reserved" + bordered email chip on right */}
        <p className="text-base mb-4 md:mb-0">© {new Date().getFullYear()} All rights reserved</p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center px-4 py-2 bg-pageBackground text-primary rounded-8px border border-border hover:bg-border transition-colors text-sm"
          >
            Email: {contact.email}
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-pageBackground text-primary rounded-8px border border-border hover:bg-border transition-colors text-sm"
          >
            LinkedIn
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-pageBackground text-primary rounded-8px border border-border hover:bg-border transition-colors text-sm"
          >
            GitHub
          </a>
        </div>
      </div>
      {/* Bottom: dense multicolor pixel-grid mosaic strip */}
      <div className="flex flex-wrap h-12 w-full overflow-hidden">
        {pixelGrid.map((colorClass, index) => (
          <div
            key={index}
            className={`flex-grow h-full min-w-[20px] bg-${colorClass}`}
            style={{ flexBasis: 'calc(100% / 20)' }} // Adjust for desired pixel density
          ></div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;