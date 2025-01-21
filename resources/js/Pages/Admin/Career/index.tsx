import { Head, Link, useForm } from "@inertiajs/react";

import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

import AdminLayout from "@/Layouts/AdminLayout";
import { careerProps } from "@/types/career"

export default function Career({ careers }: { readonly careers: careerProps[] }) {

    return (
        <AdminLayout>
            <Head title="Karir" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="flex px-6 pt-6 justify-end">
                            <Link href={route("careers.create")}>
                                <Button>Tambah</Button>
                            </Link>
                        </div>

                        <div className="p-6 flex">
                            <Input placeholder="Cari..." />
                        </div>

                        <div className="px-6 my-6 space-y-5">
                            {/* Table */}
                            <Table>
                                <TableCaption>{careers.length} results.</TableCaption>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Nama</TableHead>
                                        <TableHead>Deskripsi</TableHead>
                                        <TableHead className="text-center"><p>Aksi</p></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {careers.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={3} className="h-24 text-center">
                                                No results.
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        careers.map((career) => (
                                            <TableRow key={career.id}>
                                                <TableCell>{career.title}</TableCell>
                                                <TableCell>{career.description.slice(0, 20) + (career.description.length > 20 ? "..." : "")}</TableCell>
                                                <TableCell className="text-center">
                                                    <ButtonAction career={career} />
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

export function ButtonAction({ career }: { readonly career: careerProps }) {
    const { delete: destroy } = useForm();
    const handleDelete = (id: number) => {
        if (confirm("Are you sure you want to delete this data?")) {
            // delete service
            destroy(route("career.destroy", id));
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                    <MoreHorizontal />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-36 bg-white">
                <DropdownMenuItem>
                    <Link href={route('careers.edit', String(career.id))} className="inline-block w-full">
                        Edit
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleDelete(Number(career.id))} className="text-red-500 hover:bg-red-100 hover:text-red-500">
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}