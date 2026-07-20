import {
  Video,
  Prisma,
  PrismaClient,
} from "@/generated/prisma/client";
import { GenericRepository } from "../base/generic.repository";


export class VideoRepository extends GenericRepository<
  Video,
  Prisma.VideoCreateInput,
  Prisma.VideoUpdateInput
> {
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  async findAll() {
    return this.prisma.video.findMany({
      include: {
        product: true,
        platform: true,
        creator: true,
      },
      orderBy: {
        views: "desc",
      },
    });
  }

  async findById(id: string) {
    return this.prisma.video.findUnique({
      where: { id },
      include: {
        product: true,
        platform: true,
        creator: true,
      },
    });
  }

  async findByProduct(productId: string) {
    return this.prisma.video.findMany({
      where: { productId },
      orderBy: {
        publishedAt: "desc",
      },
    });
  }

  async create(data: Prisma.VideoCreateInput) {
    return this.prisma.video.create({ data });
  }

  async update(id: string, data: Prisma.VideoUpdateInput) {
    return this.prisma.video.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return this.prisma.video.delete({
      where: { id },
    });
  }
}