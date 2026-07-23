import { INormalizer } from "./normalize.interface";

import { AggregatedProduct } from "./models/aggregated-product";

export class TikTokNormalizer implements INormalizer<any, AggregatedProduct> {
  async normalize(data: any): Promise<AggregatedProduct[]> {
    return data.map((video: any) => ({
      name: video.productName,

      keywords: [],

      platforms: [],

      videos: [
        {
          platform: "TikTok",

          creator: video.creator,

          title: video.title,

          url: video.url,

          views: video.views,

          likes: video.likes,

          comments: video.comments,

          shares: video.shares,
        },
      ],

      trend: {
        tiktokScore: video.score,
      },
    }));
  }
}
