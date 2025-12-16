import { Home, Briefcase, FileText, Mail, Globe } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Sidebar({ currentPage, onNavigate }: SidebarProps) {
  const { language, setLanguage } = useTranslation();

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
    <aside
      className="fixed left-0 top-0 bottom-0 z-50 w-20 glass flex items-center justify-center"
    >
      <nav className="h-full flex flex-col items-center justify-between py-8">
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
                {/* Icon */}
                <span className="relative z-10">
                  {item.icon}
                </span>
                
                {/* Vertical Text - Rotated */}
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

        {/* Spacer for balance */}
        <div className="h-12"></div>
      </nav>
    </aside>
  );
}