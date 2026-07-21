import { TikTokCrawlerResult } from "./tiktok.types";

export class TikTokMapper {

  async map(
    data: TikTokCrawlerResult
  ) {

    return {

      products: data.products,

      videos: data.videos,

      creators: data.creators,

    };

  }

}