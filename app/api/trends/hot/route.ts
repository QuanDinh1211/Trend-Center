import { NextRequest } from "next/server";

import { TrendController } from "@/controllers";

const controller = new TrendController();

export async function GET(request: NextRequest) {
  const limit = Number(request.nextUrl.searchParams.get("limit") ?? 20);

  return controller.hot(limit);
}
