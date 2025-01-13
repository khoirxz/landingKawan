import { useState, useRef, useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";

import { Plus, Trash } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import AddressField from "./Partials/AddressField";
import PhoneField from "./Partials/PhoneField";
import EmailField from "./Partials/EmailField";

import { bankProps } from "@/types/bank";

export default function Banks({
    bank,
    id,
}: {
    readonly bank: bankProps;
    readonly id: string;
}) {
    const { data, setData, post, processing, errors } = useForm({
        id,
        name: bank?.name ?? "",
        description: bank?.description ?? "",
        address: bank?.address ? JSON.stringify(bank?.address) : "",
        phone: bank?.phone ? JSON.stringify(bank?.phone) : "",
        email: bank?.email ? JSON.stringify(bank?.email) : "",
        logo: null as File | null,
        license_number: bank?.license_number ?? "",
        _method: "PUT",
    });
    const [addresses, setAddresses] = useState<
        {
            id: number;
            title: string;
            address: string;
        }[]
    >([]);
    const [phones, setPhones] = useState<
        {
            id: number;
            number: string;
        }[]
    >([]);
    const [emails, setEmails] = useState<
        {
            id: number;
            email: string;
        }[]
    >([]);
    const [logoPreview, setLogoPreview] = useState<string | null>(null);
    const logoRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setData("address", JSON.stringify(addresses));
        setData("phone", JSON.stringify(phones));
        setData("email", JSON.stringify(emails));
    }, [addresses, phones, emails]);

    useEffect(() => {
        if (bank?.logo) {
            setLogoPreview(`http://127.0.0.1:8000/storage/${bank?.logo}`);
        }

        const parseData = (data: string) => 
            typeof data === "string" ? JSON.parse(data) : data;

        setAddresses(parseData(bank?.address ?? []));
        setPhones(parseData(bank?.phone ?? []));
        setEmails(parseData(bank?.email ?? []));
    }, [bank]);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        post(route("banks.update", id), {
            preserveScroll: true,
        });
    };

    console.log(id)

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Pengaturan Umum
                </h2>
            }
        >
            <Head title="Dashboard - Setting" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="flex px-6 py-6 justify-end">
                            <Link href={route("article-categories.index")}>
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
                                    {logoPreview && (
                                        <div className="w-11 h-11 relative">
                                            <img
                                                src={logoPreview}
                                                alt="icon"
                                                className="w-11 h-11"
                                            />
                                            <button
                                                onClick={() => {
                                                    setLogoPreview(null);
                                                    setData("logo", null);
                                                }}
                                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent hover:bg-white/40 p-1 rounded-full"
                                            >
                                                <Trash className="hover:text-red-500 text-transparent" />
                                            </button>
                                        </div>
                                    )}

                                    {!logoPreview && (
                                        <Button
                                            size="icon"
                                            variant="outline"
                                            onClick={() => {
                                                logoRef.current?.click();
                                            }}
                                        >
                                            <Plus />
                                        </Button>
                                    )}

                                    <p className="text-gray-500 text-sm">
                                        Masukan icon maksimal 15x15 pixel
                                    </p>
                                    <input
                                        ref={logoRef}
                                        className="hidden"
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => {
                                            if (e.target.files?.[0]) {
                                                setData(
                                                    "logo",
                                                    e.target.files[0]
                                                );
                                                setLogoPreview(
                                                    URL.createObjectURL(
                                                        e.target.files[0]
                                                    )
                                                );
                                            }
                                        }}
                                        name="icon"
                                    />
                                    {errors.logo && (
                                        <p className="text-red-500">
                                            {errors.logo}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <form onSubmit={onSubmit} className="space-y-8">
                                <div className="grid w-full items-center gap-1.5">
                                    <Label htmlFor="name">Nama Website</Label>
                                    <Input
                                        type="text"
                                        id="name"
                                        placeholder="Nama website"
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
                                        Masukan deskripsi website
                                    </Label>
                                    <Textarea
                                        id="description"
                                        placeholder="Deskripsi singkan tentang website"
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

                                <div className="grid w-full items-center gap-1.5">
                                    <Label htmlFor="name">Nomer IJIN</Label>
                                    <Input
                                        type="text"
                                        id="license_number"
                                        placeholder="Nomer IJIN"
                                        value={data.license_number}
                                        name="license_number"
                                        onChange={(e) =>
                                            setData(
                                                "license_number",
                                                e.target.value
                                            )
                                        }
                                    />
                                    {errors.license_number && (
                                        <p className="text-red-500">
                                            {errors.license_number}
                                        </p>
                                    )}
                                </div>

                                {/* Address */}
                                <div>
                                    <p className="text-sm font-semibold mb-2">
                                        Alamat
                                    </p>
                                    <div className="flex justify-end mb-4">
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => {
                                                setAddresses([
                                                    ...addresses,
                                                    {
                                                        id: Date.now(),
                                                        title: "",
                                                        address: "",
                                                    },
                                                ]);
                                            }}
                                        >
                                            Tambah
                                        </Button>
                                    </div>

                                    <div>
                                        <AddressField
                                            addresses={addresses}
                                            setAddresses={setAddresses}
                                        />
                                    </div>
                                </div>
                                {/* No. Telepon */}
                                <div>
                                    <p className="text-sm font-semibold mb-2">
                                        No. Telepon
                                    </p>
                                    <div className="flex justify-end mb-4">
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => {
                                                setPhones([
                                                    ...phones,
                                                    {
                                                        id: Date.now(),
                                                        number: "",
                                                    },
                                                ]);
                                            }}
                                        >
                                            Tambah
                                        </Button>
                                    </div>

                                    <div>
                                        <PhoneField
                                            phones={phones}
                                            setPhones={setPhones}
                                        />
                                    </div>
                                </div>
                                {/* Email */}
                                <div>
                                    <p className="text-sm font-semibold mb-2">
                                        Email
                                    </p>
                                    <div className="flex justify-end mb-4">
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => {
                                                setEmails([
                                                    ...emails,
                                                    {
                                                        id: Date.now(),
                                                        email: "",
                                                    },
                                                ]);
                                            }}
                                        >
                                            Tambah
                                        </Button>
                                    </div>

                                    <div>
                                        <EmailField
                                            emails={emails}
                                            setEmails={setEmails}
                                        />
                                    </div>
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
    );
}
