'use client';
import { motion } from 'framer-motion';

export default function SuccessStoryOne ()  {
    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const keyActions = [
        'Created strategic backlog of operational and analytical data and back-wide real-time event taxonomy',
        'Isolated traditional needs from modern needs to allow two-speed architecture',
        'Modernized stack to integrate fast and slow data, data services (APIs), and serving layers'
    ];

    const outcomes = [
        'Enabled data utilization for personalized customer engagement across digital channels',
        'Developed modern data infrastructure using Hadoop and Kafka',
        'Established a new Agile DataOps function'
    ];

    return (
        <div className="dark:text-gray-100 relative overflow-hidden px-4">
            {/* Header Section */}
            <div className="container mx-auto max-w-7xl px-8 relative z-10">
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16 pt-12 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 py-2 bg-clip-text text-transparent bg-gradient-to-r from-[#374151] to-[#374151]/80 dark:from-gray-100 dark:to-gray-100">
                        From Reports to
                        <span className="relative inline-block mx-3">
                            <span className="relative z-10 text-[#FF512F] dark:text-[#FF512F]">Real-Time</span>
                            <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path
                                    d="M0 5c30-5 70-5 100 0"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    className="text-[#FF512F] dark:text-[#FF512F] transition-all duration-300"
                                />
                            </svg>
                        </span>
                        Engagement
                    </h2>

                    <p className="text-[#374151] dark:text-gray-100 text-lg max-w-4xl mx-auto leading-relaxed mt-4">
                        Our team enabled a large global financial institution to modernize its data infrastructure and analytics, transitioning from traditional
                        reporting to real-time customer engagement across omnichannel digital platforms.
                    </p>
                </motion.div>

                {/* Content Section - Responsive Layout */}
                <div className="flex flex-col lg:flex-row gap-8 bg-white/30 dark:bg-slate-800/30 backdrop-blur-md p-2 rounded-2xl border border-gray-100 dark:border-slate-700">
                    {/* Left Column - Key Actions and Outcomes */}
                    <motion.div initial="hidden" animate="visible" variants={container} className="w-full lg:w-2/5">
                        <motion.div
                            variants={item}
                            className="bg-white/50 dark:bg-slate-800/40 backdrop-blur-sm p-5 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 mb-4">
                            <h3 className="text-lg font-semibold text-[#FF512F] dark:text-[#FF512F] mb-3">Key Actions:</h3>
                            <ul className="text-sm md:text-lg text-slate-600 dark:text-slate-300 space-y-2 pl-5 list-disc mt-2">
                                {keyActions.map((action, idx) => (
                                    <li key={idx} className="leading-relaxed">
                                        {action}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            variants={item}
                            className="bg-white/50 dark:bg-slate-800/40 backdrop-blur-sm p-5 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700">
                            <h3 className="text-lg font-semibold text-[#FF512F] dark:text-[#FF512F] mb-3">Outcomes:</h3>
                            <ul className="text-sm md:text-lg text-slate-600 dark:text-slate-300 space-y-2 pl-5 list-disc mt-2">
                                {outcomes.map((outcome, idx) => (
                                    <li key={idx} className="leading-relaxed">
                                        {outcome}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>

                    {/* Divider - Visible only on larger screens */}
                    <div className="hidden lg:block lg:w-px lg:h-auto bg-gradient-to-b from-[#FF512F]/20 via-[#FF512F] to-[#FF512F]/20"></div>

                    {/* Right Column - SVG Diagram */}
                    <div className="w-full lg:w-3/5">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="overflow-hidden">
                            {/* Responsive SVG Section */}
                            <svg
                                className="text-black dark:text-gray-100 w-full h-auto"
                                viewBox="0 0 800 800"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="xMidYMid meet">
                                {/* <!-- Background --> */}
                                <rect x="0" y="0" width="800" height="800" fill="none" />

                                {/* <!-- Header --> */}
                                <text
                                    x="365"
                                    y="50"
                                    font-family="Arial, sans-serif"
                                    font-size="28"
                                    className="fill-current"
                                    text-anchor="middle"
                                    font-weight="bold">
                                    Monetize / Personalize
                                </text>

                                {/* <!-- DATA - DIGITAL underline --> */}
                                <text x="120" y="90" font-family="Arial, sans-serif" font-size="30" className="fill-current" font-weight="bold">
                                    DATA
                                </text>
                                <text x="520" y="90" font-family="Arial, sans-serif" font-size="30" className="fill-current" font-weight="bold">
                                    DIGITAL
                                </text>
                                <line x1="90" y1="95" x2="660" y2="95" stroke="#FF512F" stroke-width="2" />

                                {/* <!-- DataHub --> */}
                                <text x="80" y="140" font-family="Arial, sans-serif" font-size="20" className="fill-current">
                                    DataHub
                                </text>
                                <line x1="80" y1="145" x2="160" y2="145" stroke="#ff7043" stroke-width="1" />

                                {/* <!-- Database icon --> */}
                                <g transform="translate(120, 170)">
                                    <path d="M-40,0 C-40,-15 40,-15 40,0 L40,60 C40,75 -40,75 -40,60 Z" fill="none" stroke="#FF512F" stroke-width="2" />
                                    <path d="M-40,0 C-40,15 40,15 40,0" fill="none" stroke="#FF512F" stroke-width="2" />
                                    <path d="M-40,20 C-40,35 40,35 40,20" fill="none" stroke="#FF512F" stroke-width="2" />
                                    <path d="M-40,40 C-40,55 40,55 40,40" fill="none" stroke="#FF512F" stroke-width="2" />
                                </g>

                                {/* <!-- EventHub --> */}
                                <text x="250" y="140" font-family="Arial, sans-serif" font-size="20" className="fill-current">
                                    EventHub
                                </text>
                                <line x1="250" y1="145" x2="340" y2="145" stroke="#ff7043" stroke-width="1" />

                                {/* <!-- Lightning bolt icon --> */}
                                <g transform="translate(280, 190)">
                                    <path d="M-10,-25 L10,-5 L0,5 L15,30 L-5,5 L5,-5 Z" fill="none" stroke="#FF512F" stroke-width="2" />
                                </g>

                                {/* <!-- Mobile --> */}
                                <text x="450" y="140" font-family="Arial, sans-serif" font-size="20" className="fill-current">
                                    Mobile
                                </text>
                                <line x1="450" y1="145" x2="510" y2="145" stroke="#ff7043" stroke-width="1" />

                                {/* <!-- Mobile icon --> */}
                                <g transform="translate(450, 190)">
                                    <rect x="-15" y="-30" width="30" height="60" rx="3" ry="3" fill="none" stroke="#FF512F" stroke-width="2" />
                                    <line x1="-15" y1="20" x2="15" y2="20" stroke="#FF512F" stroke-width="1" />
                                    <circle cx="0" cy="25" r="2" fill="#FF512F" />
                                    <line x1="-5" y1="0" x2="5" y2="-10" stroke="#FF512F" stroke-width="1" stroke-dasharray="2,2" />
                                </g>

                                {/* <!-- Web --> */}
                                <text x="630" y="140" font-family="Arial, sans-serif" font-size="20" className="fill-current">
                                    Web
                                </text>
                                <line x1="620" y1="145" x2="680" y2="145" stroke="#ff7043" stroke-width="1" />

                                {/* <!-- Web icon --> */}
                                <g transform="translate(630, 190)">
                                    <rect x="-40" y="-30" width="80" height="60" rx="3" ry="3" fill="none" stroke="#FF512F" stroke-width="2" />
                                    <line x1="-40" y1="-20" x2="40" y2="-20" stroke="#FF512F" stroke-width="1" />
                                    <circle cx="-30" cy="-25" r="2" fill="#FF512F" />
                                    <circle cx="-20" cy="-25" r="2" fill="#FF512F" />
                                    <line x1="-20" y1="0" x2="20" y2="20" stroke="#FF512F" stroke-width="1" stroke-dasharray="2,2" />
                                </g>

                                {/* <!-- DataOps --> */}
                                <g transform="translate(150, 300)">
                                    <rect x="-50" y="-25" width="100" height="50" rx="20" ry="20" fill="none" stroke="#FF512F" stroke-width="2" />
                                    <text x="0" y="5" font-family="Arial, sans-serif" font-size="18" className="fill-current" text-anchor="middle">
                                        DataOps{' '}
                                    </text>
                                </g>

                                {/* <!-- Collect text --> */}
                                <text x="40" y="285" font-family="Arial, sans-serif" font-size="18" fill="#ff7043" font-style="italic">
                                    Collect
                                </text>

                                {/* <!-- Manage text --> */}
                                <text x="250" y="265" font-family="Arial, sans-serif" font-size="18" fill="#ff7043" font-style="italic">
                                    Manage
                                </text>

                                {/* <!-- DataAPI --> */}
                                <g transform="translate(450, 450)">
                                    <rect x="-50" y="-25" width="100" height="50" rx="20" ry="20" fill="none" stroke="#FF512F" stroke-width="2" />
                                    <text x="0" y="5" font-family="Arial, sans-serif" font-size="18" className="fill-current" text-anchor="middle">
                                        DataAPI
                                    </text>
                                </g>

                                {/* <!-- MarTech --> */}
                                <text x="630" y="520" font-family="Arial, sans-serif" font-size="20" className="fill-current">
                                    MarTech
                                </text>
                                <line x1="630" y1="525" x2="690" y2="525" stroke="#ff7043" stroke-width="1" />

                                {/* <!-- MarTech icon (connection hub) --> */}
                                <g transform="translate(630, 450)">
                                    <circle cx="0" cy="0" r="30" fill="none" stroke="#FF512F" stroke-width="2" />
                                    <circle cx="0" cy="0" r="10" fill="none" stroke="#FF512F" stroke-width="2" />
                                    <line x1="0" y1="-30" x2="0" y2="-10" stroke="#FF512F" stroke-width="2" />
                                    <line x1="30" y1="0" x2="10" y2="0" stroke="#FF512F" stroke-width="2" />
                                    <line x1="0" y1="30" x2="0" y2="10" stroke="#FF512F" stroke-width="2" />
                                    <line x1="-30" y1="0" x2="-10" y2="0" stroke="#FF512F" stroke-width="2" />
                                    <circle cx="0" cy="-30" r="5" fill="#ffffff" stroke="#FF512F" stroke-width="2" />
                                    <circle cx="30" cy="0" r="5" fill="#ffffff" stroke="#FF512F" stroke-width="2" />
                                    <circle cx="0" cy="30" r="5" fill="#ffffff" stroke="#FF512F" stroke-width="2" />
                                    <circle cx="-30" cy="0" r="5" fill="#ffffff" stroke="#FF512F" stroke-width="2" />
                                </g>

                                {/* <!-- Customer Graph --> */}
                                <text x="300" y="730" font-family="Arial, sans-serif" font-size="20" className="fill-current" text-anchor="middle">
                                    Customer Graph
                                </text>

                                {/* <!-- Compass icon --> */}
                                <g transform="translate(300, 650)">
                                    <circle cx="0" cy="0" r="50" fill="none" stroke="#FF512F" stroke-width="2" />
                                    <circle cx="0" cy="0" r="5" fill="none" stroke="#FF512F" stroke-width="2" />
                                    <path d="M0,-50 L0,-10 M0,10 L0,50 M-50,0 L-10,0 M10,0 L50,0" stroke="#FF512F" stroke-width="2" />
                                    <path d="M-35,-35 L-8,-8 M35,-35 L8,-8 M-35,35 L-8,8 M35,35 L8,8" stroke="#FF512F" stroke-width="2" />
                                    <path d="M0,-25 L5,-5 L0,0 L-5,-5 Z" fill="none" stroke="#FF512F" stroke-width="2" />
                                </g>
                                <g transform="translate(300, 650)">
                                    {/* <!-- Outer gear circle --> */}
                                    <circle cx="0" cy="0" r="40" fill="none" stroke="#FF512F" stroke-width="2" />

                                    {/* <!-- Gear teeth --> */}
                                    <g stroke="#FF512F" stroke-width="2">
                                        <line x1="0" y1="-50" x2="0" y2="-40" />
                                        <line x1="0" y1="50" x2="0" y2="40" />
                                        <line x1="50" y1="0" x2="40" y2="0" />
                                        <line x1="-50" y1="0" x2="-40" y2="0" />
                                        <line x1="35" y1="-35" x2="28" y2="-28" />
                                        <line x1="-35" y1="-35" x2="-28" y2="-28" />
                                        <line x1="35" y1="35" x2="28" y2="28" />
                                        <line x1="-35" y1="35" x2="-28" y2="28" />
                                    </g>

                                    {/* <!-- Center circle --> */}
                                    <circle cx="0" cy="0" r="8" fill="none" stroke="#FF512F" stroke-width="2" />
                                </g>

                                {/* <!-- Curate text --> */}
                                <text x="120" y="400" font-family="Arial, sans-serif" font-size="18" fill="#ff7043" font-style="italic">
                                    Curate
                                </text>

                                {/* <!-- Contextualize text --> */}
                                <text x="120" y="550" font-family="Arial, sans-serif" font-size="18" fill="#ff7043" font-style="italic">
                                    Contextualize
                                </text>

                                {/* <!-- Expose text --> */}
                                <text x="420" y="550" font-family="Arial, sans-serif" font-size="18" fill="#ff7043" font-style="italic">
                                    Expose
                                </text>

                                {/* <!-- Integrate text --> */}
                                <text x="500" y="350" font-family="Arial, sans-serif" font-size="18" fill="#ff7043" font-style="italic">
                                    Integrate
                                </text>

                                {/* Connection lines */}
                                <line x1="120" y1="220" x2="150" y2="275" stroke="#FF512F" stroke-width="2" stroke-dasharray="4,2" />
                                <line x1="270" y1="210" x2="180" y2="275" stroke="#FF512F" stroke-width="2" stroke-dasharray="4,2" />
                                <line x1="150" y1="325" x2="300" y2="600" stroke="#FF512F" stroke-width="2" stroke-dasharray="4,2" />
                                <line x1="300" y1="600" x2="425" y2="474" stroke="#FF512F" stroke-width="2" stroke-dasharray="4,2" />
                                <line x1="450" y1="425" x2="450" y2="220" stroke="#FF512F" stroke-width="2" stroke-dasharray="4,2" />
                                <line x1="475" y1="425" x2="630" y2="220" stroke="#FF512F" stroke-width="2" stroke-dasharray="4,2" />
                                <line x1="500" y1="450" x2="600" y2="450" stroke="#FF512F" stroke-width="2" stroke-dasharray="4,2" />
                                <line x1="630" y1="420" x2="630" y2="220" stroke="#FF512F" stroke-width="2" stroke-dasharray="4,2" />
                            </svg>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};
