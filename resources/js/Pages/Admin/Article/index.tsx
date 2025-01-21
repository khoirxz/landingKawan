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

import AdminLayout from "@/Layouts/AdminLayout";
import { ArticleProps } from "@/types/article";

export default function Article({
    articles,
}: {
    readonly articles: ArticleProps[];
}) {
    const { delete: deleteService } = useForm();

    const handleDelete = (id: string) => {
        if (confirm("Are you sure you want to delete this service?")) {
            // delete service
            deleteService(route("articles.destroy", id));
        }
    };

    return (
        <AdminLayout>
            <Head title="Dashboard - Artikel" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="flex px-6 pt-6 justify-end">
                            <Link href={route("articles.create")}>
                                <Button>Tambah</Button>
                            </Link>
                        </div>

                        <div className="p-6 flex">
                            <Input placeholder="Cari..." className="text-lg" />
                        </div>

                        <div className="px-6 my-6 space-y-5">
                            {articles.length === 0 ? (
                                <div className="text-center text-gray-500">
                                    No article found
                                </div>
                            ) : (
                                articles.map((article) => (
                                    <div
                                        className="flex flex-row gap-4"
                                        key={article.id}
                                    >
                                        <div>
                                            <img
                                                src={`http://127.0.0.1:8000/storage/${article.image}`}
                                                alt="Img"
                                                className="w-44 h-32 object-cover"
                                            />
                                        </div>
                                        <div className="flex-1 flex flex-col">
                                            <h1 className="text-xl font-semibold">
                                                {article.title}
                                            </h1>
                                            <p className="text-gray-500">
                                                {article.description.length >
                                                100
                                                    ? `${article.description.slice(
                                                          0,
                                                          100
                                                      )}...`
                                                    : article.description}
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
                                                                "articles.edit",
                                                                article.id
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
                                                                article.id
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
