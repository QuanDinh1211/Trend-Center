import { NextRequest } from "next/server";

import { CategoryController } from "@/controllers";

const controller = new CategoryController();

export async function GET() {
  return controller.findAll();
}

export async function POST(request: NextRequest) {
  return controller.create(request);
}
