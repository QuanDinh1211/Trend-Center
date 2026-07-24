import { AggregatedProduct } from "@/normalizers";

import { IAggregator } from "./aggregator.interface";

import { ExactMatcher, SlugMatcher, FuzzyMatcher } from "./matcher";

export class ProductAggregator implements IAggregator<AggregatedProduct> {
  private readonly exact = new ExactMatcher();

  private readonly slug = new SlugMatcher();

  private readonly fuzzy = new FuzzyMatcher();

  async aggregate(products: AggregatedProduct[]): Promise<AggregatedProduct[]> {
    const result: AggregatedProduct[] = [];

    for (const product of products) {
      const found = result.find((item) => {
        const score = Math.max(
          this.exact.match(item.name, product.name),

          this.slug.match(item.name, product.name),

          this.fuzzy.match(item.name, product.name),
        );

        return score >= 80;
      });

      if (!found) {
        result.push(product);

        continue;
      }

      found.keywords.push(...product.keywords);

      found.platforms.push(...product.platforms);

      found.videos.push(...product.videos);
    }

    return result;
  }
}
