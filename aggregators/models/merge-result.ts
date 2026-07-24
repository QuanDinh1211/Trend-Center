export interface MergeResult<T> {
  matched: boolean;

  score: number;

  item: T;
}
