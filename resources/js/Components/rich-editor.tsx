import { EditorContent, BubbleMenu } from "@tiptap/react";
import {
    Heading1,
    Strikethrough,
    Italic,
    Bold,
    Heading2,
    Heading3,
    List,
} from "lucide-react";

export default function RichEditor({ editor }: { readonly editor: any }) {
    return (
        <>
            {editor && <PopupMenu editor={editor} />}
            <EditorContent editor={editor} />
        </>
    );
}

function PopupMenu({ editor }: { readonly editor: any }) {
    return (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
            <span className="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm">
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className="inline-block p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative"
                >
                    <span
                        className={
                            editor.isActive("bold")
                                ? "is-active"
                                : "text-gray-400"
                        }
                    >
                        <Bold className="w-4 h-4" />
                    </span>
                </button>

                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className="inline-block p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative"
                >
                    <span
                        className={
                            editor.isActive("italic")
                                ? "is-active"
                                : "text-gray-400"
                        }
                    >
                        <Italic className="w-4 h-4" />
                    </span>
                </button>

                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className="inline-block p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative"
                >
                    <span
                        className={
                            editor.isActive("strike")
                                ? "is-active"
                                : "text-gray-400"
                        }
                    >
                        <Strikethrough className="w-4 h-4" />
                    </span>
                </button>

                <button
                    type="button"
                    onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 1 }).run()
                    }
                    className="inline-block p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative"
                >
                    <span
                        className={
                            editor.isActive("heading", { level: 1 })
                                ? "is-active"
                                : "text-gray-400"
                        }
                    >
                        <Heading1 className="w-4 h-4" />
                    </span>
                </button>
                <button
                    type="button"
                    onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 2 }).run()
                    }
                    className="inline-block p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative"
                >
                    <span
                        className={
                            editor.isActive("heading", { level: 2 })
                                ? "is-active"
                                : "text-gray-400"
                        }
                    >
                        <Heading2 className="w-4 h-4" />
                    </span>
                </button>
                <button
                    type="button"
                    onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 3 }).run()
                    }
                    className="inline-block p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative"
                >
                    <span
                        className={
                            editor.isActive("heading", { level: 3 })
                                ? "is-active"
                                : "text-gray-400"
                        }
                    >
                        <Heading3 className="w-4 h-4" />
                    </span>
                </button>

                <button
                    type="button"
                    onClick={() =>
                        editor.chain().focus().toggleBulletList().run()
                    }
                    className="inline-block p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative"
                >
                    <span
                        className={
                            editor.isActive("bulletList")
                                ? "is-active"
                                : "text-gray-400"
                        }
                    >
                        <List className="w-4 h-4" />
                    </span>
                </button>
            </span>
        </BubbleMenu>
    );
}
