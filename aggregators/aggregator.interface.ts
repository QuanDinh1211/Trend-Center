export interface IAggregator<T> {
  aggregate(data: T[]): Promise<T[]>;
}
