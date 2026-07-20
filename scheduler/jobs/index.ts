import { GoogleTrendJob } from "./google-trend.job";
import { TikTokJob } from "./tiktok.job";
import { ShopeeJob } from "./shopee.job";
import { AnalyzeJob } from "./analyze.job";
import { ReportJob } from "./report.job";
import { CleanupJob } from "./cleanup.job";

export const jobs = [
  new GoogleTrendJob(),
  new TikTokJob(),
  new ShopeeJob(),
  new AnalyzeJob(),
  new ReportJob(),
  new CleanupJob(),
];
