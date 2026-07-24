import { NextRequest } from "next/server";

import { ProductController } from "@/controllers";

const controller = new ProductController();

interface Params {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(request: NextRequest, { params }: Params) {
  const { id } = await params;

  return controller.findById(id);
}

export async function PUT(request: NextRequest, { params }: Params) {
  const { id } = await params;

  return controller.update(id, request);
}

export async function DELETE(request: NextRequest, { params }: Params) {
  const { id } = await params;

  return controller.delete(id);
}
