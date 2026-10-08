import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';

const navt = {
  zh: {
    home: '阿早',
    projects: '项目',
    library: 'Skill',
    garden: '小径分岔的花园',
    invisible: '看不见的城市',
    contributions: '开源贡献',
    ogcp: 'OGCP',
    walking: '走路修仙',
    academy: '无限学园',
    duck: '逃鸭南京',
    npc: '互动叙事多智能体框架',
    twolink: '2link虚拟角色智能体',
    distance: 'distance',
  },
  en: {
    home: 'Zaosusu',
    projects: 'Projects',
    library: 'Skill',
    garden: 'The Garden of Forking Paths',
    invisible: 'Invisible Cities',
    contributions: 'Open Source',
    ogcp: 'OGCP',
    walking: 'WalkingXiuxian',
    academy: 'Infinite Academy',
    duck: 'Duck Escape',
    npc: 'Interactive Fiction Multi-Agent Framework',
    twolink: '2link Virtual Character Agent',
    distance: 'distance',
  },
};

const projectLinks = [
  { path: '/projects/ogcp', key: 'ogcp' as const },
  { path: '/projects/walking-xiuxian', key: 'walking' as const },
  { path: '/projects/infinite-academy', key: 'academy' as const },
  { path: '/projects/duck-escape', key: 'duck' as const },
  { path: '/projects/npc-agent', key: 'npc' as const },
  { path: '/projects/2link', key: 'twolink' as const },
  { path: '/projects/distance', key: 'distance' as const },
];

const gardenLinks = [
  { path: '/invisible-cities', key: 'invisible' as const },
  { path: '/contributions', key: 'contributions' as const },
];

export function Navbar() {
  const { lang, toggle } = useLang();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [gardenOpen, setGardenOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const gardenRef = useRef<HTMLDivElement>(null);
  const c = navt[lang];

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
      if (gardenRef.current && !gardenRef.current.contains(e.target as Node)) {
        setGardenOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const isProjectPage = projectLinks.some((p) => p.path === location.pathname);
  const isGardenPage =
    location.pathname === '/garden-of-forking-paths' ||
    location.pathname === '/invisible-cities' ||
    location.pathname === '/contributions';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/72 backdrop-blur-xl border-b border-border-custom/80">
      <div className="max-w-content mx-auto px-5 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-inter font-bold text-base text-text-primary hover:text-[#9bd8cf] transition-colors duration-200"
          onClick={() => setMobileOpen(false)}
        >
          {c.home}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {/* Projects Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-1 font-noto text-sm transition-colors duration-200 ${
                isProjectPage ? 'text-text-primary' : 'text-text-muted hover:text-[#9bd8cf]'
              }`}
            >
              {c.projects}
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 rounded border border-border-custom bg-bg-secondary shadow-lg py-1">
                {projectLinks.map((p) => (
                  <Link
                    key={p.path}
                    to={p.path}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      location.pathname === p.path
                        ? 'text-text-primary bg-[#6cbcb2]/10'
                        : 'text-text-muted hover:text-[#9bd8cf] hover:bg-bg-primary/50'
                    }`}
                    onClick={() => setDropdownOpen(false)}
                  >
                    {c[p.key]}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* The Garden of Forking Paths — collab entry */}
          <div className="relative" ref={gardenRef}>
            <div
              className={`flex items-center gap-1 font-noto text-sm transition-colors duration-200 ${
                isGardenPage ? 'text-text-primary' : 'text-text-muted'
              }`}
            >
              <Link
                to="/garden-of-forking-paths"
                className="hover:text-[#9bd8cf] transition-colors duration-200"
                onClick={() => setGardenOpen(false)}
              >
                {c.garden}
              </Link>
              <button
                onClick={() => setGardenOpen(!gardenOpen)}
                aria-label="expand"
                className="hover:text-[#9bd8cf] transition-colors duration-200"
              >
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${gardenOpen ? 'rotate-180' : ''}`}
                />
              </button>
            </div>
            {gardenOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 rounded border border-border-custom bg-bg-secondary shadow-lg py-1">
                {gardenLinks.map((p) => (
                  <Link
                    key={p.path}
                    to={p.path}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      location.pathname === p.path
                        ? 'text-text-primary bg-[#6cbcb2]/10'
                        : 'text-text-muted hover:text-[#9bd8cf] hover:bg-bg-primary/50'
                    }`}
                    onClick={() => setGardenOpen(false)}
                  >
                    {c[p.key]}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Library of Babel */}
          <Link
            to="/library-of-babel"
            className={`font-noto text-sm transition-colors duration-200 ${
              location.pathname === '/library-of-babel' ? 'text-text-primary' : 'text-text-muted hover:text-[#9bd8cf]'
            }`}
          >
            {c.library}
          </Link>

          <button
            onClick={toggle}
            className="font-inter text-xs text-text-muted hover:text-text-primary border border-border-custom bg-bg-secondary/70 px-3 py-1.5 rounded transition-colors duration-200"
          >
            {lang === 'zh' ? 'EN' : '中文'}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggle}
            className="font-inter text-xs text-text-muted hover:text-text-primary border border-border-custom bg-bg-secondary/70 px-3 py-1.5 rounded transition-colors duration-200"
          >
            {lang === 'zh' ? 'EN' : '中文'}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-text-muted hover:text-text-primary transition-colors"
            aria-label="toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-bg-primary/95 backdrop-blur-xl border-t border-border-custom px-5 py-4 space-y-3">
          <Link
            to="/library-of-babel"
            className={`block font-noto text-sm ${
              location.pathname === '/library-of-babel' ? 'text-text-primary' : 'text-text-muted'
            }`}
            onClick={() => setMobileOpen(false)}
          >
            {c.library}
          </Link>
          <Link
            to="/garden-of-forking-paths"
            className={`block font-noto text-sm ${
              isGardenPage ? 'text-text-primary' : 'text-text-muted'
            }`}
            onClick={() => setMobileOpen(false)}
          >
            {c.garden}
          </Link>
          {gardenLinks.map((p) => (
            <Link
              key={p.path}
              to={p.path}
              className={`block font-noto text-sm pl-3 ${
                location.pathname === p.path ? 'text-text-primary' : 'text-text-muted'
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {c[p.key]}
            </Link>
          ))}
          {projectLinks.map((p) => (
            <Link
              key={p.path}
              to={p.path}
              className={`block font-noto text-sm ${
                location.pathname === p.path ? 'text-text-primary' : 'text-text-muted'
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {c[p.key]}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
