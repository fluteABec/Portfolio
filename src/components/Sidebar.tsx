import { Home, Briefcase, FileText, Mail, Globe } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';
import { useState, useEffect } from 'react';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Sidebar({ currentPage, onNavigate }: SidebarProps) {
  const { language, setLanguage } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  const navItems = [
    { id: 'home', label: language === 'fr' ? 'Accueil' : 'Home', icon: <Home className="w-4 h-4" /> },
    { id: 'projects', label: language === 'fr' ? 'Projets' : 'Projects', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'cv', label: 'CV', icon: <FileText className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> }
  ];

  return (
    <>
      {/* Desktop & Tablet ONLY: vertical sidebar on left */}
      {!isMobile && (
        <>
          {/* Spacer invisible pour réserver l'espace dans le flex layout */}
          <div className="w-20 flex-shrink-0" aria-hidden="true" />
          
          {/* Sidebar fixe */}
          <aside
            aria-label="Sidebar"
            className="glass fixed left-0 top-0 bottom-0 w-20 z-50"
            style={{ height: '100vh' }}
          >
            <nav className="h-full w-full flex flex-col items-center justify-between py-8">
          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="group flex flex-col items-center gap-1 px-2 py-2 rounded-2xl transition-all duration-200 text-[#A0A0A0] hover:text-[#F2F2F2] hover:bg-white/5"
            title={language === 'fr' ? 'Switch to English' : 'Passer en Français'}
          >
            <Globe className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-wider">
              {language.toUpperCase()}
            </span>
          </button>

          {/* Navigation Items */}
          <ul className="flex flex-col gap-4 justify-center items-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`relative group flex flex-col items-center gap-2 px-3 py-4 rounded-3xl transition-all duration-200 ${
                    currentPage === item.id
                      ? 'bg-gradient-to-b from-[#679436] to-[#05668D] text-[#F2F2F2]'
                      : 'text-[#A0A0A0] hover:text-[#F2F2F2] hover:bg-white/5'
                  }`}
                >
                  <span className="relative z-10">
                    {item.icon}
                  </span>
                  <span 
                    className="relative z-10 whitespace-nowrap origin-center text-xs tracking-wider"
                    style={{ 
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)'
                    }}
                  >
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="h-12"></div>
        </nav>
      </aside>
        </>
      )}

      {/* Mobile ONLY: top nav (visible below 768px, hidden above) */}
      {isMobile && (
        <header className="fixed top-0 left-0 right-0 z-50 glass">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Brand or small logo placeholder */}
            <button onClick={() => onNavigate('home')} className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#679436] to-[#05668D] flex items-center justify-center text-white font-bold text-sm">N</div>
            </button>
            <nav className="flex items-center gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3 py-2 rounded-xl transition-colors duration-150 ${currentPage === item.id ? 'bg-gradient-to-r from-[#679436] to-[#05668D] text-white' : 'text-[#A0A0A0] hover:bg-white/5 hover:text-white'}`}
                  title={item.label}
                >
                  {item.icon}
                </button>
              ))}
            </nav>
          </div>

          {/* Language Toggle on mobile */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-[#A0A0A0] hover:text-[#F2F2F2] hover:bg-white/5 transition-all duration-200"
          >
            <Globe className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">{language.toUpperCase()}</span>
          </button>
        </div>
      </header>
      )}
    </>
  );
}