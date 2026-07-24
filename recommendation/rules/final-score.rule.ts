import { RecommendationLevel } from "../models/recommendation-result";
import { RecommendationContext } from "../recommendation.context";
import { IRecommendationRule } from "./rule.interface";

export class FinalScoreRule implements IRecommendationRule {
  readonly name = "Final Score";

  evaluate(context: RecommendationContext) {
    const score = context.product.trend.finalScore ?? 0;

    if (score >= 75) {
      return {
        level: RecommendationLevel.GOOD,
        score,
        reasons: ["Final Score cao"],
        tags: ["FINAL_SCORE"],
      };
    }

    return null;
  }
}
