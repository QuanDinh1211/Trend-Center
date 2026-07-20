import {
    Category,
    Prisma,
    PrismaClient
} from "@/generated/prisma/client";

import { GenericRepository } from "../base/generic.repository";

export class CategoryRepository
extends GenericRepository<
    Category,
    Prisma.CategoryCreateInput,
    Prisma.CategoryUpdateInput
>{

    constructor(prisma:PrismaClient){
        super(prisma);
    }

    async findAll(){
        return this.prisma.category.findMany();
    }

    async findById(id:string){
        return this.prisma.category.findUnique({
            where:{id}
        });
    }

    async findBySlug(slug:string){
        return this.prisma.category.findUnique({
            where:{slug}
        });
    }

    async create(data:Prisma.CategoryCreateInput){
        return this.prisma.category.create({
            data
        });
    }

    async update(
        id:string,
        data:Prisma.CategoryUpdateInput
    ){
        return this.prisma.category.update({
            where:{id},
            data
        });
    }

    async delete(id:string){
        return this.prisma.category.delete({
            where:{id}
        });
    }

}