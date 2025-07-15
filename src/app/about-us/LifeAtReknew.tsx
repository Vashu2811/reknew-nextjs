/* eslint-disable @next/next/no-img-element */
'use client';
import CanvasDots from '../../components/canvas';
import { useEffect, useState } from 'react';

const LifeAtReknew = () => {
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
        <>
            <div className="hidden sm:block">
                <CanvasDots />
            </div>
            <section className={`py-32 relative overflow-hidden`}>
                {/* Background decoration */}
                <div className="container mx-auto px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6${isDarkMode ? " text-white" : " text-gray-900"}`}>
                                Life at
                                <span className="relative inline-block mx-2">
                                    <span className="relative z-10 text-[#FF512F]">ReKnew</span>
                                    <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5c30-5 70-5 100 0" stroke="#FF512F" strokeWidth="2" fill="none" className="transition-all duration-300" />
                                    </svg>
                                </span>
                            </h2>

                            <p className={`text-base md:text-lg max-w-3xl mx-auto${isDarkMode ? " text-gray-400" : " text-gray-600"}`}>
                                ReKnew provides an environment where talented professionals can grow, collaborate, and contribute meaningful work.
                            </p>
                        </div>

                        {/* Life at ReKnew Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Benefits */}
                            <div className={`bg-gradient-to-br rounded-2xl overflow-hidden border border-[#FF512F]/20 shadow-lg hover:shadow-xl transition-all duration-300${isDarkMode ? " from-gray-800 to-gray-900" : " from-white to-gray-50"}`}>
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                        alt="Team collaborating"
                                        className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <h3 className="absolute bottom-4 left-6 text-lg font-bold text-white">Competitive Benefits</h3>
                                </div>
                                <div className="p-6">
                                    <ul className={`space-y-2${isDarkMode ? " text-gray-300" : " text-gray-600"}`}>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#FF512F] text-2xl mt-0">•</span>
                                            <span className="text-base">Competitive salary with equity options</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#FF512F] text-2xl mt-0">•</span>
                                            <span className="text-base">Comprehensive health insurance with dental and vision</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#FF512F] text-2xl mt-0">•</span>
                                            <span className="text-base">Generous paid time off and parental leave policies</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Culture */}
                            <div className={`bg-gradient-to-br rounded-2xl overflow-hidden border border-[#FF512F]/20 shadow-lg hover:shadow-xl transition-all duration-300${isDarkMode ? " from-gray-800 to-gray-900" : " from-white to-gray-50"}`}>
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                        alt="Company culture"
                                        className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <h3 className="absolute bottom-4 left-6 text-lg font-bold text-white">Vibrant Culture</h3>
                                </div>
                                <div className="p-6">
                                    <ul className={`space-y-2${isDarkMode ? " text-gray-300" : " text-gray-600"}`}>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#FF512F] text-2xl mt-0">•</span>
                                            <span className="text-base">Innovation-focused environment where ideas thrive</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#FF512F] text-2xl mt-0">•</span>
                                            <span className="text-base">Regular team-building events and celebrations</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#FF512F] text-2xl mt-0">•</span>
                                            <span className="text-base">Transparent leadership and open communication</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Diversity and Inclusion */}
                            <div className={`bg-gradient-to-br rounded-2xl overflow-hidden border border-[#FF512F]/20 shadow-lg hover:shadow-xl transition-all duration-300${isDarkMode ? " from-gray-800 to-gray-900" : " from-white to-gray-50"}`}>
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                        alt="Diverse team"
                                        className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <h3 className="absolute bottom-4 left-6 text-lg font-bold text-white">Diversity & Inclusion</h3>
                                </div>
                                <div className="p-6">
                                    <ul className={`space-y-2${isDarkMode ? " text-gray-300" : " text-gray-600"}`}>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#FF512F] text-2xl mt-0">•</span>
                                            <span className="text-base">Commitment to building diverse teams and inclusive workplace</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#FF512F] text-2xl mt-0">•</span>
                                            <span className="text-base">Employee resource groups and diversity initiatives</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#FF512F] text-2xl mt-0">•</span>
                                            <span className="text-base">Equal opportunity employment and fair practices</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Flexible Work */}
                            <div className={`bg-gradient-to-br rounded-2xl overflow-hidden border border-[#FF512F]/20 shadow-lg hover:shadow-xl transition-all duration-300${isDarkMode ? " from-gray-800 to-gray-900" : " from-white to-gray-50"}`}>
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                        alt="Remote work"
                                        className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <h3 className="absolute bottom-4 left-6 text-lg font-bold text-white">Flexible Work</h3>
                                </div>
                                <div className="p-6">
                                    <ul className={`space-y-2${isDarkMode ? " text-gray-300" : " text-gray-600"}`}>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#FF512F] text-2xl mt-0">•</span>
                                            <span className="text-base">
                                                Flexible work culture so you can take ownership and deliver results and bring the best version of our teams
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#FF512F] text-2xl mt-0">•</span>
                                            <span className="text-base">Results-oriented culture that values output over hours</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#FF512F] text-2xl mt-0">•</span>
                                            <span className="text-base">Quarterly in-person team retreats for collaboration</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Personal Development */}
                            <div className={`bg-gradient-to-br rounded-2xl overflow-hidden border border-[#FF512F]/20 shadow-lg hover:shadow-xl transition-all duration-300${isDarkMode ? " from-gray-800 to-gray-900" : " from-white to-gray-50"}`}>
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                        alt="Learning and development"
                                        className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <h3 className="absolute bottom-4 left-6 text-lg font-bold text-white">Personal Development</h3>
                                </div>
                                <div className="p-6">
                                    <ul className={`space-y-2${isDarkMode ? " text-gray-300" : " text-gray-600"}`}>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#FF512F] text-2xl mt-0">•</span>
                                            <span className="text-base">Mentorship programs and career path guidance</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#FF512F] text-2xl mt-0">•</span>
                                            <span className="text-base">Conference attendance and speaking opportunities</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Health and Wellness */}
                            <div className={`bg-gradient-to-br rounded-2xl overflow-hidden border border-[#FF512F]/20 shadow-lg hover:shadow-xl transition-all duration-300${isDarkMode ? " from-gray-800 to-gray-900" : " from-white to-gray-50"}`}>
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                        alt="Wellness"
                                        className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <h3 className="absolute bottom-4 left-6 text-lg font-bold text-white">Health & Wellness</h3>
                                </div>
                                <div className="p-6">
                                    <ul className={`space-y-2${isDarkMode ? " text-gray-300" : " text-gray-600"}`}>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#FF512F] text-2xl mt-0">•</span>
                                            <span className="text-base">Monthly wellness stipend for fitness and mental health</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#FF512F] text-2xl mt-0">•</span>
                                            <span className="text-base">Mental health days and access to wellness resources</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LifeAtReknew;
