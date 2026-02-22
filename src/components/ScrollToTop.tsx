import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

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
            className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-[100] p-3 md:p-4 bg-primary border border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300 rounded-full shadow-2xl focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-[#141414]"
        >
            <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
        </button>
    )
}
