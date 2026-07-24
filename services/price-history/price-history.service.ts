import { Prisma, PriceHistory } from "@/generated/prisma/client";

import { BaseService } from "../base/base.service";
import { IService } from "../base/service.interface";
import { PriceHistoryRepository } from "@/repositories/price-history";

export class PriceHistoryService
  extends BaseService
  implements
    IService<
      PriceHistory,
      Prisma.PriceHistoryUncheckedCreateInput,
      Prisma.PriceHistoryUncheckedUpdateInput
    >
{
  private readonly repository: PriceHistoryRepository;

  constructor(repository?: PriceHistoryRepository) {
    super();

    this.repository = repository ?? new PriceHistoryRepository(this.prisma);
  }

  async getAll() {
    return this.repository.findAll();
  }

  async getById(id: string) {
    return this.repository.findById(id);
  }

  async create(data: Prisma.PriceHistoryUncheckedCreateInput) {
    return this.repository.create(data);
  }

  async update(id: string, data: Prisma.PriceHistoryUncheckedUpdateInput) {
    return this.repository.update(id, data);
  }

  async delete(id: string) {
    return this.repository.delete(id);
  }

  async save(data: Prisma.PriceHistoryUncheckedCreateInput) {
    return this.repository.create(data);
  }

  async saveMany(data: Prisma.PriceHistoryUncheckedCreateInput[]) {
    for (const item of data) {
      await this.save(item);
    }
  }

  async findLatest(productPlatformId: string) {
    return this.repository.findLatest(productPlatformId);
  }

  async findHistory(productPlatformId: string) {
    return this.repository.findHistory(productPlatformId);
  }

  async findBetween(productPlatformId: string, from: Date, to: Date) {
    return this.repository.findBetween(productPlatformId, from, to);
  }
}
