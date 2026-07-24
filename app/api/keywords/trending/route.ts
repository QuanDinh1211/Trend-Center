import { NextRequest } from "next/server";

import { KeywordController } from "@/controllers";

const controller = new KeywordController();

export async function GET(request: NextRequest) {
  return controller.trending();
}
