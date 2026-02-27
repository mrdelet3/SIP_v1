import { useState } from 'react'
import { EVENTS_DATA as EVENTS, HAPPY_HOUR_ITEMS, SITE_CONFIG } from '../data/config'

export default function EventsSection() {
    const [redirectEvent, setRedirectEvent] = useState<{ name: string; link: string; isMovie?: boolean } | null>(null)

    return (
        <section
            id="events"
            className="bg-secondary h-[100dvh] flex flex-col justify-start md:justify-center snap-start pt-24 pb-0 md:py-0 overflow-hidden md:overflow-visible relative"
            aria-labelledby="events-heading"
        >
            <div className="max-w-6xl mx-auto px-6 md:px-12 w-full flex-1 flex flex-col justify-start md:justify-center min-h-0 overflow-y-auto overflow-x-hidden hide-scrollbar pb-24 md:pb-0">
                <div className="md:max-w-3xl lg:max-w-none mx-auto w-full pt-8 md:pt-0">
                    <div className="grid lg:grid-cols-2 lg:divide-x lg:divide-white/10 items-start">

                        {/* Events column */}
                        <div className="lg:pr-16 lg:pt-8 flex flex-col items-center">
                            <div className="text-center mb-10 md:mb-16 flex flex-col items-center justify-center">
                                <h2 id="events-heading" className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white font-bold tracking-[0.3em] uppercase leading-tight">
                                    Weekly<br />Events
                                </h2>
                                <div className="w-16 md:w-24 h-px bg-gold/40 mt-8 md:mt-12" aria-hidden="true" />
                            </div>

                            <div className="w-fit">
                                <ul className="space-y-8 md:space-y-12 mb-12 md:mb-16 mt-2 text-left" aria-label="Weekly events">
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
                                                className={`py-1 transition-colors group ${(isTrivia || hasLink) ? 'cursor-pointer' : 'cursor-default'}`}
                                                onClick={handleClick}
                                            >
                                                <h3 className="font-display text-white text-base md:text-lg tracking-[0.2em] uppercase font-bold group-hover:text-gold transition-colors mb-2">
                                                    {event.name}
                                                </h3>
                                                <p className="font-sans font-light text-gray-400 text-xs md:text-sm tracking-widest uppercase">
                                                    {event.schedule}
                                                </p>
                                            </li>
                                        )
                                    })}
                                </ul>

                                <div className="flex justify-start pt-4 pb-8 md:pb-0">
                                    <a
                                        href="https://www.instagram.com/stoutirishpubto/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-site glow-gold"
                                        aria-label="Follow Stout Irish Pub on Instagram for upcoming events"
                                    >
                                        Follow for Events
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Happy Hour column */}
                        <div className="lg:pl-16 lg:pt-8 flex flex-col items-center">
                            <div className="text-center mb-10 md:mb-16 flex flex-col items-center justify-center pt-12 lg:pt-0">
                                <h2 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white font-bold tracking-[0.3em] uppercase leading-tight">
                                    Happy<br />Hour
                                </h2>
                                <div className="w-16 md:w-24 h-px bg-gold/40 mt-8 md:mt-12" aria-hidden="true" />
                            </div>

                            <div className="mt-2 text-center lg:text-right w-full max-w-sm">
                                <p className="font-serif font-light text-gray-300 text-sm md:text-lg leading-relaxed italic mb-10 md:mb-16 mx-auto lg:ml-auto lg:mr-0">
                                    Experience the nocturnal charm of Stout Irish Pub with our 'Happy Hour'.
                                </p>

                                <div className="space-y-8 md:space-y-12 flex flex-col items-center lg:items-end">
                                    <div className="text-center lg:text-right">
                                        <h3 className="font-display text-white text-base md:text-lg tracking-[0.2em] uppercase font-bold mb-3">
                                            Everyday 9:00 PM — 11:00 PM
                                        </h3>
                                        <div className="font-serif text-gray-400 text-sm md:text-base tracking-widest uppercase flex flex-col gap-2 items-center lg:items-end">
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
