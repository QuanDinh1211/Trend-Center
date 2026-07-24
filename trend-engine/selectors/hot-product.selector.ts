import { AggregatedProduct } from "@/normalizers/models/aggregated-product";

export class HotProductSelector {
  select(products: AggregatedProduct[]) {
    return products.filter(
      (x) =>
        (x.trend?.finalScore ?? 0) >= 85 &&
        (x.trend?.growthScore ?? 0) >= 70 &&
        (x.trend?.competitionScore ?? 100) <= 40,
    );
  }
}
