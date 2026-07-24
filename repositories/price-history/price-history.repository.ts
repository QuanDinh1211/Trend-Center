import { PriceHistory, Prisma, PrismaClient } from "@/generated/prisma/client";

import { GenericRepository } from "../base/generic.repository";

export class PriceHistoryRepository extends GenericRepository<
  PriceHistory,
  Prisma.PriceHistoryUncheckedCreateInput,
  Prisma.PriceHistoryUncheckedUpdateInput
> {
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  async findAll(): Promise<PriceHistory[]> {
    return this.prisma.priceHistory.findMany({
      include: {
        productPlatform: {
          include: {
            product: true,
            platform: true,
          },
        },
      },
      orderBy: {
        capturedAt: "desc",
      },
    });
  }

  async findById(id: string): Promise<PriceHistory | null> {
    return this.prisma.priceHistory.findUnique({
      where: { id },
      include: {
        productPlatform: {
          include: {
            product: true,
            platform: true,
          },
        },
      },
    });
  }

  async create(
    data: Prisma.PriceHistoryUncheckedCreateInput,
  ): Promise<PriceHistory> {
    return this.prisma.priceHistory.create({
      data,
    });
  }

  async update(
    id: string,
    data: Prisma.PriceHistoryUncheckedUpdateInput,
  ): Promise<PriceHistory> {
    return this.prisma.priceHistory.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<PriceHistory> {
    return this.prisma.priceHistory.delete({
      where: { id },
    });
  }

  async findLatest(productPlatformId: string): Promise<PriceHistory | null> {
    return this.prisma.priceHistory.findFirst({
      where: {
        productPlatformId,
      },
      orderBy: {
        capturedAt: "desc",
      },
    });
  }

  async findHistory(productPlatformId: string): Promise<PriceHistory[]> {
    return this.prisma.priceHistory.findMany({
      where: {
        productPlatformId,
      },
      orderBy: {
        capturedAt: "desc",
      },
    });
  }

  async findBetween(
    productPlatformId: string,
    from: Date,
    to: Date,
  ): Promise<PriceHistory[]> {
    return this.prisma.priceHistory.findMany({
      where: {
        productPlatformId,
        capturedAt: {
          gte: from,
          lte: to,
        },
      },
      orderBy: {
        capturedAt: "asc",
      },
    });
  }

  async findNewest(limit = 100): Promise<PriceHistory[]> {
    return this.prisma.priceHistory.findMany({
      take: limit,
      orderBy: {
        capturedAt: "desc",
      },
    });
  }

  async findLowestPrice(
    productPlatformId: string,
  ): Promise<PriceHistory | null> {
    return this.prisma.priceHistory.findFirst({
      where: {
        productPlatformId,
      },
      orderBy: {
        price: "asc",
      },
    });
  }

  async findHighestPrice(
    productPlatformId: string,
  ): Promise<PriceHistory | null> {
    return this.prisma.priceHistory.findFirst({
      where: {
        productPlatformId,
      },
      orderBy: {
        price: "desc",
      },
    });
  }

  async findPrevious(
    productPlatformId: string,
    before: Date,
  ): Promise<PriceHistory | null> {
    return this.prisma.priceHistory.findFirst({
      where: {
        productPlatformId,
        capturedAt: {
          lt: before,
        },
      },
      orderBy: {
        capturedAt: "desc",
      },
    });
  }

  async findLastDays(
    productPlatformId: string,
    days: number,
  ): Promise<PriceHistory[]> {
    const from = new Date();

    from.setDate(from.getDate() - days);

    return this.prisma.priceHistory.findMany({
      where: {
        productPlatformId,
        capturedAt: {
          gte: from,
        },
      },
      orderBy: {
        capturedAt: "asc",
      },
    });
  }
}
