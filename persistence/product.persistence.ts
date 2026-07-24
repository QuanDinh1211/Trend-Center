import { ProductService } from "@/services/product";
import { IPersistence } from "./persistence.interface";

import { StageContext } from "@/pipeline/stages/stage.context";

export class ProductPersistence implements IPersistence {
  readonly name = "Product";

  private readonly service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  async persist(context: StageContext): Promise<void> {
    for (const product of context.products ?? []) {
      await this.service.create(product);
    }
  }
}
