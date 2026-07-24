export interface IPersistence<T = any> {
  persist(data: T): Promise<void>;
}
import { StageContext } from "@/pipeline/stages/stage.context";

export interface IPersistence {
  readonly name: string;

  persist(context: StageContext): Promise<void>;
}
