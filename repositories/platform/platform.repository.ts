import {
  Platform,
  Prisma,
  PrismaClient,
} from "@/generated/prisma/client";
import { GenericRepository } from "../base/generic.repository";


export class PlatformRepository extends GenericRepository<
  Platform,
  Prisma.PlatformCreateInput,
  Prisma.PlatformUpdateInput
> {
  constructor(prisma: PrismaClient) {
    super(prisma);
  }

  async findAll() {
    return this.prisma.platform.findMany({
      orderBy: {
        name: "asc",
      },
    });
  }

  async findById(id: string) {
    return this.prisma.platform.findUnique({
      where: { id },
    });
  }

  async findByCode(code: string) {
    return this.prisma.platform.findUnique({
      where: { code },
    });
  }

  async create(data: Prisma.PlatformCreateInput) {
    return this.prisma.platform.create({ data });
  }

  async update(id: string, data: Prisma.PlatformUpdateInput) {
    return this.prisma.platform.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return this.prisma.platform.delete({
      where: { id },
    });
  }
}