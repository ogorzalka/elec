import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Réalisations', path: '/realisations' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed z-50 w-full py-4 sm:py-10 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link
              to="/"
              aria-label="Home"
              className="text-xl md:text-3xl font-extrabold"
            >
              <span className="text-blue-600">Électricien</span> Pro
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              {navItems.map(item => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600"
            >
              <span className={"hidden lg:inline"}>Demande de devis</span>
              <span className={"lg:hidden"}>Contact</span>
            </Link>
            <div className="-mr-1 md:hidden">
              <button
                className="relative z-10 flex h-8 w-8 items-center justify-center"
                onClick={toggleMenu}
                aria-label="Toggle Navigation"
              >
                <svg
                  aria-hidden="true"
                  className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path
                    d={
                      isOpen ? "M2 2L12 12M12 2L2 12" : "M0 1H14M0 7H14M0 13H14"
                    }
                    className="origin-center transition"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-white shadow-md">
          <nav className="py-4">
            <ul className="flex flex-col space-y-4">
              {navItems.map(item => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
};

export default Header;
