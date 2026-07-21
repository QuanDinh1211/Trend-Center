import { IGoogleProvider } from "./providers";

export class GoogleClient {
  constructor(private readonly provider: IGoogleProvider) {}

  async fetchTrend() {
    return this.provider.fetchTrendingKeywords();
  }
}
