import { NextRequest } from "next/server";

import { KeywordController } from "@/controllers";

const controller = new KeywordController();

export async function GET() {
  return controller.findAll();
}

export async function POST(request: NextRequest) {
  return controller.create(request);
}
