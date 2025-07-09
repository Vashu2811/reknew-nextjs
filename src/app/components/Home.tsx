import dynamic from 'next/dynamic';
import HomepageVarticalSlider from './HomepageVarticalSlider';
import Ourservices from './Ourservices';
import SuccessstorySliderSection from './Successstory/SuccessstorySliderSection';
import FoundersExperience from './FoundersExperience';
import HomeClientWrapper from './HomeClientWrapper';

const Consultation = dynamic(() => import('./ui/Consultation'));

export default function HomePage() {
    return (
        <>
        <HomeClientWrapper />
             
            <div className="text-[#374151] dark:text-gray-100 font-sans w-full min-h-screen overflow-x-hidden">
                {/* Progress Bar */}

                <HomepageVarticalSlider />

                {/* Founders Experience Section - Added directly after the slider */}
                <FoundersExperience />

                {/* Main Content */}
                <div className="dark:text-gray-100 flex flex-col overflow-x-hidden">
                    <Ourservices />

                    <SuccessstorySliderSection />

                    <div className="relative overflow-y-hidden overflow-x-hidden">
                        <div className=" flex justify-center items-center relative">
                            <div className="py-[100px]">
                                    <Consultation />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
