import { NormalizeManager } from "@/normalizers";
import { IStage } from "./stage.interface";
import { StageContext } from "./stage.context";

export class NormalizeStage implements IStage {
  readonly name = "Normalize";

  constructor(private readonly normalizer = new NormalizeManager()) {}

  async execute(context: StageContext): Promise<StageContext> {
    context.keywords = await this.normalizer.normalizeGoogle(
      context.rawGoogle ?? [],
    );

    const tiktok = await this.normalizer.normalizeTikTok(
      context.rawTikTok ?? [],
    );

    const shopee = await this.normalizer.normalizeShopee(
      context.rawShopee ?? [],
    );

    context.products = [...tiktok, ...shopee];

    return context;
  }
}
