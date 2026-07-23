import { AggregatedProduct } from "@/normalizers";
import { IAnalyzer } from "./analyzer.interface";
import { ScoreResult } from "./models/score-result";

export class CommissionAnalyzer implements IAnalyzer {
  readonly name = "Commission";

  async analyze(product: AggregatedProduct): Promise<ScoreResult> {
    return {
      name: this.name,

      score: product.trend.commissionScore ?? 0,

      weight: 0.15,
    };
  }
}
