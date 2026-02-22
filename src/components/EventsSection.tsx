const EVENTS = [
    {
        name: 'Head Scratchers Trivia',
        schedule: 'Every Monday & Tuesday at 7PM',
    },
    {
        name: 'Euchre Nite',
        schedule: 'Every Wednesday at 7:30PM',
    },
    {
        name: 'Sunday Movie Night',
        schedule: 'Every Sunday at 5PM',
    },
]

const HAPPY_HOUR_ITEMS = [
    '$7 Beers & Highballs',
    '$6 Shots',
    '$10 Martinis',
    'Specialty Starters',
]

export default function EventsSection() {
    return (
        <section
            id="events"
            className="bg-secondary h-[100dvh] md:min-h-[100dvh] md:h-auto flex flex-col justify-center snap-start py-8 md:py-28 overflow-hidden md:overflow-visible"
            aria-labelledby="events-heading"
        >
            <div className="max-w-6xl mx-auto px-[10vw] md:px-6 w-full flex flex-col justify-center">

                <div className="grid md:grid-cols-2 gap-6 md:gap-0 items-start">

                    {/* Events column */}
                    <div className="md:border-r md:border-white/10 md:pr-16">
                        <div className="text-center mb-6 md:mb-12">
                            <h2 id="events-heading" className="font-display text-xl sm:text-3xl md:text-4xl text-white font-bold tracking-[0.2em] uppercase mb-3 md:mb-4">Weekly Events</h2>
                            <div className="w-12 h-px bg-gold mx-auto" aria-hidden="true" />
                        </div>

                        <ul className="space-y-4 md:space-y-8 mb-6 md:mb-14" aria-label="Weekly events">
                            {EVENTS.map((event) => (
                                <li key={event.name} className="border-l border-white/10 pl-5 py-1 hover:border-gold transition-colors group cursor-default">
                                    <h3 className="font-display text-white text-sm md:text-base tracking-[0.2em] uppercase font-bold group-hover:text-gold transition-colors mb-0.5">
                                        {event.name}
                                    </h3>
                                    <p className="font-sans font-light text-gray-400 text-xs md:text-sm">
                                        {event.schedule}
                                    </p>
                                </li>
                            ))}
                        </ul>

                        <div className="flex justify-center">
                            <a
                                href="https://www.instagram.com/stoutirishpubto/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-center border border-gold text-gold px-8 sm:px-12 py-5 uppercase text-[11px] font-bold tracking-[0.2em] transition-all celtic-hover hover:text-white hover:bg-gold focus:outline-none focus:ring-2 focus:ring-gold min-h-[44px] flex items-center"
                                aria-label="Follow Stout Irish Pub on Instagram for upcoming events"
                            >
                                Follow for Events
                            </a>
                        </div>
                    </div>

                    {/* Happy Hour column */}
                    <div className="md:pl-16">
                        <div className="text-center mb-6 md:mb-12">
                            <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-white font-bold tracking-[0.2em] uppercase mb-3 md:mb-4">Happy Hour</h2>
                            <div className="w-12 h-px bg-gold mx-auto" aria-hidden="true" />
                        </div>

                        <p className="font-serif font-light text-gray-300 text-sm md:text-lg leading-relaxed italic mb-5 md:mb-8 text-center md:text-right">
                            Experience the nocturnal charm of Stout Irish Pub with our 'Happy Hour'.
                        </p>

                        <div className="border-r-0 md:border-r md:border-white/10 md:pr-6 py-2 text-center md:text-right">
                            <p className="text-white font-bold text-xs md:text-sm mb-3 md:mb-5 tracking-[0.2em] uppercase">
                                Everyday 9:00 PM — 11:00 PM
                            </p>
                            <ul className="space-y-3 text-gray-400 uppercase text-xs tracking-[0.2em] font-light" aria-label="Happy Hour drink prices">
                                {HAPPY_HOUR_ITEMS.map((item) => (
                                    <li key={item} className="flex items-center justify-center md:justify-end gap-3">
                                        {item}
                                        <span className="w-1.5 h-px bg-gold/50" />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
