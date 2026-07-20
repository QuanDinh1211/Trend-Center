import {
  Product,
  Prisma,
  PrismaClient,
} from "@/generated/prisma/client";
import { GenericRepository } from "../base/generic.repository";


export class ProductRepository extends GenericRepository<
  Product,
  Prisma.ProductCreateInput,
  Prisma.ProductUpdateInput
> {
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  async findAll(): Promise<Product[]> {
    return this.prisma.product.findMany({
      include: {
        category: true,
      },
      orderBy: {
        name: "asc",
      },
    });
  }

  async findById(id: string): Promise<Product | null> {
    return this.prisma.product.findUnique({
      where: { id },
      include: {
        category: true,
      },
    });
  }

  async findBySlug(slug: string): Promise<Product | null> {
    return this.prisma.product.findUnique({
      where: { slug },
    });
  }

  async create(data: Prisma.ProductCreateInput): Promise<Product> {
    return this.prisma.product.create({ data });
  }

  async update(
    id: string,
    data: Prisma.ProductUpdateInput
  ): Promise<Product> {
    return this.prisma.product.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<Product> {
    return this.prisma.product.delete({
      where: { id },
    });
  }
}