export interface INormalizer<TInput, TOutput> {
  normalize(data: TInput): Promise<TOutput[]>;
}
