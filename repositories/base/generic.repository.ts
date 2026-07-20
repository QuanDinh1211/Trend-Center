import { BaseRepository } from "./base.repository";
import { IRepository } from "./repository.interface";

export abstract class GenericRepository<
    TModel,
    TCreateInput,
    TUpdateInput
>
extends BaseRepository
implements IRepository<TModel,TCreateInput,TUpdateInput>{

    abstract findAll():Promise<TModel[]>;

    abstract findById(id:string):Promise<TModel|null>;

    abstract create(data:TCreateInput):Promise<TModel>;

    abstract update(
        id:string,
        data:TUpdateInput
    ):Promise<TModel>;

    abstract delete(id:string):Promise<TModel>;

}