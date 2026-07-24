import { AggregatedProduct } from "@/normalizers/models/aggregated-product";

export class ProductRanker {
  rank(products: AggregatedProduct[]) {
    return [...products].sort(
      (a, b) => (b.trend.finalScore ?? 0) - (a.trend.finalScore ?? 0),
    );
  }
}
