import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { I as Input } from "./input-BfHi4kA4.js";
import { B as Button } from "./button-CjC9Szlf.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
function AddressField({ addresses, setAddresses }) {
  return /* @__PURE__ */ jsx(Fragment, { children: addresses.map((a) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: "flex items-center gap-4 justify-center mb-3",
      children: [
        /* @__PURE__ */ jsx(
          Input,
          {
            placeholder: "Nama",
            value: a.title,
            onChange: (e) => {
              setAddresses(
                addresses.map(
                  (item) => item.id === a.id ? {
                    ...item,
                    title: e.target.value
                  } : item
                )
              );
            }
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            placeholder: "Alamat",
            value: a.address,
            onChange: (e) => {
              setAddresses(
                addresses.map(
                  (item) => item.id === a.id ? {
                    ...item,
                    address: e.target.value
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
              setAddresses(
                addresses.filter(
                  (ad) => ad.id !== a.id
                )
              );
            },
            children: "Hapus"
          }
        )
      ]
    },
    a.id
  )) });
}
export {
  AddressField as default
};
