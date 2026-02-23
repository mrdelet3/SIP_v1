import { useEffect, useRef } from 'react'

const SOCIAL_LINKS = [
    {
        href: 'https://www.instagram.com/stoutirishpubto/',
        icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 text-gold hover:text-white transition-all duration-500" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {/* Stylized Outer Frame with subtle Celtic curves */}
                <rect x="2" y="2" width="20" height="20" rx="6" ry="6" />

                {/* Camera Lens with Celtic Clover/Shamrock Flair */}
                <path d="M12 15c1.5-2.5 3.5-2.5 4 0s-2.5 4-4 2c-1.5 2-4.5.5-4-2s2.5-2.5 4 0z" />
                <path d="M12 15v3" strokeWidth="1" />

                {/* Camera Flash Dot */}
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
            </svg>
        ),
        label: 'Follow Stout Irish Pub on Instagram',
    },
]

import { SITE_CONFIG } from '../data/config'

// Stout Irish Pub coordinates
const LAT = SITE_CONFIG.location.coordinates.lat
const LNG = SITE_CONFIG.location.coordinates.lng

export default function FooterSection() {
    const year = new Date().getFullYear()
    const mapRef = useRef<HTMLDivElement>(null)
    const mapInstanceRef = useRef<import('leaflet').Map | null>(null)

    useEffect(() => {
        // Only initialise once
        if (mapInstanceRef.current || !mapRef.current) return

        // Dynamic import to avoid SSR issues
        import('leaflet').then((L) => {
            // Fix default icon paths broken by Vite bundling
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            delete (L.Icon.Default.prototype as any)._getIconUrl
            L.Icon.Default.mergeOptions({
                iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
                iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
                shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
            })

            const map = L.map(mapRef.current!, {
                center: [LAT, LNG],
                zoom: 16,
                scrollWheelZoom: false,
                zoomControl: false,
                attributionControl: false, // Remove default attribution control
            })

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                className: 'map-filter',
            }).addTo(map)

            // Custom branded marker — logo in a gold-bordered circle
            const icon = L.divIcon({
                className: '',
                html: `
                  <div class="stout-pin">
                    <img src="/logo.png" alt="" />
                  </div>
                `,
                iconSize: [64, 64],
                iconAnchor: [32, 32],
            })

            L.marker([LAT, LNG], { icon }).addTo(map)

            mapInstanceRef.current = map
        })

        return () => {
            mapInstanceRef.current?.remove()
            mapInstanceRef.current = null
        }
    }, [])

    return (
        <footer
            id="location"
            className="bg-primary min-h-[100dvh] w-full snap-start flex flex-col relative overflow-hidden"
            aria-label="Find Us and Hours"
        >
            {/* Map Top Half — Reduced height on mobile to fit fold */}
            <div className="w-full h-[40dvh] md:h-[65dvh] relative border-b border-white/5">
                <div
                    ref={mapRef}
                    className="absolute inset-0 z-0"
                    aria-label="Map showing Stout Irish Pub at 221 Carlton Street, Toronto"
                />
            </div>

            {/* Info Bottom Half */}
            <div className="w-full min-h-[60dvh] md:min-h-[50dvh] bg-primary flex flex-col justify-between py-12 md:py-20 px-5 sm:px-8 md:px-10">

                {/* Two-column info grid */}
                <div className="max-w-4xl mx-auto w-full flex flex-col md:flex-row items-start justify-center gap-10 md:gap-0 mb-12 md:mb-16">

                    {/* Find Us */}
                    <div className="text-center w-full md:flex-1 md:pr-12">
                        <div className="h-24 flex flex-col items-center justify-center mb-1 md:mb-16">
                            <h2 id="footer-heading" className="font-display text-xl sm:text-3xl md:text-5xl text-white font-bold tracking-[0.25em] uppercase">
                                Find Us
                            </h2>
                            <div className="w-10 md:w-16 h-px bg-gold/30 mt-4 md:mt-8" aria-hidden="true" />
                        </div>
                        <div className="font-sans text-gray-300 text-sm sm:text-base md:text-lg space-y-3">
                            <p className="leading-relaxed">
                                221 Carlton Street<br />
                                Toronto, ON M5A 2L2
                            </p>
                            <a
                                href="tel:+16473447676"
                                className="block text-gold font-bold tracking-wider hover:text-white transition-colors duration-300"
                            >
                                +1 (647) 344-7676
                            </a>
                            <a
                                href="mailto:info@stoutirishpub.ca"
                                className="inline-block text-[10px] md:text-xs text-gray-400 font-sans tracking-[0.15em] md:tracking-[0.3em] uppercase hover:text-gold transition-colors duration-300"
                            >
                                info@stoutirishpub.ca
                            </a>
                        </div>
                    </div>

                    {/* Vertical divider — desktop only */}
                    <div className="hidden md:block w-px self-stretch bg-white/10 flex-shrink-0" aria-hidden="true" />

                    {/* Hours */}
                    <div className="text-center w-full md:flex-1 md:pl-12 mt-4 md:mt-0">
                        <div className="h-24 flex flex-col items-center justify-center mb-1 md:mb-16">
                            <h2 className="font-display text-xl sm:text-3xl md:text-5xl text-white font-bold tracking-[0.25em] uppercase">
                                Hours
                            </h2>
                            <div className="w-10 md:w-16 h-px bg-gold/30 mt-4 md:mt-8" aria-hidden="true" />
                        </div>
                        <div className="font-sans text-gray-300 text-sm sm:text-base md:text-lg w-full max-w-[260px] sm:max-w-[280px] mx-auto">
                            {SITE_CONFIG.hours.map((hour, idx) => (
                                <div key={idx} className={`flex justify-between ${idx !== SITE_CONFIG.hours.length - 1 ? 'border-b border-white/5 pb-4 mb-4 md:pb-6 md:mb-6' : ''}`}>
                                    <span className="font-sans text-gray-500 uppercase text-[9px] md:text-xs tracking-widest self-center">{hour.label}</span>
                                    <span className="font-light">{hour.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Bottom Bar: Socials & Copyright */}
                <div className="max-w-6xl mx-auto w-full flex flex-col items-center">
                    <nav aria-label="Social media links" className="flex justify-center space-x-8 sm:space-x-12 mb-10 text-white">
                        {SOCIAL_LINKS.map(({ href, icon, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-primary rounded-full p-2"
                                aria-label={label}
                            >
                                {icon}
                            </a>
                        ))}
                    </nav>

                    <p className="text-[10px] uppercase tracking-[0.5em] text-gray-500 text-center">
                        © {year} Stout Irish Pub • Toronto
                    </p>
                </div>
            </div>

            {/* Branded gold gradient — bottom edge of footer */}
            <div
                className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                style={{
                    background: 'linear-gradient(to top, rgba(197,160,89,0.18) 0%, rgba(197,160,89,0.06) 50%, transparent 100%)'
                }}
                aria-hidden="true"
            />
        </footer>
    )
}
