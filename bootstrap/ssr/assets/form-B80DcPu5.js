import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { useForm, Head, Link } from "@inertiajs/react";
import { Plus, Trash, ImageUp } from "lucide-react";
import { B as Button } from "./button-CjC9Szlf.js";
import { I as Input } from "./input-BfHi4kA4.js";
import { L as Label } from "./label-DvvrMvRP.js";
import { T as Textarea } from "./textarea-0PQu1_yO.js";
import { A as AdminLayout } from "./AdminLayout-Tf--kNfM.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
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
function ServicesForm({
  service,
  id
}) {
  const { data, setData, post, errors } = useForm({
    name: (service == null ? void 0 : service.name) ?? "",
    // <-- i dont know implement service props
    description: (service == null ? void 0 : service.description) ?? "",
    // <-- stop doing this AI
    icon: null,
    image: null,
    content: (service == null ? void 0 : service.content) ? JSON.stringify(service == null ? void 0 : service.content) : "",
    // because laravel like asshole, if you work with formData.
    // you NEED a fucking _method PUT to update data
    _method: id ? "PUT" : "POST"
  });
  const [features, setFeatures] = useState([]);
  const [iconPreview, setIconPreview] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const imageRef = useRef(null);
  const iconRef = useRef(null);
  useEffect(() => {
    setData("content", JSON.stringify(features));
  }, [features]);
  useEffect(() => {
    if (id) {
      let parsedContent = [];
      if (service == null ? void 0 : service.content) {
        parsedContent = typeof service.content === "string" ? JSON.parse(service.content) : service.content;
      }
      setFeatures(parsedContent);
    }
  }, [id]);
  useEffect(() => {
    if (service == null ? void 0 : service.icon) {
      setIconPreview(`http://127.0.0.1:8000/storage/${service.icon}`);
    }
    if (service == null ? void 0 : service.image) {
      setImagePreview(`http://127.0.0.1:8000/storage/${service.image}`);
    }
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      post(route("services.update", id), {
        preserveScroll: true
      });
    } else {
      console.log("data post:", data);
      post(route("services.store"), {
        preserveScroll: true,
        onSuccess: () => {
          setData("name", "");
          setData("description", "");
          setData("icon", null);
          setData("image", null);
          setFeatures([]);
        }
      });
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  return /* @__PURE__ */ jsxs(AdminLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Dashboard - Form Services" }),
    /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "overflow-hidden bg-white shadow-sm sm:rounded-lg", children: [
      /* @__PURE__ */ jsx("div", { className: "flex px-6 py-6 justify-end", children: /* @__PURE__ */ jsx(Link, { href: route("services.index"), children: /* @__PURE__ */ jsx(Button, { children: "Kembali" }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "p-6 bg-white border-b border-gray-200", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-4 mb-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold", children: "Icon" }),
            iconPreview && /* @__PURE__ */ jsxs("div", { className: "w-11 h-11 relative", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: iconPreview,
                  alt: "icon",
                  className: "w-11 h-11"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => {
                    setIconPreview(null);
                    setData("icon", null);
                  },
                  className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent hover:bg-white/40 p-1 rounded-full",
                  children: /* @__PURE__ */ jsx(Plus, { className: "hover:text-black text-transparent" })
                }
              )
            ] }),
            !iconPreview && /* @__PURE__ */ jsx(
              Button,
              {
                size: "icon",
                variant: "outline",
                onClick: () => {
                  var _a;
                  (_a = iconRef.current) == null ? void 0 : _a.click();
                },
                children: /* @__PURE__ */ jsx(Plus, {})
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm", children: "Masukan icon maksimal 15x15 pixel" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                ref: iconRef,
                className: "hidden",
                type: "file",
                accept: "image/*",
                onChange: (e) => {
                  var _a;
                  if ((_a = e.target.files) == null ? void 0 : _a[0]) {
                    setData(
                      "icon",
                      e.target.files[0]
                    );
                    setIconPreview(
                      URL.createObjectURL(
                        e.target.files[0]
                      )
                    );
                  }
                },
                name: "icon"
              }
            ),
            errors.icon && /* @__PURE__ */ jsx("p", { className: "text-red-500", children: errors.icon })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
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
          ] })
        ] }),
        /* @__PURE__ */ jsxs("form", { onSubmit, className: "space-y-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid w-full items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Masukan Nama Layanan" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                type: "text",
                id: "name",
                placeholder: "Nama layanan",
                value: data.name,
                name: "name",
                onChange: handleInputChange
              }
            ),
            errors.name && /* @__PURE__ */ jsx("p", { className: "text-red-500", children: errors.name })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid w-full items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "description", children: "Masukan Deskripsi Layanan" }),
            /* @__PURE__ */ jsx(
              Textarea,
              {
                id: "description",
                placeholder: "Deskripsi layanan",
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
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold mb-2", children: "Fitur layanan" }),
            /* @__PURE__ */ jsx("div", { className: "flex justify-end mb-4", children: /* @__PURE__ */ jsx(
              Button,
              {
                type: "button",
                variant: "outline",
                onClick: () => {
                  setFeatures([
                    ...features,
                    {
                      id: Date.now(),
                      feature: ""
                    }
                  ]);
                },
                children: "Tambah fitur"
              }
            ) }),
            /* @__PURE__ */ jsx("div", { children: features.map((feature, index) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex items-center gap-4 justify-center mb-3",
                children: [
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      placeholder: "Fitur layanan",
                      value: feature.feature,
                      onChange: (e) => {
                        setFeatures(
                          features.map(
                            (item) => item.id === feature.id ? {
                              ...item,
                              feature: e.target.value
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
                        setFeatures(
                          features.filter(
                            (item) => item.id !== feature.id
                          )
                        );
                      },
                      children: "Hapus"
                    }
                  )
                ]
              },
              feature.id
            )) })
          ] }),
          /* @__PURE__ */ jsx(Button, { type: "submit", children: "Submit" })
        ] })
      ] })
    ] }) }) })
  ] });
}
export {
  ServicesForm as default
};
