import { useState } from 'react'
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
                <div className="text-center mb-1 md:mb-20 h-24 flex flex-col items-center justify-center">
                    <h2
                        id="menu-heading"
                        className="font-display text-xl sm:text-3xl md:text-5xl text-white font-bold tracking-[0.25em] uppercase"
                    >
                        Menu
                    </h2>
                    <div className="w-10 md:w-16 h-px bg-gold/30 mt-4 md:mt-8" aria-hidden="true" />
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-8 md:mb-16 min-h-[3rem] h-auto flex-shrink-0" role="tablist" aria-label="Menu categories">
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
                                <div className="flex justify-between items-baseline mb-2 gap-3">
                                    <h3 className="font-display text-white text-sm sm:text-base md:text-xl tracking-wide uppercase leading-snug">
                                        {item.name}
                                    </h3>
                                    <span className="font-sans text-gold font-bold text-sm sm:text-base md:text-xl flex-shrink-0">
                                        {item.price}
                                    </span>
                                </div>
                                <p className="text-gray-400 font-sans text-xs sm:text-sm font-light leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Download CTA — desktop only; mobile version lives in the nav drawer */}
                <div className="hidden md:flex justify-center mt-auto flex-shrink-0">
                    <PdfMenuButton />
                </div>
            </div>
        </section>
    )
}
