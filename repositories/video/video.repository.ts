import { Video, Prisma, PrismaClient } from "@/generated/prisma/client";
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

  async upsert(data: Prisma.VideoCreateInput): Promise<Video> {
    const videoId = data.videoId;

    const existed = await this.prisma.video.findFirst({
      where: {
        videoId,
      },
    });

    if (existed) {
      return this.prisma.video.update({
        where: {
          id: existed.id,
        },
        data: {
          title: data.title,
          url: data.url,
          thumbnail: data.thumbnail,
          duration: data.duration,
          views: data.views,
          likes: data.likes,
          comments: data.comments,
          shares: data.shares,
          publishedAt: data.publishedAt,
          capturedAt: data.capturedAt,
          product: data.product,
          platform: data.platform,
          creator: data.creator,
        },
      });
    }

    return this.prisma.video.create({
      data,
    });
  }

  async findTrending(limit = 100): Promise<Video[]> {
    return this.prisma.video.findMany({
      take: limit,

      include: {
        product: true,
        platform: true,
        creator: true,
      },

      orderBy: [
        {
          views: "desc",
        },
        {
          likes: "desc",
        },
        {
          publishedAt: "desc",
        },
      ],
    });
  }

  async findTopViews(limit = 100): Promise<Video[]> {
    return this.prisma.video.findMany({
      take: limit,

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

  async findTopLikes(limit = 100): Promise<Video[]> {
    return this.prisma.video.findMany({
      take: limit,
      orderBy: {
        likes: "desc",
      },
    });
  }

  async findTopEngagement(limit = 100): Promise<Video[]> {
    return this.prisma.video.findMany({
      take: limit,
      orderBy: [
        {
          likes: "desc",
        },
        {
          comments: "desc",
        },
        {
          shares: "desc",
        },
      ],
    });
  }

  async findLatest(limit = 100): Promise<Video[]> {
    return this.prisma.video.findMany({
      take: limit,
      orderBy: {
        publishedAt: "desc",
      },
    });
  }
}
