import { StageContext } from "./stage.context";

export interface IStage {
  readonly name: string;

  execute(context: StageContext): Promise<StageContext>;
}
