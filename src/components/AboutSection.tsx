import { useState } from 'react'

const GALLERY_IMAGES = [
    {
        src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop',
        alt: 'Warm and inviting interior of Stout Irish Pub',
    },
    {
        src: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1200&auto=format&fit=crop',
        alt: 'Hearty Irish stew with bread, a traditional pub dish',
    },
    {
        src: 'https://images.unsplash.com/photo-1538488881038-e252a119ace7?q=80&w=1200&auto=format&fit=crop',
        alt: 'Selection of craft beer taps behind the bar',
    },
    {
        src: 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?q=80&w=1200&auto=format&fit=crop',
        alt: 'Gourmet bar food on a rustic table',
    },
    {
        src: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1200&auto=format&fit=crop',
        alt: 'Atmospheric pub interior at dusk',
    },
    {
        src: 'https://images.unsplash.com/photo-1581375221970-d86898d9cc2c?q=80&w=1200&auto=format&fit=crop',
        alt: 'A perfectly poured pint of dark stout beer',
    },
    {
        src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1200&auto=format&fit=crop',
        alt: 'Cozy fireplace seating area in the pub',
    },
    {
        src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop',
        alt: 'Classic Irish breakfast ingredients on a rustic table',
    },
]

export default function AboutSection() {
    const [selectedImg, setSelectedImg] = useState<{ src: string; alt: string } | null>(null)

    return (
        <section
            id="about"
            className="bg-secondary min-h-[100dvh] flex flex-col justify-start snap-start pt-16 pb-12 md:py-32"
            aria-labelledby="about-heading"
        >
            {/* Text + CTA block */}
            <div className="max-w-6xl mx-auto px-6 md:px-6 w-full flex flex-col items-center">
                <div className="max-w-2xl w-full mx-auto text-center">
                    <div className="text-center mb-1 md:mb-20 h-24 flex flex-col items-center justify-center">
                        <h2
                            id="about-heading"
                            className="font-display text-xl sm:text-3xl md:text-5xl text-white font-bold tracking-[0.25em] uppercase"
                        >
                            Authentic Irish
                        </h2>
                        <div className="w-10 md:w-16 h-px bg-gold/30 mt-4 md:mt-8" aria-hidden="true" />
                    </div>

                    <p className="text-gray-400 leading-relaxed font-light text-sm md:text-lg font-sans mb-10 max-w-lg mx-auto">
                        Experience a perfect representation of Ireland's rich tradition. Savor authentic dishes
                        while sipping one of our signature stouts. Toronto's (Cabbagetown) best kept secret awaits.
                    </p>

                    {/* Group Reservation CTA */}
                    <div className="flex flex-col items-center gap-6 mb-12 md:mb-20">
                        <a
                            href="https://www.opentable.com/r/stout-irish-pub-toronto"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-site celtic-hover"
                            aria-label="Book a group reservation at Stout Irish Pub via OpenTable"
                        >
                            Book a Group Reservation
                        </a>
                        <p className="font-serif text-gray-500 text-xs italic tracking-widest opacity-80">
                            Groups of 10 or more · Reserve via OpenTable
                        </p>
                    </div>
                </div>

                {/* Gallery Strip — Grid Layout (Standardized to 6 images) */}
                <div className="w-full" aria-label="Photo gallery">
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
                        {GALLERY_IMAGES.slice(0, 6).map((img, idx) => (
                            <div
                                key={img.alt + idx}
                                className="relative aspect-[4/3] overflow-hidden rounded-sm cursor-pointer group"
                                onClick={() => setSelectedImg(img)}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImg && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
                    onClick={() => setSelectedImg(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                        aria-label="Close"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <img
                        src={selectedImg.src}
                        alt={selectedImg.alt}
                        className="max-w-full max-h-full object-contain shadow-2xl animate-in zoom-in-95 duration-500"
                    />
                </div>
            )}
        </section>
    )
}
