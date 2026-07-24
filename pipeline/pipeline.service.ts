import { IPipeline } from "./pipeline.interface";

import { StageContext } from "./stages/stage.context";

import {
  CrawlerStage,
  NormalizeStage,
  AggregateStage,
  AnalyzeStage,
  PersistStage,
  ReportStage,
} from "./stages";

export class PipelineService implements IPipeline {
  private readonly stages = [
    new CrawlerStage(),

    new NormalizeStage(),

    new AggregateStage(),

    new AnalyzeStage(),

    new PersistStage(),

    new ReportStage(),
  ];

  async run(): Promise<StageContext> {
    let context: StageContext = {};

    for (const stage of this.stages) {
      console.log(`Running ${stage.name}`);

      context = await stage.execute(context);
    }

    console.log("Pipeline Finished");
    return context;
  }
}
