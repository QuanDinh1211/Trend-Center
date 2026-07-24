import { IRecommendationRule } from "./rule.interface";

import { RecommendationContext } from "../recommendation.context";

import {
  RecommendationLevel,
  RecommendationResult,
} from "../models/recommendation-result";

export class LowCompetitionRule implements IRecommendationRule {
  readonly name = "Low Competition";

  evaluate(context: RecommendationContext): RecommendationResult | null {
    const score = context.product.trend.competitionScore ?? 100;

    if (score <= 30) {
      return {
        level: RecommendationLevel.GOOD,

        score,

        reasons: ["Competition thấp"],

        tags: ["LOW_COMPETITION"],
      };
    }

    return null;
  }
}
