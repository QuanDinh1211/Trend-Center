import { StageContext } from "@/pipeline/stages/stage.context";

export interface TrendContext extends StageContext {
  recommendations: string[];

  hotProducts: string[];
}
