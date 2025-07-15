import { ChevronRight } from 'lucide-react';
import HexagonWhite from '../../../public/assets/white-hexagon.png';
import HexagonBlack from '../../../public/assets/dark-hexagon.png';
import { useTheme } from '../../Context/ThemeContext';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ReknewSection = () => {
    const { theme } = useTheme();
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

    return (
        <div className={`relative flex flex-col overflow-x-hidden ${
            isDarkMode ? "text-white" : "text-[#374151]"
        }`}>
            <div className="relative py-24 lg:py-32">
                <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
                   
                    <div className="flex justify-center text-center items-center flex-wrap">
                        <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r max-w-5xl px-4 ${
                            isDarkMode ? "from-gray-100 to-gray-400" : "from-gray-800 to-gray-600"
                        }`}>
                            ReKnew
                            <span className="relative inline-block">
                                <span className="relative z-10 text-[#FF512F] dark:text-[#FF512F] px-2"> Context</span>
                                <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5c30-5 70-5 100 0" stroke="#FF512F" strokeWidth="2" fill="none" />
                                </svg>
                            </span>
                            Engine
                            <sup className="bg-gradient-to-r from-[#FF512F] to-[#FF512F] dark:from-[#FF512F] dark:to-[#FF512F] bg-clip-text text-transparent">
                                ™
                            </sup>
                        </h1>
                    </div>
                </div>
                <div className="relative container mx-auto px-4 z-10">
                    <div className="text-center mt-4 mb-16">
                        <div className={`flex items-center justify-center gap-3 text-sm md:text-base ${
                            isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}>
                            <span>Trusted Data</span>
                            <ChevronRight size={16} className="text-[#FF512F]" />
                            <span>Cloud Enabled</span>
                            <ChevronRight size={16} className="text-[#FF512F]" />
                            <span>AI & Analytics Powered</span>
                            <ChevronRight size={16} className="text-[#FF512F]" />
                            <span>Workflows Optimized</span>
                        </div>
                    </div>
                    {/* Add content or fallback here */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 px-4 relative">
                        <div className={`relative rounded-2xl p-8 border border-[#FF512F]/30 shadow-lg ${
                            isDarkMode ? "bg-gray-800" : "bg-white"
                        }`}>
                            <div className="relative z-10">
                                <h3 className="text-lg md:text-xl font-bold text-[#FF512F] mb-6">Scope of Services</h3>
                                <div className="space-y-6">
                                    {[
                                        {
                                            title: 'Data & AI Modernization',
                                            description:
                                                'Data and AI strategy & architecture, data migration, data management and governance, data products & services, data integration, analytics and insights, semantic layer design'
                                        },
                                        {
                                            title: 'Cloud Analytics',
                                            description:
                                                'Cloud strategy and enablement for data, analytics and AI capabilities. Cloud migration for data, analytics and AI. Cloud adoption and workforce activation'
                                        },
                                        {
                                            title: 'Workflow & Digital Automation',
                                            description:
                                                'Automation strategy and capability enablement. Human-AI workflow design and orchestration. System integration, API development and intelligent / agentic automation'
                                        },
                                        {
                                            title: 'Skills of the Future',
                                            description:
                                                'Future proof Business and technical workforce with up-skilling strategy and talent enablement. Hands-on guidance for adoption of AI / GenAI, data & AI literacy, developer experience and business agility'
                                        }
                                    ].map((service, index) => (
                                        <div key={index} className={`p-4 rounded-xl ${
                                            isDarkMode ? "bg-gray-700" : "bg-gray-50"
                                        }`}>
                                            <h4 className={`font-semibold text-lg mb-2 ${
                                                isDarkMode ? "text-gray-100" : "text-gray-800"
                                            }`}>{service.title}</h4>
                                            <p className={`text-base md:text-lg ${
                                                isDarkMode ? "text-gray-300" : "text-gray-600"
                                            }`}>{service.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Arrow connecting first column to second column - visible only on desktop */}
                        <div className="hidden lg:flex absolute left-[31%] top-1/2 transform -translate-y-1/2 z-20 animate-pulse">
                            <div className="flex items-center px-2 py-1 bg-gradient-to-r from-[#FF512F]/5 to-[#FF8A63]/10 rounded-md">
                                <div className="h-[3px] w-16 bg-gradient-to-r from-[#FF512F] to-[#FF8A63]"></div>
                                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[12px] border-l-[#FF8A63]"></div>
                            </div>
                        </div>

                        <div className={`relative rounded-2xl p-8 border border-[#FF512F]/30 shadow-lg ${
                            isDarkMode ? "bg-gray-800" : "bg-white"
                        }`}>
                            <div className="relative z-10">
                                <h3 className="text-lg font-bold text-[#FF512F] mb-6">Enabling Capabilities</h3>
                                <div className="space-y-6">
                                    <div className="p-4 rounded-xl">
                                        <div className="mb-8">
                                            <div className="flex items-center justify-start gap-3 mb-6">
                                                <div className="h-8 w-1 bg-[#FF512F]/20 dark:bg-[#FF8A63]/20 rounded-full"></div>
                                                <h4 className={`font-semibold text-lg whitespace-normal ${
                                                    isDarkMode ? "text-gray-100" : "text-gray-800"
                                                }`}>
                                                    ReKnew Context Engine<sup>™</sup>
                                                </h4>
                                            </div>
                                        </div>
                                        <div>
                                            {' '}
                                            <Image src={theme === 'dark' ? HexagonWhite : HexagonBlack} alt="ReKnew logo" className="" />
                                        </div>
                                        <div className="flex flex-col justify-center items-start mt-6 gap-3">
                                            <div>
                                                <div className="flex whitespace-nowrap  items-center gap-3 mb-6">
                                                    <div className="h-8 w-1 bg-[#FF512F]/20 dark:bg-[#FF8A63]/20 rounded-full"></div>
                                                    <h4 className={`font-semibold text-lg ${
                                                        isDarkMode ? "text-gray-100" : "text-gray-800"
                                                    }`}>ReKnew Accelerators™</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Arrow connecting second column to third column - visible only on desktop */}
                        <div className="hidden lg:flex absolute right-[31%] top-1/2 transform -translate-y-1/2 z-20 animate-pulse">
                            <div className="flex items-center px-2 py-1 bg-gradient-to-r from-[#FF512F]/5 to-[#FF8A63]/10 rounded-md">
                                <div className="h-[3px] w-16 bg-gradient-to-r from-[#FF512F] to-[#FF8A63]"></div>
                                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[12px] border-l-[#FF8A63]"></div>
                            </div>
                        </div>

                        <div className={`relative rounded-2xl p-8 border border-[#FF512F]/30 shadow-lg ${
                            isDarkMode ? "bg-gray-800" : "bg-white"
                        }`}>
                            <div className="relative z-10">
                                <h3 className="text-lg font-bold text-[#FF512F] mb-6">Enterprise Outcomes</h3>
                                <div className="space-y-6">
                                    {[
                                        {
                                            title: 'Speed',
                                            description:
                                                'Faster time to insight, reduced cycle time in process execution, business agility, accelerated application development'
                                        },
                                        {
                                            title: 'Scale',
                                            description:
                                                'Cloud infrastructure optimized for data and AI workloads, increased productivity from human-AI collaboration, greater ROI'
                                        },
                                        {
                                            title: 'Sophistication',
                                            description: 'Modern architectures and techniques driving new business outcomes, enabling future growth'
                                        },
                                        {
                                            title: 'Safety',
                                            description: 'Safety by design with automation, stronger controls, and traceability'
                                        }
                                    ].map((outcome, index) => (
                                        <div key={index} className={`p-4 rounded-xl ${
                                            isDarkMode ? "bg-gray-700" : "bg-gray-50"
                                        }`}>
                                            <h4 className={`font-semibold text-lg mb-2 ${
                                                isDarkMode ? "text-gray-100" : "text-gray-800"
                                            }`}>{outcome.title}</h4>
                                            <p className={`text-base md:text-lg ${
                                                isDarkMode ? "text-gray-300" : "text-gray-600"
                                            }`}>{outcome.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReknewSection;
