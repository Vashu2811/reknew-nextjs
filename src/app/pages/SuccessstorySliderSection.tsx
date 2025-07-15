"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Arrow from '../../../public/assets/Arrow logo.png';
import SuccessStoryOne from './Successstory/SuccessStoryone';
import SuccessStoryTwo from './Successstory/SuccessStorytwo';
import SuccessStoryThree from './Successstory/SuccessStorythree';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Image from 'next/image';

const Slide = ({ isActive, children }) => (
    <div
        className={`transition-all duration-700 ease-in-out ${
            isActive ? 'opacity-100 z-10' : 'opacity-0 absolute top-0 left-0 right-0 pointer-events-none z-0'
        }`}
        style={{
            transform: isActive ? 'translateX(0)' : 'translateX(100%)'
        }}>
        {children}
    </div>
);

const SuccessstorySliderSection = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [direction, setDirection] = useState(0);
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
        { id: '1', title: 'Real-Time Engagement', content: <SuccessStoryOne /> },
        { id: '2', title: 'Scaled Impact', content: <SuccessStoryTwo /> },
        { id: '3', title: 'Customer Experience', content: <SuccessStoryThree /> }
    ];

    const handleSlideChange = (index) => {
        setActiveSlide(index); // assuming you're using useState
    };

    const nextSlide = () => {
        setDirection(1);
        setActiveSlide((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setActiveSlide((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') nextSlide();
            else if (e.key === 'ArrowLeft') prevSlide();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeSlide, isAnimating]);

    // Auto-slide
    // useEffect(() => {
    //     if (!autoSlide) return;

    //     const interval = setInterval(() => {
    //         if (!isAnimating) {
    //             nextSlide();
    //         }
    //     }, 8000); // Increased time to allow users to read content

    //     return () => clearInterval(interval);
    // }, [activeSlide]);

    // Pause auto-slide when mouse enters container

    return (
        <div className="relative w-full overflow-hidden py-2">
            <div className="container mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-4 sm:mb-8 pt-6 sm:pt-10 px-4">
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 ${isDarkMode ? 'text-white' : 'text-[#374151]'}`}>Success Stories</h2>
                    </motion.div>
                </div>

                {/* Tab Navigation - Improved for mobile */}
                <div className="max-w-7xl mx-auto mb-6 sm:mb-8">
                    <div className="flex flex-col md:flex-row justify-center gap-2 px-4">
                        {slides.map((slide, index) => (
                            <button
                                key={slide.id}
                                onClick={() => handleSlideChange(index)}
                                className={`px-3 py-2 sm:py-2.5 rounded-lg transition-all duration-300 whitespace-normal md:whitespace-nowrap text-sm md:text-base flex-grow md:flex-grow-0 mb-2 md:mb-0 ${
                                    activeSlide === index
                                        ? 'bg-[#FF512F] text-white shadow-md'
                                        : `${isDarkMode ? 'bg-slate-800/70 text-gray-300' : 'bg-white/70 text-gray-700'} hover:bg-[#FF512F]/10`
                                }`}>
                                <span className="text-base md:text-lg">{slide.title}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Slider Container */}
                <div className="relative mx-auto">
                    {/* Slides Container - Proper height management */}
                    <div className="relative min-h-[500px] md:min-h-[550px]">
                        {slides.map((slide, index) => (
                            <Slide key={slide.id} isActive={activeSlide === index}>
                                <div className="pb-16 md:pb-4">{slide.content}</div>
                            </Slide>
                        ))}
                    </div>
                </div>

                {/* Navigation buttons - Responsive positioning */}
                <div className="flex justify-center space-x-4 mt-4 md:mt-0">
                    <button
                        onClick={prevSlide}
                        className={`absolute left-4 md:left-6 lg:left-8 bottom-4 md:bottom-auto md:top-1/2 xl:top-[60%] transform md:-translate-y-1/2 
                        size-10 md:size-14 flex justify-center items-center z-20 
                        shadow-lg transition-all duration-300 border-2 border-[#FF512F] 
                        p-2 md:p-3 rounded-full hover:bg-white group
                        ${isDarkMode ? 'text-white bg-gray-800' : 'text-black bg-white/80'}`}
                        aria-label="Previous Slide">
                        <div className="flex items-center justify-center w-full h-full">
                            <Image src={Arrow} alt="Previous" className="rotate-[210deg] w-[67.5%] left-2 top-[9px] absolute object-contain" loading="lazy" />
                        </div>
                    </button>

                    <button
                        onClick={nextSlide}
                        className={`absolute right-4 md:right-6 lg:right-8 bottom-4 md:bottom-auto md:top-1/2 xl:top-[60%] transform md:-translate-y-1/2
                        size-10 md:size-14 flex justify-center items-center z-20 
                        shadow-lg transition-all duration-300 border-2 border-[#FF512F] 
                        p-2 md:p-3 rounded-full hover:bg-white group
                        ${isDarkMode ? 'text-white bg-gray-800' : 'text-black bg-white/80'}`}
                        aria-label="Next Slide">
                        <div className="flex items-center justify-center w-full h-full">
                            <Image src={Arrow} alt="Next" className="rotate-[28deg] w-[67.5%] right-2 top-[13px] absolute object-contain" loading="lazy" />
                        </div>
                    </button>
                </div>

                {/* Pagination Dots - For Mobile */}
                <div className="flex justify-center space-x-2 mt-2 md:hidden pb-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleSlideChange(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                activeSlide === index ? 'bg-[#FF512F] w-2.5' : `${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'}`
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SuccessstorySliderSection;
