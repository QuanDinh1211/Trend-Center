export interface TikTokProductRaw {

  productId: string;

  title: string;

  description?: string;

  category?: string;

  brand?: string;

  image?: string;

  productUrl: string;

  shopId?: string;

  shopName?: string;

  price: number;

  originalPrice?: number;

  soldCount: number;

  rating?: number;

  reviewCount?: number;

  commissionRate?: number;

  commissionAmount?: number;

}

export interface TikTokVideoRaw {

  videoId: string;

  productId?: string;

  creatorId?: string;

  title: string;

  url: string;

  thumbnail?: string;

  views: number;

  likes: number;

  comments: number;

  shares: number;

  publishedAt?: Date;

}

export interface TikTokCreatorRaw {

  creatorId: string;

  nickname: string;

  profileUrl?: string;

  avatar?: string;

  followers: number;

  verified: boolean;

}

export interface TikTokCrawlerResult {

  products: TikTokProductRaw[];

  videos: TikTokVideoRaw[];

  creators: TikTokCreatorRaw[];

}