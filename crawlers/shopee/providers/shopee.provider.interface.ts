import {
  ShopeeCrawlerResult,
  ShopeeProductRaw,
} from "../shopee.types";

export interface IShopeeProvider {
  fetchTrending(): Promise<ShopeeCrawlerResult>;

  fetchProducts(): Promise<ShopeeProductRaw[]>;

  fetchProduct(
    productId: string
  ): Promise<ShopeeProductRaw | null>;
}