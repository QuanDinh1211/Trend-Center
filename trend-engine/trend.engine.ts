import { RecommendationEngine } from "./recommenders/recommendation.engine";
import { ProductRanker } from "./rankers/product.ranker";
import { HotProductSelector } from "./selectors/hot-product.selector";

import { ITrendEngine } from "./engine.interface";
import { TrendContext } from "./trend.context";
import { PipelineService } from "@/pipeline";

export class TrendEngine implements ITrendEngine {
  private readonly pipeline = new PipelineService();

  private readonly recommender = new RecommendationEngine();

  private readonly ranker = new ProductRanker();

  private readonly selector = new HotProductSelector();

  async run(): Promise<TrendContext> {
    const context = (await this.pipeline.run()) as TrendContext;

    // context.products = this.ranker.rank(context.products);

    // context.hotProducts = this.selector
    //   .select(context.products)
    //   .map((x) => x.id);

    // context.recommendations = context.products.map((x) =>
    //   this.recommender.recommend(x),
    // );

    return context;
  }
}
