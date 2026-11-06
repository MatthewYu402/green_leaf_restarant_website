// ============================================================================
// content.ts — every piece of text, price, photo, and link on the site.
//
// To update the website's content (a price, a new roll, hours, a photo),
// edit this file only. Components never hard-code content; they receive it
// from here as props.
//
// Text formatting supported anywhere a component renders it with <RichText>:
//   **bold**   → <b>bold</b>
//   \n         → line break
// ============================================================================

import type { GalleryImage, MenuGroup, MenuItem, NigiriItem, PdfLink } from './types';

// ---- Icons -----------------------------------------------------------------
import appleIcon from '@/assets/icons/apple-icon.svg';
import byobIcon from '@/assets/icons/byob.svg';
import cateringIcon from '@/assets/icons/catering.svg';
import circleIcon from '@/assets/icons/circle.svg';
import clockIcon from '@/assets/icons/clock.svg';
import coldIcon from '@/assets/icons/cold-icon.svg';
import dessertIcon from '@/assets/icons/dessert-icon.svg';
import diamondIcon from '@/assets/icons/diamond.svg';
import flowerIcon from '@/assets/icons/flower-icon.svg';
import forkKnifeIcon from '@/assets/icons/fork-knife-icon.svg';
import goldForkKnifeIcon from '@/assets/icons/gold-fork-knife.svg';
import goldLeafIcon from '@/assets/icons/gold-leaf.svg';
import hotCupIcon from '@/assets/icons/hot-cup-icon.svg';
import hotIcon from '@/assets/icons/hot-icon.svg';
import mapPinIcon from '@/assets/icons/pin.svg';
import noodleIcon from '@/assets/icons/noodle-icon.svg';
import reservationIcon from '@/assets/icons/reservation.svg';
import takeoutIcon from '@/assets/icons/takeout-box-icon.svg';
import waterDropIcon from '@/assets/icons/water-drop-icon.svg';
import waveIcon from '@/assets/icons/wave-icon.svg';

// ---- Menu PDFs -------------------------------------------------------------
import dinnerTakeoutMenuPdf from '@/assets/menu_pdfs/Dinner Carryout Menu Full 2026.pdf';
import lunchTakeoutMenuPdf from '@/assets/menu_pdfs/Lunch Carryout Menu Full 2026.pdf';
import sushiMenuPdf from '@/assets/menu_pdfs/sushi_menu.pdf';

// ---- Branding & storefront -------------------------------------------------
import restaurantLogo from '@/assets/images/logo-front/green-leaf-logo.png';
import storefrontImage from '@/assets/images/logo-front/green-leaf-front.webp';

// ---- Section photos --------------------------------------------------------
import appetizersPhoto from '@/assets/images/sneak-peak-images/appetizers.jpg';
import comingSoonPhoto from '@/assets/images/sneak-peak-images/coming-soon.png';
import doubleEelRollPhoto from '@/assets/images/sneak-peak-images/double-eel-roll.jpg';
import iceCreamPhoto from '@/assets/images/sneak-peak-images/ice-cream.png';
import soupsAndSaladPhoto from '@/assets/images/sneak-peak-images/soups-and-salad.png';
import sushiAndSashimiPhoto from '@/assets/images/sneak-peak-images/sushi-and-sashimi.jpg';

// ---- Appetizers ------------------------------------------------------------
import ageTofuPhoto from '@/assets/images/appetizers/age-tofu.jpg';
import chickenLettuceWrapPhoto from '@/assets/images/appetizers/chicken-lettuce-wrap.jpg';
import crispyWontonsPhoto from '@/assets/images/appetizers/crispy-wontons.jpg';
import friedCalamariPhoto from '@/assets/images/appetizers/fried-calamari.webp';
import greenLeafDumplingsPhoto from '@/assets/images/appetizers/green-leaf-dumplings.jpg';
import oceanGardenRollPhoto from '@/assets/images/appetizers/ocean-garden-roll.jpg';
import scallionPancakePhoto from '@/assets/images/appetizers/scallion-pancake-string-bean.jpg';
import shumaiPhoto from '@/assets/images/appetizers/shumai.jpg';
import summerRollPhoto from '@/assets/images/appetizers/summer-roll.jpg';

// ---- Soups & salads --------------------------------------------------------
import babyOctopusSaladPhoto from '@/assets/images/soups-salads/octopus-salad.png';
import hotAndSourSoupPhoto from '@/assets/images/soups-salads/hot-and-sour-soup.jpg';
import misoSoupPhoto from '@/assets/images/soups-salads/miso-soup.jpg';
import sushiBarSaladPhoto from '@/assets/images/soups-salads/sushi-bar-salad.jpg';

// ---- Lunch specials --------------------------------------------------------
import l3MakiPhoto from '@/assets/images/specials/L3-maki.jpg';
import l9BentoPhoto from '@/assets/images/specials/L9-bento.jpg';
import l10BentoPhoto from '@/assets/images/specials/L10-bento.jpg';
import l12BentoPhoto from '@/assets/images/specials/L12-bento.jpg';

// ---- Anniversary rolls -----------------------------------------------------
import roll1stYear from '@/assets/images/anniversary-rolls/first-year-roll.jpg';
import roll2ndYear from '@/assets/images/anniversary-rolls/second-year-roll.jpg';
import roll3rdYear from '@/assets/images/anniversary-rolls/third-year-roll.jpeg';
import roll4thYear from '@/assets/images/anniversary-rolls/fourth-year-roll.jpg';
import roll5thYear from '@/assets/images/anniversary-rolls/fifth-year-roll.jpeg';
import roll6thYear from '@/assets/images/anniversary-rolls/sixth-year-roll.jpg';
import roll7thYear from '@/assets/images/anniversary-rolls/seventh-year-roll.jpg';
import roll8thYear from '@/assets/images/anniversary-rolls/eighth-year-roll.jpg';
import roll9thYear from '@/assets/images/anniversary-rolls/ninth-year-roll.jpg';
import roll10thYear from '@/assets/images/anniversary-rolls/ten-year-roll.jpg';
import roll11thYear from '@/assets/images/anniversary-rolls/eleventh-year-roll.jpg';
import roll12thYear from '@/assets/images/anniversary-rolls/twelfth-year-roll.jpg';
import roll13thYear from '@/assets/images/anniversary-rolls/thirteenth-year-roll.jpg';
import roll14thYear from '@/assets/images/anniversary-rolls/fourteenth-year-roll.jpg';
import roll15thYear from '@/assets/images/anniversary-rolls/fifteenth-year-roll.jpg';
import roll16thYear from '@/assets/images/anniversary-rolls/sixteenth-year-roll.jpg';
import roll17thYear from '@/assets/images/anniversary-rolls/seventeenth-year-roll.jpg';
import roll18thYear from '@/assets/images/anniversary-rolls/eighteenth-year-roll.jpg';
import roll19thYear from '@/assets/images/anniversary-rolls/nineteenth-year-roll.jpg';
import roll20thYear from '@/assets/images/anniversary-rolls/twenty-year-roll.jpg';

// ---- Sushi special rolls ---------------------------------------------------
import bakedScallopRollPhoto from '@/assets/images/sushi-special-rolls/baked-scallop-roll.webp';
import baltimoreRollPhoto from '@/assets/images/sushi-special-rolls/baltimore-roll.jpg';
import butterRollPhoto from '@/assets/images/sushi-special-rolls/butter-roll.jpeg';
import diamondMikeRollPhoto from '@/assets/images/sushi-special-rolls/diamond-mike-roll.jpg';
import gardenRollPhoto from '@/assets/images/sushi-special-rolls/garden-roll.jpg';
import hajiRollPhoto from '@/assets/images/sushi-special-rolls/haji-roll.webp';
import imperialCrabRollPhoto from '@/assets/images/sushi-special-rolls/imperial-crab-roll.jpg';
import matthewRollPhoto from '@/assets/images/sushi-special-rolls/matt-roll.jpg';
import peggyTwoRollPhoto from '@/assets/images/sushi-special-rolls/peggy-two-roll.jpg';
import penthouseRollPhoto from '@/assets/images/sushi-special-rolls/penthouse-roll.webp';
import ravenRollPhoto from '@/assets/images/sushi-special-rolls/raven-roll.jpg';
import sonInLawRollPhoto from '@/assets/images/sushi-special-rolls/son-in-law-roll.jpg';
import sushiSisterRollPhoto from '@/assets/images/sushi-special-rolls/sushi-sisiter-roll.jpg';
import unforgettableRollPhoto from '@/assets/images/sushi-special-rolls/unforgetable-roll.jpg';

// ---- Nigiri & sashimi ------------------------------------------------------
import salmonRoePhoto from '@/assets/images/nigiri-sashimi/salmon-roe-roll.png';
import scallopNigiriPhoto from '@/assets/images/nigiri-sashimi/scallop-nigiri.jpg';

// ---- Sushi platters --------------------------------------------------------
import platter1 from '@/assets/images/sushi-platters/sushi-platter-1.jpg';
import platter2 from '@/assets/images/sushi-platters/sushi-platter-2.jpg';
import platter3 from '@/assets/images/sushi-platters/sushi-platter-3.jpg';
import platter4 from '@/assets/images/sushi-platters/sushi-platter-4.jpg';
import platter5 from '@/assets/images/sushi-platters/sushi-platter-5.jpg';
import platter6 from '@/assets/images/sushi-platters/sushi-platter-6.jpg';

// ---- Customer photos (Home → "A Peek Inside") -------------------------------
import customer1 from '@/assets/images/customers/customer-pic-1.jpeg';
import customer2 from '@/assets/images/customers/customer-pic-2.webp';
import customer3 from '@/assets/images/customers/customer-pic-3.webp';
import customer4 from '@/assets/images/customers/customer-pic-4.webp';
import customer5 from '@/assets/images/customers/customer-pic-5.webp';
import customer6 from '@/assets/images/customers/customer-pic-6.webp';
import customer7 from '@/assets/images/customers/customer-pic-7.webp';
import customer8 from '@/assets/images/customers/customer-pic-8.webp';
import customer9 from '@/assets/images/customers/customer-pic-9.webp';
import customer10 from '@/assets/images/customers/customer-pic-10.webp';
import customer11 from '@/assets/images/customers/customer-pic-11.jpg';
import customer12 from '@/assets/images/customers/customer-pic-12.jpg';
import customer13 from '@/assets/images/customers/customer-pic-13.jpg';
import customer14 from '@/assets/images/customers/customer-pic-14.jpg';
import customer15 from '@/assets/images/customers/customer-pic-15.jpg';
import customer16 from '@/assets/images/customers/customer-pic-16.jpg';
import customer17 from '@/assets/images/customers/customer-pic-17.jpg';
import customerParker from '@/assets/images/customers/parker.jpg';

// ---- Community photos (About Us gallery) ------------------------------------
import aboutAnniversary from '@/assets/images/about-us-gallery/anniversary-celebrations.jpg';
import aboutBirthday from '@/assets/images/about-us-gallery/about-us-birthday.webp';
import aboutChineseNewYear from '@/assets/images/about-us-gallery/chinese-new-year.jpeg';
import aboutNeighborhood from '@/assets/images/about-us-gallery/neigborhood.jpg';
import aboutNewYears from '@/assets/images/about-us-gallery/new-years.jpg';
import aboutSundayRegulars from '@/assets/images/about-us-gallery/sunday-regulars.webp';

// ============================================================================
// BUSINESS INFO
// ============================================================================

export const business = {
  name: 'Green Leaf Sushi',
  logo: restaurantLogo,
  phone: { tel: '4107710030', display: '(410) 771-0030' },
  address: '11313 York Road\nHunt Valley, MD 21030',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3078.8981569619473!2d-76.65141112357551!3d39.49421421126889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8127d9fb3d903%3A0x2d9fbe817004b328!2sGreen%20Leaf!5e0!3m2!1sen!2sus!4v1786509925863!5m2!1sen!2sus',
  instagram: { handle: '@greenleafrest', url: 'https://www.instagram.com/greenleafrest/?hl=en' },
  infoEmail: 'info@greenleafsushi.com',
  hiringEmail: 'hiring@greenleafsushi.com', // TODO: replace with real address
};

/** No `time` → closed that day. */
export const hours: { days: string; time?: string }[] = [
  { days: 'Monday' },
  { days: 'Tuesday - Friday', time: '11:30 AM - 9:30 PM' },
  { days: 'Saturday', time: '12:00 PM - 9:30 PM' },
  { days: 'Sunday', time: '3:00 PM - 9:30 PM' },
];

/** `time` set → open with those hours; no `time` → closed. */
export const holidayHours: { name: string; time?: string }[] = [
  { name: 'Super Bowl Sunday' },
  { name: 'Fourth of July' },
  { name: 'Thanksgiving Day' },
  { name: 'Christmas Day', time: '12:00 PM - 9:30 PM' },
];

// ============================================================================
// NAVIGATION & SITE CHROME
// ============================================================================

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Main Menu', href: '/menu' },
  { label: 'Sushi Menu', href: '/sushi' },
  { label: 'Dinner Specials', href: '/specials' },
  { label: 'About Us', href: '/about' },
];

// About Us is intentionally left off the bottom bar (it's not what people
// need mid-order) and lives in the hamburger drawer instead.
export const bottomNavTabs = [
  { label: 'Home', href: '/', icon: 'home' },
  { label: 'Menu', href: '/menu', icon: 'menu' },
  { label: 'Sushi', href: '/sushi', icon: 'sushi' },
  { label: 'Specials', href: '/specials', icon: 'specials' },
] as const;

export const navbar = {
  callFull: 'Call to Reserve',
  callShort: 'Call',
};

export const footer = {
  tagline: '© 2026 Green Leaf Sushi. A family-run restaurant.',
  links: [
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Careers', href: '/careers' },
  ],
};

/** Banner shown at the top of a page, keyed by route. */
export const pageHeaders: Record<string, { title: string; subtitle: string; intro?: string; mobileImage?: string }> = {
  '/menu': {
    title: 'Our Menu',
    subtitle: 'Inspired by tradition, crafted with care, and served with flavor.',
    intro: 'Experience the rich flavors of Asian cuisine, bringing together fresh seasonal ingredients',
  },
  '/sushi': {
    title: 'Our Sushi',
    subtitle: 'Crafted with precision, served with passion.',
    intro: 'Experience our meticulously curated variety of sushi items, ranging from our twenty-year legacy Anniversary Rolls to delicately sliced Nigiri and vibrant Sushi Salads.',
    // TODO: placeholder — swap for a real sushi platter photo
    mobileImage: platter3,
  },
};

// ============================================================================
// HOME PAGE
// ============================================================================

export const home = {
  hero: {
    title: 'Modern Fusion Sushi & Asian Cuisine',
    subtitle: 'Twenty years of dedication to precision, creativity, and the finest\n ingredients',
    button: { label: 'View Menu', href: '/menu' },
  },
  heroMobile: {
    title: 'Welcome',
    subtitle: 'Experience twenty years of family legacy through curated, premium sushi.',
  },
  signature: {
    eyebrow: 'Our Signature Creations',
    title: 'The 20th Year Roll',
    paragraphs: [
      'Every year, we craft a brand-new sushi roll to commemorate another year since we first opened our doors. We call them our **Anniversary Rolls** - a living archive of our journey, one roll at a time.',
      'Crafted to commemorate our two decades of culinary experience, the 20th Year Roll comes with spicy salmon and avocado at the center, topped with smokey seared salmon, and finished with yum yum sauce, crunchy tempura batter flakes, and sliced jalepeños.',
    ],
    image: roll20thYear,
    imageAlt: '20th Year Roll',
  },
  beyondTheMenu: {
    title: 'Beyond the Menu',
    subtitle: 'Experience the full warmth of our hospitality, tailored for your special moments.',
    offerings: [
      {
        icon: cateringIcon,
        title: 'Catering',
        description: 'Elevate your birthdays, office gatherings, and intimate celebrations with our bespoke sushi platters.',
      },
      {
        icon: reservationIcon,
        title: 'Reservations',
        description: 'Call ahead to secure your table for a quality dining experience.',
      },
      {
        icon: byobIcon,
        title: 'BYOB',
        description: 'Bring your favorite pairing. We offer a modest corking fee so you can enjoy the perfect sip.',
      },
      {
        icon: takeoutIcon,
        title: 'Takeout',
        description: "Call ahead and we'll have your order ready for pickup.",
        showPhone: true,
      },
    ],
  },
  story: {
    // TODO: replace with real photo
    image: storefrontImage,
    imageAlt: 'The Green Leaf Sushi family',
    title: 'A Family Legacy',
    text: "For over twenty years, Green Leaf has been more than a restaurant, it has extended to your family. We source the finest ingredients with the same care we'd use for our own table, creating a community sanctuary rooted in tradition and meticulous craft.",
    button: { label: 'Learn Our Story', href: '/about' },
  },
  peekInside: {
    title: 'A Peek Inside',
    subtitle: "The relationships we've created",
    link: { label: 'See More →', href: '/about' },
    // TODO: replace with real photos
    images: [
      { src: customer1, alt: 'Anniversary celebration' },
      { src: customer2, alt: 'Sunday regulars' },
      { src: customer3, alt: "Chef's table event" },
      { src: customer4, alt: 'Community gathering' },
      { src: customer5, alt: 'Birthday dinner' },
      { src: customer6, alt: 'Behind the counter' },
      { src: customer7, alt: 'Behind the counter' },
      { src: customer8, alt: 'Behind the counter' },
      { src: customer9, alt: 'Behind the counter' },
      { src: customer10, alt: 'Behind the counter' },
      { src: customerParker, alt: 'Robert Parker' },
      { src: customer11, alt: 'Rober Parker' },
      { src: customer12, alt: 'Rober Parker' },
      { src: customer13, alt: 'Rober Parker' },
      { src: customer14, alt: 'Rober Parker' },
      { src: customer15, alt: 'Rober Parker' },
      { src: customer16, alt: 'Rober Parker' },
      { src: customer17, alt: 'Rober Parker' },
    ] satisfies GalleryImage[],
  },
  dividerIcons: { flower: flowerIcon, leaf: goldLeafIcon },
};

// ============================================================================
// MAIN MENU
// ============================================================================

export const mainMenuPdfs: PdfLink[] = [
  { label: 'View Lunch Takeout Menu (PDF)', href: lunchTakeoutMenuPdf },
  { label: 'View Dinner Takeout Menu (PDF)', href: dinnerTakeoutMenuPdf },
];

// Changed:
/**
 * Crispy Wonton - $6.50
 */
export const appetizers = {
  title: 'Appetizers',
  image: appetizersPhoto,
  imageAlt: 'Signature appetizer spread',
  badge: "Chef's Selection",
  featuredTitle: 'Signature Starters',
  featuredDescription: 'Experience a curated assortment of our finest appetizers, perfect for sharing and awakening the palate.',
  featured: [
    { name: 'Green Leaf Dumplings', image: greenLeafDumplingsPhoto, price: '$5.50', description: 'Pan-seared chicken dumplings in spinach wrap' },
    { name: 'Scallion Pancake and String Bean', image: scallionPancakePhoto, price: '$8.50', description: 'Savory stir-fried green beans wrapped in cripsy scallion pancake' },
    { name: 'Edamame', price: '$5.50', description: 'Steamed soybeans with sea salt' },
    { name: 'Summer Roll', image: summerRollPhoto, price: '$6.95', description: 'Shrimp, lettuce, carrot, crabstick, and rice noodle in rice paper' },
    { name: 'Crispy Wonton (6)', image: crispyWontonsPhoto, price: '$6.50', description: 'Fried wontons filled with cream cheese with crab meat' },
  ] satisfies MenuItem[],
  items: [
    { name: 'Age Tofu', image: ageTofuPhoto, price: '$5.50', description: 'Fried bean cure served with tempura sauce' },
    { name: 'Shumai (6)', image: shumaiPhoto, price: '$5.95', description: 'Steamed Shrimp Dumplings (Japanese Style)' },
    { name: 'Japanese Vegetable Spring Roll (3)', price: '$5.50' },
    { name: 'Shrimp Tempura', price: '$7.95', description: 'Deep-fried tempura style shrimp with vegetables' },
    { name: 'Tuna Tartare', price: '$10.95', description: 'Marinated tuna and avocado with special sauce' },
    { name: 'Fried Calamari', image: friedCalamariPhoto, price: '$9.95', description: 'Deep fried squid topped with sauteed onion and chives' },
    { name: 'Ocean Garden Roll', image: oceanGardenRollPhoto, price: '$12.95', description: 'Crispy spicy crabmeat with mixed greens in rice paper wrap' },
    { name: 'Yakitori (3)', price: '$5.95', description: 'Grilled chicken skewers with teriyaki sauce' },
    { name: 'California Fruit Roll', price: '$6.95', description: 'Mango, apple, avocado, and crabstick in rice paper wrap' },
  ] satisfies MenuItem[],
};

export const soupsAndSalads = {
  title: 'Soups & Salads',
  image: soupsAndSaladPhoto,
  imageAlt: 'Soups and salads selection',
  badge: "Chef's Selection",
  featuredTitle: 'Comforting Classics',
  featuredDescription: 'Warm broths and crisp, fresh salads — traditional favorites made to balance and complement any meal.',
  featured: [
    { name: 'Miso Soup', image: misoSoupPhoto, price: '$2.95', description: 'Miso broth with tofu, seaweed, and scallions' },
    { name: 'Green Leaf Dumpling Soup', price: '$5.50', description: 'Chicken dumpling in savory chicken broth' },
    { name: 'Hot and Sour Soup', image: hotAndSourSoupPhoto, price: '$4.95' },
    { name: 'Egg Drop Soup', price: '$3.95' },
    { name: 'Chicken, Barley, and Brown Rice Soup', price: '$5.95' },
  ] satisfies MenuItem[],
  items: [
    { name: 'Sushi Bar Salad', image: sushiBarSaladPhoto, price: '$6.95', description: 'Seaweed salad base with cucumber and crabstick topped spicy mayonaise and tempura flakes' },
    { name: 'Seaweed Salad', price: '$5.95', description: 'Refreshing wakame seaweed in sweet and savory dressing' },
    { name: 'Hawaiian Poke Salad Bowl', price: '$11.95', description: 'Seaweed salad and mixed greens topped with tuna, salmon, avocado, cucumber, and poke sauce' },
    { name: 'California Style Salad', price: '$6.95', description: 'Crabstick, avocado, cucumber, and spicy mayo' },
    { name: 'Green Salad', price: '$3.95', description: 'Served with ginger dressing' },
    { name: 'Avocado Salad', price: '$6.95', description: 'Mixed greens, cucumber, and avocado with sesame dressing' },
    { name: 'Baby Octopus Salad', image: babyOctopusSaladPhoto, price: '$7.95', description: 'Seaweed salad topped with marinated baby octopus' },
    { name: 'Marinated Calamari Salad', price: '$7.95' },
  ] satisfies MenuItem[],
};

/**
 * Changes:
 * Added Chicken and Mixed Vegetables
 */
export const meat = {
  title: 'Meat',
  items: [
    { name: 'Honey Sesame Chicken', price: '$14.95' },
    { name: 'Thai Curry Chicken', price: '$15.95' },
    { name: "General Tso's Chicken", price: '$14.95' },
    { name: 'Orange Chicken', price: '$14.95' },
    { name: 'Mongolian Beef', price: '$17.95' },
    { name: 'Beef and Brocolli', price: '$17.95' },
    { name: 'Chicken and Brocolli', price: '$14.95' },
    { name: 'Chicken and String Beans', price: '$14.95' },
    { name: 'Chicken and Mixed Vegetables', price: '$14.95' },
    { name: 'Beef and Mixed Vegetables', price: '$17.95' },
    { name: 'Fried Tonkatsu', price: '$14.95', description: 'Breaded pork loin with special savory sauce' },
  ] satisfies MenuItem[],
};

/**
 * Changes:
 * Pecan Crusted Salmon Filet - $20.95
 * Grilled Slmon Filet with House Salad - $20.95
 */
export const seafood = {
  title: 'Seafood',
  groups: [
    {
      subheading: 'Shared Favorites',
      layout: 'full',
      items: [
        { name: 'Green Leaf Pasta', price: '$19.95', description: 'Shrimp, scallops, and baby bok choy over spinach noodles' },
        { name: 'Crispy Jumbo Shrimp', price: '$17.95', description: 'Tempura-fried jumbo shrimp served with honey sesame sauce' },
        { name: 'Seafood Combo', price: '$19.95', description: 'Scallop and shrimp stir-fried with bell pepper, tomato and onion, served in a thai curry sauce, ' },
        { name: 'Pecan Crusted Salmon Filet', price: '$20.95' },
        { name: 'Grilled Salmon Filet', price: '$20.95', description: 'Fresh grilled salmon filet, served with a house salad' },
        { name: 'Shrimp with Brocolli', price: '$17.95' },
        { name: 'Shrimp with Mixed Vegetables', price: '$17.95' },
      ],
    },
    {
      subheading: 'Lunch Exclusives',
      layout: 'half',
      items: [
        { name: 'Thai Basil Shrimp', price: '$17.95' },
        { name: 'Shrimp with String Beans', price: '$11.95' },
      ],
    },
    {
      subheading: 'Dinner Exclusives',
      layout: 'half',
      items: [
        { name: 'Pine Nut Fish', price: '$18.95', description: 'Crispy cod served with spicy thai sauce' },
        { name: 'Baked Cod', price: '$18.95', description: 'Served with thai sauce' },
        { name: 'Pineapple Shrimp', price: '$17.95', description: 'Served with pineapple slices' },
      ],
    },
  ] satisfies MenuGroup[],
};

export const grillAndKitchen = { title: 'From The Grill & Kitchen' };

export const sushiAndSashimi = {
  title: 'Sushi & Sashimi',
  description: "Sourced daily, expertly prepared. Served a la carte (2 pieces per order) or as chef's selection",
  image: sushiAndSashimiPhoto,
  imageAlt: 'Fresh sushi and sashimi selection',
  donburi: {
    title: 'Donburi & Una-jyu',
    items: [
      { name: 'Tekka Don', price: '$20.95', description: 'Bowl of seasoned rice topped with fresh tuna' },
      { name: 'Salmon Don', price: '$20.95', description: 'Bowl of seasoned rice topped with fresh salmon' },
      { name: 'Chirashi Don', price: '$20.95', description: 'Bowl of seasoned rice with assorted raw fish' },
      { name: 'Una-jyu', price: '$21.95', description: 'Broiled fresh water eel with special sauce over rice' },
    ] satisfies MenuItem[],
  },
  platters: {
    title: 'Sushi & Sashimi',
    items: [
      { name: 'Sushi Deluxe', price: '$21.95', description: "8 piece sushi (chef's choice) and a tuna roll" },
      { name: 'Sashimi Deluxe', price: '$24.95', description: "15 piece sashimi (chef's choice)" },
      { name: 'Sushi and Sashimi Combo', price: '$29.95' },
      { name: 'Family Boat', price: '$59.95', description: "15 pieces sashimi (chef's choice), 5 piece nigiri (chef's choice), california roll, and spicy tuna roll." },
    ] satisfies MenuItem[],
  },
};

export const noodlesAndVegetarian = { title: 'Noodles & Vegetarian' };

/**
 * Changes:
 * Drunken Noodles Shrimp Or Chicken - $16.95
 * Drukeeb Noodles w Beef - $17.95
 */
export const noodles = {
  title: 'Noodles & Fried Rice',
  items: [
    { name: 'Japanese Pan Noodle', price: '$18.95', description: 'Chicken, shrimp, and vegetables' },
    { name: 'Pad Thai', price: '$14.95', description: 'Chicken or shrimp' },
    { name: 'Singapore Rice Noodles', price: '$14.95', description: 'Chicken or shrimp' },
    { name: 'Yaki Udon Noodles', price: '$14.95', description: 'Chicken or shrimp' },
    { name: 'Drunken Noodles Chicken or Shrimp', price: '$16.95', description: 'Sautéed rice noodles with vegetables in a curry sauce' },
    { name: 'Drunken Noodles with Beef', price: '$17.95' },
    { name: 'Japanese Fried Rice', price: '$13.95', description: 'Chicken or shrimp' },
    { name: 'Roasted Pork Fried Rice', price: '$13.95', description: 'Pork and vegetables' },
    { name: 'Nabe Yaki Udon Soup', price: '$14.95', description: 'Pork and vegetables' },
    { name: 'Lo Mein', price: '$14.95', description: 'Chicken, pork, or shrimp' },
    { name: 'Slimming Noodle Soup', price: '$14.95', description: 'Rice noodles, white chicken meat, shrimp, and vegetables in home-made miso broth' },
  ] satisfies MenuItem[],
};

export const vegetarian = {
  title: 'Vegetarian',
  items: [
    { name: 'Szechuan String Bean', price: '$13.95' },
    { name: 'Tofu Phad Thai', price: '$13.95' },
    { name: 'Veggie Pad Thai', price: '$13.95' },
    { name: 'Singapore Rice Noodles', price: '$13.95' },
    { name: 'Sauteed Mixed Vegetables', price: '$13.95' },
    { name: 'Crispy Eggplant', price: '$13.95', description: 'Tempura fried eggplant with honey sesame sauce' },
  ] satisfies MenuItem[],
};

export const lunchSpecials = {
  title: 'Midday Muse',
  subtitle: 'A REFINED SELECTION OF LUNCH FEATURES, AVAILABLE DAILY UNTIL 3:00 PM.',
  maki: {
    title: 'Lunch Maki Specials',
    items: [
      { id: 'L1', name: 'California Roll and Eel Avocado Roll', price: '$10.50' },
      { id: 'L2', name: 'Spicy Tuna Roll and California Roll', price: '$10.50' },
      { id: 'L3', image: l3MakiPhoto, name: 'Salmon Roll and California Roll', price: '$10.50' },
      { id: 'L4', name: 'Tuna Roll and California Roll', price: '$10.50' },
      { id: 'L5', name: 'Shrimp Avocado Roll and California Roll', price: '$10.50' },
      { id: 'L6', name: 'Two California Rolls', price: '$10.50' },
      { id: 'L7', name: "Sushi Special (Chef's Choice)", price: '$14.95' },
      { id: 'L8', name: "Sashimi Special (Chef's Choice)", price: '$16.95' },
    ] satisfies MenuItem[],
  },
  bento: {
    title: 'Featured Bento Boxes',
    // TODO: Change filler image
    image: doubleEelRollPhoto,
    items: [
      { id: 'L9', image: l9BentoPhoto, name: 'Shrimp Tempura and California Roll', price: '$10.95' },
      { id: 'L10', image: l10BentoPhoto, name: 'Chicken Teriyaki and California Roll', price: '$10.95' },
      { id: 'L11', name: 'Crispy Sesame Chicken and California Roll', price: '$10.95' },
      { id: 'L12', image: l12BentoPhoto, name: 'Vegetable Tempura and California Roll', price: '$10.95' },
    ] satisfies MenuItem[],
  },
  /** Title of the combined accordion on mobile. */
  mobileTitle: 'Lunch Specials',
};

export const teriyakiAndTempura = {
  title: 'Teriyaki & Tempura',
  subtitle: 'Grilled and glazed, or golden and crisp — a taste of both traditions',
  icon: goldForkKnifeIcon,
  items: [
    { name: 'Chicken Teriyaki', price: '$14.95' },
    { name: 'Salmon Teriyaki', price: '$19.95' },
    { name: 'Steak Teryaki', price: '$24.95' },
    { name: 'Chicken Tempura', price: '$14.95' },
    { name: 'Shrimp Tempura', price: '$17.95' },
    { name: 'Seafood Tempura', price: '$19.95' },
    { name: 'Vegetable Tempura', price: '$13.95' },
  ] satisfies MenuItem[],
};

export const drinksAndDesserts = {
  image: iceCreamPhoto,
  imageAlt: '',
  cold: {
    title: 'Cold Refreshments',
    icon: coldIcon,
    backgroundIcon: waterDropIcon,
    items: [
      { name: 'Mineral Water', price: '$3.95' },
      { name: 'Iced Tea', price: '$2.00' },
      { name: 'Japanese Marble Soda', price: '$3.95' },
      { name: 'Strawberry Iced Tea', price: '$3.95' },
      { name: 'Mango Iced Tea', price: '$3.95' },
      { name: 'Soft Drinks', price: '$2.50', description: 'Coke, Diet Coke, Sprite, Ginger Ale' },
    ] satisfies MenuItem[],
  },
  warm: {
    title: 'Hot Beverages',
    icon: hotIcon,
    backgroundIcon: hotCupIcon,
    items: [
      { name: 'Jasmine Tea', price: '$2.00' },
      { name: 'Japanese Green Tea', price: '$2.00' },
      { name: 'Wine Corking Fee', price: '$3.00' },
    ] satisfies MenuItem[],
  },
  dessert: {
    title: 'Desserts',
    icon: dessertIcon,
    backgroundIcon: undefined,
    items: [
      { name: 'Fried Banana with Ice Cream', price: '$5.95', description: 'Tempura-fried bananas served with ice cream' },
      { name: 'Mango Rice Pudding', price: '$5.95', description: 'Sticky rice with fresh mango and mixed nuts' },
      { name: 'Premium Ice Cream', price: '$4.95', description: 'Red bean, green tea, french vanilla' },
      { name: 'Mini Sugar Donuts (6)', price: '$4.95', description: 'Fried soft buns tossed in sugar' },
      { name: 'Tempura Fried Cheesecake', price: '$6.25' },
    ] satisfies MenuItem[],
  },
};

export const mainMenuDividerIcons = {
  goldLeaf: goldLeafIcon,
  wave: waveIcon,
  noodle: noodleIcon,
};

// ============================================================================
// SUSHI MENU
// ============================================================================

export const sushiMenuPdfs: PdfLink[] = [{ label: 'View Sushi Menu (PDF)', href: sushiMenuPdf }];

export const featuredRoll = {
  badge: 'Special Feature',
  name: '20th Year Anniversary Roll',
  description: 'A celebration of two decades of culinary excellence. Spicy salmon, avocado, topped with torched salmon. Finished with fried tempura flakes, spicy sauce, and thinly sliced japaleňo. ',
  price: '$15.50',
  image: roll20thYear,
};

export const anniversaryRolls = {
  title: '20th Anniversary Rolls',
  subtitle: 'Celebrating two decades of culinary excellence.',
  carouselLabel: 'A Roll for Every Year',
  items: [
    { name: '1st Year', image: roll1stYear, description: 'Old Bay crabmeat and avocado, fried shrimp tempura style', price: '$15.50' },
    { name: '2nd Year', image: roll2ndYear, description: 'Spicy yellowtail topped with avocado and tuna', price: '$15.50' },
    { name: '3rd Year', image: roll3rdYear, description: 'Fusion-style spicy tuna roll paired with tuna, calamari salad, cucumber, and seaweed salad', price: '$15.50' },
    { name: '4th Year', image: roll4thYear, description: 'Spicy tuna, avocado, and crabmeat topped with tuna', price: '$15.50' },
    { name: '5th Year', image: roll5thYear, description: 'Spicy tuna and crabmeat, topped with white tuna, salmon, tuna, avocado, and tempura flakes', price: '$15.50' },
    { name: '6th Year', image: roll6thYear, description: 'Spicy salmon and avocado, topped with fresh salmon, cream cheese, and tempura flakes', price: '$15.50' },
    { name: '7th Year', image: roll7thYear, description: 'Spicy tuna and salmon, topped with spicy crabmeat and scallop', price: '$15.50' },
    { name: '8th Year', image: roll8thYear, description: 'Spicy tuna, topped with avocado and spicy salmon', price: '$15.50' },
    { name: '9th Year', image: roll9thYear, description: 'Shimp tempura and asparagus, topped with spicy yellowtail and black crispy rice', price: '$15.50' },
    { name: '10th Year', image: roll10thYear, description: 'Yellowtail, salmon and spicy tuna, topped with salmon, mango, and spicy sauce', price: '$15.50' },
    { name: '11th Year', image: roll11thYear, description: 'Shrimp tempura topped with white tuna, jalapeno, and spicy sauce', price: '$15.50' },
    { name: '12th Year', image: roll12thYear, description: 'Crabmeat, spicy tuna, and crispy flakes inside, topped with avocado, spicy yellowtail, and jalapeno', price: '$15.50' },
    { name: '13th Year', image: roll13thYear, description: 'Spicy salmon and avocado, topped with pepper seared tuna', price: '$15.50' },
    { name: '14th Year', image: roll14thYear, description: 'Spicy salmon and black crispy rice, topped with yellowtail and avocado', price: '$15.50' },
    { name: '15th Year', image: roll15thYear, description: 'Spicy salmon and crispy rice, topped with salmon and avocado with spicy sauce', price: '$15.50' },
    { name: '16th Year', image: roll16thYear, description: 'Spicy yellowtail and crispy rice, topped with salmon, avocado, and spicy sauce', price: '$15.50' },
    { name: '17th Year', image: roll17thYear, description: 'Spicy salmon and avocado, topped with white tuna, spicy salmon, and roe', price: '$15.50' },
    { name: '18th Year', image: roll18thYear, description: 'Shrimp tempura, crabstick, and avocado, topped with spicy tuna and spicy sauce', price: '$15.50' },
    { name: '19th Year', image: roll19thYear, description: 'Yellowtail, avocado, and jalapenos, topped with spicy tuna and spicy sauce', price: '$15.50' },
    { name: '20th Year', image: roll20thYear, description: 'Spicy tuna and avocado, topped with torched salmon, jalapenos, and spicy sauce', price: '$15.50' },
  ] satisfies MenuItem[],
};

export const specialRolls = {
  title: 'Sushi Special Rolls',
  subtitle: 'Rolls named after people and places that shaped our story - friends, staff, and hometown pride.',
  items: [
    { name: 'Peggy', description: 'Crabmeat, avocado, and tempura flakes with tuna and wasabi mirin sauce', price: '$14.95' },
    { name: 'Peggy #2', image: peggyTwoRollPhoto, description: 'California roll topped with torched, fish roe, and rice seasoning', price: '$14.95' },
    { name: 'Esther', description: 'Salmon and avocado, topped with spicy tuna and tempura flakes', price: '$14.95' },
    { name: 'Matthew', image: matthewRollPhoto, description: 'Salmon, crab stick, topped with avocado, spicy yellowtail and tempura flakes', price: '$14.95' },
    { name: 'Ginger', description: 'Spicy tuna, salmon skin topped with salmon and fish roe', price: '$14.95' },
    { name: 'Raven', image: ravenRollPhoto, description: 'Spicy yellowtail, topped with cripsy black rice and spicy tuna on top', price: '$14.95' },
    { name: 'F-Ken', description: 'Crab stick and cream cheese tempura style, topped with spicy tuna', price: '$14.95' },
    { name: 'Godfather', description: 'Shrimp tempura, old bay crabmeat, seaweed salad and avocado wrapped in yellow soy seaweed', price: '$14.95' },
    { name: "Penthouse (Mitchell Brown's Creation)", image: penthouseRollPhoto, description: 'Shrimp tempura, cilantro, avocado, and tuna, finished with lime', price: '$14.95' },
    { name: 'Angel', description: 'Spicy yellowtail, topped with seaweed salad and spicy tuna', price: '$14.95' },
    { name: 'Sweet Heart', description: 'Spicy tuna, avocado, and tuna shaped as a heart', price: '$15.95' },
    { name: 'Mac Daddy', description: 'Fried soft-shell crab, cream cheese, topped with spicy lobster', price: '$16.95' },
    { name: 'Hurricane', description: 'Crabstick, mango, and apple, topped with spicy tuna and tempura flakes', price: '$14.95' },
    { name: 'AJ', description: 'Tempura california roll topped with grilled crabmeat on top', price: '$14.95' },
    { name: 'Haji (The Hajimihalis Family)', image: hajiRollPhoto, description: 'Shrimp tempura, topped with crispy spicy crab meat and crabstick', price: '$14.95' },
    { name: 'Baked Scallop', image: bakedScallopRollPhoto, description: 'California roll topped with spicy scallop', price: '$14.95' },
    { name: 'Sushi Sister', image: sushiSisterRollPhoto, description: 'Salmon and cucumber topped with tuna, avocado, mango, and spicy sauce', price: '$14.95' },
    { name: "Diamond Mike (Michael Shield's Creation)", image: diamondMikeRollPhoto, description: 'Crabstick and spicy salmon, topped with salmon, eel, avocado, and tempura flakes', price: '$14.95' },
    { name: 'Unforgettable', image: unforgettableRollPhoto, description: 'Spicy tuna, topped with eel and avocado', price: '$14.95' },
    { name: 'Baltimore', image: baltimoreRollPhoto, description: 'Soft-shell crab topped with spicy crabmeat', price: '$15.95' },
    { name: 'Son-In-Law Mango', image: sonInLawRollPhoto, description: 'Shrimp tempura, topped with cripsy spicy tuna and mango', price: '$14.95' },
    { name: 'Garden', image: gardenRollPhoto, description: 'Tempura sweet potato and yellow radish, topped with avocado', price: '$8.95' },
    { name: 'Crunchy Roll', description: 'Lump crabmeat, avocado, and shimp, topped with fish roe and tempura flakes wrapped in soy paper', price: '$14.95' },
    { name: 'Futomaki', description: 'Crabstick, egg, avocado, and vegetables', price: '$13.95' },
    { name: 'Phoenix', description: 'Chicken tempura topped with eel and avocado', price: '$14.95' },
    { name: 'Pretty In Red', description: 'Lump Crabmeat and avocado, topped with tempura flakes, tuna, and spicy sauce', price: '$14.95' },
    { name: 'Pine Nut Fish Roll', description: 'Tempura cod with spicy sauce', price: '$9.95' },
    { name: 'Red Dragon', description: 'Shrimp Tempura topped with spicy tuna', price: '$14.95' },
    { name: 'Spicy Lobster', description: 'Crabstick topped with spicy lobster', price: '$15.50' },
    { name: 'Teryaki Salmon', description: 'Grilled Salmon teryaki sauce', price: '$8.95' },
    { name: 'Tokyo', description: 'Spicy tuna topped with tuna, salmon, and yellowtail with spicy sauce', price: '$14.95' },
    { name: 'TNT Roll', description: 'Spicy Lobster topped with tuna and tempura flakes', price: '$15.50' },
    { name: 'Two to Tango', description: 'Shrimp tempura topped with fresh shrimp and avocado', price: '$14.95' },
    { name: 'Imperial Crab', image: imperialCrabRollPhoto, description: 'Crabstick and avocado topped with salmon and spicy grilled crabmeat', price: '$15.50' },
    { name: 'Butter Roll', image: butterRollPhoto, description: 'Sandwich style with spicy salmon, topped with avocado, fresh salmon, tempura flakes, and special sauce (no seaweed) ', price: '$14.95' },
  ] satisfies MenuItem[],
};

/**
 * Changed:
 * Califioria - $6.50
 */
export const makiRolls = {
  title: 'Maki Rolls',
  subtitle: 'Cut into 6 to 8 pieces',
  items: [
    { name: 'California Roll', description: 'Crabstick, avocado, and fish roe', price: '$6.50' },
    { name: 'Philadelphia Roll', description: 'Smoked salmon, cream cheese, and cucumber', price: '$6.95' },
    { name: 'Dragon Roll', description: 'Shrimp tempura topped with eel and avocado', price: '$14.95' },
    { name: 'Volcano Roll', description: 'Tuna and salmon topped with torched spicy sauce', price: '$8.95' },
    { name: 'Rainbow Roll', description: 'Crabstick and avocado, topped with salmon, tuna, and avocado', price: '$12.95' },
    { name: "Crazy Rock'n Roll", description: 'Eel and shrimp topped with avocado', price: '$14.95' },
    { name: 'Spider Roll', description: 'Soft-shell crab with cucumber and fish roe', price: '$10.95' },
    { name: 'Tuna', price: '$5.25' },
    { name: 'Spicy Tuna', price: '$6.95' },
    { name: 'Tuna Avocado', price: '$6.95' },
    { name: 'Asparagas & Cucumber', price: '$4.95' },
    { name: 'Avocado Roll', price: '$4.95' },
    { name: 'Avocado & Cucumber', price: '$4.95' },
    { name: 'Eel Avocado', price: '$7.95' },
    { name: 'Lobster', price: '$11.95' },
    { name: 'Lump Crabmeat Avocado', price: '$10.95' },
    { name: 'Crispy Spicy Crab Roll', price: '$11.95' },
    { name: 'Salmon', price: '6.50' },
    { name: 'Salmon Avocado', price: '$6.95' },
    { name: 'Spicy Salmon', price: '$6.95' },
    { name: 'Shrimp Avocado', price: '$6.95' },
    { name: 'Shrimp Tempura', price: '$7.95' },
    { name: 'Vegetable', price: '$5.95' },
    { name: 'Cucumber', price: '$4.95' },
    { name: 'Yellowtail Scallion & Cucumber', price: '$7.95' },
    { name: 'Spicy Yellowtail', price: '$7.95' },
  ] satisfies MenuItem[],
};

/**
 * Changes:
 *
 * Nigiri:
 * Crabstick - $5.25
 * White Tuna - $5.75
 * Tuna - $5.75
 * Surf Clam - $5.75
 * Squid - $5.75
 * Smoked Salmon - $5.75
 * Scallop  - $5.75
 * Salmon - $5.75
 * Red Snapper - $5.75
 * Octopus - $5.75
 * Mackeral- $5.75
 *
 * Fresh Water Eel - $6.25
 *
 * Sashimi:
 * Crabsticks - $6.50
 * White Tuna - $7.25
 * Tuna - $7.25
 * Surf Clam - $7.25
 * Squid - $7.25
 * Smoked Salmon - $7.25
 * Scallop - $7.25
 * Salmon - $7.25
 * Red Snapper - $7.25
 * Octopus - $7.25
 * Mackeral - $7.25
 *
 * Ebi Shrimp - $7.25
 * Yellowtail - $7.25
 */
export const nigiriSashimi = {
  title: 'Nigiri & Sashimi',
  note: 'Nigiri (with rice) / Sashimi (without rice)',
  items: [
    { name: 'Tuna', nigiriPrice: '$5.75', sashimiPrice: '$7.25' },
    { name: 'White Tuna', nigiriPrice: '$5.75', sashimiPrice: '$7.25' },
    { name: 'Salmon', nigiriPrice: '$5.75', sashimiPrice: '$7.25' },
    { name: 'Salmon Roe', image: salmonRoePhoto, nigiriPrice: '$5.95', sashimiPrice: '$5.95' },
    { name: 'Smoked Salmon', nigiriPrice: '$5.75', sashimiPrice: '$7.25' },
    { name: 'Crab Stick', nigiriPrice: '$5.25', sashimiPrice: '$6.50' },
    { name: 'Lobster', nigiriPrice: '$8.95', sashimiPrice: '$10.95' },
    { name: 'Mackeral', nigiriPrice: '$5.75', sashimiPrice: '$7.25' },
    { name: 'Bean Curd', nigiriPrice: '$4.95', sashimiPrice: '$5.95' },
    { name: 'Flying Fish Roe', nigiriPrice: '$4.95', sashimiPrice: '$5.50' },
    { name: 'Freshwater Eel', nigiriPrice: '$6.25', sashimiPrice: '$7.95' },
    { name: 'Octopus', nigiriPrice: '$5.75', sashimiPrice: '$7.25' },
    { name: 'Red Snapper', nigiriPrice: '$5.75', sashimiPrice: '$7.25' },
    { name: 'Scallop', image: scallopNigiriPhoto, nigiriPrice: '$5.75', sashimiPrice: '$7.25' },
    { name: 'Squid', nigiriPrice: '$5.75', sashimiPrice: '$7.25' },
    { name: 'Surf Clam', nigiriPrice: '$5.75', sashimiPrice: '$7.25' },
    { name: 'Ebi Shrimp', note: 'Cooked', nigiriPrice: '$5.95', sashimiPrice: '$7.25' },
    { name: 'Sweet Shrimp', note: 'Raw', nigiriPrice: '$8.95', sashimiPrice: '$8.95' },
    { name: 'Tamago', note: 'Egg', nigiriPrice: '$4.95', sashimiPrice: '$5.95' },
    { name: 'Yellowtail', nigiriPrice: '$5.95', sashimiPrice: '$7.25' },
    { name: 'Uni', note: 'Market Price', nigiriPrice: 'M.P', sashimiPrice: 'M.P' },
  ] satisfies NigiriItem[],
};

// TODO: replace each entry with a real platter photo once available
export const sushiPlatters = {
  title: 'Sushi Platters',
  subtitle: 'Perfect for sharing, parties, and celebrations',
  images: [
    { src: platter6, alt: 'Sushi platter' },
    { src: platter2, alt: 'Sushi platter' },
    { src: platter3, alt: 'Sushi platter' },
    { src: platter4, alt: 'Sushi platter' },
    { src: platter5, alt: 'Sushi platter' },
    { src: platter1, alt: 'Sushi platter' },
  ] satisfies GalleryImage[],
};

export const sushiMenuDividerIcons = {
  flower: flowerIcon,
  goldLeaf: goldLeafIcon,
  circle: circleIcon,
  apple: appleIcon,
};

// ============================================================================
// DINNER SPECIALS
// ============================================================================

export const dinnerSpecials = {
  title: 'Evening Expressions',
  subtitle: 'CURATED NIGHTLY FEATURES HIGHLIGHTING SEASONAL INGREDIENTS.',
  chefSpecial: {
    label: "Chef's Special",
    mobileLabel: "Chef's Feature",
    name: 'Korean BBQ Beef Short Ribs',
    description:
      'Tender, grilled bone-in beef short ribs marinated in a rich, savory-sweet glaze. Served sizzling and accompanied by a serving of rice and mixed vegetables',
    price: '$20.95',
    image: comingSoonPhoto,
    imageAlt: "Chef's special dish",
    icon: forkKnifeIcon,
  },
  items: [
    { name: 'Chicken Lettuce Wrap', image: chickenLettuceWrapPhoto, price: '$11.95', description: 'Stir-fry chicken with peas and carrots placed on a lettuce wrap' },
    { name: 'Beef and Shrimp', price: '$18.95', description: 'Stir-fry with tomato and spring onions' },
    { name: 'Pepper Steak', price: '$17.95', description: 'Stir-fry beef with bell peppers and onion' },
    { name: 'Triple Delight', price: '$18.95', description: 'Stir-fry of shrimp, chicken, beef, and vegetables' },
    { name: 'Thai Basil Chicken', price: '$15.95' },
    { name: 'Thai Basil Shrimp', price: '$17.95' },
    { name: 'Thai Basil Beef', price: '$17.95' },
  ] satisfies MenuItem[],
};

// ============================================================================
// ABOUT US
// ============================================================================

export const about = {
  story: {
    title: 'A Local Business',
    paragraphs: [
      'For over 20 years, Green Leaf has become more than a local restaurant. It has been a hub rooted in the heart of the neighborhood. We are a family-owned establishment built on a foundation of respect for tradition and a passion for culinary excellence.',
      "Our commitment lies in creating meaningful relationships with the community and embracing the warmth of shared moments. Every dish we serve is a testament to the genuine connections we've built with our regular customers, who we consider an extension of our own family.",
    ],
    button: { label: 'Explore Our Menu', href: '/menu' },
    image: storefrontImage,
    imageAlt: 'Chef preparing sushi',
  },
  gallery: {
    title: 'Moments With Our Community',
    subtitle: 'Celebrations, regulars, and everyday moments shared around our table',
    images: [
      { src: aboutNewYears, alt: 'New Year Celebrations' },
      { src: aboutSundayRegulars, alt: 'Sunday Regulars' },
      { src: aboutNeighborhood, alt: 'Neighborhood' },
      { src: aboutChineseNewYear, alt: 'Chinese New year' },
      { src: aboutBirthday, alt: 'Birthday Dinner' },
      { src: aboutAnniversary, alt: 'Anniversary Celebrations' },
    ] satisfies GalleryImage[],
  },
  joinTitle: 'Join Our Table',
  visit: { title: 'Visit Us', icon: mapPinIcon, callIcon: reservationIcon, callLabel: 'Call to Reserve', mapTitle: 'Green Leaf Sushi location' },
  instagram: {
    title: 'Follow Our Instagram',
    description: 'Sneak peeks of new rolls and a look behind the scenes.',
    button: 'Follow Us',
  },
  hours: { title: 'Hours of Operation', icon: clockIcon, holidayTitle: 'Holiday Hours' },
  dividerIcons: { diamond: diamondIcon, circle: circleIcon },
};

// ============================================================================
// CONTACT, CAREERS, PRIVACY
// ============================================================================

export const contact = {
  title: 'Contact Us',
  intro: "Have a question or want to place a takeout order? Give us a call — we'd love to hear from you.",
};

export const careers = {
  title: 'Join Our Team',
  intro: "We're always looking for passionate people who care about food, hospitality, and community. If that sounds like you, we'd love to hear from you — even if you don't see a role listed below.",
  rolesTitle: 'Current Openings',
  openRoles: [] as string[],
  applyLabel: 'Email Your Resume',
  emailSubject: 'Job Application - Green Leaf Sushi',
  emailBody: "Hello,\n\nI'm interested in employment opportunities at Green Leaf Sushi. Please find my resume attached.\n\n",
  privacyNote: {
    before: "By emailing us, you're sending your resume and any information it contains directly to our hiring team. We only use it to evaluate you for employment and don't share it with third parties. See our",
    link: { label: 'Privacy Policy', href: '/privacy-policy' },
    after: "for details, or contact us if you'd like your resume deleted from our inbox.",
  },
};

export const privacyPolicy = {
  title: 'Privacy Policy',
  updated: 'Last Updated: August 2026',
  intro: 'At Green Leaf Sushi, we value your privacy. This page explains what limited information our website collects and how we handle it.',
  sections: [
    {
      title: '1. Information We Collect',
      list: [
        { label: 'Hosting & Server Logs:', text: "Our hosting provider may automatically collect standard server metrics, such as visitor counts and browser type, as part of normal web hosting. We don't add any analytics or tracking scripts of our own to the site." },
        { label: 'Embedded Google Map:', text: "Our Visit Us page includes an embedded Google Map. Loading this map may set cookies or collect data through Google's own service, governed by Google's Privacy Policy, not ours." },
        { label: 'Resumes & Employment Inquiries:', text: "If you use our Careers page's email link, we receive your email address and whatever information you choose to include, such as a resume." },
      ],
    },
    {
      title: '2. How We Use Your Information',
      text: 'Server metrics are used only to understand site performance. Resumes and employment inquiries are used strictly to evaluate candidates for open positions.',
    },
    {
      title: '3. Information Sharing',
      text: 'We do not sell, rent, or trade your personal information. Resumes you send us are shared only internally with restaurant management for hiring purposes.',
    },
    {
      title: '4. Contact Us',
      text: "If you'd like us to delete a resume you've submitted from our inbox, or have any other questions about this policy, contact us at",
      email: business.infoEmail,
    },
  ],
};
