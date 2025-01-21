import { Head, Link, useForm } from "@inertiajs/react";

import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { teamProps } from "@/types/team";

export default function Team({ teams }: { readonly teams: teamProps[] }) {
    const { delete: deleteService } = useForm();

    const handleDelete = (id: number) => {
        if (confirm("Are you sure you want to delete this data?")) {
            // delete service
            deleteService(route("teams.destroy", id));
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Team
                </h2>
            }
        >
            <Head title="Dashboard - Team" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="flex px-6 pt-6 justify-end">
                            <Link href={route("teams.create")}>
                                <Button>Tambah</Button>
                            </Link>
                        </div>

                        <div className="p-6 flex">
                            <Input placeholder="Cari..." className="text-lg" />
                        </div>

                        <div className="px-6 my-6 space-y-5">
                            {teams.length === 0 ? (
                                <div className="text-center text-gray-500">
                                    No data found
                                </div>
                            ) : (
                                teams.map((team) => (
                                    <div
                                        className="flex flex-row gap-4"
                                        key={team.id}
                                    >
                                        <div>
                                            <img
                                                src={`http://127.0.0.1:8000/storage/${team.image}`}
                                                alt="Img"
                                                className="w-44 h-32 object-cover"
                                            />
                                        </div>
                                        <div className="flex-1 flex flex-col">
                                            <h1 className="text-xl font-semibold">
                                                {team.name}
                                            </h1>
                                            <p className="text-gray-500">
                                                {team.position}
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
                                                                "teams.edit",
                                                                team.id
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
                                                                team.id
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
        </AuthenticatedLayout>
    );
}
