import { ReportService } from "@/services/report";
import { IPersistence } from "./persistence.interface";

import { StageContext } from "@/pipeline/stages/stage.context";

export class ReportPersistence implements IPersistence {
  readonly name = "Report";

  private readonly service: ReportService;

  constructor() {
    this.service = new ReportService();
  }

  async persist(context: StageContext): Promise<void> {
    if (!context.report) {
      return;
    }

    await this.service.create(context.report);
  }
}
