export interface IRepository<
  TModel,
  TCreateInput,
  TUpdateInput
> {
  findAll(): Promise<TModel[]>;

  findById(id: string): Promise<TModel | null>;

  create(data: TCreateInput): Promise<TModel>;

  update(
    id: string,
    data: TUpdateInput
  ): Promise<TModel>;

  delete(id: string): Promise<TModel>;
}