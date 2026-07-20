import { appLogger } from "@/infrastructure/logger";
import { ISchedulerJob } from "../scheduler.interface";

export class TikTokJob implements ISchedulerJob {
  readonly name = "TikTok Shop";

  readonly cron = "10 8 * * *";

  readonly enabled = true;

  async execute(): Promise<void> {
    appLogger.info("TikTok Job Running...");
    appLogger.info("TikTok Job Finished");
  }
}
