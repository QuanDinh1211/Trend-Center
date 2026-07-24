import { TrendContext } from "./trend.context";

export interface ITrendEngine {
  run(): Promise<TrendContext>;
}
