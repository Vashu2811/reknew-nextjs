
"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import CanvasDots from "../../components/canvas";
import Arrow from "../../../public/assets/Arrow logo.png";
import Image from "next/image";

const Slide = ({ isActive, children }) => (
  <div className="absolute w-full h-screen overflow-hidden">
    <div
      className={`w-full h-full flex mx-2 md:px-4 transition-all duration-700 ease-in-out absolute top-0 left-0 ${
        isActive
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-full pointer-events-none"
      }`}
    >
      {children}
    </div>
  </div>
);

const HomepageVarticalSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Listen for theme changes from navbar
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

  // Check if the device is mobile based on screen width
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // Common breakpoint for mobile devices
    };

    checkIsMobile(); // Check initially
    window.addEventListener("resize", checkIsMobile); // Listen for window resize

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const slides = [
    {
      id: "1",
      title: "Home-page-section-slide-1",
      content: (
        <>
          <section className="w-full relative flex justify-center p-0 mt-5 xxl:px-[150px] xxl:mt-[200px] xl:mt-[200px]">
            <div className="flex flex-col gap-4 max-w-7xl mx-auto">
              {/* Main Heading */}
              <div className="text-center px-4 sm:px-6 md:px-8">
                <h1
                  className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight ${
                    isDarkMode ? "text-white" : "text-[#374151]"
                  }`}
                >
                  Empowering Enterprises Through
                  <div className="relative inline-block mt-1">
                    <span
                      className={`relative z-10 ml-2 ${
                        isDarkMode ? "text-[#FF512F]" : "text-[#FF512F]"
                      }`}
                    >
                      Data and Digital Modernization
                    </span>
                    <svg
                      className="absolute -bottom-1 left-0 w-full"
                      height="8"
                      viewBox="0 0 100 10"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 5c30-5 70-5 100 0"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        className={`${
                          isDarkMode ? "text-[#FF512F]" : "text-[#FF512F]"
                        } transition-all duration-300`}
                      />
                    </svg>
                  </div>
                </h1>
              </div>

              {/* Subheading */}
              <div className={`px-4 sm:px-6 md:px-10 lg:px-16 max-w-6xl mx-auto ${
                      isDarkMode ? "text-gray-100" : "text-gray-800"
                    }`}>
                <p className="text-base md:text-lg font-medium text-center">
                  ReKnew&apos;s pre-built accelerators enable rapid delivery of
                  high-impact use cases - risk, compliance, fraud detection,
                  complaint resolution, etc. - while modernizing data
                  infrastructure to ensure secure, reliable AI adoption.
                </p>
              </div>
              <div className="px-2 sm:px-6 md:px-8 lg:px-8 max-w-7xl md:mt-2">
                <div
                  className={`rounded-xl p-3 border border-[#FF512F]/20 ${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  <div className="flex md:justify-center">
                    <h3
                      className={`font-semibold text-xl md:text-2xl w-fit border-b border-[#FF512F]/20 pb-2 relative text-left md:text-center ${
                        isDarkMode ? "text-gray-100" : "text-gray-800"
                      }`}
                    >
                      Built by Practitioners, Designed for Scale
                      <div className="absolute -bottom-px left-0 w-8 h-[2px] bg-[#FF512F]"></div>
                    </h3>
                  </div>
                  <p
                    className={`text-base md:text-lg mt-2 text-left md:text-center ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Our team consists of former enterprise data leaders with
                    decades of experience in building modern,
                    <br /> cloud-native data platforms. We bring deep expertise
                    in:
                  </p>
                </div>
              </div>

              {/* Team Section */}
              <div className="px-2 sm:px-6 md:px-8 pb-5 max-w-7xl mx-auto backdrop-blur-sm rounded-xl md:pt-3">
                {/* Expertise Points */}
                <div className="grid md:grid-cols-3 gap-2 md:gap-3">
                  <div
                    className={`rounded-2xl p-2 md:p-4 sm:p-6 border border-[#FF512F]/20 shadow-xl hover:shadow-2xl transition duration-300 relative overflow-hidden group ${
                      isDarkMode ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    <h3
                      className={`font-semibold text-lg md:text-xl border-b border-[#FF512F]/20 pb-2 relative ${
                        isDarkMode ? "text-gray-100" : "text-gray-800"
                      }`}
                    >
                      Modernization Roadmaps
                      <div className="absolute -bottom-px left-0 w-8 h-[2px] bg-[#FF512F]"></div>
                    </h3>
                    <p
                      className={`text-base md:text-lg mt-2 ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Strategic planning to align data investments with business
                      outcomes.
                    </p>
                  </div>

                  <div
                    className={`rounded-2xl p-2 md:p-4 sm:p-6 border border-[#FF512F]/20 shadow-xl hover:shadow-2xl transition duration-300 relative overflow-hidden group ${
                      isDarkMode ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    <h3
                      className={`font-semibold text-lg md:text-xl border-b border-[#FF512F]/20 pb-2 relative ${
                        isDarkMode ? "text-gray-100" : "text-gray-800"
                      }`}
                    >
                      Cloud-Native Architecture
                      <div className="absolute -bottom-px left-0 w-8 h-[2px] bg-[#FF512F]"></div>
                    </h3>
                    <p
                      className={`text-base md:text-lg mt-2 ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Designing and implementing scalable, secure, and
                      future-ready data ecosystems.
                    </p>
                  </div>

                  <div
                    className={`rounded-2xl p-2 md:p-4 sm:p-6 border border-[#FF512F]/20 shadow-xl hover:shadow-2xl transition duration-300 relative overflow-hidden group ${
                      isDarkMode ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    <h3
                      className={`font-semibold text-lg md:text-xl border-b border-[#FF512F]/20 pb-2 relative ${
                        isDarkMode ? "text-gray-100" : "text-gray-800"
                      }`}
                    >
                      ROI-Focused Delivery
                      <div className="absolute -bottom-px left-0 w-8 h-[2px] bg-[#FF512F]"></div>
                    </h3>
                    <p
                      className={`text-base md:text-lg mt-2 ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Measurable impact through streamlined implementation and
                      automation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ),
    },
    {
      id: "2",
      title: "Home-page-section-slide-2",
      content: (
        <>
          {/* Main container for slide 2 - Context Engineering section */}
          <section className="w-full relative flex justify-center p-0 mt-5 xxl:px-[150px] xxl:mt-[200px] xl:mt-[200px]">
            <div className="flex flex-col gap-2 md:gap-4 max-w-7xl mx-auto">
              {/* Main Heading - AI Adoption */}
              <div className="text-center px-4 sm:px-6 md:px-8">
                <h1
                  className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight ${
                    isDarkMode ? "text-white" : "text-[#374151]"
                  }`}
                >
                  Bridging the Gap for
                  <div className="relative inline-block mt-1">
                    <span className="relative z-10 text-[#FF512F] dark:text-[#FF512F] ml-2">
                      Scalable AI Adoption
                    </span>
                    <svg
                      className="absolute -bottom-1 left-0 w-full"
                      height="8"
                      viewBox="0 0 100 10"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 5c30-5 70-5 100 0"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        className="text-[#FF512F] dark:text-[#FF512F] transition-all duration-300"
                      />
                    </svg>
                  </div>
                </h1>
              </div>

              {/* Subheading - Context Chasm explanation */}
              <div className={`px-2 sm:px-6 md:px-10 lg:px-16 max-w-5xl mx-auto ${
                      isDarkMode ? "text-gray-100" : "text-gray-800"
                    }`}>
                <p className="text-base md:text-lg relative font-medium text-center">
                  ReKnew&apos;s Context Engineering™ approach helps enterprises adopt
                  AI by closing the gaps across data, cloud,{" "}
                </p>
                <p className="text-base md:text-lg relative font-medium text-center">
                  workflows, and talent. ReKnew helps business groups mitigate{" "}
                  <span className="relative inline-block mt-1">
                    &quot;
                    <span className="relative z-10 text-[#FF512F] dark:text-[#FF512F]">
                      Context Chasm
                    </span>
                    &quot;.
                    <svg
                      className="absolute -bottom-1 left-0 w-full"
                      height="8"
                      viewBox="0 0 100 10"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 5c30-5 70-5 100 0"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        className="text-[#FF512F] dark:text-[#FF512F] transition-all duration-300"
                      />
                    </svg>
                  </span>
                </p>
              </div>

              {/* Content Sections - Two main value propositions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 px-2 sm:px-6 md:px-8 lg:px-8 max-w-7xl mx-auto md:mt-4">
                <div
                  className={`rounded-2xl p-2 md:p-4 sm:p-6 border border-[#FF512F]/20 shadow-xl hover:shadow-2xl transition duration-300 relative overflow-hidden group ${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  <h3
                    className={`font-semibold text-lg md:text-xl border-b border-[#FF512F]/20 pb-2 relative ${
                      isDarkMode ? "text-gray-100" : "text-gray-800"
                    }`}
                  >
                    Context Engineering™: A Smarter Approach
                    <div className="absolute -bottom-px left-0 w-8 h-[2px] bg-[#FF512F]"></div>
                  </h3>
                  <p
                    className={`text-base md:text-lg mt-2 ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Our proprietary Context Engineering™ framework enables
                    organizations to create clear, actionable AI adoption
                    roadmaps. It aligns data with business context - ensuring AI
                    is not just a technology investment, but a catalyst for
                    real-world outcomes.
                  </p>
                </div>
                <div
                  className={`rounded-2xl p-2 md:p-4 sm:p-6 border border-[#FF512F]/20 shadow-xl hover:shadow-2xl transition duration-300 relative overflow-hidden group ${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  <h3
                    className={`font-semibold text-lg md:text-xl border-b border-[#FF512F]/20 pb-2 relative ${
                      isDarkMode ? "text-gray-100" : "text-gray-800"
                    }`}
                  >
                    AI Adoption: Safe, Strategic, Impact-Driven
                    <div className="absolute -bottom-px left-0 w-8 h-[2px] bg-[#FF512F]"></div>
                  </h3>
                  <p
                    className={`text-base md:text-lg mt-2 ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    With our &quot;Business Value as the Driver&quot; approach and &quot;Safe
                    from the Start&quot; architectural principles, we help
                    enterprises deploy AI responsibly - turning innovation into
                    a force for good.
                  </p>
                </div>
              </div>

              {/* Experience showcase - Credibility builder section */}
              <div className="px-2 md:px-8 lg:px-8 max-w-7xl mx-auto md:mt-2">
                <div
                  className={`rounded-xl p-2 md:p-3 border border-[#FF512F]/20 ${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  <div className="flex md:justify-center">
                    <h3
                      className={`font-semibold text-lg md:text-xl w-fit border-b border-[#FF512F]/20 pb-2 relative text-left md:text-center ${
                        isDarkMode ? "text-gray-100" : "text-gray-800"
                      }`}
                    >
                      Decades of Experience in Global Execution.
                      <div className="absolute -bottom-px left-0 w-8 h-[2px] bg-[#FF512F]"></div>
                    </h3>
                  </div>
                  <p
                    className={`text-base md:text-lg mt-2 text-left md:text-center ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Our team brings decades of proven success in delivering
                    data, machine learning, analytics, and AI solutions. Backed
                    by a fast-moving global delivery model, we prepare both
                    business and IT groups for the demands of an AI-native
                    world.
                  </p>
                </div>
              </div>
              {/* Experience Section */}
            </div>
          </section>
        </>
      ),
    },
    {
      id: "3",
      title: "Home-page-section-slide-3",
      content: (
        <>
          {/* Main container for slide 3 - Workflow automation section */}
          <section className="w-full relative flex justify-center p-0 mt-3 xxl:px-[150px] xxl:mt-[200px] xl:mt-[100px]">
            <div className="flex flex-col gap-1 md:gap-4 max-w-7xl mx-auto">
              {/* Main Heading - Workflow Automation */}
              <div className="text-center px-2 md:px-8">
                <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight ${
                      isDarkMode ? "text-gray-100" : "text-gray-800"
                    }`}>
                  Enhancing Enterprise Intelligence Through
                  <div className="relative inline-block mt-1">
                    <span className="relative z-10 text-[#FF512F] dark:text-[#FF512F] ml-2">
                      Workflow Automation
                    </span>
                    <svg
                      className="absolute -bottom-1 left-0 w-full"
                      height="8"
                      viewBox="0 0 100 10"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 5c30-5 70-5 100 0"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        className="text-[#FF512F] dark:text-[#FF512F] transition-all duration-300"
                      />
                    </svg>
                  </div>
                </h1>
              </div>

              {/* Subheading - Solution value proposition */}
              <div className={`px-2 sm:px-6 md:px-10 lg:px-16 max-w-5xl mx-auto ${
                      isDarkMode ? "text-gray-100" : "text-gray-800"
                    }`}>
                <p className="text-base md:text-lg font-medium text-center">
                  ReKnew helps enterprises unlock new levels of intelligence by
                  automating business workflows across the organization. From
                  data to DevOps, our solutions streamline operations and
                  empower faster, smarter decisions.
                </p>
              </div>

              {/* Product features - S-Quad suite and adoption approach */}
              <div className="px-1 sm:px-6 md:px-8 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4">
                  <div
                    className={`rounded-2xl p-2 sm:p-6 border border-[#FF512F]/20 shadow-xl hover:shadow-2xl transition duration-300 relative overflow-hidden group ${
                      isDarkMode ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    <h3
                      className={`font-semibold text-lg md:text-xl border-b border-[#FF512F]/20 pb-2 relative ${
                        isDarkMode ? "text-gray-100" : "text-gray-800"
                      }`}
                    >
                      S
                      <Image
                        src={Arrow}
                        alt="-"
                        className="inline-block w-[16px] h-[16px] mx-[1px] object-contain"
                      />{" "}
                      Quad™ Suite: Accelerators for Agentic Transformation
                      <div className="absolute -bottom-px left-0 w-8 h-[2px] bg-[#FF512F]"></div>
                    </h3>
                    <p
                      className={`text-base md:text-lg mt-2 ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Our proprietary S
                      <Image
                        src={Arrow}
                        alt="-"
                        className="inline-block w-[16px] h-[16px] mx-[1px] object-contain "
                      />{" "}
                      Quad™ suite of accelerators enables rapid design and
                      deployment of intelligent agents - seamlessly integrating
                      them across your enterprise&apos;s Data, Application, DevOps,
                      and ERP layers.
                    </p>
                  </div>
                  <div
                    className={`rounded-2xl p-2 sm:p-6 border border-[#FF512F]/20 shadow-xl hover:shadow-2xl transition duration-300 relative overflow-hidden group ${
                      isDarkMode ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    <h3
                      className={`font-semibold text-lg md:text-xl border-b border-[#FF512F]/20 pb-2 relative ${
                        isDarkMode ? "text-gray-100" : "text-gray-800"
                      }`}
                    >
                      From Pilots to Platform Adoption
                      <div className="absolute -bottom-px left-0 w-8 h-[2px] bg-[#FF512F]"></div>
                    </h3>
                    <p
                      className={`text-base md:text-lg mt-2 ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Many organizations experience isolated automation wins.
                      Our structured delivery model helps both business and IT
                      teams evolve from these one-off successes to fully
                      operational agentic platforms that scale across functions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Target audience & Real Use Cases - Business leadership focus */}
              <div className="px-2 sm:px-6 md:px-8 lg:px-8 max-w-7xl mx-auto md:mt-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-4">
                  {/* Target audience card */}
                  <div
                    className={`rounded-2xl p-2 sm:p-6 border border-[#FF512F]/20 shadow-xl hover:shadow-2xl transition duration-300 relative overflow-hidden group ${
                      isDarkMode ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    <h3
                      className={`font-semibold text-lg md:text-xl border-b border-[#FF512F]/20 pb-2 relative ${
                        isDarkMode ? "text-gray-100" : "text-gray-800"
                      }`}
                    >
                      Built for the Business Groups
                      <div className="absolute -bottom-px left-0 w-8 h-[2px] bg-[#FF512F]"></div>
                    </h3>
                    <p
                      className={`text-base md:text-lg mt-2 ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      ReKnew&apos;s pre-built knowledge graphs are designed to
                      support data-driven decision-making for leaders across the
                      enterprise - including CFOs, CMOs, CROs, and CIOs -
                      accelerating insights and improving outcomes.
                    </p>
                  </div>

                  {/* Real Use Cases card */}
                  <div
                    className={`rounded-2xl p-2 sm:p-6 border border-[#FF512F]/20 shadow-xl hover:shadow-2xl transition duration-300 relative overflow-hidden group ${
                      isDarkMode ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    <h3
                      className={`font-semibold text-lg md:text-xl border-b border-[#FF512F]/20 pb-2 relative ${
                        isDarkMode ? "text-gray-100" : "text-gray-800"
                      }`}
                    >
                      Real Use Cases. Measurable Value. Fast Delivery.
                      <div className="absolute -bottom-px left-0 w-8 h-[2px] bg-[#FF512F]"></div>
                    </h3>
                    <p
                      className={`text-base md:text-lg mt-2 ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      We bring an ever-expanding portfolio of pre-built use
                      cases across:
                    </p>
                    <div className="flex flex-wrap gap-1 md:gap-2 mt-1 md:mt-2">
                      <span className={` p-1 md:px-3 md:py-1 rounded-full text-base md:text-base ${
                        isDarkMode ? "bg-gray-800 text-gray-400" : "bg-gray-100 text-gray-600"
                      }`}>
                        Risk & Compliance
                      </span>
                     <span className={` p-1 md:px-3 md:py-1 rounded-full text-base md:text-base ${
                        isDarkMode ? "bg-gray-800 text-gray-400" : "bg-gray-100 text-gray-600"
                      }`}>
                        Customer Engagement
                      </span>
                      <span className={` p-1 md:px-3 md:py-1 rounded-full text-base md:text-base ${
                        isDarkMode ? "bg-gray-800 text-gray-400" : "bg-gray-100 text-gray-600"
                      }`}>
                        Fraud Detection
                      </span>
                      <span className={` p-1 md:px-3 md:py-1 rounded-full text-base md:text-base ${
                        isDarkMode ? "bg-gray-800 text-gray-400" : "bg-gray-100 text-gray-600"
                      }`}>
                        Financial Operations
                      </span>
                    </div>
                    <p
                      className={`text-base md:text-lg mt-1 md:mt-2 ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      With implementation timelines measured in weeks, our
                      solutions deliver real business value fast.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ),
    },
  ];

  const nextSlide = () => {
    setDirection(1);
    setActiveSlide((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setActiveSlide(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown") {
        nextSlide();
      } else if (e.key === "ArrowUp") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSlide]);

  // Handle touch events for swipe navigation
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe up - go to next slide
      nextSlide();
    } else if (touchStart - touchEnd < -50) {
      // Swipe down - go to previous slide
      prevSlide();
    }
  };

  return (
    <div
      className="min-h-screen max-w-7xl overflow-x-hidden"
      onTouchStart={isMobile ? handleTouchStart : undefined}
      onTouchMove={isMobile ? handleTouchMove : undefined}
      onTouchEnd={isMobile ? handleTouchEnd : undefined}
    >
      {!isMobile ? (
        <>
          {/* Desktop/Tablet Slider View */}
          {slides.map((slide, index) => (
            <Slide key={slide.id} isActive={activeSlide === index}>
              {slide.content}
            </Slide>
          ))}

          <div className="hidden sm:block">
            <CanvasDots />
          </div>

          <div className="hidden md:flex">
            <button
              onClick={prevSlide}
              className={`absolute left-4 md:left-[5%] md:top-[80%] lg:left-0 xl:left-[5%] top-[95%] xxl:left-[6.5%] lg:top-[55%] transform -translate-y-1/2  size-14 flex justify-center items-center z-20 shadow-lg transition-all duration-300 border-2 border-[#FF512F] dark:border-[#FF512F] p-3 rounded-full  group ${
                isDarkMode ? "text-white bg-gray-800" : "text-black bg-white/80"
              }`}
              aria-label="Previous Slide"
            >
              <div className="flex items-center justify-center w-full h-full">
                <Image
                  src={Arrow}
                  alt="Previous"
                  className="rotate-[210deg] w-[67.5%] left-3 top-[10px] absolute object-contain"
                  loading="lazy"
                />
              </div>
            </button>

            <button
              onClick={nextSlide}
              className={`absolute right-4 top-[95%] md:top-[80%] md:right-[5%] xl:right-[5%] xxl:right-[6.5%] lg:right-[5%] lg:top-[55%] transform -translate-y-1/2 size-14 flex justify-center items-center z-20 shadow-lg transition-all duration-300 border-2 border-[#FF512F] dark:border-[#FF512F] p-3 rounded-full  group ${
                isDarkMode ? "text-white bg-gray-800" : "text-black bg-white/80"
              }`}
              aria-label="Next Slide"
            >
              <div className="flex items-center justify-center w-full h-full">
                <Image
                  src={Arrow}
                  alt="Next"
                  className="rotate-[28deg] w-[67.5%] right-3 top-[16px] absolute object-contain"
                  loading="lazy"
                />
              </div>
            </button>
          </div>
        </>
      ) : (
        /* Mobile View - Sequential Display with improved navigation */
        <div className="flex flex-col space-y-6 py-4 pb-16">
          {slides.map((slide, index) => (
            <div key={slide.id} className="py-[35px] px-2">
              {slide.content}
            </div>
          ))}

          {/* Fixed mobile navigation indicators */}
        </div>
      )}
    </div>
  );
};

export default HomepageVarticalSlider;
