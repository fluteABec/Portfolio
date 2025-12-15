export function Footer() {
  return (
    <footer className="border-t border-white/5 py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-[#A0A0A0]">
          <span></span>
          <div className="flex items-center gap-6">
            <p className="pl-4">© 2025 Nathan Courcelle. All rights reserved.</p>
            <span className="w-1 h-1 rounded-full bg-[#05668D]" />
            <a 
              href="mailto:nathan.5courcelle@gmail.com" 
              className="hover:text-[#679436] transition-colors duration-300"
            >
              nathan.5courcelle@gmail.com
            </a>
            <span className="w-1 h-1 rounded-full bg-[#679436]" />
            <span>Devoloppeur Front-End</span>
            <span className="w-1 h-1 rounded-full bg-[#05668D]" />
            <span>France</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
