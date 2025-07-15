"use client";
import React from 'react';
import { useState, useEffect } from 'react';

const HeadquartersHeader = () => {
   const [isDarkMode, setIsDarkMode] = useState(false);
  
      useEffect(() => {
          const checkTheme = () => {
              const isDark =
                  document.documentElement.classList.contains('dark') ||
                  document.body.classList.contains('dark') ||
                  localStorage.getItem('theme') === 'dark';
              setIsDarkMode(isDark);
          };
  
          checkTheme();
  
          const observer = new MutationObserver((mutations) => {
              mutations.forEach((mutation) => {
                  if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                      checkTheme();
                  }
              });
          });
  
          observer.observe(document.documentElement, {
              attributes: true,
              attributeFilter: ['class'],
          });
  
          observer.observe(document.body, {
              attributes: true,
              attributeFilter: ['class'],
          });
  
          const handleStorageChange = (e) => {
              if (e.key === 'theme') {
                  checkTheme();
              }
          };
  
          window.addEventListener('storage', handleStorageChange);
          window.addEventListener('themeChanged', checkTheme);
  
          return () => {
              observer.disconnect();
              window.removeEventListener('storage', handleStorageChange);
              window.removeEventListener('themeChanged', checkTheme);
          };
      }, []);
  return (
    <div className={`relative`}>
      <div className="container mx-auto px-6 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${isDarkMode ? " text-white" : " text-gray-900"}`}>
            Visit Our
            <span className="relative inline-block">
              <span className="relative z-10 text-[#FF512F] px-2">Headquarters</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path
                  d="M0 5c30-5 70-5 100 0"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-[#FF512F] dark:text-[#FF512F] transition-all duration-300"
                />
              </svg>
            </span>
          </h1>
          <p className={`text-base md:text-lg${isDarkMode ? " text-gray-300" : " text-gray-600"}`}>Reach out to start a conversation</p>
        </div>
      </div>
    </div>
  );
};

export default HeadquartersHeader;
