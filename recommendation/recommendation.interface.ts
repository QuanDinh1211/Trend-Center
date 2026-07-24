import { RecommendationContext } from "./recommendation.context";
import { RecommendationResult } from "./models/recommendation-result";

export interface IRecommendationEngine {
  recommend(context: RecommendationContext): RecommendationResult;
}
