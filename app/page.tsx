import Contact from '@/components/Contact';
'use client';

import { Inter } from 'next/font/google'; // Import Inter for use in components if needed
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Journey from '@/components/Journey';
import Footer from '@/components/Footer';

// Use the exact JSON data for portfolio.json content
import portfolioData from '@/data/portfolio.json';

// Initialize Inter font (if not already handled by layout.tsx CSS variables)
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });


export default function Home() {
  return (
    <div className={`page-container font-inter`}>
      <Navbar name={portfolioData.name} />
      <main className="relative z-0">
        <Hero
          name={portfolioData.name}
          role={portfolioData.role}
          tagline={portfolioData.tagline}
        />
        <About
          about={portfolioData.about}
          experience={portfolioData.experience}
          currentRole={portfolioData.currentRole}
          highlights={portfolioData.highlights}
        />
        <Projects projects={portfolioData.projects} />
        <Skills skills={portfolioData.skills} />
        <Journey
          currentRole={portfolioData.currentRole}
          about={portfolioData.about}
          experience={portfolioData.experience}
        />
      </main>
      <Footer contact={portfolioData.contact} />
    </div>
  );
}