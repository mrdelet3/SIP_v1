export default function HeroSection() {
    return (
        <section
            id="hero"
            className="relative min-h-[100dvh] w-full overflow-hidden flex flex-col items-center justify-center snap-start"
            aria-label="Hero — Stout Irish Pub"
        >
            {/* Background image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero.jpg"
                    alt="Warm atmospheric interior of Stout Irish Pub"
                    className="w-full h-full object-cover object-[72%] md:object-center blur-sm scale-105"
                />
                <div className="absolute inset-0 hero-overlay" aria-hidden="true" />
            </div>

            {/* Hero content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5 sm:px-8 pt-12 md:pt-0 md:-mt-16">
                <h1
                    className="font-display text-white font-bold tracking-[0.1em] uppercase mb-6 leading-tight max-w-[90vw] md:max-w-5xl"
                    style={{ fontSize: 'clamp(1.85rem, 10vw, 5rem)' }}
                >
                    Authentic Irish<br />Experience
                </h1>
                <p className="font-serif text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed mb-12 italic">
                    Welcome to Stout Irish Pub, your spot for an authentic pub experience in Cabbagetown. Enjoy great food, a wide selection of Ontario craft beer, and a relaxed atmosphere with over 50 board games. Pull up a chair, grab a pint, and join the locals.
                </p>

                {/* Custom Celtic Divider — Replacing plain stroke */}
                <div className="w-32 md:w-48 h-8 flex items-center justify-center text-gold/60" aria-hidden="true">
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 200 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        {/* Horizontal thin lines */}
                        <line x1="0" y1="10" x2="80" y2="10" stroke="currentColor" strokeWidth="0.8" />
                        <line x1="120" y1="10" x2="200" y2="10" stroke="currentColor" strokeWidth="0.8" />

                        {/* Center Celtic Motif (Triquetra Knot Variant) */}
                        <path
                            d="M100 2 L106 12 Q108 16 100 18 Q92 16 94 12 L100 2"
                            stroke="currentColor"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                        />
                        <path
                            d="M100 2 L94 12 Q92 16 100 18 Q108 16 106 12 L100 2"
                            stroke="currentColor"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                        />
                        <circle cx="100" cy="11" r="5" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
                    </svg>
                </div>
            </div>

            {/* Scroll CTA — single Celtic scroll arrow, pinned to bottom */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
                <a
                    href="#about"
                    className="group flex flex-col items-center text-gold hover:text-white transition-colors duration-300"
                    aria-label="Scroll down to learn more about the pub"
                >
                    <div className="animate-bounce-custom" aria-hidden="true">
                        {/* Celtic-inspired scroll arrow: triquetra loops with downward shaft */}
                        <svg
                            width="40"
                            height="56"
                            viewBox="0 0 40 56"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-current"
                        >
                            {/* Left Celtic loop */}
                            <path
                                d="M20 10 C12 10 6 16 8 22 C10 28 18 28 20 22 C22 16 16 8 10 10 C6 11 6 16 10 18"
                                stroke="currentColor"
                                strokeWidth="1.4"
                                strokeLinecap="round"
                                fill="none"
                                opacity="0.7"
                            />
                            {/* Right Celtic loop */}
                            <path
                                d="M20 10 C28 10 34 16 32 22 C30 28 22 28 20 22 C18 16 24 8 30 10 C34 11 34 16 30 18"
                                stroke="currentColor"
                                strokeWidth="1.4"
                                strokeLinecap="round"
                                fill="none"
                                opacity="0.7"
                            />
                            {/* Vertical shaft */}
                            <line
                                x1="20"
                                y1="22"
                                x2="20"
                                y2="44"
                                stroke="currentColor"
                                strokeWidth="1.4"
                                strokeLinecap="round"
                            />
                            {/* Arrowhead */}
                            <path
                                d="M12 37 L20 46 L28 37"
                                stroke="currentColor"
                                strokeWidth="1.4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                            />
                        </svg>
                    </div>
                </a>
            </div>
        </section>
    )
}
