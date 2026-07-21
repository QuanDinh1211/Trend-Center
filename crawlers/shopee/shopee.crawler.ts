import { ICrawler } from "../base/crawler.interface";
import { CrawlResult } from "../base/crawler.result";

import { ShopeeClient } from "./shopee.client";
import { ShopeeParser } from "./shopee.parser";
import { ShopeeMapper } from "./shopee.mapper";

import { DataSourceProvider } from "./providers";

export class ShopeeCrawler implements ICrawler<any> {
  constructor(
    private readonly client = new ShopeeClient(new DataSourceProvider()),

    private readonly parser = new ShopeeParser(),

    private readonly mapper = new ShopeeMapper(),
  ) {}

  readonly name = "Shopee";

  isEnabled(): boolean {
    return true;
  }

  async crawl(): Promise<CrawlResult<any>> {
    const startedAt = new Date();

    try {
      const raw = await this.client.fetchTrending();

      const parsed = await this.parser.parse(raw);

      const mapped = await this.mapper.map(parsed);

      return {
        success: true,
        platform: "Shopee",
        total: mapped.products.length,
        data: mapped,
        startedAt,
        finishedAt: new Date(),
      };
    } catch (error) {
      return {
        success: false,
        platform: "Shopee",
        total: 0,
        data: null,
        startedAt,
        finishedAt: new Date(),
        error: error instanceof Error ? error.message : "Unknown Error",
      };
    }
  }
}
