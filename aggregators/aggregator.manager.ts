import { AggregatedKeyword, AggregatedProduct } from "@/normalizers";

import { ProductAggregator } from "./product.aggregator";
import { KeywordAggregator } from "./keyword.aggregator";

import { AggregatedResult } from "./models/aggregated-result";

export class AggregatorManager {
  private readonly productAggregator = new ProductAggregator();

  private readonly keywordAggregator = new KeywordAggregator();

  async aggregate(
    products: AggregatedProduct[],
    keywords: AggregatedKeyword[],
  ): Promise<AggregatedResult> {
    return {
      products: await this.productAggregator.aggregate(products),

      keywords: await this.keywordAggregator.aggregate(keywords),
    };
  }
}
