import { AggregatedKeyword } from "@/normalizers";
import { AggregatedProduct } from "@/normalizers";

export interface AggregatedResult {
  products: AggregatedProduct[];

  keywords: AggregatedKeyword[];
}
