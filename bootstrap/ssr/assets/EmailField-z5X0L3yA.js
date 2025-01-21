import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { I as Input } from "./input-BfHi4kA4.js";
import { B as Button } from "./button-CjC9Szlf.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
function EmailField({ emails, setEmails }) {
  return /* @__PURE__ */ jsx(Fragment, { children: emails.map((email) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: "flex items-center gap-4 justify-center mb-3",
      children: [
        /* @__PURE__ */ jsx(
          Input,
          {
            placeholder: "Email",
            value: email.email,
            onChange: (e) => {
              setEmails(
                emails.map(
                  (item) => item.id === email.id ? {
                    ...item,
                    email: e.target.value
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
              setEmails(
                emails.filter(
                  (item) => item.id !== email.id
                )
              );
            },
            children: "Hapus"
          }
        )
      ]
    },
    email.id
  )) });
}
export {
  EmailField as default
};
