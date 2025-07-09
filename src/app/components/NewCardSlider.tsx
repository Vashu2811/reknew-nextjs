'use client';

import React, { useState } from 'react';
// import Arrow from '../../assets/Arrow-logo.png';
import {
    Database,
    Cloud,
    LineChart,
    Layers,
    Cpu,
    Brain,
    Network,
    GitMerge,
    Shield,
    BarChart3,
    Code2,
    Workflow,
    Server,
    MonitorDot,
    Boxes,
    ClipboardCheck,
    Users,
    CircuitBoard,
    Microscope,
    Bot,
    Settings2,
    Factory,
    Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';
// import Image from 'next/image';

export default function NewCardSlider  ({ cards }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [, setIsAutoPlaying] = useState(true);
     
    const [direction, setDirection] = useState(0);

    const previousSlide = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
        setIsAutoPlaying(false);
    };

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
        setIsAutoPlaying(false);
    };

    const getIconForPoint = (point) => {
        const iconMapping = {
            // Data & BI Platform Modernization
            'ENTERPRISE DATA': { icon: Database, gradient: 'from-[#FF512F]/20 to-[#FF512F]/10' },
            'CLOUD MIGRATION': { icon: Cloud, gradient: 'from-[#FF512F]/20 to-[#FF512F]/10' },
            'DATA VIRTUALIZATION': { icon: Network, gradient: 'from-[#FF512F]/20 to-[#FF512F]/10' },
            'REAL-TIME': { icon: LineChart, gradient: 'from-[#FF512F]/20 to-[#FF512F]/10' },
            LEGACY: { icon: Factory, gradient: 'from-[#FF512F]/20 to-[#FF512F]/10' },

            // AI-Powered Analytics
            'MACHINE LEARNING': { icon: Brain, gradient: 'from-[#FF512F]/20 to-[#FF512F]/10' },
            'NATURAL LANGUAGE': { icon: Bot, gradient: 'from-[#FF512F]/20 to-[#FF512F]/10' },
            PREDICTIVE: { icon: Sparkles, gradient: 'from-[#FF512F]/20 to-[#FF512F]/10' },
            EMBEDDED: { icon: CircuitBoard, gradient: 'from-[#FF512F]/20 to-[#FF512F]/10' },

            // Data Governance
            GOVERNANCE: { icon: Shield, gradient: 'from-[#FF512F]/20 to-[#FF512F]/10' },
            OPERATING: { icon: Settings2, gradient: 'from-[#FF512F]/20 to-[#FF512F]/10' },
            STEWARDSHIP: { icon: Users, gradient: 'from-[#FF512F]/20 to-[#FF512F]/10' },
            COMPLIANCE: { icon: ClipboardCheck, gradient: 'from-[#FF512F]/20 to-[#FF512F]/10' },

            // Analytics Platform
            PIPELINE: { icon: GitMerge, gradient: 'from-[#FF512F]/20 to-[#FF512F]/10' },
            MARKETPLACE: { icon: Boxes, gradient: 'from-[#FF512F]/20 to-[#FF512F]/10' },
            WORKBENCH: { icon: Microscope, gradient: 'from-[#FF512F]/20 to-[#FF512F]/10' },
            ANALYTICS: { icon: BarChart3, gradient: 'from-[#FF512F]/20 to-[#FF512F]/10' },

            // MDM and Architecture
            MDM: { icon: Database, gradient: 'from-[#FF512F]/20 to-[#FF512F]/10' },
            QUALITY: { icon: Shield, gradient: 'from-[#FF512F]/20 to-[#FF512F]/10' },
            MATCHING: { icon: GitMerge, gradient: 'from-[#FF512F]/20 to-[#FF512F]/10' },
            HUB: { icon: Network, gradient: 'from-[#FF512F]/20 to-[#FF512F]/10' },

            // UI/UX and Development
            'UI/UX': { icon: MonitorDot, gradient: 'from-[#FF512F]/20 to-[#FF512F]/10' },
            DEVELOPMENT: { icon: Code2, gradient: 'from-[#FF512F]/20 to-[#FF512F]/10' },
            DEVSECOPS: { icon: Shield, gradient: 'from-[#FF512F]/20 to-[#FF512F]/10' },
            API: { icon: Workflow, gradient: 'from-[#FF512F]/20 to-[#FF512F]/10' },
            MICROSERVICES: { icon: Layers, gradient: 'from-[#FF512F]/20 to-[#FF512F]/10' },

            // Gen-AI
            AI: { icon: Brain, gradient: 'from-[#FF512F]/20 to-[#FF512F]/10' },
            MODELS: { icon: Cpu, gradient: 'from-[#FF512F]/20 to-[#FF512F]/10' },
            STRATEGY: { icon: Settings2, gradient: 'from-[#FF512F]/20 to-[#FF512F]/10' },
            'USE CASE': { icon: Microscope, gradient: 'from-[#FF512F]/20 to-[#FF512F]/10' },
            INFRASTRUCTURE: { icon: Server, gradient: 'from-[#FF512F]/20 to-[#FF512F]/10' },

            // Default
            DEFAULT: { icon: Settings2, gradient: 'from-[#FF512F]/20 to-[#FF512F]/10' }
        };

        const match = Object.entries(iconMapping).find(([key]) => point.toUpperCase().includes(key));

        return match ? match[1] : iconMapping.DEFAULT;
    };

    return (
        <div className="relative w-full max-w-[1920px] mx-auto flex flex-col">
            <div className="relative h-[600px] flex items-center justify-center">
                <div className="absolute w-full flex justify-center items-center ">
                    {[-1, 0, 1].map((offset) => {
                        const index = (currentIndex + offset + cards.length) % cards.length;

                        return (
                            <motion.div
                                key={index}
                                custom={offset}
                                initial={false}
                                animate={{
                                    x: `${offset * 110}%`,
                                    scale: offset === 0 ? 1 : 0.85,
                                    opacity: offset === 0 ? 1 : 0.5,
                                    zIndex: offset === 0 ? 2 : 1,
                                    rotateY: offset * 15,
                                    filter: offset === 0 ? 'none' : 'blur(2px)'
                                }}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.32, 0.72, 0, 1]
                                }}
                                className="absolute origin-center cursor-pointer transform-gpu"
                                onClick={() => offset !== 0 && (offset === -1 ? previousSlide() : nextSlide())}>
                                {/* Enhanced Card Container */}
                                <div
                                    className={`w-[350px] md:w-[550px] xl:w-[700px] h-[650px]
                                                rounded-[32px] overflow-hidden transition-all duration-500 
                                                ${
                                                    offset === 0
                                                        ? 'bg-white dark:bg-gray-800 dark:from-gray-800 dark:to-gray-900 border-2 border-[#FF512F]/20 dark:border-[#FF512F]/20 shadow-lg group transform-gpu'
                                                        : 'bg-white/90 dark:bg-gray-800/90 border-2 border-[#FF512F]/10 dark:border-[#FF512F]/10 opacity-90'
                                                }`}>
                                    <div className="relative overflow-hidden rounded-t-[32px] md:px-6 py-4 lg:px-8">
                                        <div className="relative">
                                            <div className="flex flex-col md:flex-row items-center gap-6">
                                                <motion.div
                                                    className="size-12 md:size-20 overflow-hidden transition-all duration-500 shrink-0"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}>
                                                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF512F]/5 to-[#FF8A63]/5 dark:from-[#FF512F]/10 dark:to-[#FF8A63]/10 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700"></div>
                                                    <img
                                                        src={cards[index].img}
                                                        alt={cards[index].title}
                                                        className="w-full h-full md:p-2 object-contain transform transition-transform duration-700 drop-shadow-md"
                                                    />
                                                </motion.div>

                                                {/* Content column with title and description */}
                                                <div className="flex">
                                                    <h2 className="text-base md:text-xl font-medium text-left bg-gradient-to-r from-[#232323] to-[#232323] dark:from-gray-100 dark:to-gray-100 bg-clip-text text-transparent transition-all duration-300 leading-tight">
                                                        <span className="relative inline-flex flex-col">
                                                            <span className="bg-gradient-to-r text-base md:text-xl p-2 text-center md:text-left from-[#232323] via-[#3d3d3d] to-[#232323] dark:from-gray-100 dark:via-white dark:to-gray-100 bg-clip-text text-transparent">
                                                                {cards[index].title}
                                                            </span>
                                                            <span className="mt-2 block w-16 h-1 bg-gradient-to-r from-[#FF512F] to-[#FF8A63] rounded-full"></span>
                                                        </span>
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="flex w-full border-t border-[#FF512F]/20 dark:border-[#FF512F]/20" />

                                            <div className="flex mt-4 font-normal px-4 flex-col text-left w-full">
                                                <p className="text-base md:text-lg text-[#374151] dark:text-gray-100 leading-relaxed">
                                                    {cards[index].description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:px-6 lg:px-8 lg:space-y-6">
                                        <div className="md:space-y-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-3 lg:gap-5">
                                            {cards[index].details.map((point, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    className="flex items-center gap-2 md:gap-4 md:p-3 p-1 rounded-xl transition-all duration-300 hover:bg-[#FF512F]/5 dark:hover:bg-[#FF512F]/10 group/item"
                                                    whileHover={{ scale: 1.02, x: 2 }}
                                                    whileTap={{ scale: 0.98 }}>
                                                    <motion.span
                                                        className={`p-2.5 rounded-xl bg-gradient-to-br ${
                                                            getIconForPoint(point).gradient
                                                        } backdrop-blur-sm transition-all duration-300 group-hover/item:shadow-md`}
                                                        whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                                                        transition={{ duration: 0.5 }}>
                                                        {React.createElement(getIconForPoint(point).icon, {
                                                            className:
                                                                'size-2 md:size-5 text-[#FF512F] stroke-2 transition-transform duration-300 group-hover/item:scale-110'
                                                        })}
                                                    </motion.span>
                                                    <span className="text-gray-600 text-base md:text-lg dark:text-gray-300 flex-1 font-normal md:font-medium group-hover/item:text-[#FF512F] dark:group-hover/item:text-[#FF8A63] transition-colors duration-300">
                                                        {point}
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Active card indicator - only shows on current card */}
                                    {offset === 0 && (
                                        <motion.div
                                            className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#FF512F] via-[#FF8A63] to-[#FF512F]"
                                            animate={{
                                                opacity: [0.5, 0.8, 0.5],
                                                scaleX: [0.95, 1, 0.95]
                                            }}
                                            transition={{
                                                repeat: Infinity,
                                                duration: 2,
                                                ease: 'easeInOut'
                                            }}
                                        />
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <button
                onClick={previousSlide}
                className="absolute left-4 md:left-[10%] top-[96.5%] md:top-[40%] transform -translate-y-1/2  dark:from-gray-800/90 dark:to-gray-800/70  dark:hover:to-gray-800 text-black dark:text-white size-14 flex justify-center items-center z-20 shadow-lg transition-all duration-300 border-2 border-[#FF512F] dark:border-[#FF512F] p-3 rounded-full dark:bg-gray-800 
                     group"
                aria-label="Previous Slide">
                <div className="flex items-center justify-center w-full h-full">
                    {/* <img src={Arrow} alt="Previous" className="rotate-[210deg] w-[67.5%] left-3 top-[10px] absolute  object-contain" loading="lazy" /> */}
                    {/* <Image
                                                                src="/assets/Arrow-logo.png"
                                                                alt="Previous"
                                                                width={0}
                                                                height={0}
                                                                className="rotate-[210deg] w-[67.5%] left-3 top-[10px] absolute  object-contain"
                                                                /> */}
                     <img
                                                        src="/assets/Arrow-logo.png"
                                                        alt="Previous"
                                                        className="rotate-[210deg] w-[67.5%] left-3 top-[10px] absolute  object-contain"
                                                    />
                </div>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4  md:right-[10%] top-[96.5%] md:top-[40%] transform -translate-y-1/2  dark:from-gray-800/90 dark:to-gray-800/70  dark:hover:to-gray-800 text-black dark:text-white size-14 flex justify-center items-center z-20 shadow-lg transition-all duration-300 border-2 border-[#FF512F] dark:border-[#FF512F] p-3 rounded-full dark:bg-gray-800 
                     group"
                aria-label="Next Slide">
                <div className="flex items-center justify-center w-full h-full">
                    {/* <img src={Arrow} alt="Next" className="rotate-[28deg] w-[67.5%] right-3 top-[16px] absolute  object-contain" loading="lazy" /> */}
                    {/* <Image
                                                                src="/assets/Arrow-logo.png"
                                                                alt="Previous"
                                                                width={0}
                                                                height={0}
                                                                className="rotate-[28deg] w-[67.5%] right-3 top-[16px] absolute  object-contain"
                                                                /> */}
                     <img
                                                        src="/assets/Arrow-logo.png"
                                                        alt="Previous"
                                                        className="rotate-[28deg] w-[67.5%] right-3 top-[16px] absolute  object-contain"
                                                    />
                </div>
            </button>

            {/* Enhanced Progress Dots - Updated positioning */}
            <div className="relative md:mt-20 lg:mt-28 mt-10 flex justify-center">
                <div
                    className="flex gap-5 p-6 rounded-full 
          bg-white/95 dark:bg-gray-800/95  border border-[#FF512F]/10 dark:border-[#FF512F]/10
          backdrop-blur-md">
                    {cards.map((_, index) => (
                        <motion.button
                            key={index}
                            onClick={() => {
                                setIsAutoPlaying(false);
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className={`transition-all duration-300 relative ${
                                index === currentIndex
                                    ? 'w-2 h-2 bg-gradient-to-r from-[#FF512F] to-[#FF8A63]'
                                    : 'w-2 h-2 bg-[#FF512F]/20 hover:bg-[#FF512F]/40'
                            } rounded-full`}
                            aria-label={`Go to slide ${index + 1}`}></motion.button>
                    ))}
                </div>
            </div>
        </div>
    );
};

