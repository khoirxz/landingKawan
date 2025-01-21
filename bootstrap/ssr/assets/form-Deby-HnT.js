import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useState, useEffect } from "react";
import { useForm, Head, Link } from "@inertiajs/react";
import StarterKit from "@tiptap/starter-kit";
import { useEditor } from "@tiptap/react";
import { c as cn, B as Button } from "./button-CjC9Szlf.js";
import { I as Input } from "./input-BfHi4kA4.js";
import { L as Label } from "./label-DvvrMvRP.js";
import { T as Textarea } from "./textarea-0PQu1_yO.js";
import { R as RichEditor } from "./rich-editor-LvmkCVhO.js";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { A as AdminLayout } from "./AdminLayout-Tf--kNfM.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
import "lucide-react";
import "./separator-CfZpDZ-P.js";
import "@radix-ui/react-separator";
import "./sheet-D96Gr-EJ.js";
import "@radix-ui/react-dialog";
import "@radix-ui/react-visually-hidden";
import "./skeleton-m_7ss9_C.js";
import "@radix-ui/react-tooltip";
import "./breadcrumb-HvNy41ef.js";
import "./dropdown-menu-CF6IcL5L.js";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-collapsible";
const Switch = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SwitchPrimitives.Root,
  {
    className: cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsx(
      SwitchPrimitives.Thumb,
      {
        className: cn(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Switch.displayName = SwitchPrimitives.Root.displayName;
function CareerForm({
  career,
  id
}) {
  const [checked, setChecked] = useState(false);
  const editor = useEditor({
    extensions: [StarterKit],
    content: career ? career.content : "<p>Hi there</p>",
    editorProps: {
      attributes: {
        class: "bg-white outline-none border mt-2"
      }
    }
  });
  const { data, setData, post, errors, patch } = useForm({
    title: career ? career.title : "",
    description: career ? career.description : "",
    content: (editor == null ? void 0 : editor.getHTML()) ?? "",
    is_active: checked
  });
  useEffect(() => {
    setData("content", (editor == null ? void 0 : editor.getHTML()) ?? "");
  }, [editor == null ? void 0 : editor.getHTML()]);
  useEffect(() => {
    if (career) {
      setData("is_active", career.is_active === 1);
      setChecked(career.is_active === 1);
    }
  }, [career]);
  const handleChecked = (checked2) => {
    setChecked(checked2);
    setData("is_active", checked2);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      patch(route("careers.update", id));
    } else {
      post(route("careers.store"));
    }
  };
  return /* @__PURE__ */ jsxs(AdminLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Form Karir" }),
    /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "overflow-hidden bg-white shadow-sm sm:rounded-lg", children: [
      /* @__PURE__ */ jsx("div", { className: "flex px-6 py-6 justify-end", children: /* @__PURE__ */ jsx(Link, { href: route("careers.index"), children: /* @__PURE__ */ jsx(Button, { children: "Kembali" }) }) }),
      /* @__PURE__ */ jsx("div", { className: "p-6 bg-white border-b border-gray-200", children: /* @__PURE__ */ jsxs("form", { onSubmit, className: "space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(Switch, { id: "is_active", checked, onCheckedChange: handleChecked }),
          /* @__PURE__ */ jsx(Label, { htmlFor: "is_active", children: "Ketersediaan" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid w-full items-center gap-1.5", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "title", children: "Judul Pekerjaan" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "text",
              id: "title",
              placeholder: "Nama layanan",
              value: data.title,
              name: "name",
              onChange: (e) => setData("title", e.target.value)
            }
          ),
          errors.title && /* @__PURE__ */ jsx("p", { className: "text-red-500", children: errors.title })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid w-full items-center gap-1.5", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "description", children: "Masukan Deskripsi Layanan" }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              id: "description",
              placeholder: "Deskripsi layanan",
              value: data.description,
              onChange: (e) => setData(
                "description",
                e.target.value
              ),
              rows: 4
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm", children: "Maksimal 255 Karakter" }),
          errors.description && /* @__PURE__ */ jsx("p", { className: "text-red-500", children: errors.description })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid w-full items-center gap-1.5", children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm", children: "Masukan kontent Artikel" }),
          /* @__PURE__ */ jsx(RichEditor, { editor })
        ] }),
        /* @__PURE__ */ jsx(Button, { type: "submit", children: "Submit" })
      ] }) })
    ] }) }) })
  ] });
}
export {
  CareerForm as default
};
