import { Product, Prisma, PrismaClient } from "@/generated/prisma/client";
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

  async search(keyword: string): Promise<Product[]> {
    return this.prisma.product.findMany({
      where: {
        OR: [
          {
            name: {
              contains: keyword,
            },
          },
          {
            slug: {
              contains: keyword,
            },
          },
          {
            brand: {
              contains: keyword,
            },
          },
          {
            model: {
              contains: keyword,
            },
          },
        ],
      },
      include: {
        category: true,
      },
      orderBy: {
        name: "asc",
      },
    });
  }

  async findByCategory(categoryId: string): Promise<Product[]> {
    return this.prisma.product.findMany({
      where: {
        categoryId,
      },
      include: {
        category: true,
      },
      orderBy: {
        name: "asc",
      },
    });
  }

  async findTrending(limit = 100): Promise<Product[]> {
    const trendScores = await this.prisma.trendScore.findMany({
      orderBy: {
        finalScore: "desc",
      },
      take: limit,
      include: {
        product: {
          include: {
            category: true,
          },
        },
      },
    });

    return trendScores.map((item) => item.product);
  }

  async findHighCommission(limit = 100): Promise<Product[]> {
    const commissions = await this.prisma.commissionHistory.findMany({
      orderBy: {
        commissionAmount: "desc",
      },
      take: limit,
      include: {
        productPlatform: {
          include: {
            product: {
              include: {
                category: true,
              },
            },
          },
        },
      },
    });

    return commissions.map((item) => item.productPlatform.product);
  }

  async findTopPotential(limit = 100): Promise<Product[]> {
    const scores = await this.prisma.trendScore.findMany({
      orderBy: {
        finalScore: "desc",
      },

      take: limit,

      include: {
        product: {
          include: {
            category: true,
          },
        },
      },
    });

    return scores.map((item) => item.product);
  }

  async findWatchList(): Promise<Product[]> {
    const watchList = await this.prisma.watchList.findMany({
      orderBy: {
        priority: "desc",
      },

      include: {
        product: {
          include: {
            category: true,
          },
        },
      },
    });

    return watchList.map((item) => item.product);
  }

  async create(data: Prisma.ProductCreateInput): Promise<Product> {
    return this.prisma.product.create({ data });
  }

  async update(id: string, data: Prisma.ProductUpdateInput): Promise<Product> {
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
