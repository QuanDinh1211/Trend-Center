export interface CrawlResult<T> {
  success: boolean;

  platform: string;

  total: number;

  data: T[] | T;

  startedAt: Date;

  finishedAt: Date;

  error?: string;
}
