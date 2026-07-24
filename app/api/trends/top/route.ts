import { NextRequest } from "next/server";

import { TrendController } from "@/controllers";

const controller = new TrendController();

export async function GET(request: NextRequest) {
  const limit = Number(request.nextUrl.searchParams.get("limit") ?? 100);

  return controller.top(limit);
}
