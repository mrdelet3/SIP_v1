import { useState } from 'react'

const GALLERY_IMAGES = [
    // Exterior
    { src: '/gallery/exterior-night.jpg', alt: 'Stout Irish Pub at Night' },
    { src: '/gallery/exterior-sign.jpg', alt: 'Authentic Irish Pub Sign' },
    // Bar
    { src: '/gallery/beer-taps-1.jpg', alt: 'Selection of Craft Beers on Tap' },
    { src: '/gallery/beer-taps-2.jpg', alt: 'Ontario Craft Beers' },
    { src: '/gallery/bar-lighting.jpg', alt: 'Atmospheric Bar Lighting' },
    { src: '/gallery/bottles-display.jpg', alt: 'Premium Spirits Selection' },
    { src: '/gallery/pints-1.jpg', alt: 'Perfectly Poured Pints' },
    { src: '/gallery/pints-2.jpg', alt: 'Fresh Draught Beer' },
    // Interior
    { src: '/gallery/interior-main.jpg', alt: 'Cozy Irish Pub Interior' },
    { src: '/gallery/interior-detail-1.jpg', alt: 'Traditional Pub Decor' },
    { src: '/gallery/interior-detail-2.jpg', alt: 'Rustic Wood Finishes' },
    { src: '/gallery/interior-detail-3.jpg', alt: 'Warm Pub Atmosphere' },
]

export default function AboutSection() {
    const [selectedImg, setSelectedImg] = useState<{ src: string; alt: string } | null>(null)
    const [displayImages] = useState(() => {
        const requiredImg = GALLERY_IMAGES.find(img => img.src === '/gallery/bar-lighting.jpg')
        const otherImages = GALLERY_IMAGES.filter(img => img.src !== '/gallery/bar-lighting.jpg')

        const randomOthers = [...otherImages].sort(() => 0.5 - Math.random()).slice(0, 5)
        const combined = requiredImg ? [requiredImg, ...randomOthers] : randomOthers

        return combined.sort(() => 0.5 - Math.random())
    })

    return (
        <section
            id="about"
            className="bg-secondary h-[100dvh] flex flex-col snap-start overflow-hidden pt-20"
            aria-labelledby="about-heading"
        >
            {/* Text + CTA block - Centered Container */}
            <div className="flex-1 flex flex-col items-center justify-center max-w-6xl mx-auto px-6 w-full pb-10 md:pb-20">
                <div className="max-w-3xl w-full text-center flex flex-col items-center">
                    {/* Heading Section */}
                    <div className="flex flex-col items-center mb-6 md:mb-10">
                        <h2
                            id="about-heading"
                            className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white font-bold tracking-[0.3em] uppercase leading-tight"
                        >
                            Authentic Irish
                        </h2>
                        <div className="w-16 md:w-24 h-px bg-gold/40 mt-8 md:mt-12" aria-hidden="true" />
                    </div>

                    {/* Paragraph */}
                    <p className="text-gray-400 leading-relaxed font-sans font-light text-base md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto px-4 md:px-0 opacity-90 tracking-wide">
                        Our food brings the rich flavors of Ireland to your table, paired perfectly with our signature beers. Discover why we’re one of Cabbagetown’s best-kept secrets—come by and taste for yourself.
                    </p>

                    {/* Group Reservation CTA */}
                    <div className="flex flex-col items-center">
                        <a
                            href="https://www.opentable.com/r/stout-irish-pub-toronto"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-site glow-gold"
                            aria-label="Book a group reservation at Stout Irish Pub via OpenTable"
                        >
                            Book a Group Reservation
                        </a>
                    </div>
                </div>
            </div>

            {/* Full-Width Gallery Strip - Pushed to absolute bottom */}
            <div className="w-full relative mt-auto" aria-label="Photo gallery">
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-1 md:gap-2">
                    {displayImages.map((img) => (
                        <div
                            key={img.src}
                            className="relative aspect-[8/9] md:aspect-square xl:aspect-[4/3] w-full overflow-hidden cursor-pointer group"
                            onClick={() => setSelectedImg(img)}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-1000 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImg && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-500"
                    onClick={() => setSelectedImg(null)}
                >
                    <button
                        className="absolute top-8 right-8 text-white/50 hover:text-gold transition-colors p-2"
                        aria-label="Close"
                    >
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <img
                        src={selectedImg.src}
                        alt={selectedImg.alt}
                        className="max-w-full max-h-full object-contain shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/5 animate-in zoom-in-95 duration-700"
                    />
                </div>
            )}
        </section>
    )
}
