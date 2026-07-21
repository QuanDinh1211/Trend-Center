import { IParser } from "../base/parser.interface";
import { GoogleTrendRaw } from "./google.types";

export class GoogleParser implements IParser<any[], GoogleTrendRaw[]> {
  async parse(data: any[]): Promise<GoogleTrendRaw[]> {
    return data.map((item) => ({
      keyword: item.keyword,

      searchVolume: Number(item.searchVolume),

      growthPercent: Number(item.growthPercent),

      trendDirection: item.trendDirection,
    }));
  }
}
