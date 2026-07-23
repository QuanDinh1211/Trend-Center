import { INormalizer } from "./normalize.interface";

import { AggregatedProduct } from "./models/aggregated-product";

export class ShopeeNormalizer implements INormalizer<any, AggregatedProduct> {
  async normalize(data: any): Promise<AggregatedProduct[]> {
    return data.map((item: any) => ({
      name: item.title,

      brand: item.brand,

      keywords: [],

      videos: [],

      platforms: [
        {
          platform: "Shopee",

          productId: item.productId,

          url: item.productUrl,

          price: item.price,

          originalPrice: item.originalPrice,

          soldCount: item.soldCount,

          rating: item.rating,

          reviewCount: item.reviewCount,

          commissionRate: item.commissionRate,

          commissionAmount: item.commissionAmount,
        },
      ],

      trend: {
        shopeeScore: item.score,
      },
    }));
  }
}
