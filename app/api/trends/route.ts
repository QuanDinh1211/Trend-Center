import { TrendController } from "@/controllers";

const controller = new TrendController();

export async function GET() {
  return controller.findAll();
}
