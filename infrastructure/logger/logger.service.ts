import { logger } from "./logger";
import { ILogger } from "./logger.interface";

export class LoggerService implements ILogger {
  trace(message: string, meta?: object) {
    logger.trace(meta ?? {}, message);
  }

  debug(message: string, meta?: object) {
    logger.debug(meta ?? {}, message);
  }

  info(message: string, meta?: object) {
    logger.info(meta ?? {}, message);
  }

  warn(message: string, meta?: object) {
    logger.warn(meta ?? {}, message);
  }

  error(message: string, meta?: object) {
    logger.error(meta ?? {}, message);
  }

  fatal(message: string, meta?: object) {
    logger.fatal(meta ?? {}, message);
  }
}

export const appLogger = new LoggerService();
