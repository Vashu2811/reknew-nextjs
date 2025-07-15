"use client"
import { useState, useEffect } from 'react';
import { Calendar, Clock, ChevronDown, ChevronUp } from 'lucide-react';

const PrivacyPolicy = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        document.title = 'Privacy Policy | ReKnew';
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
                    <h2 className="text-lg md:text-xl font-semibold text-[#FF512F]">{title}</h2>
                    <button
                        className={`p-1 rounded-full transition-colors duration-200${isDarkMode ? " text-gray-400 hover:text-gray-300 hover:bg-gray-800" : " text-gray-500 hover:text-gray-700 hover:bg-gray-100"}`}
                        aria-expanded={isOpen ? "true" : "false"}
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
                <div className="py-16">
                    <Container>
                        <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4${isDarkMode ? " text-gray-300" : " text-gray-900"}`}>Privacy Policy</h1>
                        <div className={`flex flex-col sm:flex-row sm:items-center gap-4 mb-6 text-sm${isDarkMode ? " text-gray-300" : " text-gray-600"}`}>
                            <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-2 text-[#FF512F]" />
                                <span>Effective Date: 13.5.2025</span>
                            </div>
                            <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-2 text-[#FF512F]" />
                                <span>Last Updated: 13.5.2025</span>
                            </div>
                        </div>
                        <p className={`text-base md:text-lg max-w-3xl${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>
                            This Privacy Policy describes how ReKnew Business Solutions Inc. collects, uses, stores, discloses, and safeguards the information you provide to us
                        </p>
                    </Container>
                </div>

                <Container className="py-12">
                    <div className="">
                        <div className=" top-24">
                            <nav className="space-y-1 py-8">
                                <p className={`text-sm font-medium mb-4${isDarkMode ? " text-gray-300" : " text-gray-500"}`}>Table of Contents</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{[
                                    { id: 'introduction', label: '1. Introduction' },
                                    { id: 'scope', label: '2. Scope of This Policy' },
                                    { id: 'information', label: '3. Information We Collect' },
                                    { id: 'use', label: '4. How We Use the Information' },
                                    { id: 'basis', label: '5. Legal Basis for Processing' },
                                    { id: 'disclosure', label: '6. Disclosure of Your Information' },
                                    { id: 'retention', label: '7. Data Retention' },
                                    { id: 'security', label: '8. Security Measures' },
                                    { id: 'rights', label: '9. Your Privacy Rights' },
                                    { id: 'cookies', label: '10. Cookies and Tracking Technologies' },
                                    { id: 'children', label: "11. Children's Privacy" },
                                    { id: 'updates', label: '12. Policy Updates' },
                                    { id: 'contact', label: '13. Contact Us' }
                                ].map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-colors duration-200${isDarkMode ? " text-gray-300 hover:bg-gray-800 hover:text-[#FF512F]" : " text-gray-700 hover:bg-gray-100 hover:text-[#FF512F]"}`}>
                                        {item.label}
                                    </button>
                                ))}</div>
                            </nav>
                        </div>

                        <div className="lg:col-span-3">
                            <PolicySection id="introduction" title="1. Introduction" defaultOpen={true}>
                                <p className={`mb-4${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>
                                    ReKnew Business Solutions Inc. (&quot;ReKnew,&quot; &quot;we,&ldquo; &quot;us,&quot; or &quot;our&quot;) values the privacy and confidentiality of our enterprise clients, prospects,
                                    and business users. This Privacy Policy describes how we collect, use, store, disclose, and safeguard the information you
                                    provide to us through our website located at www.reknew.ai (the &quot;Site&quot;), and in the course of engaging with our business
                                    services.
                                </p>
                                <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
                                    This Policy is intended to comply with applicable U.S. privacy laws, including the California Consumer Privacy Act (&quot;CCPA&quot;),
                                    and where relevant, the General Data Protection Regulation (&quot;GDPR&quot;) for international data subjects. By accessing our Site
                                    or interacting with ReKnew, you acknowledge and accept the practices described herein.
                                </p>
                            </PolicySection>

                            <PolicySection id="scope" title="2. Scope of This Policy">
                                <p className={`mb-4${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>This Privacy Policy applies to all data collected:</p>
                                <ul className={`list-disc pl-6 mb-4 space-y-2${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>
                                    <li>Through our website and related digital properties</li>
                                    <li>Via communications with our team (e.g., sales inquiries, demo requests)</li>
                                    <li>Through business engagements, partnerships, and service contracts</li>
                                    <li>From job applicants or individuals representing business clients or partners</li>
                                </ul>
                                <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>This Policy does not apply to third-party websites or services linked from our Site.</p>
                            </PolicySection>

                            <PolicySection id="information" title="3. Information We Collect">
                                <p className={`mb-4${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>
                                    ReKnew collects both personal and non-personal information from users and business clients, which may include:
                                </p>

                                <h3 className={`text-lg font-semibold mb-2${isDarkMode ? " text-gray-300" : " text-gray-800"}`}>a. Business Contact Information</h3>
                                <p className={`mb-2${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>
                                    Collected when you fill out forms, request demos, contact our team, or otherwise provide details:
                                </p>
                                <ul className={`list-disc pl-6 mb-4 space-y-2${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>
                                    <li>Full name, job title, and business email address</li>
                                    <li>Company name, size, and industry</li>
                                    <li>Business phone number</li>
                                    <li>Professional affiliations or roles</li>
                                </ul>

                                <h3 className={`text-lg font-semibold mb-2${isDarkMode ? " text-gray-300" : " text-gray-800"}`}>b. Technical and Usage Data</h3>
                                <p className={`mb-2${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>Automatically collected through our Site and third-party analytics tools:</p>
                                <ul className={`list-disc pl-6 mb-4 space-y-2${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>
                                    <li>IP address and geolocation (approximate)</li>
                                    <li>Browser type and version</li>
                                    <li>Device type, operating system</li>
                                    <li>Pages viewed, time on site, and interaction data</li>
                                    <li>Referring URLs</li>
                                </ul>

                                <h3 className={`text-lg font-semibold mb-2${isDarkMode ? " text-gray-300" : " text-gray-800"}`}>c. Communication Records</h3>
                                <p className={`mb-2${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>
                                    Collected when you engage in email exchanges, virtual meetings, or other communications with ReKnew, including:
                                </p>
                                <ul className={`list-disc pl-6 mb-4 space-y-2${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>
                                    <li>Meeting notes and summaries</li>
                                    <li>Email metadata</li>
                                    <li>Uploaded documents (if any)</li>
                                </ul>

                                <h3 className={`text-lg font-semibold mb-2${isDarkMode ? " text-gray-300" : " text-gray-800"}`}>d. Client or Project Data (If Applicable)</h3>
                                <p className={`mb-2${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>
                                    In the context of service engagements, we may collect or process enterprise data (structured or unstructured), including:
                                </p>
                                <ul className={`list-disc pl-6 mb-4 space-y-2${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>
                                    <li>Non-PII business process data</li>
                                    <li>Metadata for AI model training</li>
                                    <li>System integration and workflow documentation</li>
                                </ul>
                                <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>Any such data is processed under applicable NDAs, MSAs, or SOWs.</p>
                            </PolicySection>

                            <PolicySection id="use" title="4. How We Use the Information">
                                <p className={`mb-4${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>ReKnew uses the information we collect for legitimate business purposes, including:</p>
                                <ul className={`list-disc pl-6 mb-4 space-y-2${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>
                                    <li>To respond to inquiries, schedule demos, and manage business relationships</li>
                                    <li>To provide, maintain, and improve our services and offerings</li>
                                    <li>To communicate updates, thought leadership content, and invitations to events (with opt-out)</li>
                                    <li>To personalize your experience on our website</li>
                                    <li>To analyze user behavior and improve website performance</li>
                                    <li>To ensure information security and detect/prevent misuse</li>
                                    <li>To comply with legal or regulatory obligations</li>
                                </ul>
                                <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
                                    We do not engage in consumer profiling or automated decision-making processes using your personal information.
                                </p>
                            </PolicySection>

                            <PolicySection id="basis" title="5. Legal Basis for Processing (Where GDPR Applies)">
                                <p className={`mb-4${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>Where applicable, our lawful bases for processing personal data include:</p>
                                <ul className={`list-disc pl-6 mb-4 space-y-2${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>
                                    <li>Your consent (for marketing communications)</li>
                                    <li>Performance of a contract (e.g., responding to service inquiries)</li>
                                    <li>Compliance with legal obligations</li>
                                    <li>Legitimate interest (e.g., business development, security, analytics)</li>
                                </ul>
                            </PolicySection>

                            <PolicySection id="disclosure" title="6. Disclosure of Your Information">
                                <p className={`mb-4${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>ReKnew may disclose your information under the following circumstances:</p>

                                <h3 className={`text-lg font-semibold mb-2${isDarkMode ? " text-gray-300" : " text-gray-800"}`}>a. Service Providers and Subprocessors</h3>
                                <p className={`mb-2${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>
                                    We may share data with third-party vendors or service providers that support our operations, such as:
                                </p>
                                <ul className={`list-disc pl-6 mb-4 space-y-2${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>
                                    <li>CRM systems</li>
                                    <li>Cloud hosting providers (e.g., AWS, GCP)</li>
                                    <li>Analytics platforms (e.g., Google Analytics, HubSpot)</li>
                                    <li>Marketing automation tools</li>
                                </ul>
                                <p className={`mb-4${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>
                                    All such entities are bound by appropriate contractual and confidentiality obligations, and undergo security vetting.
                                </p>

                                <h3 className={`text-lg font-semibold mb-2${isDarkMode ? " text-gray-300" : " text-gray-800"}`}>b. Legal and Regulatory Compliance</h3>
                                <p className={`mb-2${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>We may disclose your information when required to:</p>
                                <ul className={`list-disc pl-6 mb-4 space-y-2${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>
                                    <li>Comply with applicable law, regulation, legal process, or governmental request</li>
                                    <li>Enforce our legal agreements or protect ReKnew&apos;s legal rights</li>
                                </ul>

                                <h3 className={`text-lg font-semibold mb-2${isDarkMode ? " text-gray-300" : " text-gray-800"}`}>c. Business Transfers</h3>
                                <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
                                    If ReKnew is involved in a merger, acquisition, asset sale, or corporate restructuring, your information may be transferred
                                    to the acquiring entity.
                                </p>
                            </PolicySection>

                            <PolicySection id="retention" title="7. Data Retention">
                                <p className={`mb-4${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>
                                    We retain business-related personal data for as long as necessary to fulfill the purposes outlined in this Policy or as
                                    required under applicable laws, accounting standards, and contractual obligations.
                                </p>
                                <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>Once retention periods expire, data is securely deleted or anonymized.</p>
                            </PolicySection>

                            <PolicySection id="security" title="8. Security Measures">
                                <p className={`mb-4${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>
                                    ReKnew implements a range of technical, administrative, and organizational measures to safeguard your data, including:
                                </p>
                                <ul className={`list-disc pl-6 mb-4 space-y-2${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>
                                    <li>SSL/TLS encryption for data in transit</li>
                                    <li>Firewall and intrusion detection systems</li>
                                    <li>Access control and role-based permissions</li>
                                    <li>Routine vulnerability assessments and secure development practices</li>
                                </ul>
                                <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
                                    Despite our best efforts, no system can be guaranteed 100% secure. Users are encouraged to exercise caution when submitting
                                    information online.
                                </p>
                            </PolicySection>

                            <PolicySection id="rights" title="9. Your Privacy Rights">
                                <p className={`mb-4${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>Depending on your jurisdiction, you may have the right to:</p>
                                <ul className={`list-disc pl-6 mb-4 space-y-2${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>
                                    <li>Access the personal data we hold about you</li>
                                    <li>Correct inaccuracies in your information</li>
                                    <li>Request erasure of your data (subject to exceptions)</li>
                                    <li>Object to or restrict processing</li>
                                    <li>Withdraw consent at any time (where applicable)</li>
                                    <li>Lodge a complaint with a regulatory authority</li>
                                </ul>
                                <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
                                    To exercise any of these rights, please contact{' '}
                                    <a href="mailto:privacy@reknew.ai" className="text-[#FF512F] hover:text-blue-800 underline">
                                        privacy@reknew.ai
                                    </a>
                                    . We will respond within applicable statutory timeframes.
                                </p>
                            </PolicySection>

                            <PolicySection id="cookies" title="10. Cookies and Tracking Technologies">
                                <p className={`mb-4${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>
                                    We use cookies, tags, and similar technologies for performance analytics and remarketing purposes. You can manage cookie
                                    preferences via your browser settings. Some features may not function properly if cookies are disabled.
                                </p>
                            </PolicySection>

                            <PolicySection id="children" title="11. Children's Privacy">
                                <p className={`mb-4${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>
                                    Our services are intended solely for business professionals and are not directed at individuals under the age of 18. We do
                                    not knowingly collect information from minors.
                                </p>
                            </PolicySection>

                            <PolicySection id="updates" title="12. Policy Updates">
                                <p className={`mb-4${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>
                                    We may revise this Privacy Policy from time to time. The &quot;Last Updated&quot; date will reflect the most recent revision.
                                    Continued use of our Site constitutes your acceptance of the updated Policy.
                                </p>
                            </PolicySection>

                            <PolicySection id="contact" title="13. Contact Us">
                                <p className={`mb-4${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>
                                    For questions, requests, or complaints related to this Privacy Policy, contact:{' '}
                                    <a href="mailto:privacy@reknew.ai" className="text-[#FF512F] hover:text-blue-800 underline">
                                        privacy@reknew.ai
                                    </a>
                                </p>
                            </PolicySection>
                        </div>
                    </div>
                </Container>
            </main>
        </div>
    );
};

export default PrivacyPolicy;
