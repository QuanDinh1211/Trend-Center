import { RecommendationLevel } from "../models/recommendation-result";
import { RecommendationContext } from "../recommendation.context";
import { IRecommendationRule } from "./rule.interface";

export class GoogleRule implements IRecommendationRule {
  readonly name = "Google";

  evaluate(context: RecommendationContext) {
    const score = context.product.trend.googleScore ?? 0;

    if (score >= 80) {
      return {
        level: RecommendationLevel.WATCH,
        score,
        reasons: ["Google Trend cao"],
        tags: ["GOOGLE"],
      };
    }

    return null;
  }
}
