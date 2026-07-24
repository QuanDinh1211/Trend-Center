import { TrendService } from "@/services/trend";
import { IPersistence } from "./persistence.interface";

import { StageContext } from "@/pipeline/stages/stage.context";

export class TrendPersistence implements IPersistence {
  readonly name = "Trend";

  private readonly service: TrendService;

  constructor() {
    this.service = new TrendService();
  }

  async persist(context: StageContext): Promise<void> {
    for (const score of context.scores ?? []) {
      await this.service.saveTrendScore(score);
    }
  }
}
