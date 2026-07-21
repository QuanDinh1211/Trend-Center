import { IGoogleProvider } from "./google.provider.interface";
import { GoogleTrendRaw } from "../google.types";

export class SerpApiProvider implements IGoogleProvider {
  async fetchTrendingKeywords(): Promise<GoogleTrendRaw[]> {
    /**
     * TODO
     * https://serpapi.com
     */

    return [];
  }
}
