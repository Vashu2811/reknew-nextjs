"use client";
import React, { useState, useEffect } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const ContactInformation = () => {
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

  return (
    <div className={`relative overflow-hidden ${isDarkMode ? "text-gray-100" : "text-[#374151]"}`}>
      <section className="relative w-full py-[50px] lg:py-[100px]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-center max-w-7xl mx-auto gap-[52px] items-center">
            <div className="flex flex-col w-full gap-8">
              <div className="flex flex-col gap-4">
                {[
                  {
                    icon: MapPin,
                    title: 'ReKnew Global Headquarters',
                    content: ['4030 Old Milton Parkway', 'Alpharetta, GA 30005', 'United States of America'],
                    gradient: 'from-blue-500/10 to-[#FF512F]/10'
                  },
                  {
                    icon: Phone,
                    title: 'Call Us Directly',
                    content: ['+1 (678) 253-2599'],
                    gradient: 'from-green-500/10 to-[#FF512F]/10'
                  },
                  {
                    icon: Mail,
                    title: 'Email Us',
                    content: ['social@reknew.ai'],
                    gradient: 'from-[#FF512F]/10 to-[#FF512F]/10'
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex items-start gap-4 p-6 rounded-xl border border-[#FF512F]/10 ${
                      isDarkMode ? "bg-gray-800" : "bg-white"
                    }`}>
                    <div className="relative flex-shrink-0">
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-xl blur-xl`}></div>
                      <span
                        className={`relative flex items-center justify-center w-14 h-14 rounded-xl border border-[#FF512F]/20 shadow-[0_8px_20px_-6px_rgba(255,81,47,0.2)] ${
                          isDarkMode ? "bg-gray-800" : "bg-white"
                        }`}>
                        <item.icon className="w-6 h-6 text-[#FF512F]" />
                      </span>
                    </div>

                    <div className="flex flex-col gap-2">
                      <h3 className={`text-lg font-semibold ${isDarkMode ? "text-gray-100" : "text-[#232323]"}`}>{item.title}</h3>
                      {item.content.map((line, i) => (
                        <p key={i} className={`text-base ${isDarkMode ? "text-gray-300" : "text-[#666666]"}`}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div
                className={`relative mt-4 p-8 rounded-2xl overflow-hidden border border-[#FF512F]/10 ${
                  isDarkMode 
                    ? "bg-gradient-to-br from-gray-800 to-gray-800/50" 
                    : "bg-gradient-to-br from-white to-white/50"
                } backdrop-blur-sm`}>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF512F]/10 to-[#FF512F]/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-[#FF512F]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </span>
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-[#FF512F] to-[#FF512F] bg-clip-text text-transparent">
                      Business Hours
                    </h3>
                  </div>

                  {[
                    { day: 'Monday – Friday', hours: '9:00 AM – 6:00 PM', status: 'Open' },
                    { day: 'Saturday & Sunday', hours: 'Closed', status: 'Closed' }
                  ].map((schedule, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-4 rounded-xl border border-[#FF512F]/10 ${
                        isDarkMode ? "bg-gray-800/80" : "bg-white/80"
                      }`}>
                      <div className="flex flex-col">
                        <span className={`font-medium text-base ${isDarkMode ? "text-gray-100" : "text-[#232323]"}`}>{schedule.day}</span>
                        <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-[#666666]"}`}>{schedule.hours}</span>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          schedule.status === 'Open'
                            ? 'bg-green-50 text-green-600 border border-green-100'
                            : 'bg-red-50 text-red-600 border border-red-100'
                        }`}>
                        {schedule.status}
                      </span>
                    </div>
                  ))}

                  <div className={`mt-4 flex items-start gap-2 text-sm ${isDarkMode ? "text-gray-300" : "text-[#666666]"}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-[#FF512F] flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                    <p>Holiday schedules may vary. Please contact us for specific holiday hours.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full h-[500px] md:h-[800px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.089661800831!2d-84.2924891!3d34.0492566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f57504a7749b71%3A0x42d6525d17aad619!2s4030%20Old%20Milton%20Pkwy%2C%20Alpharetta%2C%20GA%2030005!5e0!3m2!1sen!2sus!4v1709697547975!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactInformation;
