import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import MenuSection from './components/MenuSection'
import EventsSection from './components/EventsSection'
import FooterSection from './components/FooterSection'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
    return (
        <>
            {/* Skip to main content — WCAG 2.4.1 */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-gold focus:text-white focus:text-xs focus:uppercase focus:tracking-widest focus:font-bold focus:outline-none"
            >
                Skip to main content
            </a>

            {/* Sticky navbar — sits above all sections */}
            <Navbar />

            {/* One-page scroller sections */}
            <main id="main-content">
                <HeroSection />
                <AboutSection />
                <MenuSection />
                <EventsSection />
            </main>

            <FooterSection />
            <ScrollToTop />
        </>
    )
}
