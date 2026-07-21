import {
  TikTokCrawlerResult,
  TikTokProductRaw,
} from "../tiktok.types";

export interface ITikTokProvider {

  fetchTrending(): Promise<TikTokCrawlerResult>;

  fetchProducts(): Promise<TikTokProductRaw[]>;

  fetchProduct(productId: string): Promise<TikTokProductRaw | null>;

}