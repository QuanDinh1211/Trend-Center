import {
  WatchList,
  Prisma,
  PrismaClient,
} from "@/generated/prisma/client";
import { GenericRepository } from "../base/generic.repository";


export class WatchListRepository extends GenericRepository<
  WatchList,
  Prisma.WatchListCreateInput,
  Prisma.WatchListUpdateInput
> {
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  async findAll() {
    return this.prisma.watchList.findMany({
      include: {
        product: true,
      },
      orderBy: {
        priority: "desc",
      },
    });
  }

  async findById(id: string) {
    return this.prisma.watchList.findUnique({
      where: { id },
      include: {
        product: true,
      },
    });
  }

  async findByProduct(productId: string) {
    return this.prisma.watchList.findUnique({
      where: {
        productId,
      },
    });
  }

  async create(data: Prisma.WatchListCreateInput) {
    return this.prisma.watchList.create({ data });
  }

  async update(id: string, data: Prisma.WatchListUpdateInput) {
    return this.prisma.watchList.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return this.prisma.watchList.delete({
      where: { id },
    });
  }
}