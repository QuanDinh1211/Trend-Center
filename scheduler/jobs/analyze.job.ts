import { appLogger } from "@/infrastructure/logger";
import { ISchedulerJob } from "../scheduler.interface";

export class AnalyzeJob implements ISchedulerJob {
  readonly name = "Analyze Trend";

  // 08:30 mỗi ngày
  readonly cron = "30 8 * * *";

  readonly enabled = true;

  async execute(): Promise<void> {
    appLogger.info("Analyze Job Started");

    // TODO:
    // 1. Tính Trend Score
    // 2. Tính Competition Score
    // 3. Tính Final Score
    // 4. Cập nhật bảng TrendScore

    appLogger.info("Analyze Job Finished");
  }
}
