module.exports = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            screens: {
                xxl: '1200px',
                xl: '1445px',
            },
            backgroundImage: {
                'gradient-text': 'linear-gradient(to right, #feb544, #9C83FF, #E151FF, #FFF759)'
            },
            fontFamily: {
                sans: ['Nunito', 'sans-serif']
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite'
            }
        }
    },
    plugins: []
};
