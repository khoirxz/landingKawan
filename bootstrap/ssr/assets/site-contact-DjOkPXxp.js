import { jsx, jsxs } from "react/jsx-runtime";
import { c as cn, B as Button } from "./button-CjC9Szlf.js";
import { S as Separator } from "./separator-CfZpDZ-P.js";
import { FaInstagram, FaFacebook, FaWhatsapp, FaLocationDot } from "react-icons/fa6";
function SiteContact({ banks }) {
  return /* @__PURE__ */ jsx("section", { className: cn(`max-w-screen-xl w-full mx-auto py-10 md:py-16 relative bg-cover bg-center bg-[url(${route("landing")}'/public/assets/contact.png')]`), children: /* @__PURE__ */ jsxs("div", { className: "relative z-10 container px-4 md:px-6 mx-auto text-white flex flex-col md:flex-row gap-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-5 md:mb-0 flex-1", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-thin", children: "Hubungi kami" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg mt-3", children: "Pelayanan 24 jam dan siap membantu kapanpun anda butuh." }),
      /* @__PURE__ */ jsx(Button, { className: "mt-5", children: "Hubungi Kami" })
    ] }),
    /* @__PURE__ */ jsx(
      Separator,
      {
        orientation: "vertical",
        className: "h-40 mx-auto hidden md:block"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 w- md:w-2/4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-3 justify-start", children: [
        /* @__PURE__ */ jsx("div", { className: "h-5 w-5", children: /* @__PURE__ */ jsx(FaInstagram, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx("span", { children: "@bprkawan" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-3 justify-start", children: [
        /* @__PURE__ */ jsx("div", { className: "h-5 w-5", children: /* @__PURE__ */ jsx(FaFacebook, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx("span", { children: "BPR KAWAN DAU" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex gap-3 justify-start", children: JSON.parse(banks.phone).map(
        (phoneObj) => /* @__PURE__ */ jsxs(
          "a",
          {
            className: "flex gap-3 items-center",
            target: "_blank",
            rel: "noreferrer",
            href: `https://api.whatsapp.com/send?phone=${phoneObj.number}`,
            children: [
              /* @__PURE__ */ jsx("div", { className: "h-5 w-5", children: /* @__PURE__ */ jsx(FaWhatsapp, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxs("span", { children: [
                " +",
                phoneObj.number,
                " (Whatsapp)"
              ] })
            ]
          },
          phoneObj.id
        )
      ) }),
      JSON.parse(banks.address).map(
        (addressObj) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex gap-3 justify-start",
            children: [
              /* @__PURE__ */ jsx("div", { className: "h-5 w-5", children: /* @__PURE__ */ jsx(FaLocationDot, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxs("span", { children: [
                addressObj.title,
                " ",
                addressObj.address
              ] })
            ]
          },
          addressObj.id
        )
      )
    ] })
  ] }) });
}
export {
  SiteContact as S
};
