import { GoogleTrendRaw } from "./google.types";

export class GoogleMapper {
  async map(data: GoogleTrendRaw[]) {
    return data.map((item) => ({
      keyword: item.keyword,

      history: {
        searchVolume: item.searchVolume,

        growthPercent: item.growthPercent,

        trendDirection: item.trendDirection,
      },
    }));
  }
}
