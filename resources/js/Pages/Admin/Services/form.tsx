import { useState, useRef, useEffect } from "react";
import { Head, useForm, Link } from "@inertiajs/react";

import { Plus, ImageUp, Trash } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";

import AdminLayout from "@/Layouts/AdminLayout";
import { servicesProps } from "@/types/services";

export default function ServicesForm({
    service,
    id,
}: {
    readonly service: Readonly<servicesProps>;
    readonly id: string;
}) {
    const { data, setData, post, errors } = useForm({
        name: service?.name ?? "", // <-- i dont know implement service props
        description: service?.description ?? "", // <-- stop doing this AI
        icon: null as File | null,
        image: null as File | null,
        content: service?.content ? JSON.stringify(service?.content) : "",
        // because laravel like asshole, if you work with formData.
        // you NEED a fucking _method PUT to update data
        _method: id ? "PUT" : "POST",
    });

    const [features, setFeatures] = useState<
        {
            id: number;
            feature: string;
        }[]
    >([]);
    const [iconPreview, setIconPreview] = useState<string | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const imageRef = useRef<HTMLInputElement>(null);
    const iconRef = useRef<HTMLInputElement>(null);

    // convert features to string by useEffect
    useEffect(() => {
        setData("content", JSON.stringify(features));
    }, [features]);

    // useEffect will execute after this component is mounted
    useEffect(() => {
        if (id) {
            let parsedContent = [];
            if (service?.content) {
                parsedContent =
                    typeof service.content === "string"
                        ? JSON.parse(service.content)
                        : service.content;
            }
            setFeatures(parsedContent);
        }
    }, [id]);

    useEffect(() => {
        // set icon and image preview
        if (service?.icon) {
            setIconPreview(`http://127.0.0.1:8000/storage/${service.icon}`);
        }

        if (service?.image) {
            setImagePreview(`http://127.0.0.1:8000/storage/${service.image}`);
        }
    }, []);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (id) {
            post(route("services.update", id), {
                preserveScroll: true,
            });
        } else {
            // create new service
            console.log("data post:", data);
            post(route("services.store"), {
                preserveScroll: true,
                onSuccess: () => {
                    setData("name", "");
                    setData("description", "");
                    setData("icon", null);
                    setData("image", null);
                    setFeatures([]);
                },
            });
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <AdminLayout>
            <Head title="Dashboard - Form Services" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="flex px-6 py-6 justify-end">
                            <Link href={route("services.index")}>
                                <Button>Kembali</Button>
                            </Link>
                        </div>

                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex flex-col space-y-4 mb-5">
                                {/* Icon */}
                                <div className="space-y-2">
                                    <p className="text-sm font-semibold">
                                        Icon
                                    </p>
                                    {/* Preview Icon */}
                                    {iconPreview && (
                                        <div className="w-11 h-11 relative">
                                            <img
                                                src={iconPreview}
                                                alt="icon"
                                                className="w-11 h-11"
                                            />
                                            <button
                                                onClick={() => {
                                                    setIconPreview(null);
                                                    setData("icon", null);
                                                }}
                                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent hover:bg-white/40 p-1 rounded-full"
                                            >
                                                <Plus className="hover:text-black text-transparent" />
                                            </button>
                                        </div>
                                    )}

                                    {!iconPreview && (
                                        <Button
                                            size="icon"
                                            variant="outline"
                                            onClick={() => {
                                                iconRef.current?.click();
                                            }}
                                        >
                                            <Plus />
                                        </Button>
                                    )}

                                    <p className="text-gray-500 text-sm">
                                        Masukan icon maksimal 15x15 pixel
                                    </p>
                                    <input
                                        ref={iconRef}
                                        className="hidden"
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => {
                                            if (e.target.files?.[0]) {
                                                setData(
                                                    "icon",
                                                    e.target.files[0]
                                                );
                                                setIconPreview(
                                                    URL.createObjectURL(
                                                        e.target.files[0]
                                                    )
                                                );
                                            }
                                        }}
                                        name="icon"
                                    />
                                    {errors.icon && (
                                        <p className="text-red-500">
                                            {errors.icon}
                                        </p>
                                    )}
                                </div>
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
                                    <Label htmlFor="name">
                                        Masukan Nama Layanan
                                    </Label>
                                    <Input
                                        type="text"
                                        id="name"
                                        placeholder="Nama layanan"
                                        value={data.name}
                                        name="name"
                                        onChange={handleInputChange}
                                    />
                                    {errors.name && (
                                        <p className="text-red-500">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                <div className="grid w-full items-center gap-1.5">
                                    <Label htmlFor="description">
                                        Masukan Deskripsi Layanan
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
                                        rows={4}
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

                                <div>
                                    <p className="text-sm font-semibold mb-2">
                                        Fitur layanan
                                    </p>
                                    <div className="flex justify-end mb-4">
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => {
                                                setFeatures([
                                                    ...features,
                                                    {
                                                        id: Date.now(),
                                                        feature: "",
                                                    },
                                                ]);
                                            }}
                                        >
                                            Tambah fitur
                                        </Button>
                                    </div>

                                    <div>
                                        {features.map((feature, index) => (
                                            <div
                                                key={feature.id}
                                                className="flex items-center gap-4 justify-center mb-3"
                                            >
                                                <Input
                                                    placeholder="Fitur layanan"
                                                    value={feature.feature}
                                                    onChange={(e) => {
                                                        setFeatures(
                                                            features.map(
                                                                (item) =>
                                                                    item.id ===
                                                                    feature.id
                                                                        ? {
                                                                              ...item,
                                                                              feature:
                                                                                  e
                                                                                      .target
                                                                                      .value,
                                                                          }
                                                                        : item
                                                            )
                                                        );
                                                    }}
                                                />
                                                <Button
                                                    type="button"
                                                    variant="outline"
                                                    onClick={() => {
                                                        setFeatures(
                                                            features.filter(
                                                                (item) =>
                                                                    item.id !==
                                                                    feature.id
                                                            )
                                                        );
                                                    }}
                                                >
                                                    Hapus
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <Button type="submit">Submit</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
