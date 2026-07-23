import { GoogleNormalizer } from "./google.normalizer";
import { ShopeeNormalizer } from "./shopee.normalizer";
import { TikTokNormalizer } from "./tiktok.normalizer";

export class NormalizeManager {
  private readonly google = new GoogleNormalizer();

  private readonly shopee = new ShopeeNormalizer();

  private readonly tiktok = new TikTokNormalizer();

  async normalizeGoogle(data: any) {
    return this.google.normalize(data);
  }

  async normalizeShopee(data: any) {
    return this.shopee.normalize(data);
  }

  async normalizeTikTok(data: any) {
    return this.tiktok.normalize(data);
  }
}
