import { appLogger } from "@/infrastructure/logger";
import { ISchedulerJob } from "../scheduler.interface";

export class ShopeeJob implements ISchedulerJob {
  readonly name = "Shopee";

  // 08:20 mỗi ngày
  readonly cron = "20 8 * * *";

  readonly enabled = true;

  async execute(): Promise<void> {
    appLogger.info("🛒 Shopee Job Running...");

    // TODO:
    // 1. Crawl sản phẩm Shopee
    // 2. Crawl giá
    // 3. Crawl hoa hồng
    // 4. Lưu ProductPlatform
    // 5. Lưu PriceHistory
    // 6. Lưu CommissionHistory

    appLogger.info("🛒 Shopee Job Finished");
  }
}
