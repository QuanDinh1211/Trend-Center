import prisma from "@/lib/prisma";
import { PrismaClient } from "@/generated/prisma/client";

export abstract class BaseRepository {

    protected prisma: PrismaClient;

    constructor(client: PrismaClient = prisma){

        this.prisma = client;

    }

}