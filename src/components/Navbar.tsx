import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import PdfMenuButton from './PdfMenuButton'

const RETAIL_ITEMS = [
    { name: "Brennan's Irish sausages pack of 8", price: '$12' },
    { name: "Brennan's Irish rashers pack of 6", price: '$11' },
    { name: "Brennan's white pudding 300g", price: '$10' },
    { name: "Brennan's black pudding 300g", price: '$10' },
    { name: "Brennan's full Irish breakfast package", price: '$40', sub: '1 pack of sausage, 1 pack of rashers, 1 black and 1 white pudding.' }
]

function MobileDrawerContent({ onClose: _onClose }: { onClose: () => void }) {
    const [retailExpanded, setRetailExpanded] = useState(false)

    return (
        <>
            {/* Menu */}
            <div className="border-b border-white/10">
                <a
                    href="#menu"
                    className="flex items-center justify-between w-full py-5 text-xs uppercase font-bold text-white tracking-[0.2em] hover:text-gold transition-colors"
                >
                    Menu
                </a>
            </div>

            {/* Events */}
            <div className="border-b border-white/10">
                <a
                    href="#events"
                    className="flex items-center justify-between w-full py-5 text-xs uppercase font-bold text-white tracking-[0.2em] hover:text-gold transition-colors"
                >
                    Events
                </a>
            </div>

            {/* Location & Hours */}
            <div className="border-b border-white/10">
                <a
                    href="#location"
                    className="flex items-center justify-between w-full py-5 text-xs uppercase font-bold text-white tracking-[0.2em] hover:text-gold transition-colors"
                >
                    Location &amp; Hours
                </a>
            </div>

            {/* Retail submenu */}
            <div className="border-b border-white/10">
                <button
                    className="w-full flex items-center justify-between py-5 text-xs uppercase font-bold text-white tracking-[0.2em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset"
                    onClick={() => setRetailExpanded((p) => !p)}
                    aria-expanded={retailExpanded}
                >
                    <span>Retail</span>
                    <ChevronDown className={`w-4 h-4 text-gold transition-transform duration-300 ${retailExpanded ? 'rotate-180' : ''}`} />
                </button>
                {retailExpanded && (
                    <div className="pb-5">
                        <div className="flex justify-between items-baseline mb-2 pl-2 pr-2">
                            <h3 className="font-display text-lg font-normal text-white tracking-[0.2em] uppercase">Brennan's Irish Retail</h3>
                            <span className="font-serif text-xs text-gold tracking-[0.1em] uppercase">Pick-up only</span>
                        </div>
                        <div className="w-10 h-px bg-gold mb-4 ml-2" aria-hidden="true" />
                        <div className="flex flex-col gap-0">
                            {RETAIL_ITEMS.map((item, idx) => (
                                <div key={idx} className="flex flex-col border-l border-white/10 pl-5 py-3 hover:border-gold transition-colors">
                                    <div className="flex justify-between items-baseline gap-4">
                                        <span className="font-display tracking-wide uppercase text-white font-bold text-sm leading-tight">{item.name}</span>
                                        <span className="font-serif text-gold font-bold text-sm flex-shrink-0 ml-2">{item.price}</span>
                                    </div>
                                    {item.sub && <p className="text-gray-400 text-xs mt-2 font-serif font-light leading-relaxed">{item.sub}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Reservations */}
            <div className="border-b border-white/10">
                <a
                    href="https://www.opentable.com/r/stout-irish-pub-toronto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full py-5 text-xs uppercase font-bold text-white tracking-[0.2em] hover:text-gold transition-colors"
                >
                    Reservations
                </a>
            </div>

            {/* PDF Download — mobile only */}
            <div className="pt-8 pb-4">
                <PdfMenuButton className="w-full justify-center" />
            </div>
        </>
    )
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [pastHero, setPastHero] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [retailOpen, setRetailOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 60)
            setPastHero(window.scrollY >= window.innerHeight * 0.85)
        }
        window.addEventListener('scroll', onScroll, { passive: true })

        const handleClickOutside = (e: MouseEvent) => {
            if (!(e.target as HTMLElement).closest('.nav-dropdown-trigger')) {
                setRetailOpen(false)
            }
        }
        window.addEventListener('click', handleClickOutside)

        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('click', handleClickOutside)
        }
    }, [])

    const toggleRetail = (e: React.MouseEvent) => {
        e.stopPropagation()
        setRetailOpen(!retailOpen)
    }

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${pastHero ? 'py-8' : 'bg-[#1c1c1c]/85 backdrop-blur-md'} ${scrolled && !pastHero ? 'navbar-scrolled py-6' : ''} ${!scrolled && !pastHero ? 'py-10' : ''}`}
                aria-label="Primary navigation"
            >
                <div className="max-w-7xl mx-auto px-5 sm:px-6 flex justify-between items-center h-full relative">
                    {/* Left Nav (Desktop) - 1/3 width */}
                    <div className="hidden md:flex w-1/3 items-center gap-8 md:gap-12 z-20">
                        <div className="group relative nav-dropdown-trigger">
                            <button
                                onClick={toggleRetail}
                                aria-expanded={retailOpen}
                                aria-haspopup="true"
                                className="nav-link flex items-center gap-1 text-[11px] uppercase font-bold text-white tracking-[0.2em] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                            >
                                Retail <ChevronDown className={`w-4 h-4 transition-transform ${retailOpen ? 'rotate-180' : 'group-hover:rotate-180'}`} />
                            </button>

                            {/* Dropdown Menu */}
                            <div className={`absolute top-6 left-0 w-max pt-4 transition-all duration-300 z-50 ${retailOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto'}`}>
                                <div className="bg-primary/95 backdrop-blur-md border border-white/10 p-5 shadow-2xl min-w-[300px]" onClick={(e) => e.stopPropagation()}>
                                    {/* Heading */}
                                    <div className="mb-4 flex justify-between items-baseline">
                                        <div>
                                            <h3 className="font-serif text-sm font-normal text-white tracking-[0.1em] uppercase mb-2">Brennan's Irish Retail</h3>
                                            <div className="w-8 h-px bg-gold/50" aria-hidden="true" />
                                        </div>
                                        <span className="font-serif text-xs text-gold tracking-[0.2em] uppercase">Pick-up only</span>
                                    </div>
                                    <ul className="flex flex-col gap-0">
                                        {RETAIL_ITEMS.map((item, idx) => (
                                            <li key={idx} className="border-l border-white/10 pl-4 py-2 hover:border-gold transition-colors group/item cursor-default">
                                                <div className="flex justify-between items-baseline gap-8">
                                                    <span className="font-sans tracking-[0.2em] uppercase text-white font-medium text-[11px] leading-snug">{item.name}</span>
                                                    <span className={`font-sans text-gold font-bold tracking-[0.1em] flex-shrink-0 ml-2 ${idx === RETAIL_ITEMS.length - 1 ? 'text-sm' : 'text-xs'}`}>{item.price}</span>
                                                </div>
                                                {item.sub && (
                                                    <p className="text-gray-400 text-[10px] mt-3 font-sans font-medium tracking-wide leading-relaxed uppercase opacity-80">{item.sub}</p>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <a
                            href="https://www.opentable.com/r/stout-irish-pub-toronto"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-link text-[11px] uppercase font-bold text-white tracking-[0.2em]"
                        >
                            Reservations
                        </a>
                    </div>

                    {/* Logo (Centered) - 1/3 width */}
                    <div className="flex justify-center items-center md:w-1/3 z-10">
                        <a
                            href="/"
                            aria-label="Stout Irish Pub — home"
                            className="block"
                        >
                            <img
                                src="/logo.png"
                                alt="Stout Irish Pub"
                                className={`transition-all duration-500 object-contain ${scrolled ? 'h-8 md:h-12' : 'h-14 md:h-20'}`}
                            />
                        </a>
                    </div>

                    {/* Right Nav (Desktop) + Mobile Toggle - 1/3 width content centered right */}
                    <div className="flex items-center justify-end md:w-1/3 z-20">
                        <div className="hidden md:flex items-center gap-8 md:gap-12">
                            <a
                                href="#menu"
                                className="nav-link text-[11px] uppercase font-bold text-white tracking-[0.2em]"
                            >
                                Menu
                            </a>

                            {[
                                { label: 'Events', href: '#events' },
                                { label: 'Location & Hours', href: '#location' },
                            ].map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="nav-link text-[11px] uppercase font-bold text-white tracking-[0.2em]"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        {/* Mobile hamburger */}
                        <button
                            className="md:hidden flex flex-col gap-1.5 p-2 group ml-2"
                            aria-label="Toggle navigation menu"
                            aria-expanded={mobileOpen}
                            aria-controls="mobile-drawer"
                            onClick={() => setMobileOpen((prev) => !prev)}
                        >
                            <span className={`block w-6 h-0.5 bg-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`block w-6 h-0.5 bg-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
                            <span className={`block w-6 h-0.5 bg-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </button>
                    </div>
                </div>
            </nav >

            {/* Mobile drawer — sibling of nav so backdrop-filter on nav doesn't trap fixed positioning */}
            {
                mobileOpen && (
                    <div
                        id="mobile-drawer"
                        className="md:hidden fixed inset-0 bg-[#111111]/95 z-40 overflow-y-auto"
                        onClick={(e) => {
                            const anchor = (e.target as HTMLElement).closest('a')
                            if (anchor) setMobileOpen(false)
                        }}
                    >
                        {/* Spacer row — matches the nav bar height to push content below the fixed header */}
                        <div className={`${scrolled ? 'h-[88px]' : 'h-[100px]'} transition-all duration-500`} />
                        <div className="px-5 sm:px-6 border-t border-white/10">
                            <MobileDrawerContent onClose={() => setMobileOpen(false)} />
                        </div>
                    </div>
                )
            }
        </>
    )
}
