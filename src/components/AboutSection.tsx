import { useState } from 'react'

const GALLERY_IMAGES = [
    {
        src: '/gallery/Turn_this_exterior_4k_202602241945.jpeg',
        alt: 'Classic exterior of Stout Irish Pub in Cabbagetown',
    },
    {
        src: '/gallery/Turn_this_interior_4k_202602241919.jpeg',
        alt: 'Warm and inviting atmospheric interior of the pub',
    },
    {
        src: '/gallery/Turn_this_photo_4k_202602242223 (4).jpeg',
        alt: 'Delicious food and drink pairings',
    },
    {
        src: '/gallery/Change_to_night_4k_202602242104.jpeg',
        alt: 'Cozy pub atmosphere at night',
    },
    {
        src: '/gallery/Turn_this_display_4k_202602241854.jpeg',
        alt: 'A wide selection of Ontario craft beers on tap',
    },
    {
        src: '/gallery/Remove_the_cutlery_4k_202602242233.jpeg',
        alt: 'Authentic Irish cuisine served fresh',
    },
    {
        src: '/gallery/Turn_this_photo_4k_202602242022.jpeg',
        alt: 'Perfectly poured pints of local stout and ale',
    },
    {
        src: '/gallery/Turn_this_photo_4k_202602242026.jpeg',
        alt: 'Rustic wood finishes and traditional pub decor',
    },
    {
        src: '/gallery/Turn_this_photo_4k_202602242150.jpeg',
        alt: 'Warm lighting casting a friendly glow over the bar',
    },
    {
        src: '/gallery/Turn_this_photo_4k_202602242223 (7).jpeg',
        alt: 'Hearty pub meals and friendly local service',
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
                <div className="max-w-3xl w-full mx-auto text-center flex flex-col items-center">
                    {/* Heading Section */}
                    <div className="text-center mb-12 md:mb-20 flex flex-col items-center">
                        <h2
                            id="about-heading"
                            className="font-display text-2xl sm:text-3xl md:text-5xl text-white font-bold tracking-[0.25em] uppercase leading-tight"
                        >
                            Authentic Irish
                        </h2>
                        <div className="w-12 md:w-16 h-px bg-gold/40 mt-6 md:mt-10" aria-hidden="true" />
                    </div>

                    {/* Paragraph */}
                    <p className="text-gray-400 leading-relaxed font-sans font-light text-base md:text-lg mb-12 md:mb-16 max-w-xl mx-auto px-4 md:px-0 opacity-90">
                        Our food brings the rich flavors of Ireland to your table, paired perfectly with our signature beers. Discover why we’re one of Cabbagetown’s best-kept secrets—come by and taste for yourself.
                    </p>

                    {/* Group Reservation CTA */}
                    <div className="flex flex-col items-center mb-16 md:mb-24">
                        <a
                            href="https://www.opentable.com/r/stout-irish-pub-toronto"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-site celtic-hover"
                            aria-label="Book a group reservation at Stout Irish Pub via OpenTable"
                        >
                            Book a Group Reservation
                        </a>
                    </div>
                </div>

                {/* Gallery Strip — Grid Layout (Standardized to 6 images) */}
                <div className="w-full" aria-label="Photo gallery">
                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 md:gap-4">
                        {GALLERY_IMAGES.slice(0, 10).map((img, idx) => (
                            <div
                                key={img.alt + idx}
                                className={`relative aspect-[4/3] overflow-hidden rounded-sm cursor-pointer group ${idx >= 6 ? 'hidden xl:block' : ''
                                    }`}
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
