'use client';
import { useState, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";
const ScrollToBottomButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY <
        document.documentElement.scrollHeight - window.innerHeight - 200
      ) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    showButton && (
      <button
        onClick={scrollToBottom}
        className="fixed bottom-4 right-4 p-4 bg-[#FF512F] text-white rounded-full shadow-lg transition-transform transform hover:scale-110 z-[1000] "
        aria-label="Scroll to bottom"
      >
      <FaArrowDown />
      </button>
    )
  );
};

export default ScrollToBottomButton;