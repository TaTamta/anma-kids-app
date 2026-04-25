export interface Product {
  id: string;
  name: string;
  subName?: string;
  imageUrl: string;
  price: number;
  originalPrice?: number;
  isNew?: boolean;
  discountPercentage?: number;
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

// Dummy data array using public images
export const DUMMY_PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "რომპერი",
    subName: "შორტი ბოდე",
    // Temporary image from internet. Replace when you have your own assets.
    imageUrl: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
    price: 442.12,
    originalPrice: 542.12,
    isNew: true,
    discountPercentage: 10,
  },
  {
    id: "p2",
    name: "რომპერი",
    subName: "პროდუქტის აღწერა ...",
    imageUrl: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
    price: 442.12,
    originalPrice: 542.12,
    discountPercentage: 10,
  },
  {
    id: "p3",
    name: "რომპერი",
    subName: "პროდუქტის აღწერა ...",
    imageUrl: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
    price: 442.12,
    originalPrice: 542.12,
    isNew: true,
  },
  {
    id: "p4",
    name: "რომპერი",
    subName: "პროდუქტის აღწერა ...",
    imageUrl: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
    price: 442.12,
    originalPrice: 542.12,
    discountPercentage: 10,
  },
  {
    id: "p5",
    name: "რომპერი",
    subName: "შორტი ბოდე",
    imageUrl: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
    price: 442.12,
    originalPrice: 542.12,
    isNew: true,
    discountPercentage: 10,
  },
  {
    id: "p6",
    name: "რომპერი",
    subName: "პროდუქტის აღწერა ...",
    imageUrl: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
    price: 442.12,
    originalPrice: 542.12,
    discountPercentage: 10,
  },
  {
    id: "p7",
    name: "რომპერი",
    subName: "პროდუქტის აღწერა ...",
    imageUrl: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
    price: 442.12,
    originalPrice: 542.12,
    discountPercentage: 10,
  },
  {
    id: "p8",
    name: "რომპერი",
    subName: "პროდუქტის აღწერა ...",
    imageUrl: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
    price: 442.12,
    originalPrice: 542.12,
    discountPercentage: 10,
  },
];
