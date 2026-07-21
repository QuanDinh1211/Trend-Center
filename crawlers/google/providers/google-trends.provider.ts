import "dotenv";
import axios from "axios";
import { IGoogleProvider } from "./google.provider.interface";
import { GoogleTrendRaw } from "../google.types";

export class GoogleTrendsProvider implements IGoogleProvider {
  async fetchTrendingKeywords(): Promise<GoogleTrendRaw[]> {
    // const response = await axios.get("https://serpapi.com/search", {
    //   params: {
    //     engine: "google_trends_trending_now",
    //     geo: "VN",
    //     api_key: process.env.SERP_API_KEY,
    //   },
    // });

    // const trends = response.data.trending_searches ?? [];

    // return trends.map((item: any) => ({
    //   keyword: item.query,

    //   searchVolume: item.search_count ?? 0,

    //   growthPercent: item.growth ?? 0,

    //   trendDirection: "UP",
    // }));

    return [
      {
        keyword: "camera wifi",
        searchVolume: 12000,
        growthPercent: 52,
        trendDirection: "UP",
      },
      {
        keyword: "micro livestream",
        searchVolume: 8000,
        growthPercent: 37,
        trendDirection: "UP",
      },
    ];
  }
}
