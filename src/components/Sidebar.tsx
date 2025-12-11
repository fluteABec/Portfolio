import { Home, Briefcase, FileText, Mail } from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Sidebar({ currentPage, onNavigate }: SidebarProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { id: 'projects', label: 'Projects', icon: <Briefcase className="w-5 h-5" /> },
    { id: 'cv', label: 'CV', icon: <FileText className="w-5 h-5" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-5 h-5" /> }
  ];

  return (
    <aside
      className="fixed left-0 top-0 bottom-0 z-50 w-20 glass flex items-center justify-center"
    >
      <nav className="h-full flex items-center justify-center py-16">
        <ul className="flex flex-col gap-8 justify-center items-center">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onNavigate(item.id)}
                className={`relative group flex flex-col items-center gap-3 px-4 py-6 rounded-3xl transition-all duration-200 ${
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
                  className="relative z-10 whitespace-nowrap origin-center text-sm tracking-wider"
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
      </nav>
    </aside>
  );
}