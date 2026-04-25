import Image from "next/image";
import { Button } from "@/components/ui/button";
import { heroSections } from "@/config/hero";
import Link from "next/link";

export function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {heroSections.map((item) => (
        <div
          key={item.title}
          className="flex flex-col items-center py-12 px-6"
          style={{ backgroundColor: item.bg }}
        >
          <h2 className="mb-6 text-3xl font-bold">{item.title}</h2>

          <div className="relative w-full max-w-[400px] aspect-[4/5]">
            <Image
              src={item.image}
              alt={item.alt}
              fill
              className="object-contain"
            />
          </div>

          <Link href={item.href}>
            <Button className="mt-8 cursor-pointer rounded bg-[#003966] px-8 hover:bg-[#002a4d]">
              ყველა პროდუქტი
            </Button>
          </Link>
        </div>
      ))}
    </section>
  );
}
