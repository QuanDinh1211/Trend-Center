import { IRecommendationEngine } from "./recommendation.interface";

import { RecommendationContext } from "./recommendation.context";

import {
  RecommendationLevel,
  RecommendationResult,
} from "./models/recommendation-result";

import {
  FinalScoreRule,
  GoogleRule,
  GrowthRule,
  HighCommissionRule,
  HotProductRule,
  IRecommendationRule,
  LowCompetitionRule,
  TikTokRule,
} from "./rules";

export class RecommendationEngine implements IRecommendationEngine {
  private readonly rules: IRecommendationRule[];

  constructor(rules?: IRecommendationRule[]) {
    this.rules = rules ?? [
      new HotProductRule(),

      new HighCommissionRule(),

      new LowCompetitionRule(),

      new GrowthRule(),

      new TikTokRule(),

      new GoogleRule(),

      new FinalScoreRule(),
    ];
  }

  recommend(context: RecommendationContext): RecommendationResult {
    for (const rule of this.rules) {
      const result = rule.evaluate(context);

      if (result) {
        return result;
      }
    }

    return {
      level: RecommendationLevel.IGNORE,

      score: context.product.trend.finalScore ?? 0,

      reasons: ["Không đủ điều kiện"],

      tags: [],
    };
  }
}
