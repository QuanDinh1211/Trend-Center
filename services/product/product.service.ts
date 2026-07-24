import { Product, Prisma } from "@/generated/prisma/client";

import { BaseService, IService } from "../base";
import { ProductRepository } from "@/repositories/product";

export class ProductService
  extends BaseService
  implements
    IService<Product, Prisma.ProductCreateInput, Prisma.ProductUpdateInput>
{
  private readonly repository: ProductRepository;

  constructor(repository?: ProductRepository) {
    super();

    this.repository = repository ?? new ProductRepository(this.prisma);
  }

  async getAll(): Promise<Product[]> {
    return this.repository.findAll();
  }

  async getById(id: string): Promise<Product | null> {
    return this.repository.findById(id);
  }

  async getBySlug(slug: string): Promise<Product | null> {
    return this.repository.findBySlug(slug);
  }

  async create(data: Prisma.ProductCreateInput): Promise<Product> {
    const exists = await this.repository.findBySlug(data.slug);

    if (exists) {
      throw new Error("Product slug already exists.");
    }

    return this.repository.create(data);
  }

  async update(id: string, data: Prisma.ProductUpdateInput): Promise<Product> {
    const product = await this.repository.findById(id);

    if (!product) {
      throw new Error("Product not found.");
    }

    return this.repository.update(id, data);
  }

  async delete(id: string): Promise<Product> {
    const product = await this.repository.findById(id);

    if (!product) {
      throw new Error("Product not found.");
    }

    return this.repository.delete(id);
  }

  async activate(id: string): Promise<Product> {
    return this.repository.update(id, {
      status: "ACTIVE",
    });
  }

  async deactivate(id: string): Promise<Product> {
    return this.repository.update(id, {
      status: "INACTIVE",
    });
  }

  async search(keyword: string): Promise<Product[]> {
    return this.repository.search(keyword);
  }

  async getByCategory(categoryId: string): Promise<Product[]> {
    return this.repository.findByCategory(categoryId);
  }

  async getTrendingProducts(limit = 100): Promise<Product[]> {
    return this.repository.findTrending(limit);
  }

  async getHighCommissionProducts(limit = 100): Promise<Product[]> {
    return this.repository.findHighCommission(limit);
  }

  async getTopPotentialProducts(limit = 100): Promise<Product[]> {
    return this.repository.findTopPotential(limit);
  }

  async getWatchListProducts(): Promise<Product[]> {
    return this.repository.findWatchList();
  }

  async syncProduct(id: string): Promise<void> {
    const product = await this.repository.findById(id);

    if (!product) {
      throw new Error("Product not found.");
    }

    // TODO
    // Crawl Shopee
    // Crawl TikTok
    // Crawl Lazada
  }

  async analyzeProduct(id: string): Promise<void> {
    const product = await this.repository.findById(id);

    if (!product) {
      throw new Error("Product not found.");
    }

    // TODO
    // AI Analysis
    // Trend Analysis
    // Competition Analysis
  }

  async calculatePotentialScore(id: string): Promise<number> {
    const product = await this.repository.findById(id);

    if (!product) {
      throw new Error("Product not found.");
    }

    // TODO

    return 0;
  }
}
