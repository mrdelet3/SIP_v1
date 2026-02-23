export type TabKey = 'starters' | 'mains' | 'sides' | 'drinks' | 'whiskeys'

export interface MenuItem {
    name: string
    price: string
    description: string
}

export const SITE_CONFIG = {
    location: {
        addressLine1: '221 Carlton Street',
        addressLine2: 'Toronto, ON M5A 2L2',
        phoneLine: '+1 (647) 344-7676',
        phoneHref: 'tel:+16473447676',
        email: 'info@stoutirishpub.ca',
        coordinates: {
            lat: 43.66353,
            lng: -79.37004,
        }
    },
    hours: [
        { label: 'M — Th', time: '11:30 AM – 11:00 PM' },
        { label: 'F — S', time: '11:30 AM – 12:00 AM' },
        { label: 'Sun', time: '11:00 AM – 9:00 PM' }
    ],
    socialLinks: {
        instagram: 'https://www.instagram.com/stoutirishpubto/',
        reservations: 'https://www.opentable.com/r/stout-irish-pub-toronto'
    }
}

export const RETAIL_ITEMS = [
    { name: "Brennan's Irish sausages pack of 8", price: '$12' },
    { name: "Brennan's Irish rashers pack of 6", price: '$11' },
    { name: "Brennan's white pudding 300g", price: '$10' },
    { name: "Brennan's black pudding 300g", price: '$10' },
    { name: "Brennan's full Irish breakfast package", price: '$40', sub: '1 pack of sausage, 1 pack of rashers, 1 black and 1 white pudding.' }
]

export const EVENTS_DATA = [
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

export const HAPPY_HOUR_ITEMS = [
    '$7 Beers & Highballs',
    '$6 Shots',
    '$10 Martinis',
]

export const MENU_TABS: { key: TabKey; label: string }[] = [
    { key: 'starters', label: 'Starters' },
    { key: 'mains', label: 'Mains' },
    { key: 'sides', label: 'Sides' },
    { key: 'drinks', label: 'Stouts & Ales' },
    { key: 'whiskeys', label: 'Whiskeys' },
]

export const MENU_DATA: Record<TabKey, MenuItem[]> = {
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
