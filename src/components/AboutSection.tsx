const GALLERY_IMAGES = [
    {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnktMQKfIWMmqRkeWfYMy13txX2M6qy5coyWhEfwwcRsS0Hu8QVGyyKC56XNAN-AM74K_7DaaEiSlnDL-po1u-VIBALuy0QihWgkz8iAPFN0KSgKnp4_l9jUPVwg42HcGAbv6CpqsQeuEKYVM2lAWSj5bGSQTC_qfyedZ_K7YloytcIqqE5X8vouHmbjJNeJr3ArxiekPid9bcBNWkD5G0Y8eU11PFnFSCgM3se7EuO8zURUuMesrDx9n1Ii1iP1_Q2nIKy-offj8',
        alt: 'Warm and inviting interior of Stout Irish Pub',
    },
    {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDA0hwOzQ4ne-U-QNYeSsPYfFlUMBxT7xJtwLBMfgMrb9tMgB6SiS5vCNRe257N0gNG9qGHfnjIlg5ipB3EtGnIGcD-laP4f6WkiY6tOnVOV1T8vQ9UuYNnaNB0WLqJ6ILZCifLgstjEhythQof5_ELElnY_44oo9Oyje7JXnbkgZfKP50UOr2m-x2CXK48Uc78kcncnFjgIlTVL6PaCrv80RJkDEDcIbrIYqt617kICM5JKYVFwDahbAH4N20ksJ9B-AfO8pvkcc4',
        alt: 'Hearty Irish stew with bread, a traditional pub dish',
    },
    {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGSfddp3stS8Vaaatw1wiKQouQ3JDQG5CDi86B4emnIFts_UNdmyXKmFiKxIbYb9Tgm5laduoBIhyAECC7-OhIQOiEJePqJeIh8HP6W_4bF57aGNWji81J3x5KXv7iR5IRcrU5QTtTbNeoUdnPg-fyyLbhvHCEN90bWhoo1CzAT9v5Qo5mMuYoqOdcX1Aq1VwOu5fng0_T9l4LJVmCrPce2QaNbamluh-mMATe_zR35Fk1R7w7_2849kNAxiMM-RP8BE2MMwsmdsU',
        alt: 'Selection of craft beer taps behind the bar',
    },
    {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQ1CNj7vpwE4_SstjLRFWrLFlI-8Wmyy2EZwkHUBB_LUpzGk-IdrPFxJ40CZWUoUU0j9LDKeRHQytnSFZ2XUv0SZP5sOR4QtDAhkKJ2I_VQgznrdYrxvPs5U3J-MelE8MGLFwXCzXOKPQCGCrechvt3ygnGdrNVFCC868GXCF2-RCaSZbvt3dUuBOsFUyr25IYz-2WVxnDOsfgRHs_g5BKkKlsArWnQ3CaaMLLH1XqAQc1NMtBTRtki9MYsur2fg-QWQIoPCzd0CU',
        alt: 'Classic British-style fish and chips with tartar sauce',
    },
    {
        src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop',
        alt: 'Atmospheric pub lighting and decor',
    },
    {
        src: 'https://images.unsplash.com/photo-1543007630-9710e40e7064?q=80&w=1200&auto=format&fit=crop',
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
    return (
        <section
            id="about"
            className="bg-secondary min-h-[100dvh] flex flex-col justify-between snap-start"
            aria-labelledby="about-heading"
        >
            {/* Text + CTA block */}
            <div className="flex-1 flex flex-col items-center justify-center text-center py-16 md:py-24 px-5 sm:px-8 md:px-6">
                <div className="max-w-2xl w-full mx-auto">
                    <h2
                        id="about-heading"
                        className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-bold tracking-[0.2em] uppercase mb-8"
                    >
                        Authentic Irish
                    </h2>
                    <div className="w-16 h-px bg-gold mx-auto mb-8" aria-hidden="true" />
                    <p className="text-gray-400 leading-relaxed font-light text-base md:text-lg font-sans mb-12">
                        The food here is not only delicious but also a perfect representation of
                        Ireland's rich tradition. Come experience the flavors for yourself and enjoy
                        an authentic Irish dish while sipping on one of our signature beers. There's
                        a reason why we're one of Toronto's{' '}
                        <span className="text-gold font-semibold">(Cabbagetown)</span> best
                        kept secrets. Come and find out why.
                    </p>

                    {/* Group Reservation CTA */}
                    <div className="flex flex-col items-center gap-6">
                        <a
                            href="https://www.opentable.com/r/stout-irish-pub-toronto"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary celtic-hover flex items-center justify-center min-w-[280px]"
                            aria-label="Book a group reservation at Stout Irish Pub via OpenTable"
                        >
                            Book a Group Reservation
                        </a>
                        <p className="font-serif text-gray-500 text-xs italic tracking-widest opacity-80">
                            Groups of 10 or more · Reserve via OpenTable
                        </p>
                    </div>
                </div>
            </div>

            {/* Gallery grid/strip — orientation aware */}
            <div className="w-full overflow-hidden" aria-label="Photo gallery">
                <div className="grid grid-cols-4 md:flex md:flex-row md:overflow-x-auto landscape:flex landscape:flex-row landscape:overflow-x-auto w-full hide-scrollbar">
                    {GALLERY_IMAGES.map((img) => (
                        <div key={img.alt} className="flex-none w-full md:w-1/4 lg:w-1/4 aspect-[4/3] overflow-hidden bg-primary/20">
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
