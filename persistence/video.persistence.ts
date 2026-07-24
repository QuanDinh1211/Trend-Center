import { VideoService } from "@/services/video";
import { IPersistence } from "./persistence.interface";

import { StageContext } from "@/pipeline/stages/stage.context";

export class VideoPersistence implements IPersistence {
  readonly name = "Video";

  private readonly service: VideoService;

  constructor() {
    this.service = new VideoService();
  }

  async persist(context: StageContext): Promise<void> {
    if (!context.rawTikTok?.length) {
      return;
    }

    for (const video of context.rawTikTok) {
      await this.service.upsert(video);
    }
  }
}
