import { PrismaClient } from "@/generated/prisma/client";
import prisma from "@/lib/prisma";

export abstract class BaseService {
  protected readonly prisma: PrismaClient;

  constructor(client: PrismaClient = prisma) {
    this.prisma = client;
  }
}
