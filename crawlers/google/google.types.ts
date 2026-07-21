export interface GoogleTrendRaw {
  keyword: string;

  searchVolume: number;

  growthPercent: number;

  trendDirection: "UP" | "DOWN" | "STABLE";
}
