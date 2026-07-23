import { AggregatedProduct } from "@/normalizers";

import { IAnalyzer } from "./analyzer.interface";

import { ScoreResult } from "./models/score-result";

export class TikTokScoreAnalyzer implements IAnalyzer {
  readonly name = "TikTok";

  async analyze(product: AggregatedProduct): Promise<ScoreResult> {
    return {
      name: this.name,

      score: product.trend.tiktokScore ?? 0,

      weight: 0.25,
    };
  }
}
