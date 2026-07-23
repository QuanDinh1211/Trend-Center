import { AggregatedProduct } from "@/normalizers";

import { IAnalyzer } from "./analyzer.interface";

import { ScoreResult } from "./models/score-result";

export class GoogleScoreAnalyzer implements IAnalyzer {
  readonly name = "Google";

  async analyze(product: AggregatedProduct): Promise<ScoreResult> {
    return {
      name: this.name,

      score: product.trend.googleScore ?? 0,

      weight: 0.3,
    };
  }
}
