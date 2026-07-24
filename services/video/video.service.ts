import { Prisma, Video } from "@/generated/prisma/client";

import { BaseService } from "../base/base.service";
import { IService } from "../base/service.interface";
import { VideoRepository } from "@/repositories/video";

export class VideoService
  extends BaseService
  implements IService<Video, Prisma.VideoCreateInput, Prisma.VideoUpdateInput>
{
  private readonly repository: VideoRepository;

  constructor(repository?: VideoRepository) {
    super();

    this.repository = repository ?? new VideoRepository(this.prisma);
  }

  async getAll(): Promise<Video[]> {
    return this.repository.findAll();
  }

  async getById(id: string): Promise<Video | null> {
    return this.repository.findById(id);
  }

  async create(data: Prisma.VideoCreateInput): Promise<Video> {
    return this.repository.create(data);
  }

  async update(id: string, data: Prisma.VideoUpdateInput): Promise<Video> {
    return this.repository.update(id, data);
  }

  async delete(id: string): Promise<Video> {
    return this.repository.delete(id);
  }

  async upsert(data: Prisma.VideoCreateInput): Promise<Video> {
    return this.repository.upsert(data);
  }

  async saveMany(videos: Prisma.VideoCreateInput[]): Promise<void> {
    for (const video of videos) {
      await this.upsert(video);
    }
  }

  async findByProduct(productId: string) {
    return this.repository.findByProduct(productId);
  }

  async findTrending(limit = 100) {
    return this.repository.findTrending(limit);
  }

  async findTopViews(limit = 100) {
    return this.repository.findTopViews(limit);
  }
}
