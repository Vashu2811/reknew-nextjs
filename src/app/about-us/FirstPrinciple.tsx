/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from 'react';
import CanvasDots from '../../components/canvas';

const FirstPrinciple = () => {
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

            {/* First Principles Section */}
            <section className="px-4 md:px-8 pt-16 md:pt-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-4">
                            <span className={isDarkMode ? "text-white" : "text-[#374151]"}>Our</span>
                            <span className="relative inline-block mx-3">
                                <span className="relative z-10 text-[#FF512F]">First Principles</span>
                                <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5c30-5 70-5 100 0" stroke="#FF512F" strokeWidth="2" fill="none" className="transition-all duration-300" />
                                </svg>
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                        {/* People-First Leadership */}
                        <div className={`rounded-2xl p-4 md:p-8 border border-[#FF512F]/20 shadow-xl hover:shadow-2xl transition duration-300 relative overflow-hidden group ${
                            isDarkMode 
                                ? "bg-gradient-to-br from-gray-800 to-gray-900" 
                                : "bg-gradient-to-br from-white to-gray-50"
                        }`}>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FF512F]/5 to-[#FF8A63]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {/* Content wrapper with padding to prevent overlap */}
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 md:gap-4 mb-3 md:mb-6">
                                    <div className="bg-gradient-to-br from-[#FF512F]/20 to-[#FF8A63]/20 p-2 md:p-3 rounded-xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-[#FF512F]" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h4 className={`text-lg md:text-xl font-semibold ${
                                        isDarkMode ? "text-gray-100" : "text-[#374151]"
                                    }`}>People-First Leadership</h4>
                                </div>

                                <div className="w-full bg-gradient-to-r from-[#FF512F]/20 to-[#FF8A63]/20 mb-3 md:mb-6 h-[2px]" />

                                {/* Two column layout for content and image */}
                                <div className="flex flex-col md:flex-row gap-3 md:gap-6">
                                    <div className="flex-1">
                                        <p className={`text-base md:text-lg pl-2 mb-2 md:mb-4 ${
                                            isDarkMode ? "text-gray-400" : "text-gray-600"
                                        }`}>
                                            Our leadership team is grounded in a deep commitment to the well-being of our employees, customers, and the
                                            communities we serve. We foster a culture built on empathy, respect, and long-term impact.
                                        </p>
                                    </div>

                                    {/* Static image container without hover effects */}
                                    <div
                                        className="w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden flex-shrink-0 
                                        border-2 border-[#FF512F]/20
                                        shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                                        <div className="w-full h-full relative overflow-hidden">
                                            <img
                                                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                                alt="People-First Leadership"
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF512F]/10 to-[#FF8A63]/10 mix-blend-multiply opacity-50"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Entrepreneurial Execution */}
                        <div className={`rounded-2xl p-4 md:p-8 border border-[#FF512F]/20 shadow-xl hover:shadow-2xl transition duration-300 relative overflow-hidden group ${
                            isDarkMode 
                                ? "bg-gradient-to-br from-gray-800 to-gray-900" 
                                : "bg-gradient-to-br from-white to-gray-50"
                        }`}>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FF512F]/5 to-[#FF8A63]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {/* Content wrapper with padding to prevent overlap */}
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 md:gap-4 mb-3 md:mb-6">
                                    <div className="bg-gradient-to-br from-[#FF512F]/20 to-[#FF8A63]/20 p-2 md:p-3 rounded-xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-[#FF512F]" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fillRule="evenodd"
                                                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                                                clipRule="evenodd"
                                            />
                                            </svg>
                                    </div>
                                    <h4 className={`text-lg md:text-xl font-semibold ${
                                        isDarkMode ? "text-gray-100" : "text-[#374151]"
                                    }`}>Entrepreneurial Execution</h4>
                                </div>

                                <div className="w-full bg-gradient-to-r from-[#FF512F]/20 to-[#FF8A63]/20 mb-3 md:mb-6 h-[2px]" />

                                <div className="flex flex-col md:flex-row gap-3 md:gap-6">
                                    <div className="flex-1">
                                        <p className={`text-base md:text-lg pl- mb-2 md:mb-4 ${
                                            isDarkMode ? "text-gray-400" : "text-gray-600"
                                        }`}>
                                            We operate with a founder&apos;s mindset - agile, accountable, and driven to solve real-world problems. Our global teams
                                            are focused on delivering meaningful customer value and impactful careers for employees.
                                        </p>
                                    </div>

                                    <div
                                        className="w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden flex-shrink-0 
                                        border-2 border-[#FF512F]/20
                                        shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                                        <div className="w-full h-full relative overflow-hidden">
                                            <img
                                                src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                                alt="Entrepreneurial Execution"
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF512F]/10 to-[#FF8A63]/10 mix-blend-multiply opacity-50"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Integrity in Action */}
                        <div className={`rounded-2xl p-4 md:p-8 border border-[#FF512F]/20 transition duration-300 relative overflow-hidden group ${
                            isDarkMode 
                                ? "bg-gradient-to-br from-gray-800 to-gray-900" 
                                : "bg-gradient-to-br from-white to-gray-50"
                        }`}>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FF512F]/5 to-[#FF8A63]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-2 md:gap-4 mb-3 md:mb-6">
                                    <div className="bg-gradient-to-br from-[#FF512F]/20 to-[#FF8A63]/20 p-2 md:p-3 rounded-xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-[#FF512F]" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fillRule="evenodd"
                                                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <h4 className={`text-lg md:text-xl font-semibold ${
                                        isDarkMode ? "text-gray-100" : "text-[#374151]"
                                    }`}>Integrity in Action</h4>
                                </div>

                                <div className="w-full bg-gradient-to-r from-[#FF512F]/20 to-[#FF8A63]/20 mb-3 md:mb-6 h-[2px]" />

                                <div className="flex flex-col md:flex-row gap-3 md:gap-6">
                                    <div className="flex-1">
                                        <p className={`text-base md:text-lg pl-2 mb-2 md:mb-4 ${
                                            isDarkMode ? "text-gray-400" : "text-gray-600"
                                        }`}>
                                            We hold ourselves to the highest ethical standards. Trust is the foundation of everything we do - internally and
                                            externally. We believe in transparency, accountability, and doing what&apos;s right, even when it&apos;s not easy.
                                        </p>
                                    </div>

                                    <div
                                        className="w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden flex-shrink-0 
                                        border-2 border-[#FF512F]/20
                                        shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                                        <div className="w-full h-full relative overflow-hidden">
                                            <img
                                                src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                                alt="Integrity in Action"
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF512F]/10 to-[#FF8A63]/10 mix-blend-multiply opacity-50"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Excellence Through Collaboration */}
                        <div className={`rounded-2xl p-4 md:p-8 border border-[#FF512F]/20 transition duration-300 relative overflow-hidden group ${
                            isDarkMode 
                                ? "bg-gradient-to-br from-gray-800 to-gray-900" 
                                : "bg-gradient-to-br from-white to-gray-50"
                        }`}>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FF512F]/5 to-[#FF8A63]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-2 md:gap-4 mb-3 md:mb-6">
                                    <div className="bg-gradient-to-br from-[#FF512F]/20 to-[#FF8A63]/20 p-2 md:p-3 rounded-xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-[#FF512F]" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                        </svg>
                                    </div>
                                    <h4 className={`text-lg md:text-xl font-semibold ${
                                        isDarkMode ? "text-gray-100" : "text-[#374151]"
                                    }`}>Excellence through Collaboration</h4>
                                </div>

                                <div className="w-full bg-gradient-to-r from-[#FF512F]/20 to-[#FF8A63]/20 mb-3 md:mb-6 h-[2px]" />

                                <div className="flex flex-col md:flex-row gap-3 md:gap-6">
                                    <div className="flex-1">
                                        <p className={`text-base md:text-lg pl-2 mb-2 md:mb-4 ${
                                            isDarkMode ? "text-gray-400" : "text-gray-600"
                                        }`}>
                                            We collaborate with our customers in building cutting edge solutions. Our diverse, high-performing teams thrive on
                                            open communication, shared goals, and a relentless pursuit of operational excellence.
                                        </p>
                                    </div>

                                    <div
                                        className="w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden flex-shrink-0 
                                        border-2 border-[#FF512F]/20
                                        shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                                        <div className="w-full h-full relative overflow-hidden">
                                            <img
                                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                                alt="Excellence Through Collaboration"
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF512F]/10 to-[#FF8A63]/10 mix-blend-multiply opacity-50"></div>
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

export default FirstPrinciple;
