import ReKnewModal from '../model/ReKnewModal';
import HomepageVarticalSlider from './pages/HomepageVarticalSlider';
import Ourservices from './pages/SeirvesSlider';
import SuccessstorySliderSection from './pages/SuccessstorySliderSection';
import FoundersExperience from './pages/FoundersExperience';
import Consultation from './pages/Consultation';

export const metadata = {
    title: 'ReKnew | Empowering Enterprises through Data and Digital Modernization',
    description: 'ReKnew helps organizations reduce inefficiencies, automate workflows, and unlock growth opportunities. Transform your business operations with our innovative solutions.',
    keywords: 'ReKnew, data modernization, digital transformation, workflow automation, business growth, enterprise solutions, AI, automation, innovation',
    openGraph: {
        type: 'website',
        url: 'https://reknew.ai/',
        title: 'ReKnew | Empowering Enterprises through Data and Digital Modernization',
        description: 'ReKnew helps organizations reduce inefficiencies, automate workflows, and unlock growth opportunities. Transform your business operations with our innovative solutions.',
        images: [
            {
                url: 'https://reknew.ai/logo.png',
                width: 1200,
                height: 630,
                alt: 'ReKnew Logo',
            },
        ],
        siteName: 'ReKnew',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        url: 'https://reknew.ai/',
        title: 'ReKnew | Empowering Enterprises through Data and Digital Modernization',
        description: 'ReKnew helps organizations reduce inefficiencies, automate workflows, and unlock growth opportunities. Transform your business operations with our innovative solutions.',
        images: ['https://reknew.ai/logo.png'],
        site: '@ReKnew',
        creator: '@ReKnew',
    },
    robots: 'index, follow',
    authors: [{ name: 'ReKnew' }],
    canonical: 'https://reknew.ai/',
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#111827' },
    ],
    mobileWebAppCapable: true,
    appleMobileWebAppCapable: true,
    appleMobileWebAppStatusBarStyle: 'default',
    formatDetection: {
        telephone: false,
    },
};

// Convert to an async server component
const Home = async () => {
    // No useEffect, no client hooks

    return (
        <>
            {/* Removed <head> and its contents. Metadata is handled via the metadata export above. */}
            {/* <ReKnewModal isOpen={false} onClose={() => {}} /> */}
            <div className="text-gray-800 dark:text-gray-100 font-sans w-full min-h-screen overflow-x-hidden">
                {/* Remove Progress Bar (framer-motion is client-only) */}

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
                                {/* Remove Suspense (not needed for server components) */}
                                <Consultation />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
