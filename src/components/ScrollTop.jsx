'use client';
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 p-4 md:bg-[#FF512F] bg-[#FF512F] text-white rounded-full shadow-lg  transition-transform transform hover:scale-110 z-[1000]"
        aria-label="Scroll to top"
      >
     <FaArrowUp />
      </button>
    )
  );
};

export default ScrollToTopButton;