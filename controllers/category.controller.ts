import { NextRequest, NextResponse } from "next/server";

import { CategoryService } from "@/services/category";

export class CategoryController {
  private readonly service: CategoryService;

  constructor() {
    this.service = new CategoryService();
  }

  async findAll() {
    const data = await this.service.getAll();

    return NextResponse.json(data);
  }

  async findById(id: string) {
    const data = await this.service.getById(id);

    if (!data) {
      return NextResponse.json(
        {
          message: "Category not found",
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json(data);
  }

  async create(request: NextRequest) {
    const body = await request.json();

    const data = await this.service.create(body);

    return NextResponse.json(data, {
      status: 201,
    });
  }

  async update(id: string, request: NextRequest) {
    const body = await request.json();

    const data = await this.service.update(id, body);

    return NextResponse.json(data);
  }

  async delete(id: string) {
    await this.service.delete(id);

    return NextResponse.json({
      success: true,
    });
  }
}
