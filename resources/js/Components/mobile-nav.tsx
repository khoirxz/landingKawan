import { Link } from "@inertiajs/react";

import { ScrollArea } from "@/Components/ui/scroll-area";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion";

import { servicesProps } from "@/types/services";

export function MobileNav({
    services,
}: {
    readonly services: servicesProps[];
}) {
    return (
        <ScrollArea className="h-full">
            <div className="flex flex-col space-y-4 px-5 py-10 z-0">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="products">
                        <AccordionTrigger className="text-base font-medium">
                            Produk
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="flex flex-col space-y-2">
                                {services.map((service) => (
                                    <Link
                                        key={service.id}
                                        href={route(
                                            "service.page",
                                            service.slug
                                        )}
                                        className="block space-y-1 p-2 hover:bg-muted"
                                    >
                                        <div className="font-medium text-primary">
                                            {service.name}
                                        </div>
                                        <div className="line-clamp-2 text-sm text-muted-foreground">
                                            {service.description.slice(0, 32)}
                                            ...
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Link
                    href="/simulasi"
                    className="text-base font-medium p-1 hover:text-primary"
                >
                    Simulasi
                </Link>
                <Link
                    href="/karir"
                    className="text-base font-medium p-1 hover:text-primary"
                >
                    Karir
                </Link>
                <Link
                    href="/kontak"
                    className="text-base font-medium p-1 hover:text-primary"
                >
                    Kontak
                </Link>
                <Link
                    href="/tentang"
                    className="text-base font-medium p-1 hover:text-primary"
                >
                    Tentang
                </Link>
            </div>
        </ScrollArea>
    );
}
