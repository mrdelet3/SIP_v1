import { useState } from 'react'
import { Download } from 'lucide-react'
import PdfMenuButton from './PdfMenuButton'

import { TabKey, MENU_DATA as MENU, MENU_TABS as TABS } from '../data/config'

export default function MenuSection() {
    const [activeTab, setActiveTab] = useState<TabKey>('starters')

    return (
        <section
            id="menu"
            className="bg-primary min-h-[100dvh] md:h-auto flex flex-col justify-start snap-start pt-16 pb-12 md:py-32 overflow-hidden md:overflow-visible"
            aria-labelledby="menu-heading"
        >
            <div className="max-w-6xl mx-auto px-6 md:px-6 w-full flex flex-col items-center">
                {/* Heading */}
                <div className="text-center mb-12 md:mb-16 flex flex-col items-center justify-center">
                    <h2
                        id="menu-heading"
                        className="font-display text-xl sm:text-3xl md:text-5xl text-white font-bold tracking-[0.25em] uppercase"
                    >
                        Menu
                    </h2>
                    <div className="w-10 md:w-16 h-px bg-gold/30 mt-4 md:mt-8" aria-hidden="true" />
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-6 md:mb-8 min-h-[3rem] h-auto flex-shrink-0" role="tablist" aria-label="Menu categories">
                    <div className="flex flex-wrap justify-center gap-1 sm:gap-2 md:gap-8">
                        {TABS.map((tab) => (
                            <button
                                key={tab.key}
                                role="tab"
                                aria-selected={activeTab === tab.key}
                                aria-controls={`tabpanel-${tab.key}`}
                                id={`tab-${tab.key}`}
                                onClick={() => setActiveTab(tab.key)}
                                className={`px-3 py-2 sm:px-4 text-[11px] uppercase font-bold tracking-widest transition-colors focus:outline-none min-h-[44px] ${activeTab === tab.key
                                    ? 'menu-tab-active'
                                    : 'text-gray-500 hover:text-gold'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {activeTab === 'brunch' && (
                    <div className="text-center mb-12 animate-in fade-in slide-in-from-top-2 duration-700">
                        <p className="font-serif text-gold text-xs md:text-sm tracking-[0.3em] uppercase">
                            Served Saturday/Sunday 11am – 3pm
                        </p>
                    </div>
                )}

                {activeTab === 'pawtio' && (
                    <div className="text-center mb-12 animate-in fade-in slide-in-from-top-2 duration-700">
                        <p className="font-serif text-gold/80 italic text-xs md:text-sm max-w-lg mx-auto leading-relaxed px-4">
                            We love your furry friends so much that we created a puppy menu just for them. Join us on our backyard garden patio.
                        </p>
                    </div>
                )}

                {/* Items container - scrollable on mobile to stay in one fold */}
                <div className="w-full flex-1 overflow-y-auto hide-scrollbar -mx-4 px-4 mb-6 md:mb-20 min-h-[350px] md:overflow-visible">
                    <div
                        id={`tabpanel-${activeTab}`}
                        role="tabpanel"
                        aria-labelledby={`tab-${activeTab}`}
                        className="grid md:grid-cols-2 gap-x-12 gap-y-8"
                    >
                        {MENU[activeTab].map((item) => (
                            <div
                                key={item.name}
                                className="border-l border-white/10 pl-5 sm:pl-8 py-3 hover:border-gold transition-colors group"
                            >
                                <div className="flex justify-between items-center mb-2 gap-3">
                                    <h3 className="font-display text-white text-sm sm:text-base md:text-xl tracking-wide uppercase leading-snug">
                                        {item.name}
                                    </h3>
                                    <div className="flex-shrink-0">
                                        {item.price.includes('/') ? (
                                            <div className="flex items-center">
                                                {item.price.split('/').map((part, index, array) => (
                                                    <div key={index} className="flex items-center">
                                                        <div className="flex flex-col items-center">
                                                            <span className="text-[9px] md:text-[10px] uppercase font-bold text-gray-500 tracking-[0.1em] mb-1 leading-none font-sans">
                                                                {index === 0 ? 'S' : 'L'}
                                                            </span>
                                                            <span className="font-sans text-gold font-bold text-sm sm:text-base md:text-xl whitespace-nowrap leading-none">
                                                                {part.trim()}
                                                            </span>
                                                        </div>
                                                        {index < array.length - 1 && (
                                                            <span className="font-extralight opacity-20 mx-3 text-white self-end mb-1 md:mb-1.5 md:text-lg">/</span>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <span className="font-sans text-gold font-bold text-sm sm:text-base md:text-xl">
                                                {item.price}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <p className="text-gray-400 font-sans text-xs sm:text-sm font-light leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="flex flex-col items-center mt-auto flex-shrink-0">
                    <p className="font-serif text-gray-400 italic text-[11px] md:text-sm mb-6 text-center max-w-xs md:max-w-none px-4">
                        Our weekly feature menu keeps things interesting—new flavors, same great pub.
                    </p>
                    <div className="hidden md:flex justify-center items-center gap-6">
                        <a
                            href="https://stoutirishpub.ca/features"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-site celtic-hover"
                        >
                            <span>FEATURE MENU</span>
                            <Download className="w-4 h-4 ml-2" aria-hidden="true" />
                        </a>

                        <PdfMenuButton />
                    </div>
                </div>
            </div>
        </section>
    )
}
