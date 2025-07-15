"use client";
import { useEffect, useState } from 'react';
import Aigraph from '../../../public/assets/slidericon-8.png';
import Businessai from '../../../public/assets/slidericon-7.png';
import Assistants from '../../../public/assets/slidericon-2.png';
import DataAiimg from '../../../public/assets/slidericon-1.png';
import Cloudsolustion from '../../../public/assets/slidericon-4.png';
import Compliance from '../../../public/assets/slidericon-3.png';

import NewCardSlider from './OurCoreServiceOfferingsSlider';
import { motion, useScroll, useSpring } from 'framer-motion';
import ReKnewModal from '../../model/ReKnewModal';

const Ourservices = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // const parallaxY = { y: 0 };

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

    useEffect(() => {
       

        const handleScroll = () => {
            const winScroll = document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const calculated = (winScroll / height) * 100;
            setScrollProgress(calculated);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const services = [
        {
            id: 1,
            title: 'Modernizing Enterprise Data Assets',
            description: (
                <>
                    Modernize Data, BI and Analytics platforms to be Cloud Native, with the right grain and available at scale
                </>
            ),
            details: ['Data Strategy', 'Cloud Migration', 'Data Virtualization', 'Data Mesh', 'Real Time Data', 'Semantic Data Models', 'Data Ops', 'Market Place'],
            buttonname: 'Learn More',
            img: Businessai
        },
        {
            id: 2,
            title: 'Data Governance and Context',
            description: (
                <>
                    Safety from the start protocols helps deliver highly governed data which provides comprehensive context of the data. Contextualized data enables business groups make decisions confidently.
                </>
            ),
            details: [
                'Reference Data',
                'Data Quality',
                'CDE Certification',
                'Data Observability',
                'Data Catalog',
                'Governed Data Pipeline',
                'Privacy Controls',
                'Traceability'
            ],
            buttonname: 'Start your Automation Journey',
            img: Aigraph
        },
        {
            id: 3,
            title: 'Purpose Driven, Self-Service Business Analytics',
            description: (
                <>
                    Empower business users to independently explore data, generate impactful insights, and make informed decisions - with clear alignment to strategic business goals.
                </>
            ),
            details: ['Conversational BI', 'AI / ML Workbench', 'Governed Sandbox', 'Data Literacy', 'Measurable Outcomes', 'NLP Driven Ops', 'API Layer', 'Access Protocols'],
            buttonname: 'Discover AI Chatbots',
            img: Assistants
        },
        {
            id: 4,
            title: 'Gen AI Adoption',
            description: (
                <>
                    Transformational impact on enterprises by optimizing how businesses innovate, automate, and engage, unlocking new levels of productivity, creativity, and efficiency.
                </>
            ),
            details: ['Center of Excellence', 'Roadmaps for Adoption', 'Risk & Compliance Framework', 'Model & Platform selection', 'Synthetic Data Generation', 'Model Observability', 'Upskill the Talent', 'Business Impact'],
            buttonname: 'Optimize your Data Strategy',
            img: DataAiimg
        },
        {
            id: 5,
            title: 'Enterprise Knowledge Graphs',
            description: (
                <>Smart solutions enabling machines and humans to access, understand, and use information contextually leveraging semantic metadata, ontologies, and relationships to connect data across silos.</>
            ),
            details: ['Data Rich & Insights Rich Solutions', 'Customer & Product & Channel Graphs', 'Intelligent Search & Discovery', 'Compliance & Risk Management', 'Supply Chain & Operations', 'AI & NLP Integration'],
            buttonname: 'Strengthen your Security',
            img: Compliance
        },
        {
            id: 6,
            title: 'Business Workflow Automation',
            description: (
                <>
                    Acceleration from POC to productionized intelligent agentic systems that automate, integrate, and optimize complex business processes enterprise-wide.
                </>
            ),
            details: ['Roadmap for Agentic Platform', 'Center Of Excellence', 'Vertical Agents for Use Cases', 'Orchestration Layer', 'Speed', 'Scale', 'Sophistication', 'Safety'],
            buttonname: 'Explore Cloud AI',
            img: Cloudsolustion
        },
        // {
        //     id: 7,
        //     title: 'Digital Services',
        //     description: <>Modernize your Digital platform with Micro-Services and Micro-Front-End Architecture</>,
        //     details: [
        //         'Graphic Design',
        //         'Portal & Application Development',
        //         'Dev-SecOps & Container Management',
        //         'UI Wireframes/Prototyping',
        //         'Angular/React UI Development',
        //         'API Development'
        //     ],
        //     buttonname: 'Strengthen your Security',
        //     img: Transformation
        // },
        // {
        //     id: 8,
        //     title: 'Gen-AI Services',
        //     description: <>Enhance productivity of your organization to the next level</>,
        //     details: ['Gen-AI Reference Architecture/Blueprint', 'Gen-AI Pilot', 'Infrastructure Set-up', 'Gen-AI Use Case Ideation & Elaboration'],
        //     buttonname: 'Explore Cloud AI',
        //     img: Generative
        // }
    ];
    const [isModalOpen, setIsModalOpen] = useState(false);

    // const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <div className={`font-sans w-full min-h-screen overflow-x-hidden ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
            <ReKnewModal isOpen={isModalOpen} onClose={closeModal} isDarkMode={undefined} />
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF512F] to-[#FF512F] dark:from-[#FF512F] dark:to-[#FF512F] z-50"
                style={{ scaleX }}
            />

            {/* Floating Elements */}
            {/* <div className="fixed inset-0 pointer-events-none z-0">
                <div
                    className="absolute bottom-1 right-[10%] w-64 h-64 bg-gradient-to-br from-[#FF512F]/5 to-[#FF512F]/5 dark:from-[#FF512F]/5 dark:to-[#FF512F]/5 
                             rounded-full blur-3xl"
                />
                <div
                    className="absolute bottom-[30%] left-[5%] w-64 h-64 bg-gradient-to-br from-[#FF512F]/5 to-[#FF512F]/5 dark:from-[#FF512F]/5 dark:to-[#FF512F]/5 
                             rounded-full blur-3xl"
                />
            </div> */}
            <section className="py-20 relative">
                

                <div className="relative container mx-auto">
                    <div className="text-center mb-16">
                       
                        {/* How We Partner Section */}
                        <div className="mt-24 text-center">
                            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-8 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                                How We
                                <span className="relative inline-block">
                                    <span className={`relative z-10 pl-2 ${isDarkMode ? 'text-[#FF512F]' : 'text-[#FF512F]'}`}>Partner</span>
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
                            </h2>
                        </div>
                        <p className={`text-base md:text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                            ReKnew&apos;s services are designed to partner with enterprises in modernizing data platforms, accelerating AI adoption, and implementing intelligent automation.
                        </p>
                    </div>

                    {/* Enhanced Service Cards Slider Container */}
                    <div className="w-full overflow-visible">
                        <div className="max-w-[1920px] mx-auto relative">
                            <NewCardSlider
                                cards={services.map((service) => ({
                                    ...service,
                                    cardStyle:
                                        'group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-[#FF512F]/10 dark:border-[#FF512F]/10 hover:border-[#FF512F]/30 dark:hover:border-[#FF512F]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(255,81,47,0.15)] dark:hover:shadow-[0_20px_50px_-15px_rgba(255,157,119,0.15)]',
                                    titleStyle:
                                        'text-2xl font-bold bg-gradient-to-r from-[#374151] to-[#374151] dark:from-gray-100 dark:to-gray-100 group-hover:from-[#FF512F] group-hover:to-[#FF512F] dark:group-hover:from-[#FF512F] dark:group-hover:to-[#FF512F] bg-clip-text text-transparent transition-colors duration-300',

                                    detailsStyle: 'mt-6 space-y-2'
                                }))}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Ourservices;
