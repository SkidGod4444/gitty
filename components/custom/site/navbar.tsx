"use client";

import * as React from "react";
import * as Popover from "@radix-ui/react-popover";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function SiteNavbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-stone-200 backdrop-blur-lg py-2 px-4 lg:px-6">
      <div className="flex h-14 w-full max-w-7xl items-center justify-between gap-4 mx-auto">
        {/* Left: Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 select-none cursor-pointer"
        >
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

        {/* Center: Nav Links (desktop) */}
        <div className="hidden flex-1 justify-center md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>FEATURES</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink className="cursor-pointer">
                    Link
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/demo">DEMO</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/pricing">Pricing</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/manifesto">Manifesto</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right: Auth buttons (desktop) */}
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="outline">Login</Button>
          <Button>Sign Up</Button>
        </div>

        {/* Mobile: Menu button + popover */}
        <div className="flex items-center gap-2 md:hidden">
          <Popover.Root>
            <Popover.Trigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-label="Open navigation menu"
              >
                <MenuIcon className="size-5" aria-hidden="true" />
              </Button>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content
                sideOffset={8}
                align="end"
                className="z-50 mt-1.5 w-56 rounded-lg border bg-popover p-2 shadow-lg outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
              >
                <div className="flex flex-col gap-1">
                  <Button
                    variant="ghost"
                    asChild
                    
                    className="justify-start w-full shadow-none"
                  >
                    <Link href="/features">Features</Link>
                  </Button>
                  <Button
                    variant="ghost"
                    asChild
                    
                    className="justify-start w-full shadow-none"
                  >
                    <Link href="/demo">Demo</Link>
                  </Button>
                  <Button
                    variant="ghost"
                    asChild
                    
                    className="justify-start w-full shadow-none"
                  >
                    <Link href="/pricing">Pricing</Link>
                  </Button>
                  <Button
                    variant="ghost"
                    asChild
                    className="justify-start w-full shadow-none"
                  >
                    <Link href="/manifesto">Manifesto</Link>
                  </Button>
                </div>
                <div className="mt-2 border-t pt-2 flex flex-col gap-2">
                  <Button variant="outline" className="w-full">
                    Login
                  </Button>
                  <Button className="w-full">Sign Up</Button>
                </div>
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </div>
      </div>
    </nav>
  );
}
