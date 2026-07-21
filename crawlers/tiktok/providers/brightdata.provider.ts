import { TikTokCrawlerResult } from "../tiktok.types";
import { ITikTokProvider } from "./tiktok.provider.interface";

export class BrightDataProvider
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

  async fetchProducts() {

    return [];

  }

  async fetchProduct() {

    return null;

  }

}