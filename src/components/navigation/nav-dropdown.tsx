"use client";

import Link from "next/link";
import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

type Props = {
  label: string;
  items: NavItem[];
};

export function NavDropdown({ label, items }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative flex items-center h-full"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger */}
      <button className="text-[15px] font-normal text-[#2B3234] transition-colors hover:text-[#003966]">
        {label}
      </button>

      {open && (
        <div className="absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 pt-3">
          <div className="absolute -top-3 left-0 h-4 w-full cursor-default" />

          <div
            className="absolute left-1/2 top-1 h-3 w-3 -translate-x-1/2 rotate-45 bg-[#003966]"
            style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
          />

          <div className="min-w-[220px] rounded-[8px] bg-white p-4 shadow-xl border border-gray-100 overflow-hidden">
            <div className="flex flex-col gap-3">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[15px] text-[#2B3234] font-normal transition-colors hover:text-[#003966]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
