'use client';

import { useEffect, useState } from 'react';

export default function ScrollToTopButton() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      id="scrollToTopBtn"
      title="Go to top"
      className={`fixed bottom-8 right-8 bg-blue-600 text-white rounded-full p-3 text-xl shadow-lg transition-all duration-300 ${
        showScrollTop ? 'block' : 'hidden'
      } hover:bg-blue-800 hover:scale-110`}
      onClick={scrollToTop}
    >
      ↑
    </button>
  );
}