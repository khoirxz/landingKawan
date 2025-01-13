import {Link} from "@inertiajs/react"

import { Button } from "@/Components/ui/button";
import { ScrollArea } from "@/Components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion";

const products = [
  {
    title: "Tabungan",
    description:
      "Simpan uang Anda dengan aman dan dapatkan berbagai keuntungan menarik",
    href: "/products/savings",
  },
  {
    title: "Deposito",
    description:
      "Investasi dengan bunga kompetitif dan fleksibilitas periode yang sesuai kebutuhan",
    href: "/products/deposits",
  },
  {
    title: "Pinjaman",
    description: "Solusi pembiayaan untuk berbagai kebutuhan Anda",
    href: "/products/loans",
  },
];

export function MobileNav() {
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
                {products.map((product) => (
                  <Link
                    key={product.title}
                    href={product.href}
                    className="block space-y-1 p-2 hover:bg-muted">
                    <div className="font-medium text-primary">
                      {product.title}
                    </div>
                    <div className="line-clamp-2 text-sm text-muted-foreground">
                      {product.description}
                    </div>
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Link
          href="/simulasi"
          className="text-base font-medium p-1 hover:text-primary">
          Simulasi
        </Link>
        <Link
          href="/karir"
          className="text-base font-medium p-1 hover:text-primary">
          Karir
        </Link>
        <Link
          href="/kontak"
          className="text-base font-medium p-1 hover:text-primary">
          Kontak
        </Link>
        <Link
          href="/tentang"
          className="text-base font-medium p-1 hover:text-primary">
          Tentang
        </Link>
        <Button className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
          Gabung sekarang
        </Button>
      </div>
    </ScrollArea>
  );
}
