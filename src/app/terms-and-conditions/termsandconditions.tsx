"use client"
import { useState, useEffect } from 'react';
import { Calendar, ChevronDown, ChevronUp } from 'lucide-react';

const TermsAndConditions = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        document.title = 'Terms and Conditions | ReKnew';
    }, []);

    // Listen for theme changes
    useEffect(() => {
        const checkTheme = () => {
            const isDark =
                document.documentElement.classList.contains("dark") ||
                document.body.classList.contains("dark") ||
                localStorage.getItem("theme") === "dark" ||
                (localStorage.getItem("theme") === null && window.matchMedia("(prefers-color-scheme: dark)").matches);
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

        const handleThemeChange = () => {
            checkTheme();
        };

        window.addEventListener("storage", handleStorageChange);
        window.addEventListener("themeChanged", handleThemeChange);
        document.addEventListener("themeChanged", handleThemeChange);

        return () => {
            observer.disconnect();
            window.removeEventListener("storage", handleStorageChange);
            window.removeEventListener("themeChanged", handleThemeChange);
            document.removeEventListener("themeChanged", handleThemeChange);
        };
    }, []);

    const Container = ({ children, className = '' }) => {
        return <div className={`mx-auto px-4 lg:px-3 max-w-7xl ${className}`}>{children}</div>;
    };
    const PolicySection = ({ id, title, children, defaultOpen = false }) => {
        const [isOpen, setIsOpen] = useState(defaultOpen);

        return (
            <section id={id} className="mb-8">
                <div className={`flex justify-between items-center cursor-pointer py-3 border-b${isDarkMode ? " border-gray-700" : " border-gray-200"}`} onClick={() => setIsOpen(!isOpen)}>
                    <h2 className="text-xl font-semibold text-[#FF512F]">{title}</h2>
                    <button 
                        className={`p-1 rounded-full transition-colors duration-200${isDarkMode ? " text-gray-400 hover:text-gray-300 hover:bg-gray-800" : " text-gray-500 hover:text-gray-700 hover:bg-gray-100"}`}
                        aria-expanded={isOpen}
                        aria-controls={`content-${id}`}>
                        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                </div>
                <div
                    id={`content-${id}`}
                    className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
                    }${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>
                    {children}
                </div>
            </section>
        );
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`min-h-screen flex flex-col${isDarkMode ? " bg-gray-900" : " bg-transparent"}`}>
            <main className="flex-grow">
                <div className={`mt-20${isDarkMode ? " bg-gray-900" : " bg-transparent"}`}>
                    <Container>
                        <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4${isDarkMode ? " text-gray-300" : " text-gray-900"}`}>Terms and Conditions</h1>
                        <div className={`flex flex-col sm:flex-row sm:items-center gap-4 mb-6 text-sm${isDarkMode ? " text-gray-300" : " text-gray-600"}`}>
                            <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-2 text-[#FF512F]" />
                                <span>ReKnew Business Solutions Inc. | Last Updated: May 2025</span>
                            </div>
                            {/* <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-2 text-[#FF512F]" />
                                <span>Last Updated: 13.5.2025</span>
                            </div> */}
                        </div>
                        <p className={`text-base md:text-lg max-w-3xl${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>
                            Please read these Terms and Conditions carefully before using the ReKnew website. By accessing or using our service, you agree to be
                            bound by these terms.
                        </p>
                    </Container>
                </div>

                <Container className="pt-12">
                    <div className="sticky top-24">
                        <nav className="space-y-1 py-8">
                            <p className={`text-sm font-medium mb-4${isDarkMode ? " text-gray-300" : " text-gray-500"}`}>Table of Contents</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {[
                                    { id: 'Agreement ', label: '1. Agreement-to-terms' },
                                    { id: 'Business ', label: '2. Business Use Only' },
                                    { id: 'Intellectual', label: '3. Intellectual Property Rights' },
                                    { id: 'Permitted', label: '4. Permitted Use' },
                                    { id: 'Warranties', label: '5. No Warranties' },
                                    { id: 'Limitation', label: '6.  Limitation of Liability' },
                                    { id: 'Indemnification', label: '7. Indemnification' },
                                    { id: 'Confidentiality', label: '8. Confidentiality and Non-Solicitation' },
                                    { id: 'Governing', label: '9. Governing Law and Jurisdiction' },
                                    { id: 'Amendments', label: '10. Amendments' }
                                ].map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors duration-200${isDarkMode ? " text-gray-300 hover:bg-gray-800 hover:text-[#FF512F]" : " text-gray-700 hover:bg-gray-100 hover:text-[#FF512F]"}`}>
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </nav>
                    </div>

                    <div className="lg:col-span-3">
                        <PolicySection id="Agreement" title="1. Agreement-to-terms" defaultOpen={true}>
                            <p className={`mb-4${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>
                                These Terms and Conditions (&quot;Terms&quot;) govern your use of the ReKnew website located at www.reknew.ai (the &quot;Site&quot;) and your
                                interaction with ReKnew Business Solutions Inc. (&quot;ReKnew,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our&quot;). By accessing the Site, you agree to be bound by
                                these Terms.
                            </p>
                            <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>If you do not agree with any part of these Terms, please do not access or use the Site.</p>
                        </PolicySection>

                        <PolicySection id="Business" title="2. Business Use Only">
                            <p className={`mb-4${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>
                                The Site and all related services are intended exclusively for business-to-business (B2B) use by individuals acting on behalf of
                                their organizations. By accessing the Site, you confirm that you are not a consumer and are acting in a professional capacity.
                            </p>
                        </PolicySection>

                        <PolicySection id="Intellectual" title="3. Intellectual Property Rights">
                            <p className={`mb-4${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>
                                All materials, content, graphics, design, trademarks, service marks, and software on the Site are the property of ReKnew or its
                                licensors and are protected under copyright, trademark, and other intellectual property laws.
                            </p>
                            <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
                                You may not reproduce, distribute, transmit, modify, create derivative works, or otherwise exploit any content from this Site
                                for commercial purposes without prior written permission from ReKnew.
                            </p>
                        </PolicySection>

                        <PolicySection id="Permitted" title="4. Permitted Use">
                            <h3 className={`text-lg font-semibold mb-2${isDarkMode ? " text-gray-300" : " text-gray-800"}`}>You may use the Site only for:</h3>
                            <ul className={`list-disc pl-6 mb-4 space-y-2${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>
                                <li>Learning about ReKnew’s services</li>
                                <li>Submitting business inquiries or requests</li>
                                <li>Applying for career opportunities</li>
                                <li>Engaging with ReKnew’s thought leadership</li>
                            </ul>
                            <h3 className={`text-lg font-semibold mb-2${isDarkMode ? " text-gray-300" : " text-gray-800"}`}>You agree not to:</h3>
                            <ul className={`list-disc pl-6 mb-4 space-y-2${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>
                                <li>Attempt unauthorized access to any systems or networks connected to the Site</li>
                                <li>Upload malicious code or engage in activities that disrupt the Site</li>
                                <li>Misrepresent your affiliation or provide false business credentials</li>
                            </ul>
                        </PolicySection>

                        <PolicySection id="Warranties" title="5. No Warranties">
                            <p className={`mb-4${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>
                                This Site is provided “as is” and “as available.” ReKnew makes no express or implied warranties or representations regarding:
                            </p>
                            <ul className={`list-disc pl-6 mb-4 space-y-2${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>
                                <li>The accuracy, completeness, or reliability of any content</li>
                                <li>The availability, security, or performance of the Site</li>
                                <li>The suitability of any material for a particular business purpose</li>
                            </ul>
                        </PolicySection>

                        <PolicySection id="Limitation" title="6. Limitation of Liability">
                            <p className={`mb-4${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>
                                To the fullest extent permitted by law, ReKnew and its affiliates shall not be liable for any indirect, incidental, special,
                                consequential, or punitive damages arising from your use of the Site.
                            </p>
                            <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>ReKnew’s total cumulative liability shall not exceed USD 100.</p>
                        </PolicySection>

                        <PolicySection id="Indemnification" title="7. Indemnification">
                            <p className={`mb-4${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>
                                You agree to indemnify, defend, and hold harmless ReKnew, its officers, directors, employees, contractors, and agents from any
                                claims, liabilities, damages, and expenses (including attorneys’ fees) arising from your use of the Site or your violation of
                                these Terms.
                            </p>
                        </PolicySection>

                        <PolicySection id="Confidentiality" title="8. Confidentiality and Non-Solicitation">
                            <p className={`mb-4${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>
                                Any proprietary or confidential information shared through the Site shall remain subject to any applicable non-disclosure
                                agreements (NDAs). You may not solicit ReKnew personnel, partners, or clients based on interactions through the Site.
                            </p>
                        </PolicySection>

                        <PolicySection id="Governing" title="9. Governing Law and Jurisdiction">
                            <p className={`mb-4${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>
                                These Terms shall be governed by the laws of the State of California, United States. All disputes arising under or in connection
                                with these Terms shall be resolved in the state or federal courts located in [Insert County, State], and you consent to the
                                exclusive jurisdiction and venue of such courts.
                            </p>
                        </PolicySection>

                        <PolicySection id="Amendments" title="10. Amendments">
                            <p className={`mb-4${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>
                                ReKnew reserves the right to update or modify these Terms at any time. Changes will be posted on this page and will become
                                effective immediately upon publication.
                            </p>
                        </PolicySection>
                    </div>
                </Container>
            </main>
        </div>
    );
};

export default TermsAndConditions;
