import { StageContext } from "./stage.context";
import { IStage } from "./stage.interface";

import {
  PersistenceManager,
  ProductPersistence,
  TrendPersistence,
} from "@/persistence";

export class PersistStage implements IStage {
  readonly name = "Persist";

  private readonly manager = new PersistenceManager();

  constructor() {
    this.manager.register(new ProductPersistence());

    this.manager.register(new TrendPersistence());
  }

  async execute(context: StageContext): Promise<StageContext> {
    await this.manager.persist(context);

    return context;
  }
}
