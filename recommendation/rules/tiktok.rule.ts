import { RecommendationLevel } from "../models/recommendation-result";
import { RecommendationContext } from "../recommendation.context";
import { IRecommendationRule } from "./rule.interface";

export class TikTokRule implements IRecommendationRule {
  readonly name = "TikTok";

  evaluate(context: RecommendationContext) {
    const score = context.product.trend.tiktokScore ?? 0;

    if (score >= 80) {
      return {
        level: RecommendationLevel.WATCH,
        score,
        reasons: ["TikTok đang viral"],
        tags: ["TIKTOK"],
      };
    }

    return null;
  }
}
