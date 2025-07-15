"use client";
import { useState, useEffect } from 'react';
import CanvasDots from '../../components/canvas';
import { RiChatQuoteLine } from 'react-icons/ri';
import muraliSajja from '../../../public/assets/MurliSir.jpg';
import Image from 'next/image';

const MessageFromCEO = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Listen for theme changes
    useEffect(() => {
        const checkTheme = () => {
            const isDark =
                document.documentElement.classList.contains("dark") ||
                document.body.classList.contains("dark") ||
                localStorage.getItem("theme") === "dark";
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

        window.addEventListener("storage", handleStorageChange);
        window.addEventListener("themeChanged", checkTheme);

        return () => {
            observer.disconnect();
            window.removeEventListener("storage", handleStorageChange);
            window.removeEventListener("themeChanged", checkTheme);
        };
    }, []);

    return (
        <>
        <div className="hidden sm:block">
         <CanvasDots />
       </div>
        <section className="md:py-32 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="w-full h-full" />
            </div>

            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                            Message from Our
                            <span className="relative inline-block mx-2">
                                <span className="relative z-10 text-[#FF512F]">CEO</span>
                                <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5c30-5 70-5 100 0" stroke="#FF512F" strokeWidth="2" fill="none" className="transition-all duration-300" />
                                </svg>
                            </span>
                        </h2>
                    </div>

                    <div className={`rounded-2xl p-[32px] border border-[#FF512F]/20 shadow-xl relative overflow-hidden ${
                        isDarkMode 
                            ? "bg-gradient-to-br from-gray-800 to-gray-800/50" 
                            : "bg-gradient-to-br from-white to-gray-50"
                    }`}>
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FF512F] to-[#FF8A63]"></div>

                        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                            <div className="flex-shrink-0">
                                <div className="w-24 h-24 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#FF512F]/20 shadow-lg">
                                    <Image src={muraliSajja} alt="CEO" className="w-full h-full object-cover" />
                                </div>
                            </div>

                            <div className="flex-1">
                                <div className="mb-6">
                                    <RiChatQuoteLine className="w-10 h-10 text-[#FF512F]/30" />
                                </div>

                                <p className={`text-base md:text-lg leading-relaxed mb-6 ${
                                    isDarkMode ? "text-gray-300" : "text-gray-600"
                                }`}>
                                    We are committed to building an environment where every member of our team feels valued and empowered. We believe that
                                    diversity fuels innovation, and celebrating individuality is the key to achieving exceptional outcomes.
                                </p>

                                <p className={`text-base md:text-lg leading-relaxed ${
                                    isDarkMode ? "text-gray-300" : "text-gray-600"
                                }`}>
                                    At ReKnew, our greatest strength lies in our people - individuals like you, with your expertise, drive, and passion for
                                    creating true value and thrive in these transformative times.
                                </p>

                                <div className="mt-8">
                                    <div className="flex items-center">
                                        <div>
                                            <h4 className={`text-xl font-bold ${isDarkMode ? "text-gray-100" : "text-[#374151]"}`}>Murali Sajja</h4>
                                            <p className="text-[#FF512F]">CEO & Co Founder, ReKnew</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default MessageFromCEO;
