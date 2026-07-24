import { TrendScore, Prisma } from "@/generated/prisma/client";
import { BaseService, IService } from "../base";
import { TrendScoreRepository } from "@/repositories/trend-score";

export class TrendService
  extends BaseService
  implements
    IService<
      TrendScore,
      Prisma.TrendScoreCreateInput,
      Prisma.TrendScoreUpdateInput
    >
{
  private readonly repository: TrendScoreRepository;

  constructor(repository?: TrendScoreRepository) {
    super();

    this.repository = repository ?? new TrendScoreRepository(this.prisma);
  }

  async getAll(): Promise<TrendScore[]> {
    return this.repository.findAll();
  }

  async getById(id: string): Promise<TrendScore | null> {
    return this.repository.findById(id);
  }

  async create(data: Prisma.TrendScoreCreateInput): Promise<TrendScore> {
    return this.repository.create(data);
  }

  async saveTrendScore(
    data: Prisma.TrendScoreUncheckedCreateInput,
  ): Promise<TrendScore> {
    return this.repository.upsert(data);
  }

  async update(
    id: string,
    data: Prisma.TrendScoreUpdateInput,
  ): Promise<TrendScore> {
    return this.repository.update(id, data);
  }

  async delete(id: string): Promise<TrendScore> {
    return this.repository.delete(id);
  }

  async calculateGoogleScore(productId: string): Promise<number> {
    // TODO
    return 0;
  }

  async calculateTikTokScore(productId: string): Promise<number> {
    // TODO
    return 0;
  }

  async calculateShopeeScore(productId: string): Promise<number> {
    // TODO
    return 0;
  }

  async calculatePriceScore(productId: string): Promise<number> {
    // TODO
    return 0;
  }

  async calculateCommissionScore(productId: string): Promise<number> {
    // TODO
    return 0;
  }

  async calculateCompetitionScore(productId: string): Promise<number> {
    // TODO
    return 0;
  }

  async calculateGrowthScore(productId: string): Promise<number> {
    // TODO
    return 0;
  }

  async calculateFinalScore(productId: string): Promise<number> {
    const google = await this.calculateGoogleScore(productId);
    const tiktok = await this.calculateTikTokScore(productId);
    const shopee = await this.calculateShopeeScore(productId);
    const price = await this.calculatePriceScore(productId);
    const commission = await this.calculateCommissionScore(productId);
    const competition = await this.calculateCompetitionScore(productId);
    const growth = await this.calculateGrowthScore(productId);

    const score =
      google * 0.2 +
      tiktok * 0.2 +
      shopee * 0.15 +
      price * 0.1 +
      commission * 0.15 +
      competition * 0.1 +
      growth * 0.1;

    return Math.round(score * 100) / 100;
  }

  async recommend(productId: string): Promise<string> {
    const score = await this.calculateFinalScore(productId);

    if (score >= 90) return "🔥 Rất nên làm Affiliate";

    if (score >= 80) return "⭐ Tiềm năng cao";

    if (score >= 70) return "📈 Đáng theo dõi";

    if (score >= 60) return "⚠ Có thể thử";

    return "❌ Không khuyến nghị";
  }

  async analyze(productId: string): Promise<void> {
    const score = await this.calculateFinalScore(productId);

    const recommendation = await this.recommend(productId);

    await this.repository.upsertByProductId(productId, {
      googleScore: await this.calculateGoogleScore(productId),
      tiktokScore: await this.calculateTikTokScore(productId),
      shopeeScore: await this.calculateShopeeScore(productId),
      priceScore: await this.calculatePriceScore(productId),
      commissionScore: await this.calculateCommissionScore(productId),
      competitionScore: await this.calculateCompetitionScore(productId),
      growthScore: await this.calculateGrowthScore(productId),
      finalScore: score,
      recommendation,
    });
  }
}
