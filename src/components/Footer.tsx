export function Footer() {
  return (
    <footer className="border-t border-white/5 py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-[#A0A0A0]">
          <p>© 2025 Nathan Courcelle. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <a 
              href="mailto:nathan.courcelle@example.com" 
              className="hover:text-[#679436] transition-colors duration-300"
            >
              nathan.courcelle@example.com
            </a>
            <span className="w-1 h-1 rounded-full bg-[#679436]" />
            <span>Front-End Developer</span>
            <span className="w-1 h-1 rounded-full bg-[#05668D]" />
            <span>Based in France</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
