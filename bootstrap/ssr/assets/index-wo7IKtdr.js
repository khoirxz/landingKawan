import { jsxs, jsx } from "react/jsx-runtime";
import { useForm, Head, Link } from "@inertiajs/react";
import { Plus, MoreHorizontal } from "lucide-react";
import { B as Button } from "./button-CjC9Szlf.js";
import { I as Input } from "./input-BfHi4kA4.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuItem, d as DropdownMenuSeparator } from "./dropdown-menu-CF6IcL5L.js";
import { A as AdminLayout } from "./AdminLayout-Tf--kNfM.js";
import { S as ScrollArea, a as ScrollBar } from "./scroll-area-DwbBZHxM.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-dropdown-menu";
import "./separator-CfZpDZ-P.js";
import "@radix-ui/react-separator";
import "./sheet-D96Gr-EJ.js";
import "@radix-ui/react-dialog";
import "@radix-ui/react-visually-hidden";
import "./skeleton-m_7ss9_C.js";
import "@radix-ui/react-tooltip";
import "./breadcrumb-HvNy41ef.js";
import "@radix-ui/react-collapsible";
import "@radix-ui/react-scroll-area";
function Product({
  products
}) {
  const { delete: deleteService } = useForm();
  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this service?")) {
      deleteService(route("products.destroy", id));
    }
  };
  console.log(products);
  return /* @__PURE__ */ jsxs(
    AdminLayout,
    {
      headerEl: /* @__PURE__ */ jsxs("div", { className: "px-5 pt-6 flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold", children: "Daftar Produk" }),
        /* @__PURE__ */ jsxs(Button, { children: [
          /* @__PURE__ */ jsx(Plus, { className: "mr-2" }),
          " Tambah"
        ] })
      ] }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Dashboard - Produk" }),
        /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl p-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-5 border", children: /* @__PURE__ */ jsx(Input, { placeholder: "Cari", className: "bg-white" }) }),
          /* @__PURE__ */ jsxs(ScrollArea, { className: "min-h-[500px] border", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex p-5 bg-gray-200", children: [
              /* @__PURE__ */ jsx("div", { className: "flex-1", children: "Nama Produk" }),
              /* @__PURE__ */ jsx("div", { children: "Aksi" })
            ] }),
            /* @__PURE__ */ jsx("div", { children: products.map((product) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex flex-row gap-4 border-b p-5",
                children: [
                  /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: `http://127.0.0.1:8000/storage/${product.image}`,
                      alt: "Img",
                      className: "w-44 h-32 object-cover"
                    }
                  ) }),
                  /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col", children: [
                    /* @__PURE__ */ jsx(
                      Link,
                      {
                        href: route(
                          "products.edit",
                          product.id
                        ),
                        children: /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold hover:underline", children: product.name })
                      }
                    ),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: product.description.length > 100 ? `${product.description.slice(
                      0,
                      100
                    )}...` : product.description })
                  ] }),
                  /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [
                    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "ghost", children: /* @__PURE__ */ jsx(MoreHorizontal, {}) }) }),
                    /* @__PURE__ */ jsxs(DropdownMenuContent, { className: "w-36 bg-white", children: [
                      /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(
                        Link,
                        {
                          href: route(
                            "products.edit",
                            product.id
                          ),
                          className: "inline-block w-full",
                          children: "Edit"
                        }
                      ) }),
                      /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
                      /* @__PURE__ */ jsx(
                        DropdownMenuItem,
                        {
                          onClick: () => handleDelete(product.id),
                          className: "text-red-500 hover:bg-red-100 hover:text-red-500",
                          children: "Delete"
                        }
                      )
                    ] })
                  ] }) })
                ]
              },
              product.id
            )) }),
            /* @__PURE__ */ jsx(ScrollBar, { orientation: "vertical" })
          ] })
        ] })
      ]
    }
  );
}
export {
  Product as default
};
