import {
  ProductPlatform,
  Prisma,
  PrismaClient,
} from "@/generated/prisma/client";
import { GenericRepository } from "../base/generic.repository";


export class ProductPlatformRepository extends GenericRepository<
  ProductPlatform,
  Prisma.ProductPlatformCreateInput,
  Prisma.ProductPlatformUpdateInput
> {
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  async findAll() {
    return this.prisma.productPlatform.findMany({
      include: {
        product: true,
        platform: true,
      },
    });
  }

  async findById(id: string) {
    return this.prisma.productPlatform.findUnique({
      where: { id },
      include: {
        product: true,
        platform: true,
      },
    });
  }

  async findByProduct(productId: string) {
    return this.prisma.productPlatform.findMany({
      where: { productId },
      include: {
        platform: true,
      },
    });
  }

  async create(data: Prisma.ProductPlatformCreateInput) {
    return this.prisma.productPlatform.create({ data });
  }

  async update(id: string, data: Prisma.ProductPlatformUpdateInput) {
    return this.prisma.productPlatform.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return this.prisma.productPlatform.delete({
      where: { id },
    });
  }
}