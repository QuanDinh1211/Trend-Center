import { IGoogleProvider } from "./google.provider.interface";
import { GoogleTrendRaw } from "../google.types";

export class BrightDataProvider implements IGoogleProvider {
  async fetchTrendingKeywords(): Promise<GoogleTrendRaw[]> {
    /**
     * TODO
     * BrightData
     */

    return [];
  }
}
