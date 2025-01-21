import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { I as Input } from "./input-BfHi4kA4.js";
import { B as Button } from "./button-CjC9Szlf.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
function PhoneField({
  phones,
  setPhones
}) {
  return /* @__PURE__ */ jsx(Fragment, { children: phones.map((phone) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: "flex items-center gap-4 justify-center mb-3",
      children: [
        /* @__PURE__ */ jsx(
          Input,
          {
            placeholder: "Gunakan Kode Negara (contoh: +62)",
            value: phone.number,
            onChange: (e) => {
              setPhones(
                phones.map(
                  (item) => item.id === phone.id ? {
                    ...item,
                    number: e.target.value
                  } : item
                )
              );
            }
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            type: "button",
            variant: "outline",
            onClick: () => {
              setPhones(
                phones.filter(
                  (item) => item.id !== phone.id
                )
              );
            },
            children: "Hapus"
          }
        )
      ]
    },
    phone.id
  )) });
}
export {
  PhoneField as default
};
