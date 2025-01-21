import { Head, Link, useForm } from "@inertiajs/react";

import { MoreHorizontal } from "lucide-react";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";

import AdminLayout from "@/Layouts/AdminLayout";
import { servicesProps } from "@/types/services";

export default function Services({
    services,
}: {
    readonly services: ReadonlyArray<servicesProps>;
}) {
    const { delete: destroy } = useForm();

    const handleDelete = (id: string) => {
        if (confirm("Are you sure you want to delete this service?")) {
            // delete service
            destroy(route("services.destroy", id), {
                method: "post"
            });
        }
    };

    return (
        <AdminLayout>
            <Head title="Dashboard - Services" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="flex px-6 pt-6 justify-end">
                            <Link href={route("services.create")}>
                                <Button>Tambah</Button>
                            </Link>
                        </div>

                        <div className="p-6 flex">
                            <Input placeholder="Cari..." className="text-lg" />
                        </div>

                        <div className="px-6 my-6 space-y-5">
                            {services.length === 0 ? (
                                <div className="text-center text-gray-500">
                                    No services found
                                </div>
                            ) : (
                                services.map((services) => (
                                    <div
                                        className="flex flex-row gap-4"
                                        key={services.id}
                                    >
                                        <div>
                                            <img
                                                src={`http://127.0.0.1:8000/storage/${services.image}`}
                                                alt="Img"
                                                className="w-44 h-32 object-cover"
                                            />
                                        </div>
                                        <div className="flex-1 flex flex-col">
                                            <h1 className="text-xl font-semibold">
                                                {services.name}
                                            </h1>
                                            <p className="text-gray-500">
                                                {services.description.length >
                                                    100
                                                    ? `${services.description.slice(
                                                        0,
                                                        100
                                                    )}...`
                                                    : services.description}
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
                                                                "services.edit",
                                                                services.id
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
                                                                services.id
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
