import { useState, useEffect } from 'react';
import { useTheme } from '../Context/ThemeContext';

export const useThemeStyles = () => {
  const { theme, mounted } = useTheme();
  const [currentTheme, setCurrentTheme] = useState('light');

  useEffect(() => {
    if (mounted && theme) {
      setCurrentTheme(theme);
      const html = document.documentElement;
      const body = document.body;
      
      if (theme === 'dark') {
        html.classList.add('dark');
        body.classList.add('dark');
        html.style.colorScheme = 'dark';
      } else {
        html.classList.remove('dark');
        body.classList.remove('dark');
        html.style.colorScheme = 'light';
      }
    }
  }, [theme, mounted]);

  const isDark = currentTheme === 'dark';

  // Common theme-based styles
  const themeStyles = {
    // Background styles
    bg: {
      primary: isDark ? 'transparent' : 'transparent',
      secondary: isDark ? 'bg-gray-800' : 'bg-gray-50',
      card: isDark ? 'bg-gray-800' : 'bg-white',
      hover: isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100',
    },
    
    // Text styles
    text: {
      primary: isDark ? 'text-gray-100' : 'text-gray-900',
      secondary: isDark ? 'text-gray-300' : 'text-gray-600',
      muted: isDark ? 'text-gray-400' : 'text-gray-500',
      accent: 'text-[#FF512F]',
    },
    
    // Border styles
    border: {
      primary: isDark ? 'border-gray-700' : 'border-gray-200',
      accent: 'border-orange-500/20',
    },
    
    // Button styles
    button: {
      primary: isDark 
        ? 'bg-[#FF512F] text-white hover:bg-[#FF512F]/90' 
        : 'bg-[#FF512F] text-white hover:bg-[#FF512F]/90',
      secondary: isDark 
        ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' 
        : 'bg-gray-200 text-gray-800 hover:bg-gray-300',
      ghost: isDark 
        ? 'text-gray-300 hover:bg-gray-800 hover:text-orange-400' 
        : 'text-gray-600 hover:bg-gray-100 hover:text-orange-500',
    }
  };

  return {
    isDark,
    currentTheme,
    mounted,
    themeStyles
  };
};
