import { ScheduledTask } from "node-cron";

export interface ISchedulerJob {
  /**
   * Tên Job
   */
  readonly name: string;

  /**
   * Cron Expression
   */
  readonly cron: string;

  /**
   * Có bật Job hay không
   */
  readonly enabled: boolean;

  /**
   * Hàm thực thi
   */
  execute(): Promise<void>;

  /**
   * Task sau khi register
   */
  task?: ScheduledTask;
}
