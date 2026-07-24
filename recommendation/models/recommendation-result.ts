export enum RecommendationLevel {
  HOT = "HOT",

  GOOD = "GOOD",

  WATCH = "WATCH",

  IGNORE = "IGNORE",
}

export interface RecommendationResult {
  level: RecommendationLevel;

  score: number;

  reasons: string[];

  tags: string[];
}
