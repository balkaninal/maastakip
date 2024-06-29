"use client";

import { useState, useEffect, JSX, SVGProps } from "react";
import Link from "next/link";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
  DrawerFooter,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { SITE_NAME } from "../config/constants";
import {
  Icon,
  IconCurrencyLira,
  IconFileInvoice,
  IconHeartHandshake,
  IconHelp,
  IconHome,
  IconInvoice,
  IconLogin,
  IconMoneybag,
  IconUserPlus,
} from "@tabler/icons-react";
import AuthDrawer from "./AuthDrawer";

// Menü öğeleri için bir tür tanımlayın
interface MenuItem {
  name: string;
  href: string;
  children: MenuItem[];
  description?: string;
  icon?: Icon;
}

// Menü öğelerini tanımlayın
const menuItems: MenuItem[] = [
  { name: "Ana Sayfa", href: "/", children: [], icon: IconHome },
  {
    name: "Maaş işlemleri",
    href: "#",
    icon: IconMoneybag,
    children: [
      {
        name: "Brütten Net Maaş Hesaplama",
        href: "/brutten-net-maas-hesaplama",
        description: "Brütten net maaşınızı hesaplayın.",
        icon: IconCurrencyLira,
        children: [],
      },
      {
        name: "Netten Brüt Maaş Hesaplama",
        href: "/netten-brut-maas-hesaplama",
        description: "Net maaşınızı brüt maaşa dönüştürün.",
        icon: IconInvoice,
        children: [],
      },
    ],
  },
  {
    name: "Destek Ol",
    href: "/destek",
    children: [],
    icon: IconHeartHandshake,
  },
];

export default function Component() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const scroll = window.scrollY;
    const shrinkNavBar = scroll >= 50;
    if (shrinkNavBar !== isScrolled) {
      setIsScrolled(shrinkNavBar);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex w-full items-center justify-between bg-white px-4 transition-all duration-300 ${
        isScrolled ? "h-12 md:h-16 shadow-md" : "h-16 md:h-24 shadow-none"
      }`}
    >
      <div className="container w-full flex items-center justify-between bg-white">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon
            className={`h-6 w-6 transition-all duration-300 ${
              isScrolled ? "scale-90" : "scale-100"
            }`}
          />
          <span
            className={`font-bold transition-all duration-300 text-primary ${
              isScrolled ? "text-sm" : "text-lg"
            }`}
          >
            {SITE_NAME}
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <Drawer>
            <DrawerTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent className="bg-background p-4">
              <DrawerHeader>
                <DrawerTitle>Maaş Takip Menü</DrawerTitle>
              </DrawerHeader>
              <div className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <div key={item.name} className="relative">
                    <Link
                      href={item.href}
                      className="flex w-full items-center py-2 text-md font-medium px-4 rounded-md"
                      prefetch={false}
                    >
                      {item.name}
                    </Link>
                    {item.children.length > 0 && (
                      <div className="top-0 ml-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="flex w-full items-center py-2 text-sm font-medium px-4 rounded-md"
                            prefetch={false}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <DrawerFooter>
                <AuthDrawer defaultTab={"login"}></AuthDrawer>
                <AuthDrawer defaultTab={"register"}></AuthDrawer>
                <DrawerClose asChild>
                  <Button variant="link">Kapat</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          <nav className="hidden items-center gap-4 lg:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.children.length > 0 ? (
                      <NavigationMenuTrigger
                        className={`text-sm font-medium transition-all duration-300 flex flex-row gap-1`}
                      >
                        {item.icon && <item.icon size={14}></item.icon>}
                        {item.name}
                      </NavigationMenuTrigger>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                      >
                        <div className="text-sm font-medium leading-none flex flex-row gap-1">
                          {item.icon && <item.icon size={14}></item.icon>}
                          {item.name}
                        </div>
                      </Link>
                    )}
                    <NavigationMenuContent>
                      <div className="grid w-[400px] p-2">
                        {item.children.map((child) => (
                          <NavigationMenuLink key={child.name} asChild>
                            <Link
                              href={child.href}
                              className="group flex items-center flex-row h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                            >
                              {child.icon && (
                                <div className="mr-2">
                                  <child.icon size={32}></child.icon>
                                </div>
                              )}
                              <div className="">
                                <div className="text-sm font-medium leading-none">
                                  {child.name}
                                </div>
                                <div className="ml-2 mt-1 line-clamp-2 text-xs leading-snug text-muted-foreground">
                                  {child.description}
                                </div>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
          <div className="hidden items-center gap-2 lg:flex">
            <AuthDrawer defaultTab={"login"}></AuthDrawer>
            <AuthDrawer defaultTab={"register"}></AuthDrawer>
          </div>
        </div>
      </div>
    </header>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
