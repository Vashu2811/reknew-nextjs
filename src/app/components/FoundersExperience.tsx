export default function FoundersExperience () {
    // Define company logos array with online URLs
    const companyLogos = [
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Logo_of_JPMorganChase_2024.svg/2880px-Logo_of_JPMorganChase_2024.svg.png ',
            alt: 'JP Morgan Chase Logo'
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Citi.svg/1920px-Citi.svg.png',
            alt: 'Citi Logo'
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/USAA_logo.svg/1024px-USAA_logo.svg.png',
            alt: 'USAA Logo'
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/KPMG_logo.svg',
            alt: 'KPMG Logo'
        },
     
         {
            src: '   https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/2880px-Accenture.svg.png',
            alt: 'KPMG Logo'
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Bank_of_America_1998.svg/1920px-Bank_of_America_1998.svg.png',
            alt: 'Bank of America Logo'
        },
        
        // Added Coca Cola logo
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/2560px-Coca-Cola_logo.svg.png',
            alt: 'Coca Cola Logo'
        },
        // Added Georgia Pacific logo
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Georgia-Pacific_logo.svg/1920px-Georgia-Pacific_logo.svg.png',
            alt: 'Georgia Pacific Logo'
        }
    ];

    return (
        <section className="py-20 dark:bg-gray-900 overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                   
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#374151] dark:text-gray-100">
                        Built by
                        <span className="relative inline-block mx-2">
                            <span className="relative z-10 text-[#FF512F] dark:text-[#FF512F]">Founders</span>
                            <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path
                                    d="M0 5c30-5 70-5 100 0"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    className="text-[#FF512F] dark:text-[#FF512F] transition-all duration-300"
                                />
                            </svg>
                        </span>
                        with Decades of <br />Experience From Large Enterprises
                    </h2>
                </div>

                {/* Company Logos */}
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-10 xl:gap-[46px] py-4">
                    {companyLogos.map((logo, index) => (
                        <div
                            key={index}
                            className="w-32 md:w-28 h-16 md:h-20 lg:h-24 flex items-center justify-center p-4 bg-white/90 dark:bg-white/90 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="max-w-full max-h-full object-cover filter hover:grayscale-0 transition-all duration-500"
                                draggable="false"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
