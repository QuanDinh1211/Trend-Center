export interface ICrawler<T> {
  crawl(): Promise<T>;
}
