import { IShopeeProvider } from "./providers/shopee.provider.interface";

export class ShopeeClient {
  constructor(
    private readonly provider: IShopeeProvider
  ) {}

  async fetchTrending() {
    return this.provider.fetchTrending();
  }

  async fetchProducts() {
    return this.provider.fetchProducts();
  }

  async fetchProduct(productId: string) {
    return this.provider.fetchProduct(productId);
  }
}