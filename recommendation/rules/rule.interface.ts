import { RecommendationContext } from "../recommendation.context";
import { RecommendationResult } from "../models/recommendation-result";

export interface IRecommendationRule {
  readonly name: string;

  evaluate(context: RecommendationContext): RecommendationResult | null;
}
