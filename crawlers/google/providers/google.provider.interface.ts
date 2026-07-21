import { GoogleTrendRaw } from "../google.types";

export interface IGoogleProvider {
  fetchTrendingKeywords(): Promise<GoogleTrendRaw[]>;
}
