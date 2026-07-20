import { appLogger } from "@/infrastructure/logger";
import { ISchedulerJob } from "../scheduler.interface";

export class CleanupJob implements ISchedulerJob {
  readonly name = "Cleanup";

  // 23:30 mỗi ngày
  readonly cron = "30 23 * * *";

  readonly enabled = true;

  async execute(): Promise<void> {
    appLogger.info("🧹 Cleanup Job Running...");

    // TODO:
    // 1. Xóa log cũ
    // 2. Xóa file tạm
    // 3. Dọn dữ liệu cache
    // 4. Backup database (sau này)

    appLogger.info("🧹 Cleanup Job Finished");
  }
}
