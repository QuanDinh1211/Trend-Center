import { NextResponse } from "next/server";

import { TrendService } from "@/services/trend";

export class TrendController {
  private readonly service: TrendService;

  constructor() {
    this.service = new TrendService();
  }

  async findAll() {
    const data = await this.service.getAll();

    return NextResponse.json(data);
  }

  async top(limit = 100) {
    // Todo
    return NextResponse.json({});
  }

  async hot(limit = 20) {
    // Todo
    return NextResponse.json({});
  }

  async report() {
    // Todo
    return NextResponse.json({});
  }
}
