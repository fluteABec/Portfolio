import { useState, useEffect } from 'react';

export function Footer() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  return (
    <footer className="border-t border-white/5 py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          className="flex items-center gap-3 text-sm text-[#A0A0A0] text-center"
          style={{
            flexDirection: isDesktop ? 'row' : 'column',
            justifyContent: isDesktop ? 'flex-end' : 'center'
          }}
        >
          <p className="whitespace-nowrap">© 2025 Nathan Courcelle. All rights reserved.</p>
          {isDesktop && <span className="w-1 h-1 rounded-full bg-[#05668D] flex-shrink-0" />}
          <a 
            href="mailto:nathan.5courcelle@gmail.com" 
            className="hover:text-[#679436] transition-colors duration-300 whitespace-nowrap"
          >
            nathan.5courcelle@gmail.com
          </a>
          {isDesktop && <span className="w-1 h-1 rounded-full bg-[#679436] flex-shrink-0" />}
          <span className="whitespace-nowrap">Devoloppeur Front-End</span>
          {isDesktop && <span className="w-1 h-1 rounded-full bg-[#05668D] flex-shrink-0" />}
          <span className="whitespace-nowrap">France</span>
        </div>
      </div>
    </footer>
  );
}
