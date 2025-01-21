
import { Head, useForm, Link } from "@inertiajs/react";

import { Button } from "@/Components/ui/button";
import { Label } from '@/Components/ui/label';
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { ArticleCategoriesProps } from "@/types/article";

export default function ArticleCategoryForm({ category: articleCategory, id }: { readonly category: ArticleCategoriesProps, readonly id: string }) {
    const { data, setData, post, patch, processing, errors, reset } = useForm({
        name: articleCategory ? articleCategory.name : '',
        description:  articleCategory ? articleCategory.description : '',
    });

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (id) {
            patch(route("article-categories.update", id), {
                preserveScroll: true,
            });
        } else {
            post(route("article-categories.store"), {
                preserveScroll: true,
                onSuccess: () => {
                    reset();
                },
            });
        }
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Kategori Artikel Form
                </h2>
            }>

            <Head title="Kategori Artikel" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="flex px-6 py-6 justify-end">
                            <Link href={route("article-categories.index")}>
                                <Button>Kembali</Button>
                            </Link>
                        </div>

                        <div className="p-6 bg-white border-b border-gray-200">
                            <form onSubmit={onSubmit} className="space-y-8">
                                <div className="grid w-full items-center gap-1.5">
                                    <Label htmlFor="name">
                                        Masukan nama kategori Artikel
                                    </Label>
                                    <Input
                                        type="text"
                                        id="name"
                                        placeholder="Nama artikel"
                                        value={data.name}
                                        name="name"
                                        onChange={(e) => setData("name", e.target.value)}
                                    />
                                    {errors.name && (
                                        <p className="text-red-500">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                <div className="grid w-full items-center gap-1.5">
                                    <Label htmlFor="description">
                                        Masukan Deskripsi tentang kategori artikel
                                    </Label>
                                    <Textarea
                                        id="description"
                                        placeholder="Deskripsi kategori artikel"
                                        value={data.description}
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                        rows={4}
                                    />
                                    <p className="text-gray-500 text-sm">Maksimal 255 Karakter</p>
                                    {errors.description && (
                                        <p className="text-red-500">
                                            {errors.description}
                                        </p>
                                    )}
                                </div>

                                {processing && (
                                    <p className="text-red-500">
                                        Processing...
                                    </p>
                                )}

                                <Button type="submit">Simpan</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )

}