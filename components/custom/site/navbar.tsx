import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SiteNavbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-stone-200 backdrop-blur-lg py-2 px-4 lg:px-6">
      <div className="flex items-center h-14 w-full mx-auto max-w-7xl justify-between gap-4">
        {/* Left: Logo */}
        <Link href={"/"} className="flex items-center space-x-2 select-none cursor-pointer">
          <div className="relative overflow-hidden rounded">
            <Image
              src="/assets/gitty-logo.png"
              alt="logo"
              className="object-center object-cover"
              width={60}
              height={60}
              priority
            />
          </div>
          <span className="text-2xl font-lora font-bold">Gitty</span>
        </Link>
        {/* Center: Nav Links (visible on md+) */}
        <div className="hidden md:flex items-center justify-center gap-8 flex-1">
          <a href="/features" className="text-base text-muted-foreground hover:underline">
            Features
          </a>
          <a href="/pricing" className="text-base text-muted-foreground hover:underline">
            Pricing
          </a>
          <a href="/about" className="text-base text-muted-foreground hover:underline">
            About
          </a>
        </div>
        {/* Right: Buttons (visible on md+) */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <a href="/login">Login</a>
          </Button>
          <Button size="sm" asChild>
            <a href="/signup">Sign Up</a>
          </Button>
        </div>
        {/* Mobile: Nav Links & Login Action */}
        <div className="flex items-center gap-2 md:hidden">
          <a href="/features" className="text-base text-muted-foreground hover:underline">Features</a>
          <a href="/pricing" className="text-base text-muted-foreground hover:underline">Pricing</a>
          <a href="/about" className="text-base text-muted-foreground hover:underline">About</a>
          <Button variant="ghost" size="icon" asChild>
            <a href="/login">
              <span className="sr-only">Login</span>
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path d="M9 14l4-4-4-4M13 10H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
