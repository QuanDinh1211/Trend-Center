import {
  AnalyzerManager,
  GoogleScoreAnalyzer,
  TikTokScoreAnalyzer,
  ShopeeScoreAnalyzer,
  CommissionAnalyzer,
  CompetitionAnalyzer,
  GrowthAnalyzer,
  FinalScoreAnalyzer,
} from "@/analyzers";
import { IStage } from "./stage.interface";
import { StageContext } from "./stage.context";

export class AnalyzeStage implements IStage {
  readonly name = "Analyze";

  private readonly manager = new AnalyzerManager();

  private readonly finalAnalyzer = new FinalScoreAnalyzer();

  constructor() {
    this.manager.register(new GoogleScoreAnalyzer());

    this.manager.register(new TikTokScoreAnalyzer());

    this.manager.register(new ShopeeScoreAnalyzer());

    this.manager.register(new CommissionAnalyzer());

    this.manager.register(new CompetitionAnalyzer());

    this.manager.register(new GrowthAnalyzer());
  }

  async execute(context: StageContext): Promise<StageContext> {
    context.scores = [];

    for (const product of context.products ?? []) {
      const result = await this.manager.analyze(product);

      context.scores.push({
        product,

        detail: result,

        finalScore: this.finalAnalyzer.calculate(result),
      });
    }

    return context;
  }
}
