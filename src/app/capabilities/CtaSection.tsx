import { useMemo, useState } from 'react';
import consulation from '../../../public/assets/Conversation-amico.png';
import { ChevronRight } from 'lucide-react';
import ReKnewModal from '../../model/ReKnewModal';
import Image from 'next/image';
import { useTheme } from "../../Context/ThemeContext";

const Consultation = () => {
    const consultationContent = useMemo(
        () => ({
            badge: 'Expert AI Consultation',
            title: 'A ',
            highlightedWord: 'Stimulating',
            titleEnd: ' Conversation of Data Modernization and AI Adoption is Guaranteed',
            subtitle: '😊',
            cta: 'Schedule Your Free Strategy Session'
        }),
        []
    );
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="flex flex-row justify-center items-center w-full gap-2.5">
            <div
                className={`gap-[36px] relative xl:gap-[48px] flex flex-col lg:flex-row 
                p-4 rounded-2xl border shadow-xl transition-all duration-500 overflow-hidden
                ${isDarkMode 
                    ? 'border-gray-700/50 bg-gradient-to-br from-gray-800/50 via-gray-800/50 to-gray-900/50' 
                    : 'border-[#e5e7eb26] bg-gradient-to-br from-white via-[#FFF8F6] to-[#FFF4F0]'
                }`}>
                
                {/* Image Section */}
                <div className="flex items-center justify-center lg:w-[500px] h-full my-auto z-10">
                    <div className="relative flex items-center justify-center w-full">
                        <Image src={consulation} alt="AI Consultation" className="rounded-lg w-full h-full object-contain" loading="lazy" />
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-center lg:w-[516px] xl:w-[640px] gap-[34px] z-10">
                    <div className="flex flex-col gap-[14px]">
                        {/* Badge */}
                        <div
                            className={`inline-flex items-center px-4 py-2 rounded-full backdrop-blur-sm 
                            border border-[#FF512F]/20 shadow-[0_2px_10px_-3px_rgba(255,81,47,0.1)] mb-4 w-fit
                            ${isDarkMode ? 'bg-gray-800/90' : 'bg-white/90'}`}>
                            <span className="bg-gradient-to-r from-[#FF512F] to-[#FF8A63] bg-clip-text text-transparent font-medium text-base md:text-lg">
                                {consultationContent.badge}
                            </span>
                        </div>

                        {/* Title */}
                        <div className="font-medium text-3xl md:text-4xl lg:text-5xl leading-[120%] tracking-[0%]">
                            <span className={isDarkMode ? 'text-gray-100' : 'text-[#374151]'}>{consultationContent.title}</span>
                            <span className="bg-gradient-to-r from-[#FF512F] to-[#FF8A63] bg-clip-text text-transparent font-medium">
                                {consultationContent.highlightedWord}
                            </span>
                            <span className={isDarkMode ? 'text-gray-100' : 'text-[#374151]'}>{consultationContent.titleEnd}</span>
                            <span className={isDarkMode ? 'text-gray-100' : 'text-[#374151]'}>{consultationContent.subtitle}</span>
                        </div>

                        <button
                            onClick={openModal}
                            className="relative w-fit group inline-flex items-center justify-center px-4 py-4 overflow-hidden rounded-xl 
                            bg-gradient-to-r from-[#FF512F] to-[#FF8A63] dark:from-[#FF512F] dark:to-[#FF8A63]
                            shadow-lg hover:shadow-xl
                            hover:from-[#FF8A63] hover:to-[#FF512F] dark:hover:from-[#FF8A63] dark:hover:to-[#FF512F] 
                            transition-all duration-500 mt-6 max-w-fit">
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff20 1px,transparent 1px),linear-gradient(-45deg,#ffffff20 1px,transparent 1px)] bg-[size:10px_10px] pointer-events-none"></div>
                            <span className="relative flex items-center text-base md:text-lg font-semibold text-white tracking-wide transition-transform duration-300">
                                {consultationContent.cta}
                                <ChevronRight className="ml-2 w-5 h-5 transform transition-transform duration-300" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <ReKnewModal isOpen={isModalOpen} onClose={closeModal} isDarkMode={undefined} />
        </div>
    );
};

export default Consultation;
