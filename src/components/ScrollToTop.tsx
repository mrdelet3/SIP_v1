import { useState, useEffect } from 'react'

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            // Show after scrolling past roughly the first viewport (Hero)
            if (window.scrollY > window.innerHeight * 0.5) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    if (!isVisible) return null

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className={`fixed bottom-28 md:bottom-6 right-6 z-[100] text-gold hover:text-white transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-gold rounded-full p-3 bg-black/40 backdrop-blur-md border border-gold/40 hover:border-gold shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        >
            {/* Celtic-inspired Scroll Up Icon — Differentiated from landing arrow */}
            <svg
                width="28"
                height="28"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Single Celtic Trinity Loop at the base of the arrow head */}
                <path
                    d="M20 12 C14 12 10 18 12 24 C14 30 26 30 28 24 C30 18 26 12 20 12 C16 12 16 18 20 20"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.9"
                />

                {/* Upward shaft */}
                <line
                    x1="20"
                    y1="32"
                    x2="20"
                    y2="10"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                />

                {/* Arrowhead pointing UP */}
                <path
                    d="M12 18 L20 8 L28 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                />
            </svg>
        </button>
    )
}
