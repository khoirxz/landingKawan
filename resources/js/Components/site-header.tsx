import React from "react";
import { Link } from "@inertiajs/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/Components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MobileNav } from "./mobile-nav";

import { servicesProps } from "@/types/services";

export function SiteHeader({
    services,
}: {
    readonly services: servicesProps[];
}) {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
                isScrolled ? "border-border shadow-sm" : "border-transparent"
            )}
        >
            <div className="container flex h-16 items-center mx-auto px-0 lg:px-5">
                <Sheet>
                    <SheetTrigger className="lg:hidden" asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="mr-6 lg:hidden"
                        >
                            <span className="sr-only">
                                Toggle navigation menu
                            </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-6 w-6"
                            >
                                <line x1="4" x2="20" y1="12" y2="12" />
                                <line x1="4" x2="20" y1="6" y2="6" />
                                <line x1="4" x2="20" y1="18" y2="18" />
                            </svg>
                        </Button>
                    </SheetTrigger>
                    <SheetContent
                        side="left"
                        className="w-screen sm:w-[540px] p-0"
                    >
                        <MobileNav />
                    </SheetContent>
                </Sheet>
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <img
                        src="/assets/logo.png"
                        alt="logo"
                        className="w-8 h-8 object-contain md:hidden"
                    />
                    <img
                        src="/assets/logofull.png"
                        alt="logo"
                        className="w-28 object-contain hidden md:block"
                    />
                </Link>
                <NavigationMenu className="hidden lg:flex">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="bg-transparent text-base font-medium">
                                Layanan
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="w-[540px] bg-white shadow-lg">
                                    <div className="grid gap-6 p-3 md:grid-cols-3">
                                        {services.map((service) => (
                                            <Link
                                                key={service.id}
                                                href={route(
                                                    "service.page",
                                                    service.slug
                                                )}
                                                className="group block space-y-2 p-4 transition-colors hover:bg-muted"
                                            >
                                                <div className="text-lg font-semibold leading-none group-hover:text-primary">
                                                    {service.name}
                                                </div>
                                                <div className="line-clamp-2 text-sm text-muted-foreground group-hover:text-primary/90">
                                                    {service.description.slice(
                                                        0,
                                                        32
                                                    )}
                                                    ...
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                className={cn(
                                    navigationMenuTriggerStyle(),
                                    "text-base font-medium bg-transparent cursor-pointer"
                                )}
                                asChild
                            >
                                <Link href={route("simulation.page")}>
                                    Simulasi
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                className={cn(
                                    navigationMenuTriggerStyle(),
                                    "text-base font-medium bg-transparent cursor-pointer"
                                )}
                                asChild
                            >
                                <Link href={route("career.page")}>Karir</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                className={cn(
                                    navigationMenuTriggerStyle(),
                                    "text-base font-medium bg-transparent cursor-pointer"
                                )}
                                asChild
                            >
                                <Link href={route("about.page")}>Tentang</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                        Gabung sekarang
                    </Button>
                </div>
            </div>
        </header>
    );
}
