import { CrawlResult } from "./base/crawler.result";

export interface ICrawler<T = unknown> {
  /**
   * Tên crawler
   * VD:
   * Google
   * TikTok
   * Shopee
   */
  readonly name: string;

  /**
   * Có được phép chạy hay không
   */
  isEnabled(): boolean;

  /**
   * Thực hiện crawl
   */
  crawl(): Promise<CrawlResult<T>>;
}