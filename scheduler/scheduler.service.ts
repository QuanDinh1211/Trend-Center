import cron from "node-cron";
import { ISchedulerJob } from "./scheduler.interface";
import { appLogger } from "@/infrastructure/logger";

export class SchedulerService {
  private readonly jobs: ISchedulerJob[] = [];

  register(job: ISchedulerJob): void {
    this.jobs.push(job);

    appLogger.info(`Register Job: ${job.name}`);
  }

  start(): void {
    appLogger.info("Scheduler Starting...");

    for (const job of this.jobs) {
      if (!job.enabled) continue;

      job.task = cron.schedule(job.cron, async () => {
        const start = Date.now();

        try {
          appLogger.info(`Start Job: ${job.name}`);

          await job.execute();

          appLogger.info(`Finish Job: ${job.name}`, {
            duration: Date.now() - start,
          });
        } catch (error) {
          appLogger.error(`Job Failed: ${job.name}`, {
            error,
          });
        }
      });
    }

    appLogger.info(`Scheduler Started (${this.jobs.length} jobs)`);
  }
}
