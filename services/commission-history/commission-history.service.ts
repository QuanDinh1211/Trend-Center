import { Prisma, CommissionHistory } from "@/generated/prisma/client";

import { BaseService } from "../base/base.service";
import { IService } from "../base/service.interface";
import { CommissionHistoryRepository } from "@/repositories/commission-history";

export class CommissionHistoryService
  extends BaseService
  implements
    IService<
      CommissionHistory,
      Prisma.CommissionHistoryUncheckedCreateInput,
      Prisma.CommissionHistoryUncheckedUpdateInput
    >
{
  private readonly repository: CommissionHistoryRepository;

  constructor(repository?: CommissionHistoryRepository) {
    super();

    this.repository =
      repository ?? new CommissionHistoryRepository(this.prisma);
  }

  async getAll() {
    return this.repository.findAll();
  }

  async getById(id: string) {
    return this.repository.findById(id);
  }

  async create(data: Prisma.CommissionHistoryUncheckedCreateInput) {
    return this.repository.create(data);
  }

  async update(id: string, data: Prisma.CommissionHistoryUncheckedUpdateInput) {
    return this.repository.update(id, data);
  }

  async delete(id: string) {
    return this.repository.delete(id);
  }

  async save(data: Prisma.CommissionHistoryUncheckedCreateInput) {
    return this.repository.create(data);
  }

  async saveMany(data: Prisma.CommissionHistoryUncheckedCreateInput[]) {
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
}
