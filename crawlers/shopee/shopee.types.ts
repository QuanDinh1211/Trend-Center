export interface ShopeeProductRaw {
  productId: string;

  title: string;

  category?: string;

  brand?: string;

  image?: string;

  productUrl: string;

  shopId: string;

  shopName: string;

  price: number;

  originalPrice?: number;

  soldCount: number;

  rating?: number;

  reviewCount?: number;

  stock?: number;

  commissionRate?: number;

  commissionAmount?: number;
}

export interface ShopeeCrawlerResult {
  products: ShopeeProductRaw[];
}