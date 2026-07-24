import { IStage } from "./stage.interface";
import { StageContext } from "./stage.context";

import { CrawlerManager } from "@/crawlers";

export class CrawlerStage implements IStage {
  readonly name = "Crawler";

  constructor(private readonly crawler = new CrawlerManager()) {}

  async execute(context: StageContext): Promise<StageContext> {
    const google = await this.crawler.run("Google");

    context.rawGoogle = google.data;

    const tiktok = await this.crawler.run("TikTok");
    context.rawTikTok = tiktok.data;

    const shopee = await this.crawler.run("Shopee");
    context.rawShopee = shopee.data;

    return context;
  }
}
