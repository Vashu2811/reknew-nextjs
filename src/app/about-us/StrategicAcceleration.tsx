'use client';
import { RiArrowRightDoubleLine } from 'react-icons/ri';
import { useEffect, useState } from 'react';

const StrategicAcceleration = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

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
        <section className={`py-32 relative overflow-hidden`}>
            {/* Background decoration */}

            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-[#374151]"}`}>
                            Core
                            <span className="relative inline-block mx-2">
                                <span className="relative z-10 text-[#FF512F]">Principles</span>
                                <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5c30-5 70-5 100 0" stroke="#FF512F" strokeWidth="2" fill="none" className="transition-all duration-300" />
                                </svg>
                            </span>
                            of Engagement
                        </h2>

                        <p className={`text-base md:text-lg max-w-3xl mx-auto${isDarkMode ? " text-gray-400" : " text-gray-600"}`}>
                            ReKnew&apos;s comprehensive approach ensures enterprises get both expert consultation and accountable implementation partnership for true
                            digital transformation.
                        </p>
                    </div>

                    {/* Engagement Models */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14">
                        {/* Strategy Consulting */}
                        <div className={`bg-gradient-to-br rounded-2xl p-8 border border-[#FF512F]/20 shadow-xl hover:shadow-2xl transition duration-300 relative overflow-hidden group${isDarkMode ? " from-gray-800 to-gray-900" : " from-white to-gray-50"}`}>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FF512F]/5 to-[#FF8A63]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="flex justify-start items-center gap-4 mb-6 relative">
                                <div className="bg-gradient-to-br from-[#FF512F]/20 to-[#FF8A63]/20 p-3 rounded-xl">
                                    <RiArrowRightDoubleLine className="text-[#FF512F] text-3xl" />
                                </div>
                                <h3 className={`text-xl md:text-2xl font-bold${isDarkMode ? " text-gray-100" : " text-[#374151]"}`}>Strategy Consulting</h3>
                            </div>

                            <div className="w-full bg-gradient-to-r from-[#FF512F]/20 to-[#FF8A63]/20 mb-6 h-[2px]" />

                            <ul className="space-y-5 text-left relative">
                                {[
                                    "ReKnew's senior practitioners help CXOs deliver significant business value through a pragmatic, faster, and more affordable management consulting model.",
                                    'Become a trusted partner and an extension of CXO teams, providing strategic roadmaps, targeted solutions, and actionable plans that prioritize rapid value delivery.',
                                    'Deliver strategic advisory services that identify high-impact digital transformation opportunities aligned with business objectives and market dynamics.'
                                ].map((item, idx) => (
                                    <li key={idx} className={`text-base md:text-lg leading-relaxed flex gap-3${isDarkMode ? " text-gray-400" : " text-gray-600"}`}>
                                        <span className="text-[#FF512F] text-2xl">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Solution Delivery */}
                        <div className={`bg-gradient-to-br rounded-2xl p-8 border border-[#FF512F]/20 shadow-xl hover:shadow-2xl transition duration-300 relative overflow-hidden group flex flex-col${isDarkMode ? " from-gray-800 to-gray-900" : " from-white to-gray-50"}`}>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FF512F]/5 to-[#FF8A63]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="flex items-center gap-4 mb-6 relative">
                                <div className="bg-gradient-to-br from-[#FF512F]/20 to-[#FF8A63]/20 p-3 rounded-xl">
                                    <RiArrowRightDoubleLine className="text-[#FF512F] text-3xl" />
                                </div>
                                <h3 className={`text-xl md:text-2xl font-bold${isDarkMode ? " text-gray-100" : " text-[#374151]"}`}>Solution Delivery</h3>
                            </div>

                            <div className="w-full bg-gradient-to-r from-[#FF512F]/20 to-[#FF8A63]/20 mb-6 h-[2px]" />

                            <ul className="space-y-5 text-left relative">
                                {[
                                    'A combination of SMEs and accelerators deliver faster data modernization and AI adoption programs for enterprise.',
                                    'Become trusted partners for mid-level managers who are responsible for delivering programs.',
                                    'Take ownership of end-to-end delivery. Compete with global service providers with speed of delivery and assuming full accountability.',
                                    "Train customers' teams on new tech stacks, models and operations."
                                ].map((item, idx) => (
                                    <li key={idx} className={`text-base md:text-lg leading-relaxed flex gap-3${isDarkMode ? " text-gray-400" : " text-gray-600"}`}>
                                        <span className="text-[#FF512F] text-2xl">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StrategicAcceleration;
