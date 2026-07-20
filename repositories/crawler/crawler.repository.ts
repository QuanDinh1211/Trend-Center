import {
  Crawler,
  Prisma,
  PrismaClient,
} from "@/generated/prisma/client";
import { GenericRepository } from "../base/generic.repository";


export class CrawlerRepository extends GenericRepository<
  Crawler,
  Prisma.CrawlerCreateInput,
  Prisma.CrawlerUpdateInput
> {
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  async findAll() {
    return this.prisma.crawler.findMany({
      include: {
        platform: true,
      },
    });
  }

  async findById(id: string) {
    return this.prisma.crawler.findUnique({
      where: { id },
    });
  }

  async create(data: Prisma.CrawlerCreateInput) {
    return this.prisma.crawler.create({ data });
  }

  async update(id: string, data: Prisma.CrawlerUpdateInput) {
    return this.prisma.crawler.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return this.prisma.crawler.delete({
      where: { id },
    });
  }
}