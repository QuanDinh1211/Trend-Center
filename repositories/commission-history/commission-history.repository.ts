import {
  CommissionHistory,
  Prisma,
  PrismaClient,
} from "@/generated/prisma/client";

import { GenericRepository } from "../base/generic.repository";

export class CommissionHistoryRepository extends GenericRepository<
  CommissionHistory,
  Prisma.CommissionHistoryUncheckedCreateInput,
  Prisma.CommissionHistoryUncheckedUpdateInput
> {
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  async findAll(): Promise<CommissionHistory[]> {
    return this.prisma.commissionHistory.findMany({
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

  async findById(id: string): Promise<CommissionHistory | null> {
    return this.prisma.commissionHistory.findUnique({
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
    data: Prisma.CommissionHistoryUncheckedCreateInput,
  ): Promise<CommissionHistory> {
    return this.prisma.commissionHistory.create({
      data,
    });
  }

  async update(
    id: string,
    data: Prisma.CommissionHistoryUncheckedUpdateInput,
  ): Promise<CommissionHistory> {
    return this.prisma.commissionHistory.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<CommissionHistory> {
    return this.prisma.commissionHistory.delete({
      where: { id },
    });
  }

  async findLatest(
    productPlatformId: string,
  ): Promise<CommissionHistory | null> {
    return this.prisma.commissionHistory.findFirst({
      where: {
        productPlatformId,
      },
      orderBy: {
        capturedAt: "desc",
      },
    });
  }

  async findHistory(productPlatformId: string): Promise<CommissionHistory[]> {
    return this.prisma.commissionHistory.findMany({
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
  ): Promise<CommissionHistory[]> {
    return this.prisma.commissionHistory.findMany({
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

  async findNewest(limit = 100): Promise<CommissionHistory[]> {
    return this.prisma.commissionHistory.findMany({
      take: limit,
      orderBy: {
        capturedAt: "desc",
      },
    });
  }

  async findHighestRate(
    productPlatformId: string,
  ): Promise<CommissionHistory | null> {
    return this.prisma.commissionHistory.findFirst({
      where: {
        productPlatformId,
      },
      orderBy: {
        commissionRate: "desc",
      },
    });
  }

  async findHighestAmount(
    productPlatformId: string,
  ): Promise<CommissionHistory | null> {
    return this.prisma.commissionHistory.findFirst({
      where: {
        productPlatformId,
      },
      orderBy: {
        commissionAmount: "desc",
      },
    });
  }

  async findByCampaign(campaign: string): Promise<CommissionHistory[]> {
    return this.prisma.commissionHistory.findMany({
      where: {
        campaign,
      },
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
}
