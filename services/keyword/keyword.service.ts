import { Keyword, Prisma } from "@/generated/prisma/client";

import { BaseService, IService } from "../base";
import { KeywordRepository } from "@/repositories/keyword";

export class KeywordService
  extends BaseService
  implements
    IService<Keyword, Prisma.KeywordCreateInput, Prisma.KeywordUpdateInput>
{
  private readonly repository: KeywordRepository;

  constructor(repository?: KeywordRepository) {
    super();

    this.repository = repository ?? new KeywordRepository(this.prisma);
  }

  async getAll(): Promise<Keyword[]> {
    return this.repository.findAll();
  }

  async getById(id: string): Promise<Keyword | null> {
    return this.repository.findById(id);
  }

  async getByKeyword(keyword: string): Promise<Keyword | null> {
    return this.repository.findByKeyword(keyword);
  }

  async create(data: Prisma.KeywordCreateInput): Promise<Keyword> {
    const exists = await this.repository.findByKeyword(data.keyword);

    if (exists) {
      throw new Error("Keyword already exists.");
    }

    return this.repository.create(data);
  }

  async update(id: string, data: Prisma.KeywordUpdateInput): Promise<Keyword> {
    const keyword = await this.repository.findById(id);

    if (!keyword) {
      throw new Error("Keyword not found.");
    }

    return this.repository.update(id, data);
  }

  async delete(id: string): Promise<Keyword> {
    const keyword = await this.repository.findById(id);

    if (!keyword) {
      throw new Error("Keyword not found.");
    }

    return this.repository.delete(id);
  }

  async activate(id: string): Promise<Keyword> {
    return this.repository.update(id, {
      status: "ACTIVE",
    });
  }

  async deactivate(id: string): Promise<Keyword> {
    return this.repository.update(id, {
      status: "INACTIVE",
    });
  }

  async search(keyword: string): Promise<Keyword[]> {
    return this.repository.search(keyword);
  }

  async getByCategory(categoryId: string): Promise<Keyword[]> {
    return this.repository.findByCategory(categoryId);
  }

  async getTrendingKeywords(limit = 100): Promise<Keyword[]> {
    return this.repository.findTrending(limit);
  }

  async syncGoogleTrend(): Promise<void> {
    // TODO
    // Crawl Google Trends
    // Update KeywordHistory
    // Update Trend Score
  }

  async analyzeKeyword(id: string): Promise<void> {
    const keyword = await this.repository.findById(id);

    if (!keyword) {
      throw new Error("Keyword not found.");
    }

    // TODO
    // AI Analysis
    // Growth Analysis
    // Competition Analysis
  }
}
