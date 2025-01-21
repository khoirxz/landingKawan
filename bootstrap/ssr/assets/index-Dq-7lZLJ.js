import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { useForm, Head, Link } from "@inertiajs/react";
import { Trash, Plus } from "lucide-react";
import { B as Button } from "./button-CjC9Szlf.js";
import { L as Label } from "./label-DvvrMvRP.js";
import { I as Input } from "./input-BfHi4kA4.js";
import { T as Textarea } from "./textarea-0PQu1_yO.js";
import { A as Authenticated } from "./AuthenticatedLayout-CS6DsjTK.js";
import AddressField from "./AddressField-DqHuht5_.js";
import PhoneField from "./PhoneField-vAgwNgjR.js";
import EmailField from "./EmailField-z5X0L3yA.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
import "./ApplicationLogo-xMpxFOcX.js";
import "@headlessui/react";
function Banks({
  bank,
  id
}) {
  const { data, setData, post, processing, errors } = useForm({
    id,
    name: (bank == null ? void 0 : bank.name) ?? "",
    description: (bank == null ? void 0 : bank.description) ?? "",
    address: (bank == null ? void 0 : bank.address) ? JSON.stringify(bank == null ? void 0 : bank.address) : "",
    phone: (bank == null ? void 0 : bank.phone) ? JSON.stringify(bank == null ? void 0 : bank.phone) : "",
    email: (bank == null ? void 0 : bank.email) ? JSON.stringify(bank == null ? void 0 : bank.email) : "",
    logo: null,
    license_number: (bank == null ? void 0 : bank.license_number) ?? "",
    _method: "PUT"
  });
  const [addresses, setAddresses] = useState([]);
  const [phones, setPhones] = useState([]);
  const [emails, setEmails] = useState([]);
  const [logoPreview, setLogoPreview] = useState(null);
  const logoRef = useRef(null);
  useEffect(() => {
    setData("address", JSON.stringify(addresses));
    setData("phone", JSON.stringify(phones));
    setData("email", JSON.stringify(emails));
  }, [addresses, phones, emails]);
  useEffect(() => {
    if (bank == null ? void 0 : bank.logo) {
      setLogoPreview(`http://127.0.0.1:8000/storage/${bank == null ? void 0 : bank.logo}`);
    }
    const parseData = (data2) => typeof data2 === "string" ? JSON.parse(data2) : data2;
    setAddresses(parseData((bank == null ? void 0 : bank.address) ?? []));
    setPhones(parseData((bank == null ? void 0 : bank.phone) ?? []));
    setEmails(parseData((bank == null ? void 0 : bank.email) ?? []));
  }, [bank]);
  const onSubmit = async (e) => {
    e.preventDefault();
    post(route("banks.update", id), {
      preserveScroll: true
    });
  };
  console.log(id);
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      header: /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold leading-tight text-gray-800", children: "Pengaturan Umum" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Dashboard - Setting" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "overflow-hidden bg-white shadow-sm sm:rounded-lg", children: [
          /* @__PURE__ */ jsx("div", { className: "flex px-6 py-6 justify-end", children: /* @__PURE__ */ jsx(Link, { href: route("article-categories.index"), children: /* @__PURE__ */ jsx(Button, { children: "Kembali" }) }) }),
          /* @__PURE__ */ jsxs("div", { className: "p-6 bg-white border-b border-gray-200", children: [
            /* @__PURE__ */ jsx("div", { className: "flex flex-col space-y-4 mb-5", children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold", children: "Icon" }),
              logoPreview && /* @__PURE__ */ jsxs("div", { className: "w-11 h-11 relative", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: logoPreview,
                    alt: "icon",
                    className: "w-11 h-11"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => {
                      setLogoPreview(null);
                      setData("logo", null);
                    },
                    className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent hover:bg-white/40 p-1 rounded-full",
                    children: /* @__PURE__ */ jsx(Trash, { className: "hover:text-red-500 text-transparent" })
                  }
                )
              ] }),
              !logoPreview && /* @__PURE__ */ jsx(
                Button,
                {
                  size: "icon",
                  variant: "outline",
                  onClick: () => {
                    var _a;
                    (_a = logoRef.current) == null ? void 0 : _a.click();
                  },
                  children: /* @__PURE__ */ jsx(Plus, {})
                }
              ),
              /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm", children: "Masukan icon maksimal 15x15 pixel" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  ref: logoRef,
                  className: "hidden",
                  type: "file",
                  accept: "image/*",
                  onChange: (e) => {
                    var _a;
                    if ((_a = e.target.files) == null ? void 0 : _a[0]) {
                      setData(
                        "logo",
                        e.target.files[0]
                      );
                      setLogoPreview(
                        URL.createObjectURL(
                          e.target.files[0]
                        )
                      );
                    }
                  },
                  name: "icon"
                }
              ),
              errors.logo && /* @__PURE__ */ jsx("p", { className: "text-red-500", children: errors.logo })
            ] }) }),
            /* @__PURE__ */ jsxs("form", { onSubmit, className: "space-y-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid w-full items-center gap-1.5", children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Nama Website" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    type: "text",
                    id: "name",
                    placeholder: "Nama website",
                    value: data.name,
                    name: "name",
                    onChange: (e) => setData("name", e.target.value)
                  }
                ),
                errors.name && /* @__PURE__ */ jsx("p", { className: "text-red-500", children: errors.name })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid w-full items-center gap-1.5", children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "description", children: "Masukan deskripsi website" }),
                /* @__PURE__ */ jsx(
                  Textarea,
                  {
                    id: "description",
                    placeholder: "Deskripsi singkan tentang website",
                    value: data.description,
                    onChange: (e) => setData(
                      "description",
                      e.target.value
                    ),
                    rows: 4
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm", children: "Maksimal 255 Karakter" }),
                errors.description && /* @__PURE__ */ jsx("p", { className: "text-red-500", children: errors.description })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid w-full items-center gap-1.5", children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Nomer IJIN" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    type: "text",
                    id: "license_number",
                    placeholder: "Nomer IJIN",
                    value: data.license_number,
                    name: "license_number",
                    onChange: (e) => setData(
                      "license_number",
                      e.target.value
                    )
                  }
                ),
                errors.license_number && /* @__PURE__ */ jsx("p", { className: "text-red-500", children: errors.license_number })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold mb-2", children: "Alamat" }),
                /* @__PURE__ */ jsx("div", { className: "flex justify-end mb-4", children: /* @__PURE__ */ jsx(
                  Button,
                  {
                    type: "button",
                    variant: "outline",
                    onClick: () => {
                      setAddresses([
                        ...addresses,
                        {
                          id: Date.now(),
                          title: "",
                          address: ""
                        }
                      ]);
                    },
                    children: "Tambah"
                  }
                ) }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
                  AddressField,
                  {
                    addresses,
                    setAddresses
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold mb-2", children: "No. Telepon" }),
                /* @__PURE__ */ jsx("div", { className: "flex justify-end mb-4", children: /* @__PURE__ */ jsx(
                  Button,
                  {
                    type: "button",
                    variant: "outline",
                    onClick: () => {
                      setPhones([
                        ...phones,
                        {
                          id: Date.now(),
                          number: ""
                        }
                      ]);
                    },
                    children: "Tambah"
                  }
                ) }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
                  PhoneField,
                  {
                    phones,
                    setPhones
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold mb-2", children: "Email" }),
                /* @__PURE__ */ jsx("div", { className: "flex justify-end mb-4", children: /* @__PURE__ */ jsx(
                  Button,
                  {
                    type: "button",
                    variant: "outline",
                    onClick: () => {
                      setEmails([
                        ...emails,
                        {
                          id: Date.now(),
                          email: ""
                        }
                      ]);
                    },
                    children: "Tambah"
                  }
                ) }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
                  EmailField,
                  {
                    emails,
                    setEmails
                  }
                ) })
              ] }),
              processing && /* @__PURE__ */ jsx("p", { className: "text-red-500", children: "Processing..." }),
              /* @__PURE__ */ jsx(Button, { type: "submit", children: "Simpan" })
            ] })
          ] })
        ] }) }) })
      ]
    }
  );
}
export {
  Banks as default
};
