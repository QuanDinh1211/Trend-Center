import { ShopeeCrawlerResult } from "./shopee.types";

export class ShopeeMapper {
  async map(
    data: ShopeeCrawlerResult
  ) {
    return {
      products: data.products,
    };
  }
}