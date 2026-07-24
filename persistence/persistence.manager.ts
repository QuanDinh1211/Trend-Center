import { StageContext } from "@/pipeline/stages/stage.context";

import { IPersistence } from "./persistence.interface";

import { appLogger } from "@/infrastructure/logger";

export class PersistenceManager {
  private readonly persistences: IPersistence[] = [];

  register(persistence: IPersistence): void {
    this.persistences.push(persistence);
  }

  async persist(context: StageContext): Promise<void> {
    for (const persistence of this.persistences) {
      appLogger.info(`[Persistence] ${persistence.name}`);

      await persistence.persist(context);
    }
  }
}
