/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useEffect } from 'react';
import Arrow from '../../../public/assets/Arrow logo.png';
import FirstPrinciple from './FirstPrinciple';
import MessageFromCEO from './MessagefromourCEO';
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

const AboutUspageSlider = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [direction, setDirection] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Listen for theme changes from navbar
    useEffect(() => {
        const checkTheme = () => {
            const isDark =
                document.documentElement.classList.contains("dark") ||
                document.body.classList.contains("dark") ||
                localStorage.getItem("theme") === "dark" ||
                (localStorage.getItem("theme") === null && window.matchMedia("(prefers-color-scheme: dark)").matches);
            setIsDarkMode(isDark);
        };

        checkTheme();

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (
                    mutation.type === "attributes" &&
                    mutation.attributeName === "class"
                ) {
                    checkTheme();
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ["class"],
        });

        const handleStorageChange = (e) => {
            if (e.key === "theme") {
                checkTheme();
            }
        };

        const handleThemeChange = () => {
            checkTheme();
        };

        window.addEventListener("storage", handleStorageChange);
        window.addEventListener("themeChanged", handleThemeChange);
        document.addEventListener("themeChanged", handleThemeChange);

        return () => {
            observer.disconnect();
            window.removeEventListener("storage", handleStorageChange);
            window.removeEventListener("themeChanged", handleThemeChange);
            document.removeEventListener("themeChanged", handleThemeChange);
        };
    }, []);

    const slides = [
        { id: '1', title: 'From Reports to Real-Time Engagement', content: <FirstPrinciple /> },
        { id: '2', title: 'From Siloed to Scaled Impact', content: <MessageFromCEO /> }
    ];

    const handleSlideChange = (index) => {
        setActiveSlide(index);
    };

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setDirection(1);
        setActiveSlide((prevIndex) => (prevIndex + 1) % slides.length);
        setTimeout(() => setIsAnimating(false), 700);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setDirection(-1);
        setActiveSlide((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
        setTimeout(() => setIsAnimating(false), 700);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') nextSlide();
            else if (e.key === 'ArrowLeft') prevSlide();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeSlide, isAnimating]);

    // Indicator dots for mobile view
    const renderDots = () => (
        <div className="flex justify-center gap-2 mt-4 md:mt-6 mb-2">
            {slides.map((_, index) => (
                <button
                    key={index}
                    onClick={() => handleSlideChange(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        activeSlide === index ? 'bg-[#FF512F] scale-125' : 'bg-gray-300 dark:bg-gray-700'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
    );

    return (
        <div className="relative w-full overflow-hidden min-h-[500px] md:min-h-0">
            <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
                {/* Slider Container */}
                <div className="relative mx-auto hidden md:block">
                    {/* Slides Container - Proper height management */}
                    <div className="relative">
                        {slides.map((slide, index) => (
                            <Slide key={slide.id} isActive={activeSlide === index}>
                                <div className="pb-16 sm:pb-20 md:pb-8">{slide.content}</div>
                            </Slide>
                        ))}
                    </div>
                </div>

                {/* Mobile View: Display all slides */}
                <div className="md:hidden">
                    {slides.map((slide, index) => (
                        <div key={slide.id} className="pb-16 sm:pb-20 md:pb-8">
                            {slide.content}
                        </div>
                    ))}
                </div>

                {/* Navigation buttons - Responsive positioning */}
                <div className="navigation-controls hidden md:flex">
                    <button
                        onClick={prevSlide}
                        disabled={isAnimating}
                        className={`absolute left-4 md:left-6 lg:left-8 bottom-4 md:top-1/2 md:-translate-y-1/2 
                        w-10 h-10 md:w-12 md:h-12 xxl:-left-[5%] xl:left-[1%] flex justify-center items-center z-20 
                        shadow-lg transition-all duration-300 border-2 border-[#FF512F] dark:border-[#FF512F] 
                        rounded-full hover:scale-105 active:scale-95 group ${
                            isDarkMode 
                                ? 'text-white bg-gray-800 hover:bg-gray-700' 
                                : 'text-black bg-white hover:bg-gray-50'
                        }`}
                        aria-label="Previous Slide">
                        <div className="flex items-center justify-center w-full h-full relative">
                            <Image
                                src={Arrow}
                                alt="Previous"
                                className="rotate-[210deg] w-[67.5%] top-2 right-1 object-contain absolute"
                                loading="lazy"
                            />
                        </div>
                    </button>

                    <button
                        onClick={nextSlide}
                        disabled={isAnimating}
                        className={`absolute right-4 md:right-6 lg:right-8 bottom-4 xxl:-right-[5%] xl:right-[1%] md:top-1/2 md:-translate-y-1/2 
                        w-10 h-10 md:w-12 md:h-12 flex justify-center items-center z-20 
                        shadow-lg transition-all duration-300 border-2 border-[#FF512F] dark:border-[#FF512F] 
                        rounded-full hover:scale-105 active:scale-95 group ${
                            isDarkMode 
                                ? 'text-white bg-gray-800 hover:bg-gray-700' 
                                : 'text-black bg-white hover:bg-gray-50'
                        }`}
                        aria-label="Next Slide">
                        <div className="flex items-center justify-center w-full h-full relative">
                            <Image
                                src={Arrow}
                                alt="Next"
                                className="rotate-[28deg] w-[67.5%] bottom-2  left-[6px] object-contain absolute"
                                loading="lazy"
                            />
                        </div>
                    </button>
                </div>

                {/* Mobile slide indicators */}
                <div className="hidden">
                    {renderDots()}
                </div>

                {/* Current slide indicator for larger screens */}
                <div className="hidden justify-center mt-2  p-2 xl:p-4 gap-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleSlideChange(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                activeSlide === index ? 'bg-[#FF512F] scale-125' : 'bg-gray-300 dark:bg-gray-700'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutUspageSlider;
