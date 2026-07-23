import { AggregatedProduct } from "@/normalizers";
import { IAnalyzer } from "./analyzer.interface";
import { ScoreResult } from "./models/score-result";

export class GrowthAnalyzer implements IAnalyzer {
  readonly name = "Growth";

  async analyze(product: AggregatedProduct): Promise<ScoreResult> {
    return {
      name: this.name,

      score: product.trend.growthScore ?? 0,

      weight: 0.2,
    };
  }
}
