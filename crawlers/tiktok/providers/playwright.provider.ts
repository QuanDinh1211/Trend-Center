import { ITikTokProvider } from "./tiktok.provider.interface";
import {
  TikTokCrawlerResult,
  TikTokProductRaw,
} from "../tiktok.types";

export class PlaywrightProvider
  implements ITikTokProvider
{
  async fetchTrending(): Promise<TikTokCrawlerResult> {

    /**
     * TODO:
     * Kết nối tới nguồn dữ liệu được phép
     * Parse dữ liệu
     */

    return {

      products: [],

      videos: [],

      creators: [],

    };

  }

  async fetchProducts(): Promise<TikTokProductRaw[]> {

    const result = await this.fetchTrending();

    return result.products;

  }

  async fetchProduct(
    productId: string
  ): Promise<TikTokProductRaw | null> {

    const products =
      await this.fetchProducts();

    return (
      products.find(
        p => p.productId === productId
      ) ?? null
    );

  }

}