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
function Simulation({
  banks,
  services
}) {
  return /* @__PURE__ */ jsxs(Layout, { banks, services, children: [
    /* @__PURE__ */ jsx(Head, { title: "Simulasi" }),
    /* @__PURE__ */ jsx("section", { className: "max-w-screen-xl w-full mx-auto py-10 md:py-16", children: /* @__PURE__ */ jsxs("div", { className: "container px-4 md:px-6 mx-auto flex flex-col items-center text-center space-y-4", children: [
      /* @__PURE__ */ jsx(TitleText, { children: "Simulasi" }),
      /* @__PURE__ */ jsx(SubtitleText, { children: "Simulasikan pembiayaan Anda dengan kalkulator simulasi dibawah ini." })
    ] }) })
  ] });
}
export {
  Simulation as default
};
