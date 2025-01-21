import { jsxs, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import dayjs from "dayjs";
import { L as Layout, T as TitleText } from "./typography-BFc7aSCR.js";
import { B as Breadcrumb, a as BreadcrumbList, b as BreadcrumbItem, c as BreadcrumbLink, d as BreadcrumbSeparator, e as BreadcrumbPage } from "./breadcrumb-HvNy41ef.js";
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
function ArticleShow({
  banks,
  services,
  article
}) {
  return /* @__PURE__ */ jsxs(Layout, { banks, services, children: [
    /* @__PURE__ */ jsx(Head, { title: article.title }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-screen-md w-full mx-auto relative flex flex-col gap-4 my-10 px-4 md:px-6", children: [
      /* @__PURE__ */ jsx(Breadcrumb, { className: "mb-4", children: /* @__PURE__ */ jsxs(BreadcrumbList, { children: [
        /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbLink, { href: route("landing"), children: "Home" }) }),
        /* @__PURE__ */ jsx(BreadcrumbSeparator, {}),
        /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbLink, { href: route("article.page"), children: "Artikel" }) }),
        /* @__PURE__ */ jsx(BreadcrumbSeparator, {}),
        /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbPage, { children: article.title }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("span", { className: "bg-blue-500/30 text-blue-500 py-1 px-2", children: article.category.name }) }),
      /* @__PURE__ */ jsx(TitleText, { children: article.title }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: dayjs(article.created_at).format("D MMMM YYYY") }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-screen-md w-full mx-auto relative", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: `http://127.0.0.1:8000/storage/${article.image}`,
        alt: "bpr kawan event",
        className: "max-h-[500px] w-full h-full object-cover px-4 md:px-6"
      }
    ) }),
    /* @__PURE__ */ jsx(
      "section",
      {
        className: "max-w-screen-md w-full mx-auto relative py-5 px-4 md:px-6 tiptap preview",
        dangerouslySetInnerHTML: { __html: article.content ?? "" }
      }
    )
  ] });
}
export {
  ArticleShow as default
};
