import { AggregatedProduct } from "@/normalizers";

import { ScoreResult } from "./models/score-result";

export interface IAnalyzer {
  readonly name: string;

  analyze(product: AggregatedProduct): Promise<ScoreResult>;
}
