import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { useForm, Head, Link } from "@inertiajs/react";
import { B as Button } from "./button-CjC9Szlf.js";
import { I as Input } from "./input-BfHi4kA4.js";
import { L as Label } from "./label-DvvrMvRP.js";
import { Trash, ImageUp } from "lucide-react";
import { A as Authenticated } from "./AuthenticatedLayout-CS6DsjTK.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
import "./ApplicationLogo-xMpxFOcX.js";
import "@headlessui/react";
function TeamForm({ id, team }) {
  const { data, setData, post, errors, processing } = useForm({
    name: team.name ?? "",
    position: team.position ?? "",
    image: null,
    _method: id ? "PUT" : "POST"
  });
  const [imagePreview, setImagePreview] = useState(null);
  const imageRef = useRef(null);
  useEffect(() => {
    if (team.image) {
      setImagePreview(`http://127.0.0.1:8000/storage/${team.image}`);
    }
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      post(route("teams.update", id), {
        preserveScroll: true
      });
    } else {
      post(route("teams.store"), {
        preserveScroll: true
      });
    }
  };
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      header: /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold leading-tight text-gray-800", children: "Team" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Dashboard - Team" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "overflow-hidden bg-white shadow-sm sm:rounded-lg", children: [
          /* @__PURE__ */ jsx("div", { className: "flex px-6 pt-6 justify-end", children: /* @__PURE__ */ jsx(Link, { href: route("teams.index"), children: /* @__PURE__ */ jsx(Button, { children: "Kembali" }) }) }),
          /* @__PURE__ */ jsxs("div", { className: "p-6 bg-white border-b border-gray-200", children: [
            /* @__PURE__ */ jsx("div", { className: "flex flex-col space-y-4 mb-5", children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold", children: "Gambar" }),
              imagePreview && /* @__PURE__ */ jsxs("div", { className: "w-full relative", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: imagePreview,
                    alt: "Preview",
                    className: "max-w-[500px] object-cover mx-auto"
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "absolute group top-0 w-full h-full flex items-center justify-center hover:bg-black/40 transition duration-300 ease-in-out", children: /* @__PURE__ */ jsx(
                  Button,
                  {
                    onClick: () => {
                      setImagePreview(null);
                      setData("image", null);
                    },
                    size: "icon",
                    className: "rounded-full p-2 group-hover:bg-red-200/40 bg-transparent text-transparent shadow-none",
                    children: /* @__PURE__ */ jsx(Trash, { className: "group-hover:text-red-900" })
                  }
                ) })
              ] }),
              imagePreview === null && /* @__PURE__ */ jsxs(
                Button,
                {
                  onClick: () => {
                    var _a;
                    (_a = imageRef.current) == null ? void 0 : _a.click();
                  },
                  variant: "outline",
                  className: "w-full h-56 flex flex-col items-center justify-center",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "w-11 h-11", children: /* @__PURE__ */ jsx(
                      ImageUp,
                      {
                        style: {
                          width: "44px",
                          height: "44px"
                        }
                      }
                    ) }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: "Masukan gambar 600x400, max 2MB" }),
                    errors.image && /* @__PURE__ */ jsx("p", { className: "text-red-500", children: errors.image }),
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        ref: imageRef,
                        className: "hidden",
                        type: "file",
                        accept: "image/*",
                        onChange: (e) => {
                          var _a;
                          if ((_a = e.target.files) == null ? void 0 : _a[0]) {
                            setData(
                              "image",
                              e.target.files[0]
                            );
                            setImagePreview(
                              URL.createObjectURL(
                                e.target.files[0]
                              )
                            );
                          }
                        },
                        name: "image"
                      }
                    )
                  ]
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxs("form", { onSubmit, className: "space-y-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid w-full items-center gap-1.5", children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Masukan Nama" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    type: "text",
                    id: "name",
                    placeholder: "Nama",
                    value: data.name,
                    name: "name",
                    onChange: (e) => setData("name", e.target.value)
                  }
                ),
                errors.name && /* @__PURE__ */ jsx("p", { className: "text-red-500", children: errors.name })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid w-full items-center gap-1.5", children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Masukan Posisi" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    type: "text",
                    id: "position",
                    placeholder: "Posisi atau jabatan",
                    value: data.position,
                    name: "position",
                    onChange: (e) => setData("position", e.target.value)
                  }
                ),
                errors.position && /* @__PURE__ */ jsx("p", { className: "text-red-500", children: errors.position })
              ] }),
              /* @__PURE__ */ jsx(Button, { disabled: processing, type: "submit", children: "Submit" })
            ] })
          ] })
        ] }) }) })
      ]
    }
  );
}
export {
  TeamForm as default
};
