import { DailyReport, Prisma } from "@/generated/prisma/client";

import { BaseService, IService } from "../base";
import { DailyReportRepository } from "@/repositories/daily-report";
import { ProductRepository } from "@/repositories/product";
import { KeywordRepository } from "@/repositories/keyword";
import { TrendScoreRepository } from "@/repositories/trend-score";

export class ReportService
  extends BaseService
  implements
    IService<
      DailyReport,
      Prisma.DailyReportCreateInput,
      Prisma.DailyReportUpdateInput
    >
{
  constructor(
    private readonly repository: DailyReportRepository,
    private readonly productRepository: ProductRepository,
    private readonly keywordRepository: KeywordRepository,
    private readonly trendRepository: TrendScoreRepository,
  ) {
    super();
  }

  async getAll(): Promise<DailyReport[]> {
    return this.repository.findAll();
  }

  async getById(id: string): Promise<DailyReport | null> {
    return this.repository.findById(id);
  }

  async create(data: Prisma.DailyReportCreateInput): Promise<DailyReport> {
    return this.repository.create(data);
  }

  async update(
    id: string,
    data: Prisma.DailyReportUpdateInput,
  ): Promise<DailyReport> {
    return this.repository.update(id, data);
  }

  async delete(id: string): Promise<DailyReport> {
    return this.repository.delete(id);
  }

  async generateDailyReport(): Promise<DailyReport> {
    const topProducts = await this.productRepository.findTrending(100);

    const topKeywords = await this.keywordRepository.findTrending(100);

    const reportDate = new Date();

    return this.repository.create({
      reportDate,

      topProducts: JSON.parse(JSON.stringify(topProducts)),

      topKeywords: JSON.parse(JSON.stringify(topKeywords)),

      summary: "Daily report generated successfully.",

      recommendation: "Review top potential products.",
    });
  }

  async generateWeeklyReport(): Promise<void> {
    // TODO
  }

  async generateMonthlyReport(): Promise<void> {
    // TODO
  }

  async getLatestReport(): Promise<DailyReport | null> {
    return this.repository.findLatest();
  }

  async regenerate(reportId: string): Promise<void> {
    // TODO
  }
}
