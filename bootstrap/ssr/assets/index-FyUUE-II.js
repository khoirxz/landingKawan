import { jsxs, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { Landmark } from "lucide-react";
import { L as Layout, T as TitleText, S as SubtitleText } from "./typography-BFc7aSCR.js";
import { S as SiteContact } from "./site-contact-DjOkPXxp.js";
import "react";
import "./button-CjC9Szlf.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-navigation-menu";
import "./sheet-D96Gr-EJ.js";
import "@radix-ui/react-dialog";
import "@radix-ui/react-visually-hidden";
import "./scroll-area-DwbBZHxM.js";
import "@radix-ui/react-scroll-area";
import "@radix-ui/react-accordion";
import "react-icons/fa6";
import "./separator-CfZpDZ-P.js";
import "@radix-ui/react-separator";
function About({
  banks,
  services,
  branches
}) {
  console.log(branches);
  return /* @__PURE__ */ jsxs(Layout, { banks, services, children: [
    /* @__PURE__ */ jsx(Head, { title: "About" }),
    /* @__PURE__ */ jsx("section", { className: "max-w-screen-xl w-full mx-auto pt-10 md:pt-16", children: /* @__PURE__ */ jsxs("div", { className: "container px-4 md:px-6 mx-auto flex flex-col space-y-4", children: [
      /* @__PURE__ */ jsx(TitleText, { children: "Tentang kami" }),
      /* @__PURE__ */ jsx(SubtitleText, { children: "About pembiayaan Anda dengan kalkulator simulasi dibawah ini." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "max-w-screen-xl w-full mx-auto py-10 md:py-16", children: /* @__PURE__ */ jsxs("div", { className: "container px-4 md:px-6 mx-auto flex flex-col space-y-4", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-semibold text-lg md:text-2xl", children: "Profil" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "PT. BPR KAWAN adalah sebuah lembaga jasa keuangan yang telah memiliki pengalaman di bidang keuangan. dibantu dengan tenaga profesional sehingga dijamin kepuasan pelanggan." })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-screen-xl w-full mx-auto py-10 md:py-16 flex flex-col gap-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "container px-4 md:px-6 mx-auto flex flex-col space-y-4", children: [
        /* @__PURE__ */ jsx("h1", { className: "font-semibold text-lg", children: "Visi" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Menjadikan Bank yang tumbuh dan berkembang secara wajar dengan didukung sumberdaya manusia yang profesional." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "container px-4 md:px-6 mx-auto flex flex-col space-y-4", children: [
        /* @__PURE__ */ jsx("h1", { className: "font-semibold text-lg", children: "Misi" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Mendorong dan mengembangkan usaha mikro, kecil, dan menengah (UMKM) menjadi lebih maju, produktif, dan mampu melayani kebutuhan ekonomi masyarakat dengan mengembangkan serta meningkatkan kemampuan dan keterampilan sumber daya manusia menjadi tenaga kerja yang handal dan profesional." })
      ] })
    ] }),
    branches.length <= 0 ? null : /* @__PURE__ */ jsx("section", { className: "max-w-screen-xl w-full mx-auto py-10 md:py-16 flex flex-col gap-5", children: /* @__PURE__ */ jsxs("div", { className: "container px-4 md:px-6 mx-auto flex flex-col space-y-4", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-semibold text-lg", children: "Cabang" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 lg:grid-cols-3 gap-5", children: branches.map((branch) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex flex-col space-y-3 p-5 border border-gray-200 rounded-lg",
          children: [
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Landmark, { className: "w-10 h-10" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h1", { className: "font-semibold text-lg", children: branch.name }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: branch.address })
            ] })
          ]
        },
        branch.id
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "max-w-screen-xl w-full mx-auto py-10 md:py-16 flex flex-col gap-5", children: /* @__PURE__ */ jsx(SiteContact, { banks }) })
  ] });
}
export {
  About as default
};
