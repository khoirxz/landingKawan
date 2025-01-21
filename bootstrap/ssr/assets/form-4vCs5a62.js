import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { useForm, Head, Link } from "@inertiajs/react";
import { I as Input } from "./input-BfHi4kA4.js";
import { c as cn, B as Button } from "./button-CjC9Szlf.js";
import { L as Label } from "./label-DvvrMvRP.js";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { Trash, ImageUp } from "lucide-react";
import { A as Authenticated } from "./AuthenticatedLayout-CS6DsjTK.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
import "./ApplicationLogo-xMpxFOcX.js";
import "@headlessui/react";
const Progress = React.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ jsx(
  ProgressPrimitive.Root,
  {
    ref,
    className: cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(
      ProgressPrimitive.Indicator,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (value || 0)}%)` }
      }
    )
  }
));
Progress.displayName = ProgressPrimitive.Root.displayName;
function CarouselForm({
  carousel,
  id
}) {
  const { data, setData, post, processing, errors } = useForm({
    title: carousel ? carousel.title : "",
    description: carousel ? carousel.description : "",
    image: null,
    link: carousel ? carousel.link : "",
    _method: id ? "PUT" : "POST"
  });
  const [imagePreview, setImagePreview] = useState(null);
  const imageRef = useRef(null);
  useEffect(() => {
    if (carousel) {
      setImagePreview(`http://127.0.0.1:8000/storage/${carousel.image}`);
    }
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      post(route("carousels.update", id), {
        preserveScroll: true
      });
    } else {
      post(route("carousels.store"), {
        preserveScroll: true
      });
    }
  };
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      header: /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold leading-tight text-gray-800", children: "Carousel" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Carousel" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "overflow-hidden bg-white shadow-sm sm:rounded-lg", children: [
          /* @__PURE__ */ jsx("div", { className: "flex px-6 pt-6 justify-end", children: /* @__PURE__ */ jsx(Link, { href: route("carousels.index"), children: /* @__PURE__ */ jsx(Button, { children: "Kembali" }) }) }),
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
                /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Masukan Judul Carousel" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    type: "text",
                    id: "name",
                    placeholder: "Promo akhir tahun",
                    value: data.title,
                    name: "name",
                    onChange: (e) => setData("title", e.target.value)
                  }
                ),
                errors.title && /* @__PURE__ */ jsx("p", { className: "text-red-500", children: errors.title })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid w-full items-center gap-1.5", children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Tautan yang bersangkutan" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    type: "text",
                    id: "link",
                    placeholder: "Masukan link",
                    value: data.link,
                    name: "link",
                    onChange: (e) => setData("link", e.target.value)
                  }
                ),
                errors.link && /* @__PURE__ */ jsx("p", { className: "text-red-500", children: errors.link })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid w-full items-center gap-1.5", children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Masukan Deskripsi singkat Carousel" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    type: "text",
                    id: "description",
                    placeholder: "Promo terbatas, ayo buruan beli",
                    value: data.description,
                    name: "description",
                    onChange: (e) => setData(
                      "description",
                      e.target.value
                    )
                  }
                ),
                errors.description && /* @__PURE__ */ jsx("p", { className: "text-red-500", children: errors.description })
              ] }),
              processing && /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(Progress, { className: "w-1/2" }) }),
              /* @__PURE__ */ jsx(Button, { type: "submit", children: "Simpan" })
            ] })
          ] })
        ] }) }) })
      ]
    }
  );
}
export {
  CarouselForm as default
};
