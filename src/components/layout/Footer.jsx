export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-8 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="space-y-1 text-center md:text-left">
          <p className="text-gray-400 font-medium tracking-tight">
            NovaTask <span className="text-indigo-500">Mission Control</span>
          </p>
          <p className="text-xs text-gray-600 font-semibold uppercase tracking-widest">
            © {currentYear} Advanced Task Management Suite
          </p>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">Connect:</span>
          <div className="flex gap-2">
            <a
              href="https://www.linkedin.com/in/himanshuakabored/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-indigo-500/10 text-gray-400 hover:text-indigo-400 rounded-xl border border-white/5 transition-all duration-300"
            >
              <ion-icon name="logo-linkedin" style={{ fontSize: '20px' }}></ion-icon>
            </a>
            <a
              href="https://github.com/Bored008"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-xl border border-white/5 transition-all duration-300"
            >
              <ion-icon name="logo-github" style={{ fontSize: '20px' }}></ion-icon>
            </a>
            <a
              href="https://t.me/BoRed_Xagain"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-sky-500/10 text-gray-400 hover:text-sky-400 rounded-xl border border-white/5 transition-all duration-300"
            >
              <ion-icon name="paper-plane-outline" style={{ fontSize: '20px' }}></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
