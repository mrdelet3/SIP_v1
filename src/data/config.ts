export type TabKey = 'starters' | 'mains' | 'brunch' | 'kids' | 'pawtio' | 'drinks'

export interface MenuItem {
    name: string
    price: string
    description: string
    image?: string
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
        link: 'https://www.meetup.com/euchre-fun/events/313287174/'
    },
    {
        name: 'Sunday Movie Night',
        schedule: 'Every Sunday at 5PM. Call to make a reservation.',
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
    { key: 'brunch', label: 'Brunch' },
    { key: 'kids', label: 'Kids' },
    { key: 'pawtio', label: 'Pawtio Bites' },
    { key: 'drinks', label: 'Drinks' },
]

export const MENU_DATA: Record<TabKey, MenuItem[]> = {
    starters: [
        {
            name: 'Stout Nachos',
            price: '$22',
            description:
                'House-cut corn tortillas, pickled jalapenos, shredded cheddar, cherry tomato, scallions, dressed with sour cream & salsa. Add: guacamole +$5 | bacon +$5 | grilled chicken breast +$8',
            image: '/images/menu/nachos.jpg',
        },
        {
            name: 'Pretzel & Dijon',
            price: '$12',
            description: 'Giant buttered & salted pretzel with Dijon mustard. Add cheese sauce: $3',
        },
        {
            name: 'Curry Cheese Fries',
            price: '$16',
            description: 'Hand-cut fries topped with shredded cheddar and Madras curry sauce.',
        },
        {
            name: 'Garlic Bacon Cheese Fries',
            price: '$16',
            description: 'Hand-cut fries topped with garlic aioli, bacon, shredded cheddar, scallions.',
        },
        {
            name: 'Onion Rings',
            price: '$11',
            description: 'Battered onion rings fried golden, served with chipotle aioli.',
        },
        {
            name: 'San Marzano Tomato Soup',
            price: '$11',
            description: 'Creamy san Marzano tomato soup with fresh grated parmesan & toasted bread.',
            image: '/images/menu/tomato-soup.jpg',
        },
    ],
    mains: [
        {
            name: 'Bangers Beans and Mash',
            price: '$22',
            description: '3 Farmers sausages with baked beans, champ potato and gravy.',
        },
        {
            name: 'Cottage Pie',
            price: '$23',
            description: 'Ground beef with peas, carrots and onions, simmered with red wine, topped with mashed potatoes.',
            image: '/images/menu/cottage-pie.jpg',
        },
        {
            name: 'Fish & Chips',
            price: '$22',
            description: 'Hand-battered haddock, fried to order, hand-cut fries, creamy coleslaw, tartar sauce. Add: Gravy +$2.50',
        },
        {
            name: 'Chicken Tenders',
            price: '$20',
            description: 'Buttermilk soaked chicken tenders, served with creamy coleslaw, choice of plum, ranch, BBQ, Honey Garlic, or Buffalo hot for dipping. Choice of side.',
        },
        {
            name: 'Wings & Frings',
            price: '$25',
            description: '1 lb chicken wings, hand-cut fries, onion rings, veggie sticks, blue cheese or ranch for dipping. Choice of: BBQ | BUFFALO HOT | HONEY GARLIC | DRY CAJUN | DRY CARIBBEAN | SALT & PEPPER',
            image: '/images/menu/wings-frings.jpg',
        },
        {
            name: 'The Stout Burger',
            price: '$20',
            description: 'Charbroiled beef patty, lettuce, tomato, onion, pickles, burger sauce. Choice of side. Add: Cheese +$2 | Bacon +$3 | Fried Egg +$2 | Gorgonzola +$2 | Sauteed Mushrooms +$2 | Beef Patty +$6.50',
            image: '/images/menu/burger.jpg',
        },
    ],
    brunch: [
        {
            name: 'Full Irish Breakfast',
            price: '$20',
            description: '2 fried eggs, 2 Irish rashers, 2 Irish bangers, black & white pudding, mushrooms, grilled tomato, Heinz beans, toast.',
            image: '/images/menu/full-irish.jpg',
        },
        {
            name: 'Eggs Benedict',
            price: '$16',
            description: '2 soft poached eggs with strip bacon on an English muffin with house made Hollandaise sauce and paprika. Side of Cajun dusted home fries or salad.',
        },
        {
            name: 'Mushroom Benedict',
            price: '$16',
            description: '2 soft poached eggs with sautéed mushrooms on an English muffin with house made Hollandaise sauce and paprika. Side of Cajun dusted home fries or salad.',
        },
        {
            name: 'Classic Canadian',
            price: '$16',
            description: '3 eggs any style with strip bacon or sausage, grilled tomato, Cajun dusted home fries and toast.',
        },
    ],
    kids: [
        {
            name: 'CHICKEN STRIPS \'N FRIES',
            price: '$12',
            description: 'Boneless Chicken breast, frites, plum sauce',
        },
        {
            name: 'Mini Fish N\' Chips',
            price: '$12',
            description: 'Filet of haddock, frites, tartar sauce',
        },
        {
            name: 'PLAIN CHEESE BURGER',
            price: '$12',
            description: '6oz. single patty with cheese and frites',
        },
        {
            name: 'Mini Cheese Pizza',
            price: '$12',
            description: 'Oven baked naan bread, tomato sauce, cheddar, mozzarella.',
        },
        {
            name: 'Mini Nachos',
            price: '$12',
            description: 'Corn tortillas baked with cheddar cheese and salsa on the side',
        },
    ],
    pawtio: [
        {
            name: 'Mashed Potatoes & Gravy',
            price: '$6 / $9',
            description: '',
        },
        {
            name: 'Pup Cup',
            price: '$2 / $3',
            description: '',
        },
        {
            name: 'Raw Veal Bone',
            price: '$5 / $8',
            description: '',
        },
        {
            name: 'Chicken and Rice',
            price: '$7 / $11',
            description: '',
        },
        {
            name: 'Sirloin Tip',
            price: '$8 / $11',
            description: '',
        },
        {
            name: '2 Strip Bacon',
            price: '$4',
            description: '',
        },
    ],
    drinks: [
        {
            name: 'Sip Lager',
            price: '$8.50',
            description: 'North American style Lager. (5% alc/vol) 16oz.',
        },
        {
            name: 'THE SOCIABLE PILSNER',
            price: '$8.50',
            description: 'German style Pilsner. (4.7% alc/vol) 16oz.',
        },
        {
            name: 'Pommies Farmhouse Cider',
            price: '$9.25',
            description: 'Off-dry with zesty acidity, tangy apple flavours, and a crisp, lingering finish. (6.5% alc/vol) 16oz.',
        },
        {
            name: 'Great Lakes Stout, GLB',
            price: '$8.95',
            description: 'Aromas of chocolate and lightly roasted coffee beans. Bitter chocolate, roasted malt, and espresso notes. (4.3% alc/vol) 16oz.',
        },
        {
            name: 'MURPHY\'S IRISH STOUT',
            price: '$10.95',
            description: 'Irish Dry Stout from Cork, Ireland. (4% alc/vol) 16oz.',
        },
    ],

}
