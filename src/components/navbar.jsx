"use client";
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../Context/ThemeContext';
import { useThemeStyles } from '../hooks/useThemeStyles';
import logoBlack from '../../public/assets/rklogo_black.png';
import logoWhite from '../../public/assets/reknew-logo-white.png';

const Navbar = () => {
  const pathname = usePathname();
  const { toggleTheme } = useTheme();
  const { isDark, mounted, themeStyles } = useThemeStyles();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [,setOpenSubmenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = useMemo(() => [
    { href: '/', label: 'Home' },
    { href: '/capabilities', label: 'Capabilities' },
    { href: '/perspectives', label: 'Perspectives' },
    { href: '/about-us', label: 'About Us' }
  ], []);

  const isActive = useCallback(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
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
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <header className="w-full z-50 relative bg-transparent transition-all duration-500 ease-in-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center h-[80px] relative">
          <div className="transition-transform duration-300 hover:scale-105">
            <div className="h-10 w-[120px] bg-gray-200 animate-pulse rounded"></div>
          </div>
          <div className="md:hidden p-2">
            <div className="w-6 h-6 bg-gray-200 animate-pulse rounded"></div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center gap-8">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-6 w-20 bg-gray-200 animate-pulse rounded"></div>
              ))}
            </div>
            <div className="w-8 h-8 bg-gray-200 animate-pulse rounded"></div>
          </div>
        </div>
      </header>
    );
  }

  const itemVariants = {
    closed: { y: -20, opacity: 0 },
    open: { y: 0, opacity: 1 }
  };

  return (
    <header 
      className={`w-full z-50 ${
        scrolled 
          ? `fixed top-0 shadow-md backdrop-blur-sm border-b transition-all duration-500 ${
              isDark 
                ? 'border-orange-500/20' 
                : 'border-orange-500/20'
            }` 
          : 'relative bg-transparent'
      } ease-in-out`}
    >
      {/* Progress indicator when scrolled */}
      {scrolled && (
        <div className="absolute top-0 left-0 h-0.5 w-full bg-gradient-to-r from-[#FF512F] to-[#FF8A63] opacity-70"></div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center h-[80px] relative">
        <Link 
          href="/" 
          onClick={handleNavigation}
          className="transition-transform duration-300 hover:scale-105"
        >
          <Image
            src={isDark ? logoWhite : logoBlack}
            alt="ReKnew Logo"
            height={40}
            width={120}
            className="h-10 w-auto transition-all duration-300"
            priority
          />
        </Link>

        {/* Mobile menu toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden p-2 rounded-md transition-all ${themeStyles.button.ghost}`}
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
                      ? themeStyles.text.accent 
                      : `${themeStyles.text.primary} hover:text-[#FF512F]`
                  }`}
                >
                  {item.label}
                  <span 
                    className={`absolute left-0 -bottom-1 h-0.5 w-full bg-gradient-to-r from-[#FF512F] to-[#FF8A63] transition-transform origin-left duration-300 ${
                      isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} 
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <button
            onClick={toggleTheme}
            className={`p-2 rounded-md transition-all ${themeStyles.button.ghost}`}
            aria-label="Toggle Theme"
          >
            {isDark ? (
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
              className={`absolute top-full left-0 right-0 shadow-lg rounded-b-2xl py-4 px-6 md:hidden z-50 ${
                isDark 
                  ? 'border-t border-orange-500/20' 
                  : 'border-t border-orange-500/20'
              }`}
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={handleNavigation}
                    className={`py-2 px-3 rounded-lg transition-all duration-300 font-medium ${
                      isActive(item.href) 
                        ? `${themeStyles.text.accent} bg-orange-500/10` 
                        : `${themeStyles.text.primary} ${themeStyles.bg.hover} hover:text-[#FF512F]`
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className={`pt-2 border-t ${themeStyles.border.primary}`}>
                  <button
                    onClick={toggleTheme}
                    className={`flex items-center gap-2 py-2 px-3 rounded-lg w-full transition-all ${themeStyles.button.ghost}`}
                  >
                    {isDark ? (
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

export default Navbar;