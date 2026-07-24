import { ProductController } from "@/controllers";

const controller = new ProductController();

export async function GET() {
  return controller.trending();
}
