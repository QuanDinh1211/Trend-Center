import { NextRequest } from "next/server";

import { ProductController } from "@/controllers";

const controller = new ProductController();

export async function GET(request: NextRequest) {
  const keyword = request.nextUrl.searchParams.get("q") ?? "";

  return controller.search(keyword);
}
