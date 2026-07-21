export interface IParser<TRaw, TOutput> {
  parse(data: TRaw): Promise<TOutput>;
}
