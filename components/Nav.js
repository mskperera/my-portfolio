'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  return (
   <nav
  className={`p-4 ${
    isSticky
      ? 'sticky top-0 bg-sky-500 dark:bg-gray-900 bg-opacity-95 shadow-lg'
      : 'bg-sky-500 dark:bg-gray-800'
  } transition-all duration-300 z-50`}
>
   <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-2xl">Susantha Perera</Link>
        <div className="lg:hidden flex items-center space-x-4">
          <button onClick={toggleTheme} className="text-white text-xl" aria-label="Toggle Theme">
            {mounted && (theme === 'dark' ? <i className="fas fa-sun" /> : <i className="fas fa-moon" />)}
          </button>
          <button onClick={toggleMenu} className="text-white text-3xl" aria-label="Toggle Menu">
            <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'} />
          </button>
        </div>
        <ul className="hidden lg:flex items-center space-x-6 text-white">
            <li><Link href="/" className="hover:text-yellow-500 transition-colors">Home</Link></li>
          <li><Link href="/about" className="hover:text-yellow-500 transition-colors">About Me</Link></li>
          <li><Link href="/skills" className="hover:text-yellow-500 transition-colors">Skills</Link></li>
          <li><Link href="/projects" className="hover:text-yellow-500 transition-colors">Projects</Link></li>
          <li><Link href="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link></li>
          <li>
            <button onClick={toggleTheme} className="text-white hover:text-yellow-500 transition-colors" aria-label="Toggle Theme">
              {mounted && (theme === 'dark' ? <i className="fas fa-sun" /> : <i className="fas fa-moon" />)}
            </button>
          </li>
        </ul>
      </div>
      <div className={`fixed inset-0 bg-black bg-opacity-80 z-20 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-white text-3xl" aria-label="Close Menu">
            <i className="fas fa-times" />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-6">
          <Link href="/about" className="text-white text-xl hover:text-yellow-500 transition-colors" onClick={handleLinkClick}>About Me</Link>
          <Link href="/skills" className="text-white text-xl hover:text-yellow-500 transition-colors" onClick={handleLinkClick}>Skills</Link>
          <Link href="/projects" className="text-white text-xl hover:text-yellow-500 transition-colors" onClick={handleLinkClick}>Projects</Link>
          <Link href="/contact" className="text-white text-xl hover:text-yellow-500 transition-colors" onClick={handleLinkClick}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}