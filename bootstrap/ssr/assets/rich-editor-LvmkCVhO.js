import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { EditorContent, BubbleMenu } from "@tiptap/react";
import { Bold, Italic, Strikethrough, Heading1, Heading2, Heading3, List } from "lucide-react";
function RichEditor({ editor }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    editor && /* @__PURE__ */ jsx(PopupMenu, { editor }),
    /* @__PURE__ */ jsx(EditorContent, { editor })
  ] });
}
function PopupMenu({ editor }) {
  return /* @__PURE__ */ jsx(BubbleMenu, { editor, tippyOptions: { duration: 100 }, children: /* @__PURE__ */ jsxs("span", { className: "inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: () => editor.chain().focus().toggleBold().run(),
        className: "inline-block p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative",
        children: /* @__PURE__ */ jsx(
          "span",
          {
            className: editor.isActive("bold") ? "is-active" : "text-gray-400",
            children: /* @__PURE__ */ jsx(Bold, { className: "w-4 h-4" })
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: () => editor.chain().focus().toggleItalic().run(),
        className: "inline-block p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative",
        children: /* @__PURE__ */ jsx(
          "span",
          {
            className: editor.isActive("italic") ? "is-active" : "text-gray-400",
            children: /* @__PURE__ */ jsx(Italic, { className: "w-4 h-4" })
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: () => editor.chain().focus().toggleStrike().run(),
        className: "inline-block p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative",
        children: /* @__PURE__ */ jsx(
          "span",
          {
            className: editor.isActive("strike") ? "is-active" : "text-gray-400",
            children: /* @__PURE__ */ jsx(Strikethrough, { className: "w-4 h-4" })
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
        className: "inline-block p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative",
        children: /* @__PURE__ */ jsx(
          "span",
          {
            className: editor.isActive("heading", { level: 1 }) ? "is-active" : "text-gray-400",
            children: /* @__PURE__ */ jsx(Heading1, { className: "w-4 h-4" })
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
        className: "inline-block p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative",
        children: /* @__PURE__ */ jsx(
          "span",
          {
            className: editor.isActive("heading", { level: 2 }) ? "is-active" : "text-gray-400",
            children: /* @__PURE__ */ jsx(Heading2, { className: "w-4 h-4" })
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
        className: "inline-block p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative",
        children: /* @__PURE__ */ jsx(
          "span",
          {
            className: editor.isActive("heading", { level: 3 }) ? "is-active" : "text-gray-400",
            children: /* @__PURE__ */ jsx(Heading3, { className: "w-4 h-4" })
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: () => editor.chain().focus().toggleBulletList().run(),
        className: "inline-block p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative",
        children: /* @__PURE__ */ jsx(
          "span",
          {
            className: editor.isActive("bulletList") ? "is-active" : "text-gray-400",
            children: /* @__PURE__ */ jsx(List, { className: "w-4 h-4" })
          }
        )
      }
    )
  ] }) });
}
export {
  RichEditor as R
};
