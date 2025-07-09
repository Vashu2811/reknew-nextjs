'use client';
import { motion } from 'framer-motion';

export default function SuccessStoryTwo () {
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
    
    const achievements = [
        {
            title: 'Key Actions:',
            details: [
                'Delivered AI strategy and roadmap, business opportunity plans, and a data literacy program',
                'Conducted talent and operating model assessments',
                'Redesigned operating model to a hub-and-spoke model',
                'Established new metrics, goals, platforms, and a cloud analytics roadmap'
            ]
        },
        {
            title: 'Outcomes:',
            details: [
                'Scaled impact 2.5x (from $20MM to $60MM in new annual value)',
                'Business-aligned AI pods sized to investments and roadmap',
                'Hub-and-spoke model that ensures consistency, collaboration, and cohesion'
            ]
        }
    ];

    const AchievementDetails = ({ details }) => (
        <ul className="text-sm md:text-lg text-slate-600 dark:text-slate-300 space-y-2 pl-5 list-disc mt-2">
            {details.map((detail, idx) => (
                <li key={idx} className="leading-relaxed">{detail}</li>
            ))}
        </ul>
    );

    const AchievementCard = ({ achievement, index }) => (
        <motion.div 
            variants={item} 
            className="bg-white/50 dark:bg-slate-800/40 backdrop-blur-sm p-5 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 mb-4"
        >
            <h3 className="text-lg font-semibold text-[#FF512F] dark:text-[#FF512F] mb-3">{achievement.title}</h3>
            {achievement.description && <p className="text-slate-600 dark:text-slate-300">{achievement.description}</p>}
            {achievement.details && <AchievementDetails details={achievement.details} />}
        </motion.div>
    );
    
    return (
        <div className="dark:text-gray-100 relative overflow-hidden px-4">
          
            {/* Header Section */}
            <div className="container mx-auto max-w-7xl px-8 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.6 }} 
                    className="mb-12 text-center"
                >
                    {/* <div className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-[#FF512F]/10 to-[#FF512F]/10 dark:from-[#FF512F]/10 dark:to-[#FF512F]/10 border border-[#FF512F]/20 dark:border-[#FF512F]/20 mb-6">
                        <span className="bg-gradient-to-r from-[#FF512F] to-[#FF512F] dark:from-[#FF512F] dark:to-[#FF512F] bg-clip-text text-transparent font-medium">
                            Success Story
                        </span>
                    </div>
                     */}
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#374151] to-[#374151]/80 dark:from-gray-100 dark:to-gray-100">
                        From Siloed to
                        <span className="relative inline-block mx-2">
                            <span className="relative z-10 text-[#FF512F] dark:text-[#FF512F]">Scaled</span>
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
                        Impact
                    </h2>
                    
                    <p className="text-[#374151] dark:text-gray-100 text-lg max-w-4xl mx-auto leading-relaxed">
                        Partnered with a large national financial institution to redesign its AI engagement and operating model, transitioning from siloed
                        efforts to a scalable hub-and-spoke structure that resulted in a 2.5x increase in AI-driven value.
                    </p>
                </motion.div>
                
                {/* Content Section - Responsive Layout */}
                <div className="flex flex-col lg:flex-row gap-8 bg-white/30 dark:bg-slate-800/30 backdrop-blur-md p-2 rounded-2xl border border-gray-100 dark:border-slate-700">
                    {/* Left Column - Achievements */}
                    <motion.div 
                        initial="hidden"
                        animate="visible"
                        variants={container}
                        className="w-full lg:w-2/5"
                    >
                        {achievements.map((achievement, index) => (
                            <AchievementCard key={index} achievement={achievement} index={index} />
                        ))}
                    </motion.div>
                    
                    {/* Divider - Visible only on larger screens */}
                    <div className="hidden lg:block lg:w-px lg:h-auto bg-gradient-to-b from-[#FF512F]/20 via-[#FF512F] to-[#FF512F]/20"></div>
                    
                    {/* Right Column - SVG Diagram */}
                    <div className="w-full lg:w-3/5">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="overflow-hidden"
                        >
                            <svg className="text-black dark:text-gray-100 w-full h-auto" viewBox="0 0 850 650" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                                {/* <!-- Background --> */}
                                <rect width="800" height="650" fill="none" />

                                {/* <!-- Title Bar --> */}
                                <rect x="0" y="0" width="800" height="60" fill="none" stroke-width="1" />
                                <text x="50" y="50" font-family="Arial" font-size="24" font-weight="bold" className="fill-current">
                                    COE
                                </text>
                                <text x="600" y="50" font-family="Arial" font-size="24" font-weight="bold" className="fill-current">
                                    HUB-SPOKE
                                </text>
                                <line x1="50" y1="60" x2="750" y2="60" stroke="#FF512F" stroke-width="3" />
                                <text x="300" y="20" font-family="Arial" font-size="26" className="fill-current" font-weight="bold">
                                    Optimize / Scale
                                </text>

                                {/* <!-- Hub Circle (Center) --> */}
                                <circle cx="400" cy="300" r="70" fill="none" stroke="#FF512F" stroke-width="3" />
                                <circle cx="400" cy="300" r="60" fill="#FF512F" opacity="0.8" />
                                <text x="400" y="290" font-family="Arial" font-size="14" font-weight="bold" className="fill-current" text-anchor="middle">
                                    ENABLEMENT
                                </text>
                                <text x="400" y="305" font-family="Arial" font-size="14" font-weight="bold" className="fill-current" text-anchor="middle">
                                   &amp;
                                </text>
                                <text x="400" y="320" font-family="Arial" font-size="14" font-weight="bold" className="fill-current" text-anchor="middle">
                                    ACTIVATION
                                </text>

                                {/* <!-- Connection Lines --> */}
                                <line x1="400" y1="230" x2="400" y2="170" stroke="#FF512F" stroke-width="4" stroke-dasharray="6,3" />
                                <line x1="340" y1="245" x2="200" y2="150" stroke="#FF512F" stroke-width="4" stroke-dasharray="6,3" />
                                <line x1="460" y1="245" x2="600" y2="150" stroke="#FF512F" stroke-width="4" stroke-dasharray="6,3" />
                                <line x1="340" y1="355" x2="200" y2="450" stroke="#FF512F" stroke-width="4" stroke-dasharray="6,3" />
                                <line x1="460" y1="355" x2="600" y2="450" stroke="#FF512F" stroke-width="4" stroke-dasharray="6,3" />

                                {/* <!-- COE Cluster (Left) --> */}
                                <circle cx="200" cy="150" r="60" fill="#fafafa" stroke="#FF512F" stroke-width="2" />

                                {/* <!-- COE Dots --> */}
                                <circle cx="200" cy="110" r="12" fill="#FFCC80" stroke="#FFA726" stroke-width="2" />
                                <circle cx="165" cy="135" r="12" fill="#FFCC80" stroke="#FFA726" stroke-width="2" />
                                <circle cx="235" cy="135" r="12" fill="#FFCC80" stroke="#FFA726" stroke-width="2" />
                                <circle cx="165" cy="175" r="12" fill="#FFCC80" stroke="#FFA726" stroke-width="2" />
                                <circle cx="200" cy="190" r="12" fill="#FFCC80" stroke="#FFA726" stroke-width="2" />
                                <circle cx="230" cy="175" r="12" fill="#FFCC80" stroke="#FFA726" stroke-width="2" />
                                <circle cx="200" cy="150" r="20" fill="#FB8C00" stroke="#E65100" stroke-width="2" />

                                {/* <!-- Mortgage Spoke (Top) --> */}
                                <text x="200" y="235" font-family="Arial" font-size="16" font-weight="bold" className="fill-current" text-anchor="middle">
                                    MORTGAGE
                                </text>

                                {/* <!-- Deposits/Payments Spoke (Top Right) --> */}
                                <circle cx="600" cy="150" r="60" fill="#fafafa" stroke="#FF512F" stroke-width="2" />
                                <text x="600" y="230" font-family="Arial" font-size="16" font-weight="bold" className="fill-current" text-anchor="middle">
                                    DEPOSITS /
                                </text>
                                <text x="600" y="245" font-family="Arial" font-size="16" font-weight="bold" className="fill-current" text-anchor="middle">
                                    PAYMENTS
                                </text>

                                {/* <!-- Deposits/Payments Dots --> */}
                                <circle cx="565" cy="180" r="12" fill="#FFCC80" stroke="#FFA726" stroke-width="2" />
                                <circle cx="635" cy="180" r="12" fill="#FFCC80" stroke="#FFA726" stroke-width="2" />
                                <circle cx="565" cy="125" r="12" fill="#FFCC80" stroke="#FFA726" stroke-width="2" />
                                <circle cx="635" cy="125" r="12" fill="#FFCC80" stroke="#FFA726" stroke-width="2" />
                                <circle cx="600" cy="150" r="20" fill="#FB8C00" stroke="#E65100" stroke-width="2" />

                                {/* <!-- Cards Spoke (Bottom Left) --> */}
                                <circle cx="200" cy="450" r="60" fill="#fafafa" stroke="#FF512F" stroke-width="2" />
                                <text x="200" y="530" font-family="Arial" font-size="16" font-weight="bold" className="fill-current" text-anchor="middle">
                                    CARDS
                                </text>

                                {/* <!-- Cards Dots --> */}
                                <circle cx="175" cy="480" r="12" fill="#FFCC80" stroke="#FFA726" stroke-width="2" />
                                <circle cx="240" cy="470" r="12" fill="#FFCC80" stroke="#FFA726" stroke-width="2" />
                                <circle cx="155" cy="445" r="12" fill="#FFCC80" stroke="#FFA726" stroke-width="2" />
                                <circle cx="235" cy="420" r="12" fill="#FFCC80" stroke="#FFA726" stroke-width="2" />
                                <circle cx="200" cy="450" r="20" fill="#FB8C00" stroke="#E65100" stroke-width="2" />

                                {/* <!-- Lending Spoke (Bottom Right) --> */}
                                <circle cx="600" cy="450" r="60" fill="#fafafa" stroke="#FF512F" stroke-width="2" />
                                <text x="600" y="530" font-family="Arial" font-size="16" font-weight="bold" className="fill-current" text-anchor="middle">
                                    LENDING
                                </text>

                                {/* <!-- Lending Dots --> */}
                                <circle cx="555" cy="460" r="12" fill="#FFCC80" stroke="#FFA726" stroke-width="2" />
                                <circle cx="645" cy="460" r="12" fill="#FFCC80" stroke="#FFA726" stroke-width="2" />
                                <circle cx="565" cy="425" r="12" fill="#FFCC80" stroke="#FFA726" stroke-width="2" />
                                <circle cx="635" cy="425" r="12" fill="#FFCC80" stroke="#FFA726" stroke-width="2" />
                                <circle cx="600" cy="450" r="20" fill="#FB8C00" stroke="#E65100" stroke-width="2" />

                                {/* <!-- Strategy Text with Box --> */}
                                <rect x="335" y="170" width="130" height="30" rx="15" fill="#FACFB8" stroke="#FF512F" stroke-width="2" />
                                <text x="400" y="190" font-family="Arial" font-size="16" font-weight="bold" fill="#FF512F" text-anchor="middle">
                                    STRATEGY
                                </text>
                            </svg>
                        </motion.div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};
