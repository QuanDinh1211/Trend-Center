import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/prisma";

import { KeywordRepository } from "@/repositories/keyword";
import { KeywordService } from "@/services/keyword";

export class KeywordController {
  private readonly service: KeywordService;

  constructor() {
    this.service = new KeywordService(new KeywordRepository(prisma));
  }

  async findAll() {
    const data = await this.service.getAll();

    return NextResponse.json(data);
  }

  async trending() {
    const data = await this.service.syncGoogleTrend();

    return NextResponse.json(data);
  }

  async search(keyword: string) {
    const data = await this.service.search(keyword);

    return NextResponse.json(data);
  }

  async create(request: NextRequest) {
    const body = await request.json();

    const data = await this.service.create(body);

    return NextResponse.json(data, {
      status: 201,
    });
  }
}
