import { IRecommendationRule } from "./rule.interface";

import { RecommendationContext } from "../recommendation.context";

import {
  RecommendationLevel,
  RecommendationResult,
} from "../models/recommendation-result";

export class HotProductRule implements IRecommendationRule {
  readonly name = "Hot Product";

  evaluate(context: RecommendationContext): RecommendationResult | null {
    const trend = context.product.trend;

    if (
      (trend.finalScore ?? 0) >= 90 &&
      (trend.growthScore ?? 0) >= 70 &&
      (trend.competitionScore ?? 100) <= 40
    ) {
      return {
        level: RecommendationLevel.HOT,

        score: trend.finalScore ?? 0,

        reasons: ["Trend score rất cao", "Growth mạnh", "Competition thấp"],

        tags: ["HOT", "TREND"],
      };
    }

    return null;
  }
}
