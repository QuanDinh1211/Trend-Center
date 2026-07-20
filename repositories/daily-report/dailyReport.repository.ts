import {
  DailyReport,
  Prisma,
  PrismaClient,
} from "@/generated/prisma/client";
import { GenericRepository } from "../base/generic.repository";


export class DailyReportRepository extends GenericRepository<
  DailyReport,
  Prisma.DailyReportCreateInput,
  Prisma.DailyReportUpdateInput
> {
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  async findAll() {
    return this.prisma.dailyReport.findMany({
      orderBy: {
        reportDate: "desc",
      },
    });
  }

  async findById(id: string) {
    return this.prisma.dailyReport.findUnique({
      where: { id },
    });
  }

  async findByDate(reportDate: Date) {
    return this.prisma.dailyReport.findUnique({
      where: {
        reportDate,
      },
    });
  }

  async create(data: Prisma.DailyReportCreateInput) {
    return this.prisma.dailyReport.create({ data });
  }

  async update(id: string, data: Prisma.DailyReportUpdateInput) {
    return this.prisma.dailyReport.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return this.prisma.dailyReport.delete({
      where: { id },
    });
  }
}