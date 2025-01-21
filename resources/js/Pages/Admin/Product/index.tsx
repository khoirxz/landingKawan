import { Head, Link, useForm } from "@inertiajs/react";

import { MoreHorizontal, Plus } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";

import AdminLayout from "@/Layouts/AdminLayout";
import { productProps } from "@/types/product";
import { ScrollArea, ScrollBar } from "@/Components/ui/scroll-area";

export default function Product({
    products,
}: {
    readonly products: productProps[];
}) {
    const { delete: deleteService } = useForm();

    const handleDelete = (id: string) => {
        if (confirm("Are you sure you want to delete this service?")) {
            // delete service
            deleteService(route("products.destroy", id));
        }
    };

    console.log(products);

    return (
        <AdminLayout
            headerEl={
                <div className="px-5 pt-6 flex items-center justify-between">
                    <h1 className="text-3xl font-bold">Daftar Produk</h1>

                    <Button>
                        <Plus className="mr-2" /> Tambah
                    </Button>
                </div>
            }
        >
            <Head title="Dashboard - Produk" />

            <div className="mx-auto max-w-7xl p-5">
                <div className="p-5 border">
                    <Input placeholder="Cari" className="bg-white" />
                </div>

                <ScrollArea className="min-h-[500px] border">
                    <div className="flex p-5 bg-gray-200">
                        <div className="flex-1">Nama Produk</div>
                        <div>Aksi</div>
                    </div>
                    <div>
                        {products.map((product) => (
                            <div
                                className="flex flex-row gap-4 border-b p-5"
                                key={product.id}
                            >
                                <div>
                                    <img
                                        src={`http://127.0.0.1:8000/storage/${product.image}`}
                                        alt="Img"
                                        className="w-44 h-32 object-cover"
                                    />
                                </div>
                                <div className="flex-1 flex flex-col">
                                    <Link
                                        href={route(
                                            "products.edit",
                                            product.id
                                        )}
                                    >
                                        <h1 className="text-xl font-semibold hover:underline">
                                            {product.name}
                                        </h1>
                                    </Link>

                                    <p className="text-gray-500">
                                        {product.description.length > 100
                                            ? `${product.description.slice(
                                                  0,
                                                  100
                                              )}...`
                                            : product.description}
                                    </p>
                                </div>
                                <div>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost">
                                                <MoreHorizontal />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="w-36 bg-white">
                                            <DropdownMenuItem>
                                                <Link
                                                    href={route(
                                                        "products.edit",
                                                        product.id
                                                    )}
                                                    className="inline-block w-full"
                                                >
                                                    Edit
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem
                                                onClick={() =>
                                                    handleDelete(product.id)
                                                }
                                                className="text-red-500 hover:bg-red-100 hover:text-red-500"
                                            >
                                                Delete
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </div>
                        ))}
                    </div>
                    <ScrollBar orientation="vertical" />
                </ScrollArea>
            </div>
        </AdminLayout>
    );
}
