export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  variants: ProductVariant[];
}

export interface ProductVariant {
  id: string;
  size: string;
  color: string;
  stock: number;
  price?: number;
}

export interface ProductListParams {
  category?: string;
  size?: string;
  color?: string;
  minPrice?: number;
  maxPrice?: number;
  sort?: string;
  page?: number;
  limit?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}
