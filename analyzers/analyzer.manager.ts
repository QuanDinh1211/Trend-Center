import { AggregatedProduct } from "@/normalizers";

import { IAnalyzer } from "./analyzer.interface";

import { ScoreResult } from "./models/score-result";

export class AnalyzerManager {
  private readonly analyzers: IAnalyzer[] = [];

  register(analyzer: IAnalyzer) {
    this.analyzers.push(analyzer);
  }

  async analyze(product: AggregatedProduct): Promise<ScoreResult[]> {
    const scores: ScoreResult[] = [];

    for (const analyzer of this.analyzers) {
      scores.push(await analyzer.analyze(product));
    }

    return scores;
  }
}
