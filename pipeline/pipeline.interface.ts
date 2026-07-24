import { StageContext } from "./stages";

export interface IPipeline {
  run(): Promise<void | StageContext>;
}
