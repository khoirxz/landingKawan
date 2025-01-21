import { jsxs, jsx } from "react/jsx-runtime";
import { Head, Link } from "@inertiajs/react";
import dayjs from "dayjs";
import { B as Button } from "./button-CjC9Szlf.js";
import { L as Layout, T as TitleText, S as SubtitleText } from "./typography-BFc7aSCR.js";
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
function Career({
  banks,
  services,
  careers
}) {
  console.log(careers);
  return /* @__PURE__ */ jsxs(Layout, { banks, services, children: [
    /* @__PURE__ */ jsx(Head, { title: "Karir" }),
    /* @__PURE__ */ jsx("section", { className: "max-w-screen-xl w-full mx-auto py-10 md:py-16", children: /* @__PURE__ */ jsxs("div", { className: "container px-4 md:px-6 mx-auto flex flex-col space-y-4", children: [
      /* @__PURE__ */ jsx(TitleText, { children: "Karir" }),
      /* @__PURE__ */ jsx(SubtitleText, { children: "Temukan karir anda bersama BPR KAWAN" })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "max-w-screen-xl w-full mx-auto py-10 md:py-16", children: /* @__PURE__ */ jsx("div", { className: "container px-4 md:px-6 mx-auto flex flex-col space-y-4", children: careers.length <= 0 ? /* @__PURE__ */ jsxs("div", { className: "container px-4 md:px-6 mx-auto flex flex-col space-y-4", children: [
      /* @__PURE__ */ jsx(TitleText, { children: "Tidak ada data" }),
      /* @__PURE__ */ jsx(SubtitleText, { children: "Tidak ada data karir yang tersedia" })
    ] }) : careers.map((item) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex flex-col space-y-4 border p-4",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsx("h1", { className: "font-semibold text-lg", children: item.title }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-600 text-sm", children: dayjs(item.created_at).format(
              "DD-MMMM-YYYY"
            ) }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: item.description })
          ] }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("career.show", item.slug),
              children: /* @__PURE__ */ jsx(Button, { children: "Selengkapnya.." })
            }
          ) })
        ]
      },
      item.id
    )) }) })
  ] });
}
export {
  Career as default
};
