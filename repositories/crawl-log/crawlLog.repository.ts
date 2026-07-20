import { PrismaClient } from "@/generated/prisma/client";
import { BaseRepository } from "../base/base.repository";

export class CrawlLogRepository extends BaseRepository {
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  async findAll() {}

  async findBySlug(slug: string) {}
}
