/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from 'react';
import { useTheme } from '../../Context/ThemeContext';
import CanvasDots from '../../components/canvas';
import Wisdom from '../../../public/assets/dark-Wisdom.png';
import DarkWisdom from '../../../public/assets/White-Wisdom.png';
import Knowledge from '../../../public/assets/Prompt-pray.png';
import Arrow from '../../../public/assets/Arrow logo.png';
import Image from 'next/image';

const Slide = ({ isActive, children }) => (
    <div className="absolute w-full md:h-screen overflow-hidden">
        <div
            className={`w-full h-full flex justify-center md:items-center px-4 transition-all duration-700 ease-in-out absolute top-0 left-0 ${
                isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
            }`}>
            {children}
        </div>
    </div>
);

const DataandAiVarticalSlider = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const { theme } = useTheme();
    const [direction, setDirection] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
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

    const slides = [
        {
            id: '1',
            title: 'DataandAi-page-section-slide-1',
            content: (
                <>
                    <section className="w-full relative md:h-[760px] sm:h-[550px] flex justify-center p-0 m-0 overflow-hidden">
                        <div className="flex justify-center items-center flex-col gap-9 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto pb-8 md:pb-12 lg:pb-16">
                            <div className="text-center px-4 sm:px-6 md:px-8">
                                <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight ${
                                    isDarkMode ? "text-white" : "text-[#374151]"
                                }`}>
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="flex flex-col whitespace-normal md:whitespace-nowrap items-center justify-center">
                                            <span className="flex flex-col md:flex-row items-center gap-2">
                                                <span className="text-center">Power AI Adoption and</span>
                                                <span className="relative mx-1">
                                                    <span className="relative z-10 text-[#FF512F] dark:text-[#FF512F]">Deliver Reliable</span>
                                                    <svg
                                                        className="absolute -bottom-2 left-0 w-full"
                                                        height="10"
                                                        viewBox="0 0 100 10"
                                                        preserveAspectRatio="none">
                                                        <path
                                                            d="M0 5c30-5 70-5 100 0"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            fill="none"
                                                            className="text-[#FF512F] dark:text-[#FF512F] transition-all duration-300"
                                                        />
                                                    </svg>
                                                </span>
                                            </span>
                                            <span className="inline-flex items-center text-center">Business Outcomes with Trusted Data</span>
                                        </div>
                                    </div>
                                </h1>
                            </div>

                            <div className="mx-4 text-base md:text-lg font-medium text-center">
                                <p className={`flex flex-wrap justify-center w-full ${
                                    isDarkMode ? "text-gray-100" : "text-gray-800"
                                }`}>
                                    ReKnew helps enterprises build a trusted, modern data foundation that drives consistency, quality, and scalability
                                    <br className="hidden md:block" /> - enabling faster, more effective adoption of AI and agentic platforms
                                </p>
                            </div>
                        </div>
                    </section>
                </>
            )
        },
        {
            id: '2',
            title: 'DataandAi-page-section-slide-2',
            content: (
                <>
                    <div className="flex md:min-h-screen md:py-[50px] flex-col">
                        <header className="mb-8 text-center px-4 md:px-6 max-w-7xl mx-auto">
                            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-[120%] tracking-[0] pt-8 md:pt-12 ${
                                isDarkMode ? "text-white" : "text-[#374151]"
                            }`}>
                                Gain
                                <span className="relative inline-block">
                                    <span className="relative z-10 text-[#FF512F] dark:text-[#FF512F] px-2">Wisdom</span>
                                    <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5c30-6 70-5 100 0" stroke="#FF512F" strokeWidth="2" fill="none" className="transition-all duration-300" />
                                    </svg>
                                </span>{' '}
                                Through
                                <span className="relative inline-block">
                                    <span className="relative z-10 text-[#FF512F] dark:text-[#FF512F] px-2">Contextualized Data</span>
                                    <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5c30-6 70-5 100 0" stroke="#FF512F" strokeWidth="2" fill="none" className="transition-all duration-300" />
                                    </svg>
                                </span>
                            </h2>
                        </header>
                        <div className="flex justify-center px-4 md:px-6">
                            <Image draggable="false" src={theme === 'dark' ? Wisdom : DarkWisdom} alt="ReKnew logo" className="w-full md:w-full lg:w-[80%]" />
                        </div>
                    </div>
                </>
            )
        },
        {
            id: '3',
            title: 'DataandAi-page-section-slide-3',
            content: (
                <>
                    <div className="flex md:min-h-screen flex-col">
                        <header className="mb-8 text-center px-4 md:px-6 max-w-7xl mx-auto">
                            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-[120%] tracking-[0] pt-8 md:pt-12 ${
                                isDarkMode ? "text-white" : "text-[#374151]"
                            }`}>
                                The Key to
                                <span className="relative inline-block">
                                    <span className="relative z-10 text-[#FF512F] dark:text-[#FF512F] px-2">Unlocking Enterprise</span>
                                    <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5c30-6 70-5 100 0" stroke="#FF512F" strokeWidth="2" fill="none" className="transition-all duration-300" />
                                    </svg>
                                </span>
                                Knowledge
                            </h2>
                            <p className={`mx-4 mt-[36px] text-base md:text-lg font-medium text-center ${
                                isDarkMode ? "text-gray-100" : "text-gray-800"
                            }`}>
                                ReKnew&apos;s approach delivers the rich contextual understanding needed for Enterprise Gen AI <br />
                                to overcome data limitations and achieve its full potential
                            </p>
                        </header>
                        <div className="flex justify-center px-4 md:px-6">
                            <Image draggable="false" src={Knowledge} alt="ReKnew logo" className="w-[80%] mt-5 ml-10 md:w-[80%] lg:w-[60%]" />
                        </div>
                    </div>
                </>
            )
        }
    ];

    const nextSlide = () => {
        setDirection(1);
        setActiveSlide((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setActiveSlide((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowDown') {
                nextSlide();
            } else if (e.key === 'ArrowUp') {
                prevSlide();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeSlide]);

    // Handle touch events for swipe navigation
    const handleTouchStart = (e) => {
        setTouchStart(e.touches[0].clientY);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.touches[0].clientY);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 90) {
            nextSlide();
        } else if (touchEnd - touchStart > 90) {
            prevSlide();
        }
    };

    return (
        <div className=" md:min-h-screen max-w-7xl overflow-x-hidden">
            {!isMobile ? (
                <>
                    {/* Desktop/Tablet Slider View */}
                    {slides.map((slide, index) => (
                        <Slide key={slide.id} isActive={activeSlide === index}>
                            {slide.content}
                        </Slide>
                    ))}

                    <div className="hidden sm:block">
                        <CanvasDots />
                    </div>

                    <div className="hidden md:flex">
                        <button
                            onClick={prevSlide}
                            className={`absolute left-4 md:left-[10%] md:top-[75%] lg:left-[5%] xl:left-[5%] top-[95%] xxl:left-[6.5%] lg:top-[55%] transform -translate-y-1/2 size-14 flex justify-center items-center z-20 shadow-lg transition-all duration-300 border-2 border-[#FF512F] p-3 rounded-full group ${
                                isDarkMode ? "text-white bg-gray-800" : "text-black bg-white/80"
                            }`}
                            aria-label="Previous Slide">
                            <div className="flex items-center justify-center w-full h-full">
                                <Image
                                    src={Arrow}
                                    alt="Previous"
                                    className="rotate-[210deg] w-[67.5%] left-3 top-[10px] absolute object-contain"
                                    loading="lazy"
                                />
                            </div>
                        </button>

                        <button
                            onClick={nextSlide}
                            className={`absolute right-4 top-[95%] md:top-[75%] md:right-[10%] xl:right-[5%] xxl:right-[6.5%] lg:right-[5%] lg:top-[55%] transform -translate-y-1/2 size-14 flex justify-center items-center z-20 shadow-lg transition-all duration-300 border-2 border-[#FF512F] p-3 rounded-full group ${
                                isDarkMode ? "text-white bg-gray-800" : "text-black bg-white/80"
                            }`}
                            aria-label="Next Slide">
                            <div className="flex items-center justify-center w-full h-full">
                                <Image src={Arrow} alt="Next" className="rotate-[28deg] w-[67.5%] right-3 top-[16px] absolute object-contain" loading="lazy" />
                            </div>
                        </button>
                    </div>
                </>
            ) : (
                /* Mobile View - Sequential Display */
                <div className="flex flex-col space-y-6 py-6 mb-10">
                    {slides.map((slide) => (
                        <div key={slide.id} className="py-[50px] md:min-h-screen">
                            {slide.content}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DataandAiVarticalSlider;
