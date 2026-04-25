import { api } from "@/lib/api";
import type {
  Product,
  ProductListParams,
  PaginatedResponse,
} from "@/types/product";

export const productsService = {
  async list(
    params: ProductListParams = {},
  ): Promise<PaginatedResponse<Product>> {
    const { data } = await api.get<PaginatedResponse<Product>>("/product/all", {
      params,
    });
    return data;
  },

  async getBySlug(slug: string): Promise<Product> {
    const { data } = await api.get<Product>(`/products/${slug}`);
    return data;
  },

  async getById(id: string): Promise<Product> {
    const { data } = await api.get<Product>(`/products/id/${id}`);
    return data;
  },
};
