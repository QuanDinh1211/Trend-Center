import { Category, Prisma } from "@/generated/prisma/client";

import { IService, BaseService } from "../base";
import { CategoryRepository } from "@/repositories/category";

export class CategoryService
  extends BaseService
  implements
    IService<Category, Prisma.CategoryCreateInput, Prisma.CategoryUpdateInput>
{
  constructor(private readonly repository: CategoryRepository) {
    super();
  }

  async getAll(): Promise<Category[]> {
    return this.repository.findAll();
  }

  async getById(id: string): Promise<Category | null> {
    return this.repository.findById(id);
  }

  async getBySlug(slug: string): Promise<Category | null> {
    return this.repository.findBySlug(slug);
  }

  async create(data: Prisma.CategoryCreateInput): Promise<Category> {
    const exists = await this.repository.findBySlug(data.slug);

    if (exists) {
      throw new Error("Category slug already exists.");
    }

    return this.repository.create(data);
  }

  async update(
    id: string,
    data: Prisma.CategoryUpdateInput,
  ): Promise<Category> {
    const category = await this.repository.findById(id);

    if (!category) {
      throw new Error("Category not found.");
    }

    return this.repository.update(id, data);
  }

  async delete(id: string): Promise<Category> {
    const category = await this.repository.findById(id);

    if (!category) {
      throw new Error("Category not found.");
    }

    return this.repository.delete(id);
  }

  async activate(id: string): Promise<Category> {
    return this.repository.update(id, {
      status: "ACTIVE",
    });
  }

  async deactivate(id: string): Promise<Category> {
    return this.repository.update(id, {
      status: "INACTIVE",
    });
  }
}
