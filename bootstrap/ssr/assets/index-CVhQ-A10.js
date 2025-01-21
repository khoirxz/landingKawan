import { jsxs, jsx } from "react/jsx-runtime";
import { Head, Link } from "@inertiajs/react";
import { L as Layout, T as TitleText, S as SubtitleText } from "./typography-BFc7aSCR.js";
import "react";
import "./button-CjC9Szlf.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-navigation-menu";
import "lucide-react";
import "./sheet-D96Gr-EJ.js";
import "@radix-ui/react-dialog";
import "@radix-ui/react-visually-hidden";
import "./scroll-area-DwbBZHxM.js";
import "@radix-ui/react-scroll-area";
import "@radix-ui/react-accordion";
import "react-icons/fa6";
function Service({
  banks,
  metainfo,
  services,
  products
}) {
  return /* @__PURE__ */ jsxs(Layout, { banks, services, children: [
    /* @__PURE__ */ jsx(Head, { title: metainfo.name }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-screen-xl w-full mx-auto relative", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: `http://127.0.0.1:8000/storage/${metainfo.image}`,
          alt: "bpr kawan event",
          className: "max-h-[500px] w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "h-full absolute inset-0 bg-black opacity-50" }),
      /* @__PURE__ */ jsxs("div", { className: "containe px-4 md:px-6 mx-auto flex flex-col items-center text-center space-y-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2", children: [
        /* @__PURE__ */ jsx(TitleText, { color: "text-white", children: metainfo.name }),
        /* @__PURE__ */ jsx(SubtitleText, { color: "text-white", children: "Berikut produk dan layanan yang kami sediakan." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-screen-xl w-full my-12 mx-auto relative", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1", children: products.length === 0 ? /* @__PURE__ */ jsx("div", { className: "flex flex-col justify-center items-center", children: /* @__PURE__ */ jsx("h1", { className: "text-3xl", children: "Tidak ada produk" }) }) : products.map((item, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: `grid grid-cols-1 lg:grid-cols-2 gap-5 ${index % 2 === 0 ? "lg:grid-cols-2-reverse" : ""}`,
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              className: "h-72 p-3 lg:p-0 w-full object-cover",
              alt: item.name,
              src: `http://127.0.0.1:8000/storage/${item.image}`
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center space-y-2 p-3 lg:p-0", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-semibold", children: item.name }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: item.description }),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: route("product.page", item.slug),
                className: "text-primary hover:underline",
                children: "Baca selengkapnya..."
              }
            )
          ] })
        ]
      },
      item.id
    )) }) })
  ] });
}
export {
  Service as default
};
