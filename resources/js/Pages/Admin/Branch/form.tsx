import { Head, useForm, Link } from "@inertiajs/react";

import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";

import AdminLayout from "@/Layouts/AdminLayout";
import { branchProps } from "@/types/branch";

export default function BranchForm({
    branch,
    id,
}: {
    readonly branch: branchProps;
    readonly id: number;
}) {
    const { data, setData, post, patch, processing, errors, reset } = useForm({
        name: branch ? branch.name : "",
        address: branch ? branch.address : "",
    });

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (id) {
            patch(route("branches.update", id), {
                preserveScroll: true,
            });
        } else {
            post(route("branches.store"), {
                preserveScroll: true,
                onSuccess: () => {
                    reset();
                },
            });
        }
    };

    return (
        <AdminLayout>
            <Head title="Branch" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="flex px-6 py-6 justify-end">
                            <Link href={route("branches.index")}>
                                <Button>Kembali</Button>
                            </Link>
                        </div>

                        <div className="p-6 bg-white border-b border-gray-200">
                            <form onSubmit={onSubmit} className="space-y-8">
                                <div className="grid w-full items-center gap-1.5">
                                    <Label htmlFor="name">Nama cabang</Label>
                                    <Input
                                        type="text"
                                        id="name"
                                        placeholder="Nama cabang/kantor"
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
                                    <Label htmlFor="address">
                                        Alamat cabang
                                    </Label>
                                    <Textarea
                                        id="address"
                                        placeholder="Jl. Pahlawan no 18"
                                        value={data.address}
                                        name="address"
                                        onChange={(e) =>
                                            setData("address", e.target.value)
                                        }
                                    />
                                    {errors.address && (
                                        <p className="text-red-500">
                                            {errors.address}
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
        </AdminLayout>
    );
}
