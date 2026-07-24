import { NextRequest, NextResponse } from "next/server";

import { ProductService } from "@/services/product";

export class ProductController {
  private readonly service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  async findAll() {
    const data = await this.service.getAll();

    return NextResponse.json(data);
  }

  async findById(id: string) {
    const data = await this.service.getById(id);

    if (!data) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(data);
  }

  async search(keyword: string) {
    const data = await this.service.search(keyword);

    return NextResponse.json(data);
  }

  async trending() {
    const data = await this.service.getTrendingProducts();

    return NextResponse.json(data);
  }

  async watchList() {
    const data = await this.service.getWatchListProducts();

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
