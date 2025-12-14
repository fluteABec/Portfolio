import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { HomePage } from './components/HomePage';
import { ProjectsPage } from './components/ProjectsPage';
import { CVPage } from './components/CVPage';
import { CabanesYourtesPage } from './components/CabanesYourtesPage';
import { IUTDefensePage } from './components/IUTDefensePage';
import { UIDesignPosterPage } from './components/UIDesignPosterPage';
import { ClimbImprovePage } from './components/ClimbImprovePage';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    if (page === 'contact') {
      setCurrentPage('home');
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        contactSection?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Sidebar currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main className="flex-1 ml-20">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'projects' && <ProjectsPage onNavigate={handleNavigate} />}
        {currentPage === 'cv' && <CVPage />}
        {currentPage === 'project-cabanes' && <CabanesYourtesPage onBack={() => setCurrentPage('projects')} />}
        {currentPage === 'project-iut' && <IUTDefensePage onBack={() => setCurrentPage('projects')} />}
        {currentPage === 'project-poster' && <UIDesignPosterPage onBack={() => setCurrentPage('projects')} />}
        {currentPage === 'project-climbimprove' && <ClimbImprovePage onBack={() => setCurrentPage('projects')} />}
      </main>

      <Footer />
    </div>
  );
}