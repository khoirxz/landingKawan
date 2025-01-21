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
function Article({
  banks,
  services,
  articles
}) {
  return /* @__PURE__ */ jsxs(Layout, { banks, services, children: [
    /* @__PURE__ */ jsx(Head, { title: "Artikel dan Berita" }),
    /* @__PURE__ */ jsx("section", { className: "max-w-screen-xl w-full mx-auto py-10 md:py-16", children: /* @__PURE__ */ jsxs("div", { className: "container px-4 md:px-6 mx-auto flex flex-col items-center text-center space-y-4", children: [
      /* @__PURE__ */ jsx(TitleText, { children: "Artikel dan Berita" }),
      /* @__PURE__ */ jsx(SubtitleText, { children: "Temukan informasi terbaru tentang BPR KAWAN" })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "max-w-screen-xl w-full mx-auto py-10 md:py-16", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-14", children: articles.map((item) => /* @__PURE__ */ jsxs(
      Link,
      {
        href: route("article.show", item.slug),
        className: "flex flex-col items-center space-y-4",
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: `http://127.0.0.1:8000/storage/${item.image}`,
              alt: item.title,
              className: "w-full h-48 bg-gray-200"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center space-y-2", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: item.description })
          ] })
        ]
      },
      item.id
    )) }) })
  ] });
}
export {
  Article as default
};
