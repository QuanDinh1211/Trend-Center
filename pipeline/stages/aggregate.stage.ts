import { AggregatorManager } from "@/aggregators";
import { IStage } from "./stage.interface";
import { StageContext } from "./stage.context";

export class AggregateStage implements IStage {
  readonly name = "Aggregate";

  constructor(private readonly aggregator = new AggregatorManager()) {}

  async execute(context: StageContext): Promise<StageContext> {
    const result = await this.aggregator.aggregate(
      context.products ?? [],

      context.keywords ?? [],
    );

    context.products = result.products;

    context.keywords = result.keywords;

    return context;
  }
}
