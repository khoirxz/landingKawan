import { jsxs, jsx } from "react/jsx-runtime";
import { useForm, Head, Link } from "@inertiajs/react";
import { B as Button } from "./button-CjC9Szlf.js";
import { L as Label } from "./label-DvvrMvRP.js";
import { I as Input } from "./input-BfHi4kA4.js";
import { T as Textarea } from "./textarea-0PQu1_yO.js";
import { A as Authenticated } from "./AuthenticatedLayout-CS6DsjTK.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
import "./ApplicationLogo-xMpxFOcX.js";
import "@headlessui/react";
function ArticleCategoryForm({
  category: articleCategory,
  id
}) {
  const { data, setData, post, patch, processing, errors, reset } = useForm({
    name: articleCategory ? articleCategory.name : "",
    description: articleCategory ? articleCategory.description : ""
  });
  const onSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      patch(route("article-categories.update", id), {
        preserveScroll: true
      });
    } else {
      post(route("article-categories.store"), {
        preserveScroll: true,
        onSuccess: () => {
          reset();
        }
      });
    }
  };
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      header: /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold leading-tight text-gray-800", children: "Kategori Artikel Form" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Kategori Artikel" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "overflow-hidden bg-white shadow-sm sm:rounded-lg", children: [
          /* @__PURE__ */ jsx("div", { className: "flex px-6 py-6 justify-end", children: /* @__PURE__ */ jsx(Link, { href: route("article-categories.index"), children: /* @__PURE__ */ jsx(Button, { children: "Kembali" }) }) }),
          /* @__PURE__ */ jsx("div", { className: "p-6 bg-white border-b border-gray-200", children: /* @__PURE__ */ jsxs("form", { onSubmit, className: "space-y-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid w-full items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Masukan nama kategori Artikel" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "text",
                  id: "name",
                  placeholder: "Nama artikel",
                  value: data.name,
                  name: "name",
                  onChange: (e) => setData("name", e.target.value)
                }
              ),
              errors.name && /* @__PURE__ */ jsx("p", { className: "text-red-500", children: errors.name })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid w-full items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "description", children: "Masukan Deskripsi tentang kategori artikel" }),
              /* @__PURE__ */ jsx(
                Textarea,
                {
                  id: "description",
                  placeholder: "Deskripsi kategori artikel",
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
            processing && /* @__PURE__ */ jsx("p", { className: "text-red-500", children: "Processing..." }),
            /* @__PURE__ */ jsx(Button, { type: "submit", children: "Simpan" })
          ] }) })
        ] }) }) })
      ]
    }
  );
}
export {
  ArticleCategoryForm as default
};
