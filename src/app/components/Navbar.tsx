'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './Context/ThemeContext';

export default function Navbar  ()  {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [, setOpenSubmenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = useMemo(
    () => [
      { href: '/', label: 'Home' },
      { href: '/capabilities', label: 'Capabilities' },
      { href: '/perspectives', label: 'Perspectives' },
      { href: '/about', label: 'About Us' },
    ],
    []
  );

  const isActive = useCallback(
    (path:string) => pathname === path || pathname.startsWith(`${path}/`),
    [pathname]
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    onScroll(); // set on mount
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => (document.body.style.overflow = 'unset');
  }, [isMenuOpen]);

  const handleNavigation = useCallback(() => {
    setIsMenuOpen(false);
    setOpenSubmenu(null);
    window.scrollTo(0, 0);
  }, []);

  const itemVariants = {
    closed: { y: -20, opacity: 0 },
    open: { y: 0, opacity: 1 }
  };

  return (
    <header 
      className={`w-full z-50 ${
        scrolled 
          ? 'fixed top-0 bg-white/90 dark:bg-gray-900/90 shadow-md backdrop-blur-sm border-b border-[#FF512F]/10 dark:border-[#FF512F]/10' 
          : 'relative bg-transparent'
      } transition-all duration-500 ease-in-out`}
    >
      {/* Progress indicator when scrolled */}
      {scrolled && (
        <div className="absolute top-0 left-0 h-0.5 w-full bg-gradient-to-r from-[#FF512F] to-[#FF8A63] dark:from-[#FF512F] dark:to-[#FF8A63] opacity-70"></div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center h-[80px] relative">
        <Link 
          href="/" 
          onClick={handleNavigation}
          className="transition-transform duration-300 hover:scale-105"
        >
          {/* <img
            src={theme === 'dark' ? logoWhite : logoBlack}
            alt="ReKnew Logo"
            className="h-10 w-auto transition-all duration-300"
          /> */}
           <img
                    src={theme === 'dark' ? "/assets/reknew-logo-white.png" : "/assets/rklogo_black.png"}
                    alt="ReKnew Logo"
                    className="h-10 w-auto transition-all duration-300"
             />
        </Link>

        {/* Mobile menu toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-[#FF512F]/10 dark:hover:bg-[#FF512F]/10 hover:text-[#FF512F] transition-all"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} className="transition-transform duration-300 rotate-90" />
          ) : (
            <Menu size={24} className="transition-transform duration-300" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <motion.div
            initial="closed"
            animate="open"
            variants={{
              open: {
                transition: { staggerChildren: 0.1, delayChildren: 0.2 }
              },
              closed: {
                transition: { staggerChildren: 0.05, staggerDirection: -1 }
              }
            }}
            className="flex items-center gap-8"
          >
            {navLinks.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link
                  href={item.href}
                  onClick={handleNavigation}
                  className={`relative px-3 py-2 text-base md:text-lg transition-colors duration-300 font-medium group ${
                    isActive(item.href) 
                      ? 'text-[#FF512F] dark:text-[#FF512F]' 
                      : 'text-gray-800 dark:text-gray-200'
                  } hover:text-[#FF512F]`}
                >
                  {item.label}
                  <span 
                    className={`absolute left-0 -bottom-1 h-0.5 w-full bg-gradient-to-r from-[#FF512F] to-[#FF8A63] dark:from-[#FF512F] dark:to-[#FF8A63] transition-transform origin-left duration-300 ${
                      isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} 
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-[#FF512F]/10 dark:hover:bg-[#FF512F]/10 hover:text-[#FF512F] transition-all"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun size={20} className="transition-transform duration-500 hover:rotate-90" />
            ) : (
              <Moon size={20} className="transition-transform duration-500 hover:-rotate-90" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg rounded-b-2xl border-t border-[#FF512F]/10 dark:border-[#FF512F]/10 py-4 px-6 md:hidden z-50"
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={handleNavigation}
                    className={`py-2 px-3 rounded-lg transition-all duration-300 font-medium ${
                      isActive(item.href) 
                        ? 'text-[#FF512F] dark:text-[#FF512F] bg-[#FF512F]/10 dark:bg-[#FF512F]/10' 
                        : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                    } hover:text-[#FF512F]`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={toggleTheme}
                    className="flex items-center gap-2 py-2 px-3 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-[#FF512F] w-full transition-all"
                  >
                    {theme === 'dark' ? (
                      <>
                        <Sun size={18} />
                        <span className="text-base">Light Mode</span>
                      </>
                    ) : (
                      <>
                        <Moon size={18} />
                        <span className="text-base">Dark Mode</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};