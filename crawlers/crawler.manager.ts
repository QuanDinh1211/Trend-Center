import { ICrawler } from "./crawler.interface";
import { GoogleCrawler } from "./google";
import { TikTokCrawler } from "./tiktok";
import { ShopeeCrawler } from "./shopee";
import { appLogger } from "@/infrastructure/logger";

export class CrawlerManager {
  private readonly crawlers: ICrawler[];

  constructor(crawlers?: ICrawler[]) {
    this.crawlers = crawlers ?? [
      new GoogleCrawler(),
      new TikTokCrawler(),
      new ShopeeCrawler(),
    ];
  }

  /**
   * Danh sách crawler
   */
  getCrawlers(): ICrawler[] {
    return this.crawlers;
  }

  /**
   * Chạy tất cả crawler
   */
  async runAll() {
    appLogger.info("========== START CRAWLER ==========");

    const results = [];

    for (const crawler of this.crawlers) {
      if (!crawler.isEnabled()) {
        appLogger.warn(`[${crawler.name}] Disabled`);

        continue;
      }

      appLogger.info(`[${crawler.name}] Running...`);

      try {
        const result = await crawler.crawl();

        results.push(result);

        appLogger.info(`[${crawler.name}] Done (${result.total} records)`);
      } catch (error) {
        appLogger.error(`[${crawler.name}] Error`, {
          crawler: crawler.name,
          error,
        });
      }
    }

    appLogger.info("========== END CRAWLER ==========");

    return results;
  }

  /**
   * Chạy 1 crawler theo tên
   */
  async run(name: string) {
    const crawler = this.crawlers.find(
      (x) => x.name.toLowerCase() === name.toLowerCase(),
    );

    if (!crawler) {
      throw new Error(`Crawler ${name} not found.`);
    }

    if (!crawler.isEnabled()) {
      throw new Error(`Crawler ${name} disabled.`);
    }

    appLogger.info(`[${crawler.name}] Running...`);

    return crawler.crawl();
  }

  /**
   * Đăng ký thêm crawler
   */
  register(crawler: ICrawler) {
    this.crawlers.push(crawler);
  }
}
