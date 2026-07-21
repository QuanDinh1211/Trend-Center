export interface IService<TModel, TCreateDto = unknown, TUpdateDto = unknown> {
  getAll(): Promise<TModel[]>;

  getById(id: string): Promise<TModel | null>;

  create(data: TCreateDto): Promise<TModel>;

  update(id: string, data: TUpdateDto): Promise<TModel>;

  delete(id: string): Promise<TModel>;
}
