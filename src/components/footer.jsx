// components/Footer.js
"use client";
import React, { useCallback } from 'react';
import { Linkedin, MapPin, Mail, Phone } from 'lucide-react';
import logo from '../../public/assets/rklogo_black.png';
import logoWhite from '../../public/assets/reknew-logo-white.png';
import { useThemeStyles } from '../hooks/useThemeStyles';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Footer = () => {
    const { isDark, themeStyles, mounted } = useThemeStyles();
    const router = useRouter();

    const handleNavigation = (path) => {
        setTimeout(() => {
            router.push(path); // navigate to new page
            window.scrollTo(0, 0); // scroll to top
        }, 300);
    };
    const handleNavigation2 = useCallback(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!mounted) {
        return (
            <div className="relative bg-gradient-to-b">
                <div className="container mx-auto max-w-7xl px-6 py-10">
                    <div className="h-64 bg-gray-200 animate-pulse rounded"></div>
                </div>
            </div>
        );
    }

    return (
        <div className={`relative bg-gradient-to-b ${themeStyles.bg.primary}`}>
            <div className="container mx-auto max-w-7xl px-6 py-10">
                <div className="flex flex-col lg:flex-row justify-between gap-8">
                    <div className="lg:max-w-[450px] flex flex-col gap-6">
                        <div onClick={() => handleNavigation('/')} className="w-fit cursor-pointer">
                            <Image src={isDark ? logoWhite : logo} alt="ReKnew Logo" className="w-[208px] transition-opacity duration-300" />
                        </div>
                        <div className="group">
                            <p className={`${themeStyles.text.secondary} text-base md:text-lg leading-[1.6] rounded-xl hover:from-[#ff715508] dark:hover:from-[#FF512F08] hover:to-transparent transition-all duration-500 ease-out`}>
                                <span className={themeStyles.text.primary}>
                                    We help organizations reduce inefficiencies, automate workflows, and unlock growth opportunities.
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 xl:gap-16">
                        <div className="flex flex-col gap-3">
                            <h3 className={`font-bold ${themeStyles.text.primary} text-lg md:text-xl relative group cursor-default`}>
                                Coffee? Please Drop By
                                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#ff7155] dark:bg-[#FF512F] rounded-full transition-all duration-700 ease-in-out group-hover:w-full opacity-70"></span>
                            </h3>
                            <div className="flex flex-col gap-2">
                                {[
                                    { icon: MapPin, text: '4030 Old Milton Parkway Alpharetta, GA 30005 USA', href: 'https://maps.google.com' },
                                    { icon: Mail, text: 'social@reknew.ai', href: 'mailto:social@reknew.ai' },
                                    { icon: Phone, text: '+1(678) 253-2599', href: 'tel:+16782532599' }
                                ].map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        className={`group cursor-pointer flex items-center gap-3 ${themeStyles.text.secondary} py-1.5 px-2 rounded-lg transition-all duration-500 text-base ${
                                            isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'
                                        }`}
                                        target={item.href.startsWith('http') ? '_blank' : undefined}
                                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                                        <item.icon
                                            size={20}
                                            className="text-[#ff7155] dark:text-[#FF512F] shrink-0 transition-all duration-500 ease-out group-hover:scale-110"
                                        />
                                        <span className={`cursor-pointer transition-all hover:text-[#ff7155] dark:hover:text-[#FF512F] duration-500 group-hover:translate-x-1 ${themeStyles.text.primary}`}>
                                            {item.text}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`flex flex-col md:flex-row justify-between items-center gap-4 pt-2 mt-4 border-t ${themeStyles.border.primary}`}>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                        <div className="flex gap-4 justify-center items-center">
                            <Link
                                onClick={handleNavigation2}
                                href="/privacy-policy"
                                className={`${themeStyles.text.muted} text-sm font-semibold hover:text-[#ff7155] dark:hover:text-[#FF512F] transition-all duration-300`}>
                                Privacy Policy
                            </Link>
                            <span className={themeStyles.text.muted}>|</span>
                            <Link
                                onClick={handleNavigation2}
                                href="/terms-and-conditions"
                                className={`${themeStyles.text.muted} text-sm font-semibold hover:text-[#ff7155] dark:hover:text-[#FF512F] transition-all duration-300`}>
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>
                    
                    <div className="flex gap-8">
                        {[{ icon: Linkedin, href: 'https://www.linkedin.com/company/reknew-business-solutions/' }].map((item, index) => (
                            <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit our LinkedIn page"
                                key={index}
                                className={`p-2.5 rounded-full ${themeStyles.text.muted} hover:text-[#ff7155] dark:hover:text-[#FF512F] hover:bg-[#ff715508] dark:hover:bg-[#FF512F08] transition-all duration-500 hover:scale-125`}>
                                <item.icon size={20} strokeWidth={1.5} className="transition-transform duration-500" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-4 mb-2">
                    <div className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-transparent ${
                        isDark ? 'via-gray-800/30' : 'via-gray-100/50'
                    } to-transparent rounded-full`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-[#ff7155] dark:text-[#FF512F]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M18 8h1a4 4 0 010 8h-1M5 8h10a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4a2 2 0 012-2z"
                            />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 20v-2" />
                        </svg>
                        <p className={`${themeStyles.text.secondary} text-sm font-medium tracking-wide`}>
                            <span className="font-semibold text-[#ff7155] dark:text-[#FF512F]">Brewing Enterprise Transformation.</span>
                            <span className="mx-1">You are welcome to pour your</span>
                            <span className="italic text-[#ff7155] dark:text-[#FF512F]">Deepwork, Curiosity,</span>
                            <span className="ml-1">and your favorite coffee.</span>
                        </p>
                    </div>
                    <p className={`${themeStyles.text.muted} text-sm`}>© 2025 ReKnew. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};


export default Footer;
