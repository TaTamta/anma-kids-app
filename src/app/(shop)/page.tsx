"use client";

import { useEffect } from "react";
import { productsService } from "@/services/products.service";
import { Hero } from "@/components/home/hero";
import { NewArrivalsGrid } from "@/components/product/product-grid";

export default function Home() {
  useEffect(() => {
    productsService
      .list()
      .then((res) => console.log("Products:", res))
      .catch((err) => console.error("Error:", err.message));
  }, []);

  return (
    <div className="flex flex-col w-full">
      <Hero />
      <main className="px-6 lg:px-[110px] py-16">
        <NewArrivalsGrid />
      </main>
    </div>
  );
}
