"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingCart, User } from "lucide-react";

import { NavDropdown } from "@/components/navigation/nav-dropdown";
import { navigation } from "@/config/navigation";

export function Header() {
  const isLoggedIn = false;

  return (
    <header className="w-full bg-white">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-[128px]">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/main_logo.png"
            alt="Logo"
            width={64}
            height={64}
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => {
            if (item.children) {
              return (
                <NavDropdown
                  key={item.label}
                  label={item.label}
                  items={item.children}
                />
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href!}
                className="text-[15px] font-medium text-[#2B3234] transition-colors hover:text-[#003966]"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-6 text-[#2B3234]">
          {/* Search */}
          <button className="transition hover:text-[#003966]">
            <Search className="h-5 w-5" />
          </button>

          {/* Auth */}
          {isLoggedIn ? (
            <div className="flex items-center gap-1">
              <User className="h-5 w-5" />
            </div>
          ) : (
            <Link
              href="/login"
              className="text-[15px] font-medium text-[#2B3234] transition-colors hover:text-[#003966]"
            >
              შესვლა
            </Link>
          )}

          {/* Cart */}
          <button className="relative transition hover:text-[#003966]">
            <ShoppingCart className="h-5 w-5 text-[#2B3234]" />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] text-white">
              2
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
