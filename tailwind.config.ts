import type { Config } from 'tailwindcss'

export default {
    content: [
        './index.html',
        './src/**/*.{ts,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Brand palette — sourced from SIB_A code.html (authoritative)
                primary: '#141414',       // Deep charcoal background
                secondary: '#11221B',     // Irish dark green alt background
                accent: '#16322D',        // Deep green accent
                gold: '#C5A059',          // Signature gold
            },
            fontFamily: {
                display: ['Cinzel', 'serif'],
                serif: ['Playfair Display', 'serif'],
                sans: ['Montserrat', 'sans-serif'],
            },
            letterSpacing: {
                widest2: '0.2em',
                widest3: '0.3em',
                widest4: '0.4em',
                widest5: '0.5em',
            },
            animation: {
                'bounce-custom': 'bounce-custom 2s infinite',
            },
            keyframes: {
                'bounce-custom': {
                    '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
                    '40%': { transform: 'translateY(-10px)' },
                    '60%': { transform: 'translateY(-5px)' },
                },
            },
        },
    },
    plugins: [],
} satisfies Config
