export interface IMatcher<T> {
  match(a: T, b: T): number;
}
