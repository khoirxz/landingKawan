import { jsxs, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
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
function Product({
  banks,
  data,
  services
}) {
  return /* @__PURE__ */ jsxs(Layout, { banks, services, children: [
    /* @__PURE__ */ jsx(Head, { title: data.name }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-screen-xl w-full mx-auto relative max-h-[500px]", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: `${route("landing")}storage/${data.image}`,
          alt: "bpr kawan event",
          className: "h-full object-cover max-h-[500px] w-full"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "h-full absolute inset-0 bg-black opacity-50" }),
      /* @__PURE__ */ jsxs("div", { className: "containe px-4 md:px-6 mx-auto flex flex-col items-center text-center space-y-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2", children: [
        /* @__PURE__ */ jsx(TitleText, { color: "text-white", children: data.name }),
        /* @__PURE__ */ jsx(SubtitleText, { color: "text-white", children: data.description })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "section",
      {
        className: "max-w-screen-xl w-full mx-auto relative py-5 px-4 md:px-6 tiptap preview",
        dangerouslySetInnerHTML: { __html: data.content ?? "" }
      }
    )
  ] });
}
export {
  Product as default
};
