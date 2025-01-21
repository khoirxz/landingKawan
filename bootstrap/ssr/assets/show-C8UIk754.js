import { jsxs, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import dayjs from "dayjs";
import { B as Button } from "./button-CjC9Szlf.js";
import { L as Layout, T as TitleText, S as SubtitleText } from "./typography-BFc7aSCR.js";
import { B as Breadcrumb, a as BreadcrumbList, b as BreadcrumbItem, c as BreadcrumbLink, d as BreadcrumbSeparator, e as BreadcrumbPage } from "./breadcrumb-HvNy41ef.js";
import "react";
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
function CareerShow({
  banks,
  services,
  career
}) {
  return /* @__PURE__ */ jsxs(Layout, { banks, services, children: [
    /* @__PURE__ */ jsx(Head, { title: `Karir ${career.title}` }),
    /* @__PURE__ */ jsx("section", { className: "max-w-screen-xl w-full mx-auto py-10 md:py-16", children: /* @__PURE__ */ jsxs("div", { className: "container px-4 md:px-6 mx-auto flex flex-col space-y-4", children: [
      /* @__PURE__ */ jsx(Breadcrumb, { className: "mb-4", children: /* @__PURE__ */ jsxs(BreadcrumbList, { children: [
        /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbLink, { href: route("landing"), children: "Home" }) }),
        /* @__PURE__ */ jsx(BreadcrumbSeparator, {}),
        /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbLink, { href: route("career.page"), children: "Karir" }) }),
        /* @__PURE__ */ jsx(BreadcrumbSeparator, {}),
        /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbPage, { children: career.title }) })
      ] }) }),
      /* @__PURE__ */ jsx(TitleText, { children: career.title }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("span", { className: "text-gray-600 bg-gray-300 px-2 py-1", children: dayjs(career.created_at).format("DD MMMM YYYY") }) }),
      /* @__PURE__ */ jsx(SubtitleText, { children: career.description })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-screen-md w-full mx-auto relative py-5 px-4 md:px-6", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-semibold text-lg md:text-2xl", children: "Detail Pekerjaan" }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "tiptap preview",
          dangerouslySetInnerHTML: { __html: career.content ?? "" }
        }
      ),
      /* @__PURE__ */ jsx(Button, { children: /* @__PURE__ */ jsx(
        "a",
        {
          href: `https://wa.me/${JSON.parse(banks.phone)[0].number}`,
          target: "_blank",
          rel: "noreferrer",
          children: "Lamar sekarang"
        }
      ) })
    ] })
  ] });
}
export {
  CareerShow as default
};
