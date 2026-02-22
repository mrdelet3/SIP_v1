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

export default function FooterSection() {
    const year = new Date().getFullYear()

    return (
        <footer
            id="location"
            className="bg-primary min-h-[100dvh] w-full snap-start flex flex-col relative overflow-hidden"
            aria-label="Find Us and Hours"
        >
            {/* Map Top Half */}
            <div className="w-full h-[65dvh] relative border-b border-white/5">
                <iframe
                    title="Stout Irish Pub location on Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.29342718917!2d-79.37021312382283!3d43.66352937109968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb3997686629%3A0xc64e12c1f964a388!2s221%20Carlton%20St%2C%20Toronto%2C%20ON%20M5A%202L2!5e0!3m2!1sen!2sca!4v1715694800000!5m2!1sen!2sca"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 map-filter"
                />

                {/* Branded logo pin — outside map-filter DIV to preserve color */}
                <div
                    className="absolute z-10 pointer-events-none"
                    style={{ top: '48%', left: '50.1%', transform: 'translate(-50%, -50%)' }}
                    aria-hidden="true"
                >
                    <div className="flex flex-col items-center">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/95 border-2 border-gold shadow-[0_0_20px_rgba(197,160,89,0.5)] flex items-center justify-center backdrop-blur-sm">
                            <img
                                src="/logo.png"
                                alt=""
                                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Info Bottom Half */}
            <div className="w-full min-h-[50dvh] bg-primary flex flex-col justify-between py-16 md:py-20 px-5 sm:px-8 md:px-10">

                {/* Two-column info grid */}
                <div className="max-w-4xl mx-auto w-full flex flex-col md:flex-row items-start justify-center gap-12 md:gap-0 mb-16">

                    {/* Find Us */}
                    <div className="text-center w-full md:flex-1 md:pr-12">
                        <h2 id="footer-heading" className="font-display text-2xl sm:text-3xl md:text-4xl text-white font-bold tracking-[0.2em] uppercase mb-4">
                            Find Us
                        </h2>
                        <div className="w-12 h-px bg-gold mx-auto mb-8" aria-hidden="true" />
                        <div className="font-sans text-gray-300 text-sm sm:text-base md:text-lg space-y-3">
                            <p className="leading-relaxed">
                                221 Carlton Street<br />
                                Toronto, ON M5A 2L2
                            </p>
                            <a
                                href="tel:+16473447676"
                                className="text-gold font-bold tracking-wider hover:text-white transition-colors duration-300"
                            >
                                +1 (647) 344-7676
                            </a>
                            <a
                                href="mailto:info@stoutirishpub.ca"
                                className="text-xs text-gray-400 font-sans tracking-[0.3em] uppercase hover:text-gold transition-colors duration-300"
                            >
                                info@stoutirishpub.ca
                            </a>
                        </div>
                    </div>

                    {/* Vertical divider — desktop only */}
                    <div className="hidden md:block w-px self-stretch bg-white/10 flex-shrink-0" aria-hidden="true" />

                    {/* Hours */}
                    <div className="text-center w-full md:flex-1 md:pl-12">
                        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-white font-bold tracking-[0.2em] uppercase mb-4">
                            Hours
                        </h2>
                        <div className="w-12 h-px bg-gold mx-auto mb-8" aria-hidden="true" />
                        <div className="font-sans text-gray-300 text-sm sm:text-base md:text-lg w-full max-w-[260px] sm:max-w-[280px] mx-auto">
                            <div className="flex justify-between border-b border-white/5 pb-6 mb-6">
                                <span className="font-sans text-gray-500 uppercase text-xs tracking-widest self-center">M — Th</span>
                                <span className="font-light">11:30 AM – 11:00 PM</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 pb-6 mb-6">
                                <span className="font-sans text-gray-500 uppercase text-xs tracking-widest self-center">F — S</span>
                                <span className="font-light">11:30 AM – 12:00 AM</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-sans text-gray-500 uppercase text-xs tracking-widest self-center">Sun</span>
                                <span className="font-light">11:00 AM – 9:00 PM</span>
                            </div>
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
