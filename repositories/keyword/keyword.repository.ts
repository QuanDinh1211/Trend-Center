import {
  Keyword,
  Prisma,
  PrismaClient,
} from "@/generated/prisma/client";
import { GenericRepository } from "../base/generic.repository";


export class KeywordRepository extends GenericRepository<
  Keyword,
  Prisma.KeywordCreateInput,
  Prisma.KeywordUpdateInput
> {
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  async findAll() {
    return this.prisma.keyword.findMany({
      include: {
        category: true,
      },
    });
  }

  async findById(id: string) {
    return this.prisma.keyword.findUnique({
      where: { id },
    });
  }

  async findByKeyword(keyword: string) {
    return this.prisma.keyword.findUnique({
      where: {
        keyword,
      },
    });
  }

  async create(data: Prisma.KeywordCreateInput) {
    return this.prisma.keyword.create({ data });
  }

  async update(id: string, data: Prisma.KeywordUpdateInput) {
    return this.prisma.keyword.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return this.prisma.keyword.delete({
      where: { id },
    });
  }
}