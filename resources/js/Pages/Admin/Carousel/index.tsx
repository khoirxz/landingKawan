import { Head, Link, useForm } from "@inertiajs/react";

import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

import AdminLayout from "@/Layouts/AdminLayout";
import { carouselProps } from "@/types/carousel";

export default function Carousel({
    carousels,
}: {
    readonly carousels: carouselProps[];
}) {
    const { delete: destroy } = useForm();

    const handleDelete = (id: number) => {
        if (confirm("Are you sure you want to delete this data?")) {
            // delete service
            destroy(route("carousels.destroy", id));
        }
    };

    return (
        <AdminLayout>
            <Head title="Kategori Artikel" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="flex px-6 pt-6 justify-end">
                            <Link href={route("carousels.create")}>
                                <Button>Tambah</Button>
                            </Link>
                        </div>

                        <div className="p-6 flex">
                            <Input placeholder="Cari..." className="text-lg" />
                        </div>

                        <div className="px-6 my-6 space-y-5">
                            {/* Table */}
                            {carousels.length === 0 ? (
                                <p>Belum ada data</p>
                            ) : (
                                carousels.map((carousel) => (
                                    <div
                                        className="flex flex-row gap-4"
                                        key={carousel.id}
                                    >
                                        <div>
                                            <img
                                                src={`http://127.0.0.1:8000/storage/${carousel.image}`}
                                                alt="Img"
                                                className="w-44 h-32 object-cover"
                                            />
                                        </div>
                                        <div className="flex-1 flex flex-col">
                                            <h1 className="text-xl font-semibold">
                                                {carousel.title}
                                            </h1>
                                            <p className="text-gray-500">
                                                {carousel.description.length >
                                                100
                                                    ? `${carousel.description.slice(
                                                          0,
                                                          100
                                                      )}...`
                                                    : carousel.description}
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
                                                                "carousels.edit",
                                                                carousel.id
                                                            )}
                                                            className="inline-block w-full"
                                                        >
                                                            Edit
                                                        </Link>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem
                                                        onClick={() =>
                                                            handleDelete(
                                                                carousel.id
                                                            )
                                                        }
                                                        className="text-red-500 hover:bg-red-100 hover:text-red-500"
                                                    >
                                                        Delete
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
