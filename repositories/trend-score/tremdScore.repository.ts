import { TrendScore, Prisma, PrismaClient } from "@/generated/prisma/client";
import { GenericRepository } from "../base/generic.repository";

export class TrendScoreRepository extends GenericRepository<
  TrendScore,
  Prisma.TrendScoreCreateInput,
  Prisma.TrendScoreUpdateInput
> {
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  async findAll() {
    return this.prisma.trendScore.findMany({
      include: {
        product: true,
      },
      orderBy: {
        finalScore: "desc",
      },
    });
  }

  async findById(id: string) {
    return this.prisma.trendScore.findUnique({
      where: { id },
    });
  }

  async findByProduct(productId: string) {
    return this.prisma.trendScore.findMany({
      where: { productId },
      orderBy: {
        calculatedAt: "desc",
      },
    });
  }

  async create(data: Prisma.TrendScoreCreateInput) {
    return this.prisma.trendScore.create({ data });
  }

  async update(id: string, data: Prisma.TrendScoreUpdateInput) {
    return this.prisma.trendScore.update({
      where: { id },
      data,
    });
  }

  async upsert(
    data: Prisma.TrendScoreUncheckedCreateInput,
  ): Promise<TrendScore> {
    return this.prisma.trendScore.upsert({
      where: {
        productId: data.productId,
      },

      update: {
        googleScore: data.googleScore,
        tiktokScore: data.tiktokScore,
        shopeeScore: data.shopeeScore,
        videoScore: data.videoScore,
        priceScore: data.priceScore,
        commissionScore: data.commissionScore,
        competitionScore: data.competitionScore,
        growthScore: data.growthScore,
        finalScore: data.finalScore,
        recommendation: data.recommendation,
        calculatedAt: data.calculatedAt,
      },

      create: data,
    });
  }

  async upsertByProductId(
    productId: string,
    data: Prisma.TrendScoreCreateInput | Prisma.TrendScoreUpdateInput,
  ) {
    const existed = await this.prisma.trendScore.findFirst({
      where: {
        productId,
      },
    });

    if (existed) {
      return this.prisma.trendScore.update({
        where: {
          id: existed.id,
        },
        data,
      });
    }

    const { product: _product, ...rest } = data as any;

    return this.prisma.trendScore.create({
      data: {
        product: {
          connect: {
            id: productId,
          },
        },
        finalScore: 0,
        ...rest,
      },
    });
  }

  async delete(id: string) {
    return this.prisma.trendScore.delete({
      where: { id },
    });
  }
}
