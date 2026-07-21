export interface ICrawler<T> {
  readonly name: string;
  readonly isEnabled: boolean;
  crawl(): Promise<T>;
}
