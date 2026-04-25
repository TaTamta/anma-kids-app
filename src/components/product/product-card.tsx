import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  // Georgian currency symbol formatting
  const formattedPrice = `₾${product.price.toFixed(2)}`;
  const formattedOriginalPrice = product.originalPrice
    ? `₾${product.originalPrice.toFixed(2)}`
    : null;

  return (
    <div className="group flex h-full flex-col transition-transform duration-300 ease-out hover:scale-[1.03]">
      {" "}
      {/* --- Image Container (Clickable Area) --- */}
      <Link
        href={`/products/${product.id}`}
        className="block relative aspect-[4/5] overflow-hidden bg-white mb-3"
      >
        {/* The Image with Hover Grow effect */}
        <div className="absolute inset-0">
          <Image
            src={product.imageUrl}
            alt={`${product.name} - ${product.subName}`}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
            className="object-cover"
            priority={false}
          />
        </div>

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
          {product.isNew && (
            <Badge className="bg-[#003966] text-white rounded-none text-[11px] font-medium px-2 py-0.5">
              New
            </Badge>
          )}
          {product.discountPercentage && (
            <Badge
              variant="destructive"
              className="bg-[#F14949] text-white rounded-none text-[11px] font-medium px-2 py-0.5"
            >
              -{product.discountPercentage}%
            </Badge>
          )}
        </div>
      </Link>
      {/* --- Product Details (Text & Price) --- */}
      <div className="flex-grow flex flex-col">
        <h3 className="text-sm font-semibold text-[#2B3234] leading-tight mb-0.5">
          {product.name}
        </h3>
        <p className="text-xs text-[#7F8F9B] truncate leading-normal">
          {product.subName}
        </p>

        {/* --- Price and Action --- */}
        <div className="mt-auto pt-3 flex items-center justify-between">
          <div className="flex flex-row gap-[8px] items-center">
            <span className="text-base font-bold text-[#2B3234]">
              {formattedPrice}
            </span>
            {formattedOriginalPrice && (
              <span className="text-xs text-[#7F8F9B] line-through">
                {formattedOriginalPrice}
              </span>
            )}
          </div>

          <Button
            size="icon"
            variant="secondary"
            className="h-8 w-8 rounded-none bg-[#E6F0F6] hover:bg-[#D4E6F1] text-[#003966] cursor-pointer"
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
