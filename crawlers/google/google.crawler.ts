import { ICrawler } from "../base/crawler.interface";
import { CrawlResult } from "../base/crawler.result";

import { GoogleClient } from "./google.client";
import { GoogleParser } from "./google.parser";
import { GoogleMapper } from "./google.mapper";
import { GoogleTrendsProvider } from "./providers";

export class GoogleCrawler implements ICrawler<any> {
  constructor(
    private readonly client = new GoogleClient(new GoogleTrendsProvider()),

    private readonly parser = new GoogleParser(),

    private readonly mapper = new GoogleMapper(),
  ) {}

  readonly name = "Google";

  private readonly enabled = true;

  isEnabled(): boolean {
    return this.enabled;
  }

  async crawl(): Promise<CrawlResult<any>> {
    const startedAt = new Date();

    try {
      const raw = await this.client.fetchTrend();

      const parsed = await this.parser.parse(raw);

      const mapped = await this.mapper.map(parsed);

      return {
        success: true,

        platform: "Google Trends",

        total: mapped.length,

        data: mapped,

        startedAt,

        finishedAt: new Date(),
      };
    } catch (error) {
      return {
        success: false,

        platform: "Google Trends",

        total: 0,

        data: [],

        startedAt,

        finishedAt: new Date(),

        error: error instanceof Error ? error.message : "Unknown Error",
      };
    }
  }
}
