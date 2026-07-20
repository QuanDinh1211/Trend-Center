import { appLogger } from "@/infrastructure/logger";
import { ISchedulerJob } from "../scheduler.interface";

export class ReportJob implements ISchedulerJob {
  readonly name = "Daily Report";

  // 08:40 mỗi ngày
  readonly cron = "40 8 * * *";

  readonly enabled = true;

  async execute(): Promise<void> {
    appLogger.info("Daily Report Job Running...");

    // TODO:
    // 1. Lấy Top 100 sản phẩm
    // 2. Lấy Top Keyword
    // 3. Tạo DailyReport
    // 4. Gửi Telegram/Discord (sau này)

    appLogger.info("Daily Report Job Finished");
  }
}
