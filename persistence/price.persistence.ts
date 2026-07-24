import { PriceHistoryService } from "@/services/price-history";
import { IPersistence } from "./persistence.interface";

import { StageContext } from "@/pipeline/stages/stage.context";

export class PricePersistence implements IPersistence {
  readonly name = "Price";

  private readonly service: PriceHistoryService;

  constructor() {
    this.service = new PriceHistoryService();
  }

  async persist(context: StageContext): Promise<void> {}
}
