"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';

const FoundersExperience = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Listen for theme changes from navbar
    useEffect(() => {
        const checkTheme = () => {
            const isDark = document.documentElement.classList.contains('dark') || 
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
            attributeFilter: ['class']
        });

        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ['class']
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

    // Define company logos array with online URLs
    const companyLogos = [
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Logo_of_JPMorganChase_2024.svg/2880px-Logo_of_JPMorganChase_2024.svg.png'.trim(),
            alt: 'JP Morgan Chase Logo'
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Citi.svg/1920px-Citi.svg.png',
            alt: 'Citi Logo'
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/USAA_logo.svg/1024px-USAA_logo.svg.png',
            alt: 'USAA Logo'
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/KPMG_logo.svg',
            alt: 'KPMG Logo'
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/2880px-Accenture.svg.png'.trim(),
            alt: 'KPMG Logo'
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Bank_of_America_1998.svg/1920px-Bank_of_America_1998.svg.png',
            alt: 'Bank of America Logo'
        },
        // Added Coca Cola logo
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/2560px-Coca-Cola_logo.svg.png',
            alt: 'Coca Cola Logo'
        },
        // Added Georgia Pacific logo
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Georgia-Pacific_logo.svg/1920px-Georgia-Pacific_logo.svg.png',
            alt: 'Georgia Pacific Logo'
        }
    ];

    return (
        <section className="py-20 overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${isDarkMode ? 'text-gray-100' : 'text-[#374151]'}`}>
                        Built by
                        <span className="relative inline-block mx-2">
                            <span className={`relative z-10 ${isDarkMode ? 'text-[#FF512F]' : 'text-[#FF512F]'}`}>Founders</span>
                            <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path
                                    d="M0 5c30-5 70-5 100 0"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    className={`${isDarkMode ? 'text-[#FF512F]' : 'text-[#FF512F]'} transition-all duration-300`}
                                />
                            </svg>
                        </span>
                        with Decades of <br />Experience From Large Enterprises
                    </h2>
                </div>

                {/* Company Logos */}
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-10 xl:gap-[46px] py-4">
                    {companyLogos.map((logo, index) => (
                        <div
                            key={index}
                            className={`w-32 md:w-28 h-16 md:h-20 lg:h-24 flex items-center justify-center p-4 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md
                                ${isDarkMode ? 'bg-white/90' : 'bg-white/90'}`}>
                            <Image
                            width={120}
                            height={40}
                                src={logo.src}
                                alt={logo.alt}
                                className="max-w-full max-h-full object-cover filter hover:grayscale-0 transition-all duration-500"
                                draggable="false"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FoundersExperience;
