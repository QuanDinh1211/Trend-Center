import { ICrawler } from "../base/crawler.interface";
import { CrawlResult } from "../base/crawler.result";

import { TikTokClient } from "./tiktok.client";
import { TikTokParser } from "./tiktok.parser";
import { TikTokMapper } from "./tiktok.mapper";

import { ApifyProvider } from "./providers";

export class TikTokCrawler implements ICrawler<any> {
  readonly name = "TikTok";
  readonly isEnabled = true;
  constructor(
    private readonly client = new TikTokClient(new ApifyProvider()),

    private readonly parser = new TikTokParser(),

    private readonly mapper = new TikTokMapper(),
  ) {}

  async crawl(): Promise<CrawlResult<any>> {
    const startedAt = new Date();

    try {
      const raw = await this.client.fetchTrending();

      const parsed = await this.parser.parse(raw);

      const mapped = await this.mapper.map(parsed);

      return {
        success: true,

        platform: "TikTok",

        total: mapped.products.length,

        data: mapped,

        startedAt,

        finishedAt: new Date(),
      };
    } catch (error) {
      return {
        success: false,

        platform: "TikTok",

        total: 0,

        data: null,

        startedAt,

        finishedAt: new Date(),

        error: error instanceof Error ? error.message : "Unknown Error",
      };
    }
  }
}
