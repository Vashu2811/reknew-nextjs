import { ChevronRight } from 'lucide-react';

const JobCard = ({ title, location, type, delay = 0, applyLink }) => {
    return (
        <div
            className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 transition-all duration-300 hover:border-[#FF512F]/30 dark:hover:border-[#FF512F]/30 hover:-translate-y-1 hover:shadow-lg">
            <h5 className="font-semibold text-lg mb-2 text-[#374151] dark:text-gray-100">{title}</h5>
            <div className="flex flex-col gap-2 mb-4">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {location}
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {type}
                </div>
            </div>
            <a
                href={applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm cursor-pointer font-medium text-[#FF512F] hover:text-[#FF8A63] flex items-center transition-colors duration-200">
                Learn More
                <ChevronRight className="ml-1 w-4 h-4" />
            </a>
        </div>
    );
};

export default JobCard;
