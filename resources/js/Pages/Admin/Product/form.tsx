import { useState, useRef, useEffect } from "react";
import { Head, useForm, Link } from "@inertiajs/react";
import { useEditor } from "@tiptap/react";

import StarterKit from "@tiptap/starter-kit";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { ImageUp, Trash } from "lucide-react";
import RichEditor from "@/Components/rich-editor";

import AdminLayout from "@/Layouts/AdminLayout";
import { servicesProps } from "@/types/services";
import { productProps } from "@/types/product";

export default function ProductForm({
    product,
    services,
    id,
}: {
    readonly services: ReadonlyArray<servicesProps>;
    readonly id: string;
    readonly product: Readonly<productProps>;
}) {
    const editor = useEditor({
        extensions: [StarterKit],
        content: product?.content ?? "<p>Hi there</p>",
        editorProps: {
            attributes: {
                class: "px-4 py-2 bg-white outline-none border mt-2",
            },
        },
    });
    const { data, setData, post, errors, processing } = useForm({
        name: product?.name ?? "",
        description: product?.description ?? "",
        image: null as File | null,
        content: editor?.getHTML() ?? "",
        services_id: product?.services_id ?? "",
        _method: id ? "PUT" : "POST",
    });
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const imageRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setData("content", editor?.getHTML() ?? "");
    }, [editor?.getHTML()]);

    useEffect(() => {
        if (product?.image) {
            setImagePreview(`http://127.0.0.1:8000/storage/${product.image}`);
        }
    }, []);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (id) {
            post(route("products.update", id), {
                preserveScroll: true,
            });
        } else {
            post(route("products.store"), {
                preserveScroll: true,
            });
        }
    };

    return (
        <AdminLayout>
            <Head title="Dashboard - Form Produk" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="flex px-6 pt-6 justify-end">
                            <Link href={route("products.index")}>
                                <Button>Kembali</Button>
                            </Link>
                        </div>
                        {services.length > 0 ? (
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
                                                            setImagePreview(
                                                                null
                                                            );
                                                            setData(
                                                                "image",
                                                                null
                                                            );
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
                                                    Masukan gambar 600x400, max
                                                    2MB
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
                                                        if (
                                                            e.target.files?.[0]
                                                        ) {
                                                            setData(
                                                                "image",
                                                                e.target
                                                                    .files[0]
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
                                    <Select
                                        value={data.services_id}
                                        onValueChange={(e) =>
                                            setData("services_id", e)
                                        }
                                    >
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Kategori Layanan" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {services.map((service) => (
                                                <SelectItem
                                                    value={service.id}
                                                    key={service.id}
                                                >
                                                    {service.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>

                                    <div className="grid w-full items-center gap-1.5">
                                        <Label htmlFor="name">
                                            Masukan Nama Produk
                                        </Label>
                                        <Input
                                            type="text"
                                            id="name"
                                            placeholder="Nama Produk"
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
                                        <Label htmlFor="description">
                                            Masukan Deskripsi Singkat produk
                                        </Label>
                                        <Textarea
                                            id="description"
                                            placeholder="Deskripsi layanan"
                                            value={data.description}
                                            onChange={(e) =>
                                                setData(
                                                    "description",
                                                    e.target.value
                                                )
                                            }
                                            rows={2}
                                        />
                                        <p className="text-gray-500 text-sm">
                                            Maksimal 255 Karakter
                                        </p>
                                        {errors.description && (
                                            <p className="text-red-500">
                                                {errors.description}
                                            </p>
                                        )}
                                    </div>

                                    <div className="grid w-full items-center gap-1.5">
                                        <p className="font-semibold text-sm">
                                            Masukan kontent produk
                                        </p>
                                        <RichEditor editor={editor} />
                                    </div>

                                    <Button type="submit">Submit</Button>
                                </form>
                            </div>
                        ) : (
                            <div>
                                Buat layanan terlebih dahulu, sebelum membuat
                                produk
                            </div>
                        )}
                        {processing && <div>Loading</div>}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
