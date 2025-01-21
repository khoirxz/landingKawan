import { useState, useEffect } from "react";
import { Head, useForm, Link } from "@inertiajs/react";
import StarterKit from "@tiptap/starter-kit";
import { useEditor } from "@tiptap/react";

import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";
import RichEditor from "@/Components/rich-editor";
import { Switch } from "@/Components/ui/switch";

import AdminLayout from "@/Layouts/AdminLayout";
import { careerProps } from "@/types/career";

export default function CareerForm({
    career,
    id,
}: {
    readonly career: careerProps;
    readonly id: number;
}) {
    const [checked, setChecked] = useState(false);
    const editor = useEditor({
        extensions: [StarterKit],
        content: career ? career.content : "<p>Hi there</p>",
        editorProps: {
            attributes: {
                class: "bg-white outline-none border mt-2",
            },
        },
    });
    const { data, setData, post, errors, patch } = useForm({
        title: career ? career.title : "",
        description: career ? career.description : "",
        content: editor?.getHTML() ?? "",
        is_active: checked,
    });

    useEffect(() => {
        setData("content", editor?.getHTML() ?? "");
    }, [editor?.getHTML()]);

    useEffect(() => {
        if (career) {
            setData("is_active", career.is_active === 1);
            setChecked(career.is_active === 1);
        }
    }, [career]);

    const handleChecked = (checked: boolean) => {
        setChecked(checked);
        setData("is_active", checked);
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (id) {
            patch(route('careers.update', id));
        } else {
            post(route('careers.store'));
        }
    };

    return (
        <AdminLayout>
            <Head title="Form Karir" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="flex px-6 py-6 justify-end">
                            <Link href={route("careers.index")}>
                                <Button>Kembali</Button>
                            </Link>
                        </div>

                        <div className="p-6 bg-white border-b border-gray-200">
                            <form onSubmit={onSubmit} className="space-y-8">
                                <div className="flex items-center space-x-2">
                                    <Switch id="is_active" checked={checked} onCheckedChange={handleChecked} />
                                    <Label htmlFor="is_active">Ketersediaan</Label>
                                </div>

                                <div className="grid w-full items-center gap-1.5">
                                    <Label htmlFor="title">
                                        Judul Pekerjaan
                                    </Label>
                                    <Input
                                        type="text"
                                        id="title"
                                        placeholder="Nama layanan"
                                        value={data.title}
                                        name="name"
                                        onChange={(e) =>
                                            setData("title", e.target.value)
                                        }
                                    />
                                    {errors.title && (
                                        <p className="text-red-500">
                                            {errors.title}
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
                                <div className="grid w-full items-center gap-1.5">
                                    <p className="font-semibold text-sm">
                                        Masukan kontent Artikel
                                    </p>
                                    <RichEditor editor={editor} />
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
