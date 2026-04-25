"use client";

import { useEffect } from "react";
import { productsService } from "@/services/products.service";

export default function Home() {
  useEffect(() => {
    productsService
      .list()
      .then((res) => console.log("Products:", res))
      .catch((err) => console.error("Error:", err.message));
  }, []);

  return <div>test — check browser console</div>;
}
