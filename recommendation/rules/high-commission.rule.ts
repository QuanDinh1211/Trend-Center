import { IRecommendationRule } from "./rule.interface";

import { RecommendationContext } from "../recommendation.context";

import {
  RecommendationLevel,
  RecommendationResult,
} from "../models/recommendation-result";

export class HighCommissionRule implements IRecommendationRule {
  readonly name = "High Commission";

  evaluate(context: RecommendationContext): RecommendationResult | null {
    const score = context.product.trend.commissionScore ?? 0;

    if (score >= 80) {
      return {
        level: RecommendationLevel.GOOD,

        score,

        reasons: ["Hoa hồng cao"],

        tags: ["COMMISSION"],
      };
    }

    return null;
  }
}
