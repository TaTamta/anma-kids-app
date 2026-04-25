import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const footerLinks = {
  support: [
    { label: "Contact Us", href: "/contact" },
    { label: "Shipping Policy", href: "/shipping" },
    { label: "Returns & Exchanges", href: "/returns" },
    { label: "FAQ", href: "/faq" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-slate-50/50">
      <div className="mx-auto max-w-[1440px] px-[110px] py-[35px]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-xl font-bold tracking-tight">
              <Image
                src="/images/main_logo.png"
                alt="Logo"
                width={64}
                height={64}
              />
            </Link>

            <p className="text-sm text-muted-foreground">
              𝒜𝓃𝓂𝒶 𝒦𝒾𝒹𝓈 𝒞𝓁𝑜𝓉𝒽𝑒𝓈 – ჩვილების კომფორტი და სტილი ერთ სივრცეში ონლაინ
              მაღაზია პატარებისთვის. რბილი, ხარისხიანი და გემოვნებით შერჩეული
              ტანსაცმელი.
            </p>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Support
            </h3>

            <ul className="space-y-2 text-sm text-muted-foreground">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Get in Touch
            </h3>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@kidsshop.com</span>
              </li>

              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 000-0000</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Kids Shop Inc. All rights reserved.
          </p>

          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>
            <Link href="/cookies" className="hover:underline">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
