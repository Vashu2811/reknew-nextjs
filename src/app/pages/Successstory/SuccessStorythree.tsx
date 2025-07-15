import { motion } from 'framer-motion';
import { useTheme } from "../../../Context/ThemeContext";

const SuccessStoryThree = () => {
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';

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
    
    const actions = [
        'Deployed AI models to identify customer friction',
        'Predict in-the-moment customer needs',
        'Optimize agent routing',
        'Deliver dynamic digital presentations'
    ];
    
    const outcomes = [
        'Reduced operational expenses with predictive analytics',
        'Increased effectiveness of self-service and agent support through AI-driven insights',
        'Enhanced customer satisfaction with more personalized and proactive experiences'
    ];

    return (
        <div className={`relative overflow-hidden px-4 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
        
            {/* Header Section */}
            <div className="container mx-auto max-w-7xl px-8 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.6 }} 
                    className="mb-12 text-center"
                >
                  
                    <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
                        isDarkMode 
                            ? 'bg-gradient-to-r from-gray-100 to-gray-100 bg-clip-text text-transparent' 
                            : 'bg-gradient-to-r from-[#374151] to-[#374151]/80 bg-clip-text text-transparent'
                    }`}>
                        Cut Costs. Elevate Experience.
                        <span className="relative inline-block mx-2">
                            <span className="relative z-10 text-[#FF512F]">Delight</span>
                            <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path
                                    d="M0 5c30-5 70-5 100 0"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    className="text-[#FF512F] transition-all duration-300"
                                />
                            </svg>
                        </span>
                        Customers.
                    </h2>
                    
                    <p className={`text-lg max-w-4xl mx-auto leading-relaxed ${isDarkMode ? 'text-gray-100' : 'text-[#374151]'}`}>
                        We optimized a large national financial institution&apos;s customer service division by deploying AI-powered models across digital channels,
                        ultimately reducing operational expenses, enhancing efficiency, and increasing client satisfaction.
                    </p>
                </motion.div>
                
                {/* Content Section - Responsive Layout */}
                <div className={`flex flex-col lg:flex-row gap-8 backdrop-blur-md p-6 rounded-2xl border ${
                    isDarkMode 
                        ? 'bg-slate-800/30 border-slate-700' 
                        : 'bg-white/30 border-gray-200'
                }`}>
                    {/* Left Column - Actions and Outcomes */}
                    <motion.div 
                        initial="hidden"
                        animate="visible"
                        variants={container}
                        className="w-full lg:w-2/5"
                    >
                        <motion.div 
                            variants={item} 
                            className={`backdrop-blur-sm p-5 rounded-xl shadow-sm border mb-4 ${
                                isDarkMode 
                                    ? 'bg-slate-800/40 border-slate-700' 
                                    : 'bg-white/70 border-gray-200'
                            }`}
                        >
                            <h3 className="text-lg font-semibold text-[#FF512F] mb-3">Main Actions</h3>
                            <ul className={`text-sm md:text-lg space-y-2 pl-5 list-disc mt-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                                {actions.map((action, idx) => (
                                    <li key={idx} className="leading-relaxed">{action}</li>
                                ))}
                            </ul>
                        </motion.div>
                        
                        <motion.div 
                            variants={item} 
                            className={`backdrop-blur-sm p-5 rounded-xl shadow-sm border ${
                                isDarkMode 
                                    ? 'bg-slate-800/40 border-slate-700' 
                                    : 'bg-white/70 border-gray-200'
                            }`}
                        >
                            <h3 className="text-lg font-semibold text-[#FF512F] mb-3">Outcomes</h3>
                            <ul className={`text-sm md:text-lg space-y-2 pl-5 list-disc mt-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                                {outcomes.map((outcome, idx) => (
                                    <li key={idx} className="leading-relaxed">{outcome}</li>
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
                            className="overflow-hidden"
                        >
                            <svg className={`w-full h-auto ${isDarkMode ? 'text-gray-100' : 'text-black'}`} viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                                <defs>
                                    <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#FF512F', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#F09819', stopOpacity: 1 }} />
                                    </linearGradient>
                                    <linearGradient id="digitalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#FF512F', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#DD2476', stopOpacity: 1 }} />
                                    </linearGradient>
                                    <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#FF512F', stopOpacity: 0.8 }} />
                                        <stop offset="100%" style={{ stopColor: '#DD2476', stopOpacity: 0.8 }} />
                                    </linearGradient>
                                    <filter id="glow">
                                        <feGaussianBlur stdDeviation="2.5" result="blur" />
                                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                    </filter>
                                </defs>
                                
                                <rect x="0" y="0" width="800" height="600" fill="none" rx="10" ry="10" />
                                <text x="440" y="30" textAnchor="middle" fontSize="22" fontWeight="bold" className="fill-current">
                                    Optimize / Personalize
                                </text>
                                <line x1="200" y1="40" x2="670" y2="40" stroke="#FF512F" strokeWidth="3" strokeLinecap="round" />
                                <text x="150" y="70" fontSize="28" fontWeight="bold" className="fill-current">
                                    DATA
                                </text>
                                <text x="650" y="70" fontSize="28" fontWeight="bold" className="fill-current">
                                    DIGITAL
                                </text>
                                <ellipse cx="100" cy="100" rx="35" ry="10" fill="url(#dataGradient)" stroke="#FF512F" strokeWidth="1.5" />
                                <rect x="65" y="100" width="70" height="50" rx="2" fill="white" stroke="#FF512F" strokeWidth="1.5" />
                                <ellipse cx="100" cy="150" rx="35" ry="10" fill="url(#dataGradient)" stroke="#FF512F" strokeWidth="1.5" />
                                <line x1="65" y1="100" x2="65" y2="150" stroke="#FF512F" strokeWidth="1.5" />
                                <line x1="135" y1="100" x2="135" y2="150" stroke="#FF512F" strokeWidth="1.5" />
                                <line x1="80" y1="115" x2="120" y2="115" stroke="#FF512F" strokeWidth="1" />
                                <line x1="80" y1="130" x2="120" y2="130" stroke="#FF512F" strokeWidth="1" />
                                <text x="100" y="85" textAnchor="middle" fontSize="14" fontWeight="bold" className="fill-current">
                                    Historical
                                </text>
                                <text x="100" y="175" textAnchor="middle" fontSize="14" fontWeight="bold" className="fill-current">
                                    Data
                                </text>
                                <circle cx="100" cy="225" r="35" fill="white" stroke="url(#dataGradient)" strokeWidth="3" filter="url(#glow)" />
                                <text x="100" y="230" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#333">
                                    Topic
                                </text>
                                <circle cx="130" cy="205" r="7.5" fill="white" stroke="#FF512F" strokeWidth="1.5" />
                                <path d="M70,280 L130,280 L130,320 L110,320 L110,340 L70,340 Z" fill="white" stroke="#FF512F" strokeWidth="2.5" />
                                <rect x="80" y="300" width="10" height="30" rx="2" fill="#FF512F" fillOpacity="0.7" />
                                <rect x="95" y="285" width="10" height="45" rx="2" fill="#FF512F" fillOpacity="0.8" />
                                <rect x="110" y="295" width="10" height="35" rx="2" fill="#FF512F" fillOpacity="0.9" />
                                <text x="100" y="360" textAnchor="middle" fontSize="14" fontWeight="bold" className="fill-current">
                                    Analytics
                                </text>
                                <rect x="650" y="120" width="60" height="110" rx="8" stroke="#FF512F" strokeWidth="2.5" fill="white" />
                                <rect x="660" y="130" width="40" height="70" rx="3" stroke="#FF512F" strokeWidth="1.5" fill="#fafafa" />
                                <circle cx="680" cy="215" r="10" fill="white" stroke="#FF512F" strokeWidth="1.5" />
                                <rect x="675" y="140" width="10" height="10" rx="1" fill="#FF512F" fillOpacity="0.5" />
                                <rect x="690" y="140" width="10" height="10" rx="1" fill="#FF512F" fillOpacity="0.7" />
                                <rect x="675" y="155" width="10" height="10" rx="1" fill="#FF512F" fillOpacity="0.6" />
                                <rect x="690" y="155" width="10" height="10" rx="1" fill="#FF512F" fillOpacity="0.8" />
                                <rect x="675" y="170" width="25" height="5" rx="1" fill="#FF512F" fillOpacity="0.7" />
                                <text x="680" y="105" textAnchor="middle" fontSize="14" fontWeight="bold" className="fill-current">
                                    App
                                </text>
                                <text x="680" y="250" textAnchor="middle" fontSize="14" fontWeight="bold" className="fill-current">
                                    Intent Classifier
                                </text>
                                <text x="400" y="330" textAnchor="middle" fontSize="30" fontWeight="bold" className="fill-current">
                                    CONTACT CENTER
                                </text>
                                <rect x="230" y="335" width="340" height="10" rx="5" fill="url(#centerGradient)" fillOpacity="0.3" />
                                <text x="150" y="390" textAnchor="middle" fontSize="16" fontWeight="bold" className="fill-current">
                                    Intent
                                </text>
                                <text x="140" y="410" textAnchor="middle" fontSize="16" fontWeight="bold" className="fill-current">
                                    Classifier
                                </text>
                                <text x="550" y="380" textAnchor="middle" fontSize="16" fontWeight="bold" className="fill-current">
                                    Agent /
                                </text>
                                <text x="550" y="400" textAnchor="middle" fontSize="16" fontWeight="bold" className="fill-current">
                                    Expert
                                </text>
                                <text x="550" y="450" textAnchor="middle" fontSize="16" fontWeight="bold" className="fill-current">
                                    Agent /
                                </text>
                                <text x="550" y="470" textAnchor="middle" fontSize="16" fontWeight="bold" className="fill-current">
                                    Expert
                                </text>
                                <text x="550" y="520" textAnchor="middle" fontSize="16" fontWeight="bold" className="fill-current">
                                    Agent /
                                </text>
                                <text x="550" y="540" textAnchor="middle" fontSize="16" fontWeight="bold" className="fill-current">
                                    Expert
                                </text>
                                <text x="150" y="480" textAnchor="middle" fontSize="16" fontWeight="bold" className="fill-current">
                                    Expertise
                                </text>
                                <text x="150" y="500" textAnchor="middle" fontSize="16" fontWeight="bold" className="fill-current">
                                    Router
                                </text>
                                <circle cx="200" cy="400" r="18" fill="url(#dataGradient)" />
                                <circle cx="200" cy="385" r="10" fill="url(#dataGradient)" />
                                <path d="M185,400 Q200,430 215,400" stroke="white" strokeWidth="2" fill="none" />
                                <circle cx="220" cy="480" r="18" fill="url(#dataGradient)" />
                                <circle cx="220" cy="465" r="10" fill="url(#dataGradient)" />
                                <circle cx="500" cy="380" r="18" fill="url(#digitalGradient)" />
                                <circle cx="500" cy="365" r="10" fill="url(#digitalGradient)" />
                                <path d="M485,380 Q500,410 515,380" stroke="white" strokeWidth="2" fill="none" />
                                <circle cx="500" cy="450" r="18" fill="url(#digitalGradient)" />
                                <circle cx="500" cy="435" r="10" fill="url(#digitalGradient)" />
                                <path d="M485,450 Q500,480 515,450" stroke="white" strokeWidth="2" fill="none" />
                                <circle cx="500" cy="520" r="18" fill="url(#digitalGradient)" />
                                <circle cx="500" cy="505" r="10" fill="url(#digitalGradient)" />
                                <path d="M485,520 Q500,550 515,520" stroke="white" strokeWidth="2" fill="none" />
                                <circle cx="400" cy="450" r="50" fill="none" stroke="#FF512F" strokeWidth="2" strokeDasharray="5,3" />
                                <circle cx="400" cy="450" r="38" fill="none" stroke="#FF512F" strokeWidth="1.5" />
                                <circle cx="400" cy="450" r="26" fill="none" stroke="#FF512F" strokeWidth="1.5" strokeDasharray="3,2" />
                                <circle cx="400" cy="450" r="14" fill="url(#centerGradient)" />
                                <path d="M180,70 C250,150 300,220 400,300" stroke="url(#dataGradient)" strokeWidth="3" fill="none" strokeLinecap="round" />
                                <path d="M680,70 C600,150 500,215 400,300" stroke="url(#digitalGradient)" strokeWidth="3" fill="none" strokeLinecap="round" />
                                <path d="M218,400 C300,420 350,440 375,450" stroke="#FF512F" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                                <path d="M425,450 C450,430 470,410 482,380" stroke="#FF512F" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                                <path d="M425,450 L482,450" stroke="#FF512F" strokeWidth="2.5" strokeLinecap="round" />
                                <path d="M425,450 C450,470 470,490 482,520" stroke="#FF512F" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                                <path d="M240,480 C300,470 350,460 375,450" stroke="#FF512F" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                            </svg>
                        </motion.div>
                        
                        {/* Legend Box */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className={`p-4 border border-[#FF512F]/20 rounded-lg flex flex-wrap gap-4 ${
                                isDarkMode 
                                    ? 'bg-slate-800/40' 
                                    : 'bg-white/70'
                            }`}
                        >
                            <div className="flex items-center">
                                <span className="inline-block w-4 h-4 rounded-sm bg-gradient-to-br from-[#FF512F] to-[#F09819] mr-2"></span>
                                <span className={`text-sm ${isDarkMode ? 'text-gray-200' : 'text-[#374151]'}`}>Data Flow</span>
                            </div>
                            <div className="flex items-center">
                                <span className="inline-block w-4 h-4 rounded-sm bg-gradient-to-br from-[#FF512F] to-[#DD2476] mr-2"></span>
                                <span className={`text-sm ${isDarkMode ? 'text-gray-200' : 'text-[#374151]'}`}>Digital Interaction</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessStoryThree;
