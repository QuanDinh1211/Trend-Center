import { AggregatedKeyword } from "@/normalizers";

import { IAggregator } from "./aggregator.interface";

export class KeywordAggregator implements IAggregator<AggregatedKeyword> {
  async aggregate(keywords: AggregatedKeyword[]): Promise<AggregatedKeyword[]> {
    const map = new Map<string, AggregatedKeyword>();

    for (const keyword of keywords) {
      const key = keyword.keyword.toLowerCase();

      if (!map.has(key)) {
        map.set(key, keyword);
      }
    }

    return [...map.values()];
  }
}
