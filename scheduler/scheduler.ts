import { SchedulerService } from "./scheduler.service";
import { jobs } from "./jobs";

const scheduler = new SchedulerService();

jobs.forEach((job) => scheduler.register(job));

export default scheduler;
