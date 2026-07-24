import { KeywordService } from "@/services/keyword";
import { IPersistence } from "./persistence.interface";

import { StageContext } from "@/pipeline/stages/stage.context";

export class KeywordPersistence implements IPersistence {
  readonly name = "Keyword";

  private readonly service: KeywordService;

  constructor() {
    this.service = new KeywordService();
  }

  async persist(context: StageContext): Promise<void> {
    for (const keyword of context.keywords ?? []) {
      await this.service.create(keyword);
    }
  }
}
