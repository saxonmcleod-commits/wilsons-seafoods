import { OpeningHour, HomepageContent } from './types';

export const INITIAL_LOGO_URL = 'https://i.imgur.com/Gq6h2rQ.png';

export const INITIAL_HOMEPAGE_CONTENT: HomepageContent = {
  heroTitle: "Fresh From The Ocean",
  heroSubtitle: "Proudly offering the freshest, locally sourced seafood in Tasmania.",
  announcementText: "Free delivery on all orders over $100 this week!",
  aboutText: "Founded in 1988, Wilson's Seafoods has been the heart of Glenorchy's fresh fish market for over three decades. Our family-run business is built on a simple promise: to provide our community with the freshest, highest-quality, and sustainably sourced seafood Tasmania has to offer. We work directly with local fishermen to bring the best of the ocean straight to your table.",
  aboutImageUrl: 'https://images.unsplash.com/photo-1577906161839-d4272b0755f3?q=80&w=1887&auto=format&fit=crop'
};

export const OPENING_HOURS: OpeningHour[] = [
  { day: 'Wednesday', time: '7am - 1pm' },
  { day: 'Thursday', time: '7am - 2pm' },
  { day: 'Friday', time: '7am - 2:30pm' },
];