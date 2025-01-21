import { jsxs, jsx } from "react/jsx-runtime";
import { useForm, Head, Link } from "@inertiajs/react";
import { B as Button } from "./button-CjC9Szlf.js";
import { L as Label } from "./label-DvvrMvRP.js";
import { I as Input } from "./input-BfHi4kA4.js";
import { T as Textarea } from "./textarea-0PQu1_yO.js";
import { A as AdminLayout } from "./AdminLayout-Tf--kNfM.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
import "lucide-react";
import "./separator-CfZpDZ-P.js";
import "@radix-ui/react-separator";
import "./sheet-D96Gr-EJ.js";
import "@radix-ui/react-dialog";
import "@radix-ui/react-visually-hidden";
import "./skeleton-m_7ss9_C.js";
import "@radix-ui/react-tooltip";
import "./breadcrumb-HvNy41ef.js";
import "./dropdown-menu-CF6IcL5L.js";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-collapsible";
function BranchForm({
  branch,
  id
}) {
  const { data, setData, post, patch, processing, errors, reset } = useForm({
    name: branch ? branch.name : "",
    address: branch ? branch.address : ""
  });
  const onSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      patch(route("branches.update", id), {
        preserveScroll: true
      });
    } else {
      post(route("branches.store"), {
        preserveScroll: true,
        onSuccess: () => {
          reset();
        }
      });
    }
  };
  return /* @__PURE__ */ jsxs(AdminLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Branch" }),
    /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "overflow-hidden bg-white shadow-sm sm:rounded-lg", children: [
      /* @__PURE__ */ jsx("div", { className: "flex px-6 py-6 justify-end", children: /* @__PURE__ */ jsx(Link, { href: route("branches.index"), children: /* @__PURE__ */ jsx(Button, { children: "Kembali" }) }) }),
      /* @__PURE__ */ jsx("div", { className: "p-6 bg-white border-b border-gray-200", children: /* @__PURE__ */ jsxs("form", { onSubmit, className: "space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid w-full items-center gap-1.5", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Nama cabang" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "text",
              id: "name",
              placeholder: "Nama cabang/kantor",
              value: data.name,
              name: "name",
              onChange: (e) => setData("name", e.target.value)
            }
          ),
          errors.name && /* @__PURE__ */ jsx("p", { className: "text-red-500", children: errors.name })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid w-full items-center gap-1.5", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "address", children: "Alamat cabang" }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              id: "address",
              placeholder: "Jl. Pahlawan no 18",
              value: data.address,
              name: "address",
              onChange: (e) => setData("address", e.target.value)
            }
          ),
          errors.address && /* @__PURE__ */ jsx("p", { className: "text-red-500", children: errors.address })
        ] }),
        processing && /* @__PURE__ */ jsx("p", { className: "text-red-500", children: "Processing..." }),
        /* @__PURE__ */ jsx(Button, { type: "submit", children: "Simpan" })
      ] }) })
    ] }) }) })
  ] });
}
export {
  BranchForm as default
};
