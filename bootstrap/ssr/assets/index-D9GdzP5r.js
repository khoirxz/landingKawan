import { jsxs, jsx } from "react/jsx-runtime";
import { Head, Link, useForm } from "@inertiajs/react";
import { B as Button } from "./button-CjC9Szlf.js";
import { I as Input } from "./input-BfHi4kA4.js";
import { T as Table, a as TableCaption, b as TableHeader, c as TableRow, d as TableHead, e as TableBody, f as TableCell } from "./table-Dd3j0vaL.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuItem, d as DropdownMenuSeparator } from "./dropdown-menu-CF6IcL5L.js";
import { MoreHorizontal } from "lucide-react";
import { A as AdminLayout } from "./AdminLayout-Tf--kNfM.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-dropdown-menu";
import "./separator-CfZpDZ-P.js";
import "@radix-ui/react-separator";
import "./sheet-D96Gr-EJ.js";
import "@radix-ui/react-dialog";
import "@radix-ui/react-visually-hidden";
import "./skeleton-m_7ss9_C.js";
import "@radix-ui/react-tooltip";
import "./breadcrumb-HvNy41ef.js";
import "@radix-ui/react-collapsible";
function Career({ careers }) {
  return /* @__PURE__ */ jsxs(AdminLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Karir" }),
    /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "overflow-hidden bg-white shadow-sm sm:rounded-lg", children: [
      /* @__PURE__ */ jsx("div", { className: "flex px-6 pt-6 justify-end", children: /* @__PURE__ */ jsx(Link, { href: route("careers.create"), children: /* @__PURE__ */ jsx(Button, { children: "Tambah" }) }) }),
      /* @__PURE__ */ jsx("div", { className: "p-6 flex", children: /* @__PURE__ */ jsx(Input, { placeholder: "Cari..." }) }),
      /* @__PURE__ */ jsx("div", { className: "px-6 my-6 space-y-5", children: /* @__PURE__ */ jsxs(Table, { children: [
        /* @__PURE__ */ jsxs(TableCaption, { children: [
          careers.length,
          " results."
        ] }),
        /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableHead, { children: "Nama" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Deskripsi" }),
          /* @__PURE__ */ jsx(TableHead, { className: "text-center", children: /* @__PURE__ */ jsx("p", { children: "Aksi" }) })
        ] }) }),
        /* @__PURE__ */ jsx(TableBody, { children: careers.length === 0 ? /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: 3, className: "h-24 text-center", children: "No results." }) }) : careers.map((career) => /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableCell, { children: career.title }),
          /* @__PURE__ */ jsx(TableCell, { children: career.description.slice(0, 20) + (career.description.length > 20 ? "..." : "") }),
          /* @__PURE__ */ jsx(TableCell, { className: "text-center", children: /* @__PURE__ */ jsx(ButtonAction, { career }) })
        ] }, career.id)) })
      ] }) })
    ] }) }) })
  ] });
}
function ButtonAction({ career }) {
  const { delete: destroy } = useForm();
  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this data?")) {
      destroy(route("career.destroy", id));
    }
  };
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "ghost", children: /* @__PURE__ */ jsx(MoreHorizontal, {}) }) }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { className: "w-36 bg-white", children: [
      /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(Link, { href: route("careers.edit", String(career.id)), className: "inline-block w-full", children: "Edit" }) }),
      /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
      /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: () => handleDelete(Number(career.id)), className: "text-red-500 hover:bg-red-100 hover:text-red-500", children: "Delete" })
    ] })
  ] });
}
export {
  ButtonAction,
  Career as default
};
