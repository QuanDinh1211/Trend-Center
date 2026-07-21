import { Crawler, Prisma } from "@/generated/prisma/client";

import { BaseService, IService } from "../base";
import { CrawlerRepository } from "@/repositories/crawler";

export class CrawlerService
  extends BaseService
  implements
    IService<Crawler, Prisma.CrawlerCreateInput, Prisma.CrawlerUpdateInput>
{
  constructor(private readonly repository: CrawlerRepository) {
    super();
  }

  async getAll(): Promise<Crawler[]> {
    return this.repository.findAll();
  }

  async getById(id: string): Promise<Crawler | null> {
    return this.repository.findById(id);
  }

  async create(data: Prisma.CrawlerCreateInput): Promise<Crawler> {
    return this.repository.create(data);
  }

  async update(id: string, data: Prisma.CrawlerUpdateInput): Promise<Crawler> {
    return this.repository.update(id, data);
  }

  async delete(id: string): Promise<Crawler> {
    return this.repository.delete(id);
  }

  async activate(id: string): Promise<Crawler> {
    return this.repository.update(id, {
      enabled: true,
    });
  }

  async deactivate(id: string): Promise<Crawler> {
    return this.repository.update(id, {
      enabled: false,
    });
  }

  async runCrawler(id: string): Promise<void> {
    const crawler = await this.repository.findById(id);

    if (!crawler) {
      throw new Error("Crawler not found.");
    }

    if (!crawler.enabled) {
      throw new Error("Crawler is disabled.");
    }

    switch (crawler.name) {
      case "TikTok":
        await this.crawlTikTok();
        break;

      case "Shopee":
        await this.crawlShopee();
        break;

      case "Google Trend":
        await this.crawlGoogleTrend();
        break;

      case "YouTube":
        await this.crawlYoutube();
        break;

      default:
        throw new Error("Unsupported crawler.");
    }
  }

  async crawlTikTok(): Promise<void> {
    // TODO
    // Crawl TikTok Shop
    // Crawl Video
    // Crawl Creator
    // Save Product
    // Save Trend
  }

  async crawlShopee(): Promise<void> {
    // TODO
    // Crawl Shopee Affiliate
    // Crawl Product
    // Crawl Price
    // Crawl Commission
  }

  async crawlGoogleTrend(): Promise<void> {
    // TODO
    // Crawl Google Trend
    // Save Keyword
    // Save Keyword History
  }

  async crawlYoutube(): Promise<void> {
    // TODO
    // Crawl Youtube
    // Crawl Shorts
    // Crawl Video
  }

  async retryCrawler(id: string): Promise<void> {
    await this.runCrawler(id);
  }

  async stopCrawler(id: string): Promise<void> {
    const crawler = await this.repository.findById(id);

    if (!crawler) {
      throw new Error("Crawler not found.");
    }

    await this.repository.update(id, {
      lastStatus: "FAILED",
    });
  }
}
