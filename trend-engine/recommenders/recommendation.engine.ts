import { AggregatedProduct } from "@/normalizers/models/aggregated-product";

export class RecommendationEngine {
  recommend(product: AggregatedProduct): string {
    if (product?.trend?.finalScore && product?.trend?.finalScore >= 90) {
      return "🔥 Đẩy Affiliate ngay";
    }

    if (product?.trend?.finalScore && product?.trend?.finalScore >= 80) {
      return "⭐ Có tiềm năng";
    }

    if (product?.trend?.finalScore && product?.trend?.finalScore >= 60) {
      return "👀 Theo dõi";
    }

    return "❌ Không nên đầu tư";
  }
}
