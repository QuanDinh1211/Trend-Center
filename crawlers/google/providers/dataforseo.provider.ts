import { IGoogleProvider } from "./google.provider.interface";
import { GoogleTrendRaw } from "../google.types";

export class DataForSeoProvider implements IGoogleProvider {
  async fetchTrendingKeywords(): Promise<GoogleTrendRaw[]> {
    /**
     * TODO
     * DataForSEO API
     */

    return [];
  }
}
