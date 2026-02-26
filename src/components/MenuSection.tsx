import { useState, useEffect, useRef } from 'react'
import { Download, ChevronDown } from 'lucide-react'
import PdfMenuButton from './PdfMenuButton'

import { TabKey, MENU_DATA as MENU, MENU_TABS as TABS, MenuItem } from '../data/config'

export default function MenuSection() {
    const [activeTab, setActiveTab] = useState<TabKey>('starters')
    const [hoveredItem, setHoveredItem] = useState<MenuItem | null>(null)
    const spotlightRef = useRef<HTMLDivElement>(null)
    const scrollableRef = useRef<HTMLDivElement>(null)
    const [canScroll, setCanScroll] = useState(false)
    const [isAtBottom, setIsAtBottom] = useState(false)

    // Preload all menu images on mount
    useEffect(() => {
        const allItems = Object.values(MENU).flat()
        allItems.forEach(item => {
            if (item.image) {
                const img = new Image()
                img.src = item.image
            }
        })
    }, [])

    const handleMouseMove = (e: React.MouseEvent) => {
        if (spotlightRef.current) {
            // Apply translation directly to avoid React re-renders and React state lag
            // We use translate3d to force hardware acceleration for silky-smooth movement
            spotlightRef.current.style.transform = `translate3d(${e.clientX + 20}px, ${e.clientY + 20}px, 0)`
        }
    }

    // Reset hovered item and scroll state when tab changes
    useEffect(() => {
        setHoveredItem(null)

        // Brief timeout to allow DOM to update before checking scroll
        const timer = setTimeout(checkScroll, 100)
        return () => clearTimeout(timer)
    }, [activeTab])

    const checkScroll = () => {
        if (scrollableRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = scrollableRef.current
            const hasScroll = scrollHeight > clientHeight + 2
            const atBottom = scrollTop + clientHeight >= scrollHeight - 15

            setCanScroll(hasScroll)
            setIsAtBottom(atBottom)
        }
    }

    useEffect(() => {
        checkScroll()

        const scrollEl = scrollableRef.current
        if (scrollEl) {
            scrollEl.addEventListener('scroll', checkScroll)
            window.addEventListener('resize', checkScroll)

            // Also watch for content changes
            const observer = new ResizeObserver(checkScroll)
            observer.observe(scrollEl)

            return () => {
                scrollEl.removeEventListener('scroll', checkScroll)
                window.removeEventListener('resize', checkScroll)
                observer.disconnect()
            }
        }
    }, [])

    return (
        <section
            id="menu"
            onMouseMove={handleMouseMove}
            className="bg-primary h-[100dvh] flex flex-col justify-start snap-start pt-24 pb-0 md:py-32 overflow-hidden md:overflow-visible relative"
            aria-labelledby="menu-heading"
        >
            {/* Outer Tracking Container: instantly tracks mouse with 0 lag or transitions */}
            <div
                ref={spotlightRef}
                className="fixed left-0 top-0 pointer-events-none z-50 hidden md:block"
                style={{ transform: 'translate3d(0, 0, 0)' }}
            >
                {/* Inner Transition Container: fades and scales smoothly based on active hover state */}
                <div
                    className={`transition-all duration-300 ease-out 
                        ${hoveredItem?.image ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                >
                    {hoveredItem?.image && (
                        <div className="relative w-64 h-80 rounded-xl overflow-hidden border-2 border-gold/50 shadow-[0_0_50px_rgba(197,160,89,0.3)] bg-secondary">
                            <img
                                src={hoveredItem.image}
                                alt={hoveredItem.name}
                                className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                                <p className="font-display text-white text-lg leading-tight uppercase tracking-wider">{hoveredItem.name}</p>
                                <p className="text-gold font-bold text-sm tracking-widest">{hoveredItem.price}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 md:px-6 w-full flex-1 flex flex-col items-center relative z-10 min-h-0 md:justify-center">
                {/* Heading */}
                <div className="text-center mb-6 md:mb-16 flex flex-col items-center justify-center">
                    <h2
                        id="menu-heading"
                        className="font-display text-lg sm:text-3xl md:text-5xl text-white font-bold tracking-[0.25em] uppercase"
                    >
                        Menu
                    </h2>
                    <div className="w-8 md:w-16 h-px bg-gold/30 mt-2 md:mt-8" aria-hidden="true" />
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
                    <div className="text-center mb-6 md:mb-12 animate-in fade-in slide-in-from-top-2 duration-700 flex-shrink-0">
                        <p className="font-serif text-gold text-xs md:text-sm tracking-[0.3em] uppercase">
                            Served Saturday/Sunday 11am – 3pm
                        </p>
                    </div>
                )}

                {activeTab === 'pawtio' && (
                    <div className="text-center mb-6 md:mb-12 animate-in fade-in slide-in-from-top-2 duration-700 flex-shrink-0">
                        <p className="font-serif text-gold/80 italic text-xs md:text-sm max-w-lg mx-auto leading-relaxed px-4">
                            We love your furry friends so much that we created a puppy menu just for them. Join us on our backyard garden patio.
                        </p>
                    </div>
                )}

                {/* Items container - scrollable on mobile to stay in one fold */}
                <div
                    ref={scrollableRef}
                    className="w-full flex-1 md:flex-none overflow-y-auto overflow-x-hidden hide-scrollbar -mx-4 px-4 mb-2 md:mb-12 md:overflow-visible relative pb-16 md:pb-0"
                >
                    <div
                        id={`tabpanel-${activeTab}`}
                        role="tabpanel"
                        aria-labelledby={`tab-${activeTab}`}
                        className="grid md:grid-cols-2 gap-x-12 gap-y-4 md:gap-y-8"
                    >
                        {MENU[activeTab].map((item) => (
                            <div
                                key={item.name}
                                onMouseEnter={() => setHoveredItem(item)}
                                onMouseLeave={() => setHoveredItem(null)}
                                className={`border-l border-white/10 pl-5 sm:pl-8 py-2 md:py-3 hover:border-gold transition-colors group ${item.image ? 'cursor-pointer' : 'cursor-default'}`}
                            >
                                <div className="flex justify-between items-center mb-1 md:mb-2 gap-3">
                                    <h3 className="font-display text-white text-sm sm:text-base md:text-xl tracking-wide uppercase leading-snug transition-colors group-hover:text-gold">
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
                                                            <span className="font-sans text-gold font-bold text-sm sm:text-base md:text-xl whitespace-nowrap leading-none transition-colors group-hover:text-white">
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
                                            <span className="font-sans text-gold font-bold text-sm sm:text-base md:text-xl transition-colors group-hover:text-white">
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
                <div className="w-[calc(100%+3rem)] -mx-6 md:w-full md:mx-0 mt-auto md:mt-0 flex flex-col items-center flex-shrink-0 relative">
                    <div className="relative w-full px-8 flex justify-center items-center mb-4 md:mb-6">
                        <p className="font-serif text-gray-400 italic text-[12px] md:text-sm text-center max-w-[300px] md:max-w-none leading-relaxed pr-14 md:pr-0">
                            Our weekly feature menu keeps things interesting—new flavors, same great pub.
                        </p>

                        {/* Bobbing Scroll Indicator - Mobile Only - Aligned with text */}
                        {canScroll && !isAtBottom && (
                            <div className="md:hidden absolute right-4 md:right-auto pointer-events-none">
                                <ChevronDown className="w-5 h-5 text-white/80 animate-bounce" strokeWidth={2} />
                            </div>
                        )}
                    </div>
                    <div className="w-full flex justify-center border-t border-gold/30 md:border-none">
                        <div className="font-display flex flex-col items-center justify-between text-[11px] gap-0 w-full md:w-auto md:flex-row md:gap-4 md:text-sm">
                            {/* Feature Menu row - full width on mobile */}
                            <a
                                href="https://stoutirishpub.ca/features"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-site btn-site--charcoal flex w-full items-center justify-center gap-1.5 py-4 md:py-5 md:px-12 border-b md:border-b-0 md:border-r border-gold/30 md:border md:rounded-sm group px-2"
                            >
                                <span className="font-display text-white uppercase tracking-widest font-bold text-center leading-tight">FEATURE MENU</span>
                                <Download className="w-3 h-3 md:w-4 md:h-4 text-white shrink-0" aria-hidden="true" />
                            </a>

                            {/* Main menus row - split equally on mobile */}
                            <div className="flex w-full md:w-auto justify-center">
                                <div className="flex w-1/2 md:w-auto items-center justify-center border-r border-gold/30 md:border-none">
                                    <PdfMenuButton
                                        className="w-full h-full md:w-auto md:h-auto py-4 md:py-5 md:px-10 !rounded-none md:!rounded-sm shadow-none !border-none px-2 flex-col justify-center gap-1 md:flex-row md:gap-2"
                                        label="FULL MENU"
                                        variant="gold"
                                    />
                                </div>

                                <div className="flex w-1/2 md:w-auto items-center justify-center">
                                    <PdfMenuButton
                                        className="w-full h-full md:w-auto md:h-auto py-4 md:py-5 md:px-10 !rounded-none md:!rounded-sm shadow-none !border-none px-2 flex-col justify-center gap-1 md:flex-row md:gap-2"
                                        label="DRINK MENU"
                                        href="/drinks.pdf"
                                        download="Stout-Irish-Pub-Drink-Menu.pdf"
                                        variant="green"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
