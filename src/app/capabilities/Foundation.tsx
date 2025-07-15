import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Database, Cloud, Settings2, Users, ArrowBigRightDash } from 'lucide-react';
import bridge from '../../../public/assets/bridgee.png';
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger);

const Foundation = () => {
    const cardRefs = useRef([]);
    const [hoveredCard, setHoveredCard] = useState(null);
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

    const handleCardHover = (index) => {
        setHoveredCard(index);
    };

    const handleCardLeave = () => {
        setHoveredCard(null);
    };

    const cards = [
        {
            icon: Database,
            title: 'Data & AI',
            subtitle: 'Foundation',
            engineeringType: 'Data & AI Engineering',
            readyState: 'Upgrade to AI-Ready',
            features: ['Vector Stores', 'Knowledge Graph', 'Semantic Layer'],
            description:
                "Establish the foundation if it's lacking or update/upgrade it to match the proposed Data Architecture for AI. The goal would be to get the relevant portions of that assessed AI architecture components to be green - anchored and prioritized to the use cases."
        },
        {
            icon: Cloud,
            title: 'Cloud',
            subtitle: 'Foundation',
            engineeringType: 'Cloud Engineering',
            readyState: 'Enhance to AI-Ready',
            features: ['LLM Capabilities', 'Agent Deployment', 'LLM / Agent Ops'],
            description:
                'Define the relevant capabilities needed in the cloud to support AI/Gen AI/Agents and help set them up so they can be utilized for use cases by data scientists / AI engineers.'
        },
        {
            icon: Settings2,
            title: 'Workflow & Digital',
            subtitle: 'Foundation',
            engineeringType: 'Workflow & Digital Engineering',
            readyState: 'Optimize to AI-Ready',
            features: ['Agentic Tools', 'Human-AI Workflows', 'Agents as a Service'],
            description:
                'Establish a workflow solution (Access Context Engine, Connector Framework, Workflow Engine etc.) if lacking or update/upgrade it so it can be used by Agents to invoke process actions. This will enable a "Digital Inside" Enterprise.'
        },
        {
            icon: Users,
            title: 'Talent',
            subtitle: 'Foundation',
            engineeringType: 'Talent Engineering',
            readyState: 'Up-skill to AI-Ready',
            features: ['Developer Readiness', 'Workforce Readiness', 'Agentic Work Redesign'],
            description:
                'Support Data Literacy and AI Fluency efforts by providing curriculum, hands-on training, change management for workforce to understand how to leverage AI-based solutions, etc.'
        }
    ];

    return (
        <div className="relative container mx-auto px-4 z-10">
            <div className="flex flex-col items-center gap-2.5">
                <div className="space-y-12 w-full">
                    {cards.map((item, i) => (
                        <div key={i} className="flex flex-col" onMouseEnter={() => handleCardHover(i)} onMouseLeave={handleCardLeave}>
                            <div
                                ref={(el) => { cardRefs.current[i] = el; }}
                                className={`group flex w-full justify-center flex-col lg:flex-row items-start lg:items-center gap-8 h-auto lg:h-auto p-8 md:p-10 
                                transition-all duration-500 overflow-hidden relative cursor-pointer rounded-t-2xl shadow-xl  ${
                                    isDarkMode 
                                        ? "bg-gradient-to-br border from-gray-800 via-gray-800/90 to-gray-900 border-gray-700" 
                                        : "bg-transparent"
                                }`}
                                style={{
                                    borderBottomLeftRadius: hoveredCard === i ? '0' : '1rem',
                                    borderBottomRightRadius: hoveredCard === i ? '0' : '1rem'
                                }}>
                                    {/* <div className="absolute inset-0 bg-[linear-gradient(45deg,#FF512F05 1px,transparent 1px),linear-gradient(-45deg,#FF8A6305 1px,transparent 1px)] dark:bg-[linear-gradient(45deg,#FF512F05 1px,transparent 1px),linear-gradient(-45deg,#FF512F05 1px,transparent 1px)] bg-[size:20px_20px] opacity-70 will-change-transform pointer-events-none"></div> */}
                                {/* <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/50 dark:from-gray-900/50 dark:via-transparent dark:to-gray-900/50 will-change-transform pointer-events-none"></div> */}
                               

                                <div className="flex items-center gap-4 min-w-[240px] z-10">
                                    <div
                                        className="p-4 rounded-xl bg-[#FF512F10] dark:bg-[#FF512F]/10 
                                    transition-all duration-300 group-hover:bg-[#FF512F20] dark:group-hover:bg-[#FF512F]/20">
                                        <span>
                                            <item.icon className="w-10 h-10 text-[#FF512F] dark:text-[#FF512F]" />
                                        </span>
                                    </div>
                                    <div>
                                        <p
                                            className={`text-lg md:text-xl font-semibold group-hover:text-[#FF512F] transition-colors ${
                                                isDarkMode ? "text-gray-100" : "text-gray-800"
                                            }`}>
                                            {item.title}
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-[#FF512F] dark:bg-[#FF512F]"></span>
                                            <p className={`text-base ${
                                                isDarkMode ? "text-gray-400" : "text-gray-600"
                                            }`}>{item.subtitle}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-l-4 w-2 h-[100px] border-[#FF512F20] dark:border-[#FF512F]/20 hidden lg:block"></div>

                                <div className="flex-1 grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-6 w-full items-center">
                                    {[item.engineeringType, item.readyState, 'Context Engineered'].map((text, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <div
                                                className={`z-10 px-4 py-2.5 bg-[#FF512F08] rounded-lg text-base font-medium 
                                            flex-1 will-change-transform flex flex-col items-center gap-1 ${
                                                isDarkMode ? "dark:bg-[#FF512F]/10 text-gray-200" : "text-gray-800"
                                            }`}>
                                                {index === 1 && <Image src={bridge} alt="Rocket" className="h-16 w-full object-contain" />}
                                                {text}
                                            </div>
                                            {index < 2 && (
                                                <ArrowBigRightDash className="hidden xl:block h-5 w-5 flex-shrink-0 text-[#FF512F] dark:text-[#FF512F]" />
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div className="min-w-[250px] lg:pl-8 border-l-0 lg:border-l-4 border-[#FF512F20] dark:border-[#FF512F]/20">
                                    <ul className="flex flex-col gap-4 font-normal">
                                        {item.features.map((feature, index) => (
                                            <li
                                                key={index}
                                                className={`flex items-center gap-3 text-base will-change-transform ${
                                                    isDarkMode ? "text-gray-300" : "text-gray-800"
                                                }`}>
                                               <span className="text-[#FF512F] text-2xl">•</span>
                                                <span className="line-clamp-1">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Description panel that slides down on hover */}
                            {hoveredCard === i && (
                                <div className={`w-full flex justify-center items-center text-center p-6 border border-t-0 rounded-b-2xl shadow-xl animate-slideDown ${
                                    isDarkMode ? "bg-gray-800 border-gray-700" : "bg-[#FFF8F6] border-gray-200"
                                }`}>
                                    <p className={`text-base md:text-lg max-w-6xl ${
                                        isDarkMode ? "text-gray-200" : "text-gray-800"
                                    }`}>{item.description}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Foundation;
