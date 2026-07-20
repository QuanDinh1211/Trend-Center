import { appLogger } from "@/infrastructure/logger";
import { ISchedulerJob } from "../scheduler.interface";

export class GoogleTrendJob implements ISchedulerJob {
  readonly name = "Google Trend";

  readonly cron = "0 8 * * *";

  readonly enabled = true;

  async execute(): Promise<void> {
    appLogger.info("Google Trend Job Running...");
    appLogger.info("Google Trend Job Finished");
  }
}
