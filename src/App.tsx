import { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

// Lazy loaded components (below the fold)
const AboutSection = lazy(() => import('./components/AboutSection'))
const MenuSection = lazy(() => import('./components/MenuSection'))
const EventsSection = lazy(() => import('./components/EventsSection'))
const FooterSection = lazy(() => import('./components/FooterSection'))
const ScrollToTop = lazy(() => import('./components/ScrollToTop'))

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

                {/* Below the fold sections load asynchronously */}
                <Suspense fallback={<div className="min-h-screen bg-primary" />}>
                    <AboutSection />
                    <MenuSection />
                    <EventsSection />
                </Suspense>
            </main>

            <Suspense fallback={null}>
                <FooterSection />
                <ScrollToTop />
            </Suspense>
        </>
    )
}
