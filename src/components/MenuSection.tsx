import { useState } from 'react'
import PdfMenuButton from './PdfMenuButton'

type TabKey = 'starters' | 'mains' | 'sides' | 'drinks' | 'whiskeys'

interface MenuItem {
    name: string
    price: string
    description: string
}

const MENU: Record<TabKey, MenuItem[]> = {
    starters: [
        {
            name: 'Potato Leek Soup',
            price: '$12',
            description:
                'Creamy traditional soup topped with crispy leeks and a drizzle of truffle oil.',
        },
        {
            name: 'Irish Boxty',
            price: '$16',
            description:
                'Traditional potato pancakes filled with sautéed mushrooms and a sharp cheddar sauce.',
        },
        {
            name: 'Smoked Salmon Bites',
            price: '$15',
            description:
                'House-cured Atlantic salmon on soda bread rounds with crème fraîche and capers.',
        },
        {
            name: 'Guinness Battered Onion Rings',
            price: '$11',
            description:
                'Thick-cut rings in a crispy Guinness batter, served with house aioli.',
        },
    ],
    mains: [
        {
            name: 'Guinness Stew',
            price: '$18',
            description:
                'Tender beef braised in Guinness with root vegetables and fresh herbs, served with homemade soda bread.',
        },
        {
            name: 'Fish and Chips',
            price: '$22',
            description:
                'Atlantic cod in a crispy beer batter, served with hand-cut fries, minted peas, and tartar sauce.',
        },
        {
            name: 'Shepherd\'s Pie',
            price: '$20',
            description:
                'Slow-cooked lamb mince with root vegetables, topped with buttery mashed potato and baked golden.',
        },
        {
            name: 'Bangers & Mash',
            price: '$17',
            description:
                'Two Irish pork sausages on creamy mashed potato with caramelised onion gravy.',
        },
    ],
    sides: [
        {
            name: 'Colcannon',
            price: '$8',
            description: 'Irish mashed potato with savoy cabbage, spring onion, and butter.',
        },
        {
            name: 'Soda Bread',
            price: '$6',
            description: 'Fresh-baked traditional Irish soda bread with whipped butter.',
        },
        {
            name: 'Hand-Cut Fries',
            price: '$7',
            description: 'Thick-cut fries seasoned with sea salt and fresh herbs.',
        },
        {
            name: 'Dressed Side Salad',
            price: '$7',
            description: 'Mixed greens, tomato, cucumber, and house vinaigrette.',
        },
    ],
    drinks: [
        {
            name: 'Guinness Draught',
            price: '$9',
            description: 'The iconic Irish stout — poured slow and perfect every time.',
        },
        {
            name: 'Smithwick\'s Irish Red Ale',
            price: '$8',
            description: 'Ireland\'s oldest ale. Smooth, malty, and sessionable.',
        },
        {
            name: 'Harp Lager',
            price: '$8',
            description: 'Crisp and refreshing Irish lager on draught.',
        },
        {
            name: 'Seasonal Craft',
            price: '$10',
            description: 'Ask your server for today\'s rotating craft tap selection.',
        },
    ],
    whiskeys: [
        {
            name: 'Jameson',
            price: '$9',
            description: 'The world\'s most popular Irish whiskey — smooth, balanced, unmistakable.',
        },
        {
            name: 'Bushmills 10yr',
            price: '$14',
            description: 'Single malt aged 10 years. Honey, floral, and rich vanilla notes.',
        },
        {
            name: 'Redbreast 12yr',
            price: '$16',
            description: 'A celebrated single pot still — complex, fruity, and long-finishing.',
        },
        {
            name: 'Powers Gold Label',
            price: '$10',
            description: 'The quintessential Dublin whiskey. Spiced and warming.',
        },
    ],
}

const TABS: { key: TabKey; label: string }[] = [
    { key: 'starters', label: 'Starters' },
    { key: 'mains', label: 'Mains' },
    { key: 'sides', label: 'Sides' },
    { key: 'drinks', label: 'Stouts & Ales' },
    { key: 'whiskeys', label: 'Whiskeys' },
]

export default function MenuSection() {
    const [activeTab, setActiveTab] = useState<TabKey>('starters')

    return (
        <section
            id="menu"
            className="bg-primary h-[100dvh] md:min-h-[100dvh] md:h-auto flex flex-col justify-center snap-start py-[8vh] md:py-60 overflow-hidden md:overflow-visible"
            aria-labelledby="menu-heading"
        >
            <div className="max-w-6xl mx-auto px-[12vw] md:px-6 w-full h-full flex flex-col">
                {/* Heading */}
                <div className="text-center mb-6 md:mb-20">
                    <h2
                        id="menu-heading"
                        className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-bold tracking-[0.2em] uppercase mb-4 md:mb-8"
                    >
                        Menu
                    </h2>
                    <div className="w-16 h-px bg-gold mx-auto mb-6 md:mb-10" aria-hidden="true" />
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-8 md:mb-16" role="tablist" aria-label="Menu categories">
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
                <div className="flex-1 overflow-y-auto hide-scrollbar -mx-4 px-4 mb-6 md:mb-20 md:overflow-visible">
                    <div
                        id={`tabpanel-${activeTab}`}
                        role="tabpanel"
                        aria-labelledby={`tab-${activeTab}`}
                        className="grid md:grid-cols-2 gap-6 md:gap-8 min-h-[200px]"
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

                {/* Download CTA */}
                <div className="flex justify-center mt-auto flex-shrink-0">
                    <PdfMenuButton />
                </div>
            </div>
        </section>
    )
}
