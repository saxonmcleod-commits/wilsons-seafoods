export interface FishProduct {
  id?: number;
  name: string;
  price: string;
  imageUrl: string;
  isFresh?: boolean;
}

export interface OpeningHour {
  day: string;
  time: string;
}

export interface HomepageContent {
  heroTitle: string;
  heroSubtitle: string;

  announcementText: string;
  aboutText: string;
  aboutImageUrl: string;
}