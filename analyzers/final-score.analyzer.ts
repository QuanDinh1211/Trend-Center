import { ScoreResult } from "./models/score-result";

export class FinalScoreAnalyzer {
  calculate(scores: ScoreResult[]): number {
    let totalWeight = 0;

    let totalScore = 0;

    for (const item of scores) {
      totalWeight += item.weight;

      totalScore += item.score * item.weight;
    }

    if (totalWeight === 0) {
      return 0;
    }

    return Number((totalScore / totalWeight).toFixed(2));
  }
}
