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
import { A as Authenticated } from "./AuthenticatedLayout-CS6DsjTK.js";
import { R as RichEditor } from "./rich-editor-LvmkCVhO.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
import "@radix-ui/react-select";
import "./ApplicationLogo-xMpxFOcX.js";
import "@headlessui/react";
function ArticleForm({
  id,
  categories,
  article
}) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: article ? article.content : "<p>Hi there</p>",
    editorProps: {
      attributes: {
        class: "bg-white outline-none border mt-2"
      }
    }
  });
  const { data, setData, post, errors, processing } = useForm({
    title: article ? article.title : "",
    description: article ? article.description : "",
    content: (editor == null ? void 0 : editor.getHTML()) ?? "",
    image: null,
    category_id: article ? article.category_id : 0,
    _method: id ? "PUT" : "POST"
  });
  const [imagePreview, setImagePreview] = useState(null);
  const imageRef = useRef(null);
  useEffect(() => {
    setData("content", (editor == null ? void 0 : editor.getHTML()) ?? "");
  }, [editor == null ? void 0 : editor.getHTML()]);
  useEffect(() => {
    if (article == null ? void 0 : article.image) {
      setImagePreview(`http://127.0.0.1:8000/storage/${article.image}`);
    }
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      post(route("articles.update", id), {
        preserveScroll: true
      });
    } else {
      post(route("articles.store"), {
        preserveScroll: true
      });
    }
  };
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      header: /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold leading-tight text-gray-800", children: "Artikel" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Dashboard - Form Artikel" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "overflow-hidden bg-white shadow-sm sm:rounded-lg", children: [
          /* @__PURE__ */ jsx("div", { className: "flex px-6 pt-6 justify-end", children: /* @__PURE__ */ jsx(Link, { href: route("articles.index"), children: /* @__PURE__ */ jsx(Button, { children: "Kembali" }) }) }),
          categories.length > 0 ? /* @__PURE__ */ jsxs("div", { className: "p-6 bg-white border-b border-gray-200", children: [
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
                  value: data.category_id.toString(),
                  onValueChange: (e) => setData("category_id", parseInt(e)),
                  children: [
                    /* @__PURE__ */ jsx(SelectTrigger, { className: "w-[180px]", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Kategori artikel" }) }),
                    /* @__PURE__ */ jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsx(SelectItem, { value: "0", children: "Pilih Kategori" }),
                      categories.map((category) => /* @__PURE__ */ jsx(
                        SelectItem,
                        {
                          value: category.id.toString(),
                          children: category.name
                        },
                        category.id
                      ))
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "grid w-full items-center gap-1.5", children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Masukan Nama Artikel" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    type: "text",
                    id: "title",
                    placeholder: "Nama Artikel",
                    value: data.title,
                    name: "title",
                    onChange: (e) => setData("title", e.target.value)
                  }
                ),
                errors.title && /* @__PURE__ */ jsx("p", { className: "text-red-500", children: errors.title })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid w-full items-center gap-1.5", children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "description", children: "Masukan Deskripsi Singkat Artikel" }),
                /* @__PURE__ */ jsx(
                  Textarea,
                  {
                    id: "description",
                    placeholder: "Deskripsi singkat artikel",
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
                /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm", children: "Masukan kontent Artikel" }),
                /* @__PURE__ */ jsx(RichEditor, { editor })
              ] }),
              /* @__PURE__ */ jsx(Button, { type: "submit", children: "Submit" })
            ] }),
            processing && /* @__PURE__ */ jsx("div", { children: "Loading" })
          ] }) : /* @__PURE__ */ jsx("div", { className: "p-6 bg-white border-b border-gray-200", children: /* @__PURE__ */ jsx("p", { children: "Buat kategori terlebih dahulu, sebelum membuat artikel" }) })
        ] }) }) })
      ]
    }
  );
}
export {
  ArticleForm as default
};
