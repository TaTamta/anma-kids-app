import Link from "next/link";
import { ProductCard } from "./product-card";
import { DUMMY_PRODUCTS } from "@/types/product"; // Import the dummy array

export function NewArrivalsGrid() {
  return (
    <section className="mb-16">
      {/* --- Section Header (Title + See All) --- */}
      <div className="flex justify-between items-baseline mb-8">
        <h2 className="text-3xl font-bold text-[#2B3234] tracking-tight">
          ახალი პროდუქტები
        </h2>
        <Link
          href="/products"
          className="text-xs font-medium text-[#7F8F9B] hover:text-[#003966] hover:underline transition-colors"
        >
          See all
        </Link>
      </div>

      {/* --- Product Grid --- */}
      {/* - `grid-cols-2`: shows 2 columns on mobile
         - `md:grid-cols-4`: shows 4 columns on tablet/desktop
         - `gap-x-6 gap-y-10`: provides the spacing exactly as designed
      */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
        {DUMMY_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
