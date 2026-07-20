import pino from "pino";

const transport = pino.transport({
  targets: [
    // Console đẹp để dev
    {
      target: "pino-pretty",
      level: "debug",
      options: {
        colorize: true,
        translateTime: "yyyy-mm-dd HH:MM:ss",
        ignore: "pid,hostname",
      },
    },

    // Ghi toàn bộ log
    {
      target: "pino/file",
      level: "debug",
      options: {
        colorize: true,
        translateTime: "yyyy-mm-dd HH:MM:ss",
        ignore: "pid,hostname",
        destination: "./logs/app.log",
        mkdir: true,
      },
    },

    // Chỉ ghi lỗi
    {
      target: "pino/file",
      level: "error",
      options: {
        colorize: true,
        translateTime: "yyyy-mm-dd HH:MM:ss",
        ignore: "pid,hostname",
        destination: "./logs/error.log",
        mkdir: true,
      },
    },
  ],
});

export const logger = pino(
  {
    level: process.env.LOG_LEVEL ?? "debug",
  },
  transport,
);
