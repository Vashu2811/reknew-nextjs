"use client";
import { useState, useEffect } from 'react';
import { Linkedin } from 'lucide-react';
import muraliSajja from '../../../public/assets/MurliSir.jpg';
import MariaMann from '../../../public/assets/maria.webp';
import les from '../../../public/assets/les.jpeg';
import MuraliKashaboina from '../../../public/assets/Murali-New-Resized.webp';
import KatiDiFazio from '../../../public/assets/KatiDiFazio.jpg';
import KiranBatchu from '../../../public/assets/KiranBatchu.png'; 
import Tommy from '../../../public/assets/Tommy.png'; // Assuming Tommy's image is available in the assets folder
import Image from 'next/image';

const LeadershipTeam = () => {
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

    const TeamMember = ({ name, role, tagline, bio, imageUrl, index, linkedIn }) => {
        const [isHovered, setIsHovered] = useState(false);

        return (
            <div
                className="group relative rounded-xl overflow-hidden h-[550px] md:h-[500px] shadow-lg hover:shadow-xl transition-all duration-500"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                {/* Background image with gradient overlay */}
                <div className={`absolute inset-0 w-full h-full ${isDarkMode ? "bg-gray-800" : "bg-gray-100"}`}>
                    <Image
                        src={imageUrl}
                        alt={name}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover object-top transform transition-transform duration-700"
                        style={{
                            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                        }}
                    />
                    <div
                        className={`absolute inset-0 transition-all duration-500 ${
                            isHovered
                                ? 'bg-gradient-to-t from-black via-black/80 to-black/50 opacity-95'
                                : 'bg-gradient-to-t from-black via-black/50 to-transparent opacity-80'
                        }`}
                    />
                </div>

                {/* Content container */}
                <div className="relative h-full w-full flex flex-col p-6 justify-end z-10">
                    {/* LinkedIn icon - always visible */}
                    {linkedIn && (
                        <a
                            href={linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute top-5 right-5 bg-black/50 hover:bg-[#FF512F] p-2 rounded-full transition-all duration-300 z-20"
                            aria-label={`LinkedIn profile of ${name}`}>
                            <Linkedin size={18} className="text-white" />
                        </a>
                    )}

                    {/* Role badge */}

                    {/* Name with animation */}
                    <h3 className={`text-2xl font-bold text-white mb-2 transition-all duration-300 ${isHovered ? 'text-[#FF512F]' : ''}`}>{name}</h3>
                    <div
                        className={`inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-3 w-fit transition-all duration-300 ${
                            isHovered ? 'bg-[#FF512F]/20 border-[#FF512F]/40' : ''
                        }`}>
                        <span className="text-white text-sm font-medium">{role}</span>
                    </div>
                    {/* Content container - changes based on hover state */}
                    <div className="overflow-hidden">
                        {/* Expanded content (shown on hover) */}
                        <div
                            className={`transition-all duration-500 ease-in-out ${
                                isHovered ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 absolute'
                            }`}>
                            <h4 className="text-[#FF512F] font-semibold mb-2 transform transition-all">{tagline}</h4>
                            <div className="h-[1px] w-16 bg-[#FF512F]/30 mb-3"></div>
                            <p className="text-white/90 text-sm leading-relaxed mb-4 line-clamp-14">{bio}</p>
                        </div>

                        {/* Default content (shown when not hovered) */}
                        <div className={`transition-all duration-300 ${isHovered ? 'opacity-0 absolute -z-10' : 'opacity-100'}`}>
                            <p className="text-white/70 text-sm line-clamp-2">{tagline}</p>
                        </div>
                    </div>

                    <div
                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#FF512F] to-[#DD4124] transition-all duration-500 ease-out"
                        style={{ width: isHovered ? '100%' : '25%' }}
                    />
                </div>
            </div>
        );
    };

    const leaders = [
        {
            name: 'Murali Sajja',
            role: 'CEO',
            bio: "Murali Sajja is a seasoned Enterprise Tech practitioner with 25+ years building teams that deliver measurable brand value. As a bootstrapping entrepreneur, he's passionate about solving complex enterprise challenges through human-centered innovation. At ReKnew, Murali helps organizations unleash new value streams and reduce inefficiencies by strategically harnessing human and AI capabilities for unprecedented outcomes. He prioritizes all stakeholders—team members, customers, investors, and partners and creates a cohesive environment for all to thrive and cherish the journey. Outside work, he enjoys reading, traveling, cherishing family and friends, solitude, meeting people and sharing a laugh.",
            imageUrl: muraliSajja,
            linkedIn: 'https://www.linkedin.com/in/murali-sajja/'
        },
        {
            name: 'Les D’Souza',
            role: 'CTO',
            bio: "Les is a seasoned digital leader with over 25 years of experience helping organizations – from startups to global giants – transform and innovate. He's passionate about using modern technologies like AI/ML and cloud to create real business value. Known for his ability to drive new ventures and mentor others, Les is a patented problem-solver who has mastered the balance of driving innovation at work and enjoying a fulfilling life outside of it as a father, husband, and human. ",
            imageUrl: les,
            linkedIn: 'https://www.linkedin.com/in/lestan/'
        },
        
        {
            name: 'Kati DiFazio',
            role: 'Sr. Partner, Enterprise AI Adoption',
            bio: 'With extensive expertise in formal program management, Kati brings a distinguished career spanning twenty years at JP Morgan Chase and a decade as Founder and Managing Partner of KMD Advisors, where she repeatedly succeeded in guiding large cross-functional teams through complex implementations. At ReKnew, Kati will lead our Adaptive Enablement practice, helping enterprises navigate the human side of AI transformation. Her proven track record of managing enterprise-wide change initiatives makes her the perfect leader to help our clients truly integrate AI into their organizational DNA.',
            imageUrl: KatiDiFazio,
            linkedIn: 'http://linkedin.com/in/kati-difazio-116750'
        },

        {
            name: 'Maria Mann',
            role: 'Strategic Advisor',
            bio: "Maria brings unmatched strategic foresight to ReKnew. With her deep industry experience and passion for purposeful growth, she helps steer the company's direction and long-term vision. Her influence ensures that every innovation aligns with our mission and our humanity.",
            imageUrl: MariaMann,
            linkedIn: 'https://www.linkedin.com/in/maria-alvarez-mann-202993a/'
        },
        {
            name: 'Tommy Nicholson',
            role: 'Context Architect',
            bio: "Tommy is a strategic data and analytics leader with over 20 years of experience helping companies—from leading banks to digital-first teams—turn complex data challenges into business value. He's passionate about using AI, analytics, and modern data platforms to enhance customer experiences, streamline operations, and drive meaningful outcomes. Respected for his ability to bridge business goals with technical solutions, Tommy is a thoughtful builder, mentor, and storyteller. At ReKnew Business Solutions, he partners with clients to bring clarity, speed, and innovation to their most critical data and AI initiatives.",
            imageUrl: Tommy,
            linkedIn: 'https://www.linkedin.com/in/tommynicholson/'
        },
        {
            name: 'Kiran Batchu',
            role: 'Designation: Context Engineering Lead',
            bio: "Kiran is a seasoned software and cloud architecture leader with over 20 years of experience delivering scalable, real-time, and data-driven solutions across the financial services industry. He specializes in Modern Data Platforms, MLOps, and cross-platform engineering, with deep proficiency in technologies like Spark, Kafka, Snowflake, and AWS. Kiran has led the design and implementation of cloud-native platforms, real-time analytics frameworks, and regulatory AI models at organizations at leading financial institutions. Recognized for award-winning innovation and technical leadership, Kiran bridges business and technology to bring ideas to market.",
            imageUrl: KiranBatchu,
            linkedIn: ''
        },
        {
            name: 'Murali Kashaboina',
            role: 'Advisor, Data and AI',
            bio: "A highly accomplished digital innovator, Murali Kashaboina has a deep expertise in creating and delivering data and digital solutions that optimize organizational performance. With over 25 years of experience, he has successfully led digital transformation initiatives in healthcare, transportation, and manufacturing. Murali's strengths lie in his ability to blend technical vision with business acumen, driving innovation through AI/data science, cloud enablement, and enterprise architecture, all while fostering a customer-centric approach. Murali is a true technology thought leader with a PhD in data science, AI, and machine learning to prove it!",
            imageUrl: MuraliKashaboina,
            linkedIn: 'https://www.linkedin.com/in/kbmurali/'
        },
        {
            name: 'ReKnew Engineering Team',
            role: 'ReKnew',
            bio: "Operating from strategic hubs in India and USA, ReKnew's engineering team combines local expertise with a global talent pool. This collaborative structure enables us to build diverse and dynamic teams that deliver cutting-edge solutions and exceptional value to our clients.",
            imageUrl:
                'https://images.unsplash.com/photo-1563461660947-507ef49e9c47?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    ];

    return (
        <div id="leadership" className="py-24 max-w-7xl mx-auto relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                        Fearless
                        <span className="relative inline-block mx-2">
                            <span className="relative z-10 text-[#FF512F]">Thinkers</span>
                            <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5c30-5 70-5 100 0" stroke="#FF512F" strokeWidth="2" fill="none" />
                            </svg>
                        </span>
                        and Relentless
                        <span className="relative inline-block mx-2">
                            <span className="relative z-10 text-[#FF512F]">Executioners</span>
                            <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5c30-5 70-5 100 0" stroke="#FF512F" strokeWidth="2" fill="none" />
                            </svg>
                        </span>
                    </h2>

                    <p className={`text-base md:text-lg max-w-2xl mx-auto ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                        Take a look beyond the code and algorithms at what makes ReKnew so effective – our people and our passion.
                    </p>
                </div>

                {/* Team grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {leaders.map((leader, index) => (
                        <TeamMember
                            key={index}
                            name={leader.name}
                            role={leader.role}
                            bio={leader.bio}
                            imageUrl={leader.imageUrl}
                            index={index}
                            linkedIn={leader.linkedIn} tagline={undefined}                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LeadershipTeam;
