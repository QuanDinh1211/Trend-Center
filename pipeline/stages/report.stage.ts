import { StageContext } from "./stage.context";
import { IStage } from "./stage.interface";

export class ReportStage implements IStage {
  readonly name = "Report";

  async execute(context: StageContext): Promise<StageContext> {
    context.report = {
      totalProducts: context.products?.length,

      totalKeywords: context.keywords?.length,

      generatedAt: new Date(),
    };

    return context;
  }
}
