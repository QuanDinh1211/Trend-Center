import { RecommendationLevel } from "../models/recommendation-result";
import { RecommendationContext } from "../recommendation.context";
import { IRecommendationRule } from "./rule.interface";

export class GrowthRule implements IRecommendationRule {
  readonly name = "Growth";

  evaluate(context: RecommendationContext) {
    const score = context.product.trend.growthScore ?? 0;

    if (score >= 80) {
      return {
        level: RecommendationLevel.GOOD,
        score,
        reasons: ["Tăng trưởng mạnh"],
        tags: ["GROWTH"],
      };
    }

    return null;
  }
}
