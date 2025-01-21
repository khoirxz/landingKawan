import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { useForm, Head, Link } from "@inertiajs/react";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { B as Button } from "./button-CjC9Szlf.js";
import { I as Input } from "./input-BfHi4kA4.js";
import { L as Label } from "./label-DvvrMvRP.js";
import { T as Textarea } from "./textarea-0PQu1_yO.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-DdQgjCxA.js";
import { Trash, ImageUp } from "lucide-react";
import { R as RichEditor } from "./rich-editor-LvmkCVhO.js";
import { A as AdminLayout } from "./AdminLayout-Tf--kNfM.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
import "@radix-ui/react-select";
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
function ProductForm({
  product,
  services,
  id
}) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: (product == null ? void 0 : product.content) ?? "<p>Hi there</p>",
    editorProps: {
      attributes: {
        class: "px-4 py-2 bg-white outline-none border mt-2"
      }
    }
  });
  const { data, setData, post, errors, processing } = useForm({
    name: (product == null ? void 0 : product.name) ?? "",
    description: (product == null ? void 0 : product.description) ?? "",
    image: null,
    content: (editor == null ? void 0 : editor.getHTML()) ?? "",
    services_id: (product == null ? void 0 : product.services_id) ?? "",
    _method: id ? "PUT" : "POST"
  });
  const [imagePreview, setImagePreview] = useState(null);
  const imageRef = useRef(null);
  useEffect(() => {
    setData("content", (editor == null ? void 0 : editor.getHTML()) ?? "");
  }, [editor == null ? void 0 : editor.getHTML()]);
  useEffect(() => {
    if (product == null ? void 0 : product.image) {
      setImagePreview(`http://127.0.0.1:8000/storage/${product.image}`);
    }
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      post(route("products.update", id), {
        preserveScroll: true
      });
    } else {
      post(route("products.store"), {
        preserveScroll: true
      });
    }
  };
  return /* @__PURE__ */ jsxs(AdminLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Dashboard - Form Produk" }),
    /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "overflow-hidden bg-white shadow-sm sm:rounded-lg", children: [
      /* @__PURE__ */ jsx("div", { className: "flex px-6 pt-6 justify-end", children: /* @__PURE__ */ jsx(Link, { href: route("products.index"), children: /* @__PURE__ */ jsx(Button, { children: "Kembali" }) }) }),
      services.length > 0 ? /* @__PURE__ */ jsxs("div", { className: "p-6 bg-white border-b border-gray-200", children: [
        /* @__PURE__ */ jsx("div", { className: "flex flex-col space-y-4 mb-5", children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold", children: "Gambar" }),
          imagePreview && /* @__PURE__ */ jsxs("div", { className: "w-full relative", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: imagePreview,
                alt: "Preview",
                className: "max-w-[500px] object-cover mx-auto"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute group top-0 w-full h-full flex items-center justify-center hover:bg-black/40 transition duration-300 ease-in-out", children: /* @__PURE__ */ jsx(
              Button,
              {
                onClick: () => {
                  setImagePreview(
                    null
                  );
                  setData(
                    "image",
                    null
                  );
                },
                size: "icon",
                className: "rounded-full p-2 group-hover:bg-red-200/40 bg-transparent text-transparent shadow-none",
                children: /* @__PURE__ */ jsx(Trash, { className: "group-hover:text-red-900" })
              }
            ) })
          ] }),
          imagePreview === null && /* @__PURE__ */ jsxs(
            Button,
            {
              onClick: () => {
                var _a;
                (_a = imageRef.current) == null ? void 0 : _a.click();
              },
              variant: "outline",
              className: "w-full h-56 flex flex-col items-center justify-center",
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-11 h-11", children: /* @__PURE__ */ jsx(
                  ImageUp,
                  {
                    style: {
                      width: "44px",
                      height: "44px"
                    }
                  }
                ) }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: "Masukan gambar 600x400, max 2MB" }),
                errors.image && /* @__PURE__ */ jsx("p", { className: "text-red-500", children: errors.image }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    ref: imageRef,
                    className: "hidden",
                    type: "file",
                    accept: "image/*",
                    onChange: (e) => {
                      var _a;
                      if ((_a = e.target.files) == null ? void 0 : _a[0]) {
                        setData(
                          "image",
                          e.target.files[0]
                        );
                        setImagePreview(
                          URL.createObjectURL(
                            e.target.files[0]
                          )
                        );
                      }
                    },
                    name: "image"
                  }
                )
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxs("form", { onSubmit, className: "space-y-8", children: [
          /* @__PURE__ */ jsxs(
            Select,
            {
              value: data.services_id,
              onValueChange: (e) => setData("services_id", e),
              children: [
                /* @__PURE__ */ jsx(SelectTrigger, { className: "w-[180px]", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Kategori Layanan" }) }),
                /* @__PURE__ */ jsx(SelectContent, { children: services.map((service) => /* @__PURE__ */ jsx(
                  SelectItem,
                  {
                    value: service.id,
                    children: service.name
                  },
                  service.id
                )) })
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "grid w-full items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Masukan Nama Produk" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                type: "text",
                id: "name",
                placeholder: "Nama Produk",
                value: data.name,
                name: "name",
                onChange: (e) => setData("name", e.target.value)
              }
            ),
            errors.name && /* @__PURE__ */ jsx("p", { className: "text-red-500", children: errors.name })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid w-full items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "description", children: "Masukan Deskripsi Singkat produk" }),
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
                rows: 2
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm", children: "Maksimal 255 Karakter" }),
            errors.description && /* @__PURE__ */ jsx("p", { className: "text-red-500", children: errors.description })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid w-full items-center gap-1.5", children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm", children: "Masukan kontent produk" }),
            /* @__PURE__ */ jsx(RichEditor, { editor })
          ] }),
          /* @__PURE__ */ jsx(Button, { type: "submit", children: "Submit" })
        ] })
      ] }) : /* @__PURE__ */ jsx("div", { children: "Buat layanan terlebih dahulu, sebelum membuat produk" }),
      processing && /* @__PURE__ */ jsx("div", { children: "Loading" })
    ] }) }) })
  ] });
}
export {
  ProductForm as default
};
