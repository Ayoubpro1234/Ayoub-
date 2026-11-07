/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { PORTFOLIO_DATA, ProjectItem } from './config/portfolioData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { DownloadSection } from './components/DownloadSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { DownloadModal } from './components/DownloadModal';
import { LanguageProvider } from './context/LanguageContext';

function PortfolioContent() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [downloadProject, setDownloadProject] = useState<ProjectItem | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  const handleStartDownload = (project: ProjectItem) => {
    setDownloadProject(project);
  };

  return (
    <div className="min-h-screen bg-[#070709] text-zinc-100 flex flex-col font-sans selection:bg-yellow-400 selection:text-black overflow-x-hidden w-full">
      {/* Fixed Navigation */}
      <Navbar
        onDownloadClick={() => handleStartDownload(PORTFOLIO_DATA.projects[0])}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onExploreClick={() => scrollToSection('projects')}
          onContactClick={() => scrollToSection('contact')}
          onViewProjectClick={(projectId) => {
            const found = PORTFOLIO_DATA.projects.find((p) => p.id === projectId);
            if (found) setSelectedProject(found);
          }}
        />

        {/* 2. About Me Section */}
        <AboutSection />

        {/* 3. Projects Showcase */}
        <ProjectsSection
          onViewDetails={(proj) => setSelectedProject(proj)}
          onDownloadApk={(proj) => handleStartDownload(proj)}
        />

        {/* 4. Dedicated Android APK Download Center */}
        <DownloadSection
          onDownloadApk={(proj) => handleStartDownload(proj)}
        />

        {/* 5. Contact Section */}
        <ContactSection />
      </main>

      {/* 6. Footer */}
      <Footer />

      {/* Interactive Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        onDownloadClick={(proj) => handleStartDownload(proj)}
      />

      {/* Mandatory 10-Second Countdown Download Flow Modal */}
      <DownloadModal
        project={downloadProject}
        isOpen={Boolean(downloadProject)}
        onClose={() => setDownloadProject(null)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}
