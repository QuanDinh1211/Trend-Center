import { NextRequest } from "next/server";

import { ProductController } from "@/controllers";

const controller = new ProductController();

export async function GET() {
  return controller.findAll();
}

export async function POST(request: NextRequest) {
  return controller.create(request);
}
