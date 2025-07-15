import LeadershipTeam from './AboutUsTeamSection';
import AboutUspageSlider from './AboutUspageSlider';
import CareerOpportunities from './CareerOpportunities';
import Arrow from '../../../public/assets/Arrow logo.png';
import HeadquartersHeader from './HeadquartersHeader';
import ContactInformation from './ContactInformation';
import StrategicAcceleration from './StrategicAcceleration';
import LifeAtReknew from './LifeAtReknew';
import { Lightbulb } from 'lucide-react';
import Image from 'next/image';
import ThesparkSection from './ThesparkSection';

// Accept isDarkMode as a prop for SSR
const OurStory = ({ isDarkMode = false }) => {
    // No hooks or client-side logic

    return (
        <div className="text-[#374151] dark:text-gray-100 font-sans w-full min-h-screen overflow-x-hidden">
            {/* Modal logic removed for SSR */}
            {/* Progress Bar - Animated scroll indicator */}
            <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF512F] to-[#FF512F] dark:from-[#FF512F] dark:to-[#FF512F] z-50" />

            {/* Hero Slider Section */}
            <AboutUspageSlider />

            
            <ThesparkSection />

            {/* Strategic Acceleration Section - Core Principles */}
            <StrategicAcceleration />

            {/* Leadership Team Section */}
            <section className={`relative overflow-hidden ${isDarkMode ? "bg-gray-900" : "bg-transparent"}`}>
                <LeadershipTeam  />
            </section>

            {/* Life at ReKnew Section */}
            <LifeAtReknew  />

            {/* Career Opportunities Section - Current job openings */}
            {/* Modal logic removed for SSR, pass a no-op function */}
            <CareerOpportunities openHiringModal={undefined}  />

            {/* Use the new HeadquartersHeader component */}
            <HeadquartersHeader  />

            {/* Use the new ContactInformation component */}
            <ContactInformation  />
        </div>
    );
};

export default OurStory;
