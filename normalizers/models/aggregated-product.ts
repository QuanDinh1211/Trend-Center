export interface AggregatedPlatform {
  platform: string;

  productId?: string;

  url?: string;

  price?: number;

  originalPrice?: number;

  soldCount?: number;

  rating?: number;

  reviewCount?: number;

  commissionRate?: number;

  commissionAmount?: number;
}

export interface AggregatedVideo {
  platform: string;

  creator?: string;

  title?: string;

  url?: string;

  views?: number;

  likes?: number;

  comments?: number;

  shares?: number;
}

export interface AggregatedProduct {
  id?: string;

  name: string;

  slug?: string;

  category?: string;

  brand?: string;

  keywords: string[];

  platforms: AggregatedPlatform[];

  videos: AggregatedVideo[];

  trend: {
    googleScore?: number;

    tiktokScore?: number;

    shopeeScore?: number;

    growthScore?: number;

    competitionScore?: number;

    commissionScore?: number;

    finalScore?: number;
  };
}
