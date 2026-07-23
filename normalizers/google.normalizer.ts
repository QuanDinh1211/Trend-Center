import { INormalizer } from "./normalize.interface";

import { AggregatedKeyword } from "./models/aggregated-keyword";

export class GoogleNormalizer implements INormalizer<any, AggregatedKeyword> {
  async normalize(data: any): Promise<AggregatedKeyword[]> {
    return data.map((item: any) => ({
      keyword: item.keyword,

      category: item.category,

      searchVolume: item.searchVolume,

      growth: item.growth,

      googleScore: item.score,
    }));
  }
}
