import { useState } from 'react'
import { EVENTS_DATA as EVENTS, HAPPY_HOUR_ITEMS, SITE_CONFIG } from '../data/config'

export default function EventsSection() {
    const [redirectEvent, setRedirectEvent] = useState<{ name: string; link: string; isMovie?: boolean } | null>(null)

    return (
        <section
            id="events"
            className="bg-secondary min-h-[100dvh] flex flex-col items-center justify-center snap-start py-16 md:py-0 overflow-hidden md:overflow-visible relative"
            aria-labelledby="events-heading"
        >
            <div className="max-w-5xl mx-auto px-6 md:px-6 w-full flex flex-col">

                <div className="grid md:grid-cols-2 gap-6 md:gap-0 items-start">

                    {/* Events column */}
                    <div className="md:border-r md:border-white/10 md:pr-16">
                        <div className="text-center mb-1 md:mb-20 h-24 flex flex-col items-center justify-center">
                            <h2 id="events-heading" className="font-display text-xl sm:text-3xl md:text-5xl text-white font-bold tracking-[0.25em] uppercase">Weekly Events</h2>
                            <div className="w-10 md:w-16 h-px bg-gold/30 mt-4 md:mt-8" aria-hidden="true" />
                        </div>

                        <ul className="space-y-4 md:space-y-8 mb-4 md:mb-14 mt-2" aria-label="Weekly events">
                            {EVENTS.map((event) => {
                                const isTrivia = event.name.toLowerCase().includes('trivia')
                                const hasLink = !!(event as any).link

                                const handleClick = () => {
                                    if (isTrivia) {
                                        setRedirectEvent({
                                            name: 'Head Scratchers Trivia',
                                            link: 'https://www.headscratcherstrivia.com/reservationform'
                                        })
                                    } else if (hasLink) {
                                        setRedirectEvent({
                                            name: event.name,
                                            link: (event as any).link
                                        })
                                    }
                                }

                                return (
                                    <li
                                        key={event.name}
                                        className={`border-l border-white/10 pl-5 py-1 hover:border-gold transition-colors group ${(isTrivia || hasLink) ? 'cursor-pointer' : 'cursor-default'}`}
                                        onClick={handleClick}
                                    >
                                        <h3 className="font-display text-white text-sm md:text-base tracking-[0.2em] uppercase font-bold group-hover:text-gold transition-colors mb-0.5 flex items-center justify-between">
                                            {event.name}
                                            {(isTrivia || hasLink) && (
                                                <span className="text-[10px] text-gold tracking-widest ml-4 font-sans opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                                    {isTrivia ? 'book' : 'info'} &rarr;
                                                </span>
                                            )}
                                        </h3>
                                        <p className="font-sans font-light text-gray-400 text-xs md:text-sm">
                                            {event.schedule}
                                        </p>
                                    </li>
                                )
                            })}
                        </ul>

                        <div className="flex justify-center pt-8 pb-4 md:pb-0">
                            <a
                                href="https://www.instagram.com/stoutirishpubto/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-site celtic-hover mx-auto"
                                aria-label="Follow Stout Irish Pub on Instagram for upcoming events"
                            >
                                Follow for Events
                            </a>
                        </div>
                    </div>

                    {/* Happy Hour column */}
                    <div className="md:pl-16">
                        <div className="text-center mb-1 md:mb-20 h-24 flex flex-col items-center justify-center">
                            <h2 className="font-display text-xl sm:text-3xl md:text-5xl text-white font-bold tracking-[0.25em] uppercase">Happy Hour</h2>
                            <div className="w-10 md:w-16 h-px bg-gold/30 mt-4 md:mt-8" aria-hidden="true" />
                        </div>

                        <div className="mt-2">
                            <p className="font-serif font-light text-gray-300 text-sm md:text-lg leading-relaxed italic mb-4 md:mb-8 text-left md:text-right">
                                Experience the nocturnal charm of Stout Irish Pub with our 'Happy Hour'.
                            </p>

                            <div className="space-y-4 md:space-y-8 flex flex-col items-start md:items-end">
                                <div className="text-left md:text-right border-l border-white/10 pl-5 md:pl-0 md:border-l-0 md:pr-0">
                                    <h3 className="font-display text-white text-sm md:text-base tracking-[0.2em] uppercase font-bold mb-1">
                                        Everyday 9:00 PM — 11:00 PM
                                    </h3>
                                    <div className="font-serif text-gray-400 text-sm md:text-base tracking-widest uppercase flex flex-col items-start md:items-end gap-1">
                                        {HAPPY_HOUR_ITEMS.map((item) => (
                                            <span key={item}>{item}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Event Info/Redirect Modal */}
            {redirectEvent && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
                    <div
                        className="bg-[#1a1a1a] border border-gold/30 p-8 md:p-12 max-w-md w-full text-center relative overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Decorative background logo */}
                        <img src="/logo.png" className="absolute -top-12 -right-12 w-48 opacity-5 grayscale pointer-events-none" alt="" />

                        <h3 className="font-display text-xl text-white font-bold tracking-[0.2em] uppercase mb-6">
                            {redirectEvent.isMovie ? 'Movie Night' : 'External Site'}
                        </h3>

                        {redirectEvent.isMovie ? (
                            <div className="space-y-6 mb-8 text-center">
                                <p className="font-sans text-gray-300 text-sm md:text-base leading-relaxed">
                                    Give us a call to make a reservation for Sunday Movie Night.
                                </p>
                                <a
                                    href={SITE_CONFIG.location.phoneHref}
                                    className="block font-display text-2xl text-gold hover:text-white transition-colors py-2"
                                >
                                    {SITE_CONFIG.location.phoneLine}
                                </a>
                            </div>
                        ) : (
                            <p className="font-sans text-gray-300 text-sm md:text-base leading-relaxed mb-8">
                                You are about to be redirected to <span className="text-gold">{redirectEvent.name}</span> to view their official event details.
                            </p>
                        )}

                        {!redirectEvent.isMovie && (
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={() => setRedirectEvent(null)}
                                    className="px-8 py-3 border border-white/10 text-[10px] uppercase font-bold text-white tracking-[0.2em] hover:bg-white/5 transition-all"
                                >
                                    Cancel
                                </button>
                                <a
                                    href={redirectEvent.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setRedirectEvent(null)}
                                    className="px-8 py-3 bg-gold text-[10px] uppercase font-bold text-black tracking-[0.2em] hover:bg-white transition-all shadow-lg"
                                >
                                    Proceed
                                </a>
                            </div>
                        )}
                    </div>
                    {/* Click outside to close */}
                    <div className="absolute inset-0 -z-10" onClick={() => setRedirectEvent(null)} />
                </div>
            )}
        </section>
    )
}
