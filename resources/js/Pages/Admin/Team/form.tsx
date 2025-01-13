import { useState, useRef, useEffect } from "react";
import { Head, useForm, Link } from "@inertiajs/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { ImageUp, Trash } from "lucide-react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { teamProps } from "@/types/team";

export default function TeamForm({ id, team }: { readonly id: string, readonly team: teamProps }) {
    const { data, setData, post, errors, processing } = useForm({
        name: team.name ?? "",
        position: team.position ?? "",
        image: null as File | null,
        _method: id ? "PUT" : "POST",
    });
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const imageRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (team.image) {
            setImagePreview(`http://127.0.0.1:8000/storage/${team.image}`);
        }
    }, []);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (id) {
            post(route("teams.update", id), {
                preserveScroll: true,
            });
        } else {
            post(route("teams.store"), {
                preserveScroll: true,
            });
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
                            <Link href={route("teams.index")}>
                                <Button>Kembali</Button>
                            </Link>
                        </div>

                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex flex-col space-y-4 mb-5">
                                {/* Image */}
                                <div className="space-y-2">
                                    <p className="text-sm font-semibold">
                                        Gambar
                                    </p>
                                    {/* Preview Image */}
                                    {imagePreview && (
                                        <div className="w-full relative">
                                            <img
                                                src={imagePreview}
                                                alt="Preview"
                                                className="max-w-[500px] object-cover mx-auto"
                                            />
                                            <div className="absolute group top-0 w-full h-full flex items-center justify-center hover:bg-black/40 transition duration-300 ease-in-out">
                                                <Button
                                                    onClick={() => {
                                                        setImagePreview(null);
                                                        setData("image", null);
                                                    }}
                                                    size="icon"
                                                    className="rounded-full p-2 group-hover:bg-red-200/40 bg-transparent text-transparent shadow-none"
                                                >
                                                    <Trash className="group-hover:text-red-900" />
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                    {imagePreview === null && (
                                        <Button
                                            onClick={() => {
                                                imageRef.current?.click();
                                            }}
                                            variant="outline"
                                            className="w-full h-56 flex flex-col items-center justify-center"
                                        >
                                            <div className="w-11 h-11">
                                                <ImageUp
                                                    style={{
                                                        width: "44px",
                                                        height: "44px",
                                                    }}
                                                />
                                            </div>
                                            <p className="text-gray-500">
                                                Masukan gambar 600x400, max 2MB
                                            </p>
                                            {errors.image && (
                                                <p className="text-red-500">
                                                    {errors.image}
                                                </p>
                                            )}
                                            <input
                                                ref={imageRef}
                                                className="hidden"
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => {
                                                    if (e.target.files?.[0]) {
                                                        setData(
                                                            "image",
                                                            e.target.files[0]
                                                        );
                                                        setImagePreview(
                                                            URL.createObjectURL(
                                                                e.target
                                                                    .files[0]
                                                            )
                                                        );
                                                    }
                                                }}
                                                name="image"
                                            />
                                        </Button>
                                    )}
                                </div>
                            </div>

                            <form onSubmit={onSubmit} className="space-y-8">
                                <div className="grid w-full items-center gap-1.5">
                                    <Label htmlFor="name">Masukan Nama</Label>
                                    <Input
                                        type="text"
                                        id="name"
                                        placeholder="Nama"
                                        value={data.name}
                                        name="name"
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                    />
                                    {errors.name && (
                                        <p className="text-red-500">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                <div className="grid w-full items-center gap-1.5">
                                    <Label htmlFor="name">Masukan Posisi</Label>
                                    <Input
                                        type="text"
                                        id="position"
                                        placeholder="Posisi atau jabatan"
                                        value={data.position}
                                        name="position"
                                        onChange={(e) =>
                                            setData("position", e.target.value)
                                        }
                                    />
                                    {errors.position && (
                                        <p className="text-red-500">
                                            {errors.position}
                                        </p>
                                    )}
                                </div>

                                <Button disabled={processing} type="submit">Submit</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
