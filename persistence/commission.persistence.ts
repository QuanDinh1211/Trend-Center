import { CommissionHistoryService } from "@/services/commission-history";
import { IPersistence } from "./persistence.interface";

import { StageContext } from "@/pipeline/stages/stage.context";

export class CommissionPersistence implements IPersistence {
  readonly name = "Commission";

  private readonly service: CommissionHistoryService;

  constructor() {
    this.service = new CommissionHistoryService();
  }

  async persist(context: StageContext): Promise<void> {}
}
