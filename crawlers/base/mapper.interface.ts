export interface IMapper<TInput, TOutput> {
  map(data: TInput): Promise<TOutput>;
}
