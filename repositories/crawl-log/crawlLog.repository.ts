import {
  CrawlLog,
  Prisma,
  PrismaClient,
} from "@/generated/prisma/client";
import { GenericRepository } from "../base/generic.repository";


export class CrawlLogRepository extends GenericRepository<
  CrawlLog,
  Prisma.CrawlLogCreateInput,
  Prisma.CrawlLogUpdateInput
> {
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  async findAll() {
    return this.prisma.crawlLog.findMany({
      include: {
        crawler: true,
      },
      orderBy: {
        startedAt: "desc",
      },
    });
  }

  async findById(id: string) {
    return this.prisma.crawlLog.findUnique({
      where: { id },
    });
  }

  async create(data: Prisma.CrawlLogCreateInput) {
    return this.prisma.crawlLog.create({ data });
  }

  async update(id: string, data: Prisma.CrawlLogUpdateInput) {
    return this.prisma.crawlLog.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return this.prisma.crawlLog.delete({
      where: { id },
    });
  }
}