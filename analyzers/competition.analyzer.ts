import { AggregatedProduct } from "@/normalizers";
import { IAnalyzer } from "./analyzer.interface";
import { ScoreResult } from "./models/score-result";

export class CompetitionAnalyzer implements IAnalyzer {
  readonly name = "Competition";

  async analyze(product: AggregatedProduct): Promise<ScoreResult> {
    return {
      name: this.name,

      score: product.trend.competitionScore ?? 0,

      weight: 0.1,
    };
  }
}
