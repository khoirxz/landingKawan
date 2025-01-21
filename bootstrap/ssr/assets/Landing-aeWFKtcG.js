import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Head, Link } from "@inertiajs/react";
import * as React from "react";
import React__default from "react";
import Autoplay from "embla-carousel-autoplay";
import { c as cn, B as Button } from "./button-CjC9Szlf.js";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { S as Skeleton } from "./skeleton-m_7ss9_C.js";
import { cva } from "class-variance-authority";
import { L as Layout, T as TitleText, S as SubtitleText } from "./typography-BFc7aSCR.js";
import { S as SiteContact } from "./site-contact-DjOkPXxp.js";
import "@radix-ui/react-slot";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-navigation-menu";
import "./sheet-D96Gr-EJ.js";
import "@radix-ui/react-dialog";
import "@radix-ui/react-visually-hidden";
import "./scroll-area-DwbBZHxM.js";
import "@radix-ui/react-scroll-area";
import "@radix-ui/react-accordion";
import "react-icons/fa6";
import "./separator-CfZpDZ-P.js";
import "@radix-ui/react-separator";
const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("font-semibold leading-none tracking-tight", className),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
const CarouselContext = React.createContext(null);
function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = React.forwardRef(
  ({
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    className,
    children,
    ...props
  }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const onSelect = React.useCallback((api2) => {
      if (!api2) {
        return;
      }
      setCanScrollPrev(api2.canScrollPrev());
      setCanScrollNext(api2.canScrollNext());
    }, []);
    const scrollPrev = React.useCallback(() => {
      api == null ? void 0 : api.scrollPrev();
    }, [api]);
    const scrollNext = React.useCallback(() => {
      api == null ? void 0 : api.scrollNext();
    }, [api]);
    const handleKeyDown = React.useCallback(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );
    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }
      setApi(api);
    }, [api, setApi]);
    React.useEffect(() => {
      if (!api) {
        return;
      }
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api == null ? void 0 : api.off("select", onSelect);
      };
    }, [api, onSelect]);
    return /* @__PURE__ */ jsx(
      CarouselContext.Provider,
      {
        value: {
          carouselRef,
          api,
          opts,
          orientation: orientation || ((opts == null ? void 0 : opts.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext
        },
        children: /* @__PURE__ */ jsx(
          "div",
          {
            ref,
            onKeyDownCapture: handleKeyDown,
            className: cn("relative", className),
            role: "region",
            "aria-roledescription": "carousel",
            ...props,
            children
          }
        )
      }
    );
  }
);
Carousel.displayName = "Carousel";
const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(
        "flex",
        orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        className
      ),
      ...props
    }
  ) });
});
CarouselContent.displayName = "CarouselContent";
const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      role: "group",
      "aria-roledescription": "slide",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      ),
      ...props
    }
  );
});
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute  h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollPrev,
      onClick: scrollPrev,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollNext,
      onClick: scrollNext,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
CarouselNext.displayName = "CarouselNext";
function HeroCarousel({
  data,
  loading
}) {
  const [api, setApi] = React__default.useState();
  const [current, setCurrent] = React__default.useState(0);
  const [count, setCount] = React__default.useState(0);
  React__default.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return /* @__PURE__ */ jsx(Fragment, { children: !loading ? /* @__PURE__ */ jsx(
    Carousel,
    {
      setApi,
      className: "relative w-full max-w-screen-2xl mx-auto",
      plugins: [
        Autoplay({
          delay: 6e3
        })
      ],
      opts: {
        loop: true
      },
      children: /* @__PURE__ */ jsx(CarouselContent, { children: data.map((slide) => /* @__PURE__ */ jsx(CarouselItem, { className: "relative", children: /* @__PURE__ */ jsxs("div", { className: "relative aspect-[6/6] md:aspect-[16/6] w-full overflow-hidden", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: `http://127.0.0.1:8000/storage/${slide.image}`,
            alt: slide.title,
            className: "object-cover h-full w-full"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/20" }),
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-12", children: [
          /* @__PURE__ */ jsx("h1", { className: "max-w-2xl text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl", children: slide.title }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-white", children: [
              /* @__PURE__ */ jsx("span", { className: "text-base font-medium sm:text-lg", children: String(
                current + 1
              ).padStart(2, "0") }),
              /* @__PURE__ */ jsx("div", { className: "h-px w-8 sm:w-12 bg-white/50" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm text-white/50 sm:text-base", children: String(count).padStart(
                2,
                "0"
              ) })
            ] }),
            /* @__PURE__ */ jsx(Card, { className: "w-full sm:w-auto bg-primary text-white relative border-none rounded-none", children: /* @__PURE__ */ jsx(CardContent, { className: "flex items-center justify-between p-0", children: /* @__PURE__ */ jsxs("div", { className: "space-y-1 sm:space-y-2 flex-1", children: [
              /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold sm:text-base md:text-lg px-4 pb-4 pt-4 sm:px-6", children: slide.description }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-2 sm:gap-4 relative h-10", children: [
                /* @__PURE__ */ jsx(CarouselPrevious, { className: "left-0 rounded-none bg-white/20 w-2/4 h-full border-none" }),
                /* @__PURE__ */ jsx(CarouselNext, { className: "right-0 rounded-none bg-white/20 w-2/4 h-full border-none" })
              ] })
            ] }) }) })
          ] })
        ] })
      ] }) }, slide.id)) })
    }
  ) : /* @__PURE__ */ jsx(Skeleton, { className: "w-full aspect-[6/6] md:aspect-[16/6]" }) });
}
const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
function Landing({
  banks: metaInfo,
  carousels,
  services,
  teams,
  articles
}) {
  function parseStringToArray(input) {
    try {
      return JSON.parse(input);
    } catch (error) {
      console.error("Failed to parse input string to array:", error);
      return [];
    }
  }
  return /* @__PURE__ */ jsxs(Layout, { banks: metaInfo, services, children: [
    /* @__PURE__ */ jsx(Head, { title: "Home" }),
    /* @__PURE__ */ jsx(HeroCarousel, { loading: false, data: carousels }),
    /* @__PURE__ */ jsx("section", { className: "max-w-screen-xl w-full mx-auto py-16 md:py-36", children: /* @__PURE__ */ jsxs("div", { className: "container px-4 md:px-6 mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center space-y-4 text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-thin tracking-tighter text-[#0a0633] sm:text-4xl md:text-5xl", children: "Kami hadirkan berbagai produk dan layanan untuk membantu anda." }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto max-w-[700px] text-gray-600 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed", children: "Di BPR KAWAN, kami berkomitmen untuk membantu Anda mencapai tujuan keuangan dengan menyajikan berbagai produk dan layanan yang sesuai dengan kebutuhan anda." })
      ] }),
      services.length > 0 ? /* @__PURE__ */ jsx("div", { className: "mx-auto grid max-w-5xl gap-6 pt-12 md:grid-cols-3 md:gap-8", children: services.map((service) => /* @__PURE__ */ jsxs(
        Card,
        {
          className: "h-full rounded-none flex flex-col border-2 border-[#342C89]/10 transition-all hover:border-[#342C89]/20 hover:shadow-lg",
          children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsx("div", { className: "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#342C89]/10", children: /* @__PURE__ */ jsx(
                "object",
                {
                  data: `${route("landing")}/public/storage/${service.icon}`,
                  type: "image/svg+xml",
                  className: "h-8 w-8 text-[#342C89]",
                  children: service.name
                }
              ) }),
              /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl font-bold text-[#342C89]", children: service.name }),
              /* @__PURE__ */ jsx(CardDescription, { className: "text-base", children: service.description })
            ] }),
            /* @__PURE__ */ jsx(CardContent, { className: "grid gap-4 items-start h-full", children: /* @__PURE__ */ jsx("div", { className: "grid gap-3", children: parseStringToArray(
              typeof service.content === "string" ? service.content : "[]"
            ).map((feature) => /* @__PURE__ */ jsx(
              "p",
              {
                className: "font-medium",
                children: feature.feature
              },
              feature.id
            )) }) }),
            /* @__PURE__ */ jsx(CardFooter, { children: /* @__PURE__ */ jsx(
              Button,
              {
                className: "w-full group bg-[#342C89] text-white hover:bg-[#342C89]/90",
                asChild: true,
                children: /* @__PURE__ */ jsxs(
                  Link,
                  {
                    href: route(
                      "service.page",
                      service.slug
                    ),
                    children: [
                      "Pelajari lebih lanjut",
                      /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" })
                    ]
                  }
                )
              }
            ) })
          ]
        },
        service.id
      )) }) : /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-full h-96", children: /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "No data available" }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "max-w-screen-xl w-full mx-auto py-10 md:py-16", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-14 md:grid-cols-2 container px-4 md:px-6 mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-4 items-start justify-start", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-thin tracking-tighter text-[#0a0633] sm:text-4xl md:text-5xl", children: "Tentang kami." }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto max-w-[700px] text-gray-600 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed", children: "BPR KAWAN adalah sebuah perusahaan yang bergerak di bidang keuangan. Kami menyajikan berbagai produk dan layanan yang sesuai dengan kebutuhan pelanggan. Kami juga memiliki komitmen yang kuat untuk memberikan pelayanan yang prima dan profesional." }),
        /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "outline",
            className: "group bg-[#342C89] text-white hover:bg-[#342C89]/90 hover:text-white",
            children: [
              "Pelajari lebih lanjut",
              /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "assets/bg1.jpg",
          alt: "about",
          className: "object-cover w-full h-[400px]"
        }
      ) }) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-screen-xl w-full mx-auto py-10 md:py-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 container px-4 md:px-6 mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative h-[500px]", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "assets/assets1.jpg",
              alt: "aman dan nyaman",
              className: "brightness-50 absolute -z-10 object-cover w-full h-full",
              loading: "lazy"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "z-10 p-9 text-white flex flex-col absolute bottom-0", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-3xl font-thin mb-3", children: "Aman dan Nyaman" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg", children: "Dijamin LPS sampai dengan simpanan Rp 2 M, sangat aman untuk investasi anda." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 flex flex-col py-5 md:py-0 md:p-10 justify-center order-first md:order-last md:bg-blue-300/25", children: [
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
            Badge,
            {
              variant: "outline",
              className: "text-sm bg-blue-500/10 border-blue-400 text-blue-700",
              children: "Keunggulan kami ✨"
            }
          ) }),
          /* @__PURE__ */ jsx(TitleText, { children: "Kenapa harus kita" }),
          /* @__PURE__ */ jsx(SubtitleText, { children: "Dari Masyarakat dan untuk masyarakat dengan Bunga Deposito Tinggi Dijamin LPS Suku Bunga Kredit Bersaing yang pasti aman dan nyaman untuk investasi aman, proses kredit cepat dan syarat mudah." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 container px-4 md:px-6 mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative h-[500px]", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "assets/assets2.jpg",
              alt: "Pickup Service",
              className: "brightness-50 absolute -z-10 object-cover w-full h-full",
              loading: "lazy"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "z-10 p-9 text-white flex flex-col absolute bottom-0", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-3xl font-thin mb-3", children: "Pickup Service" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg", children: "Untuk anda dengan tingkat kesibukan yang tinggi, kami siap untuk melayani transaksi keuangan anda dengan pickup service." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative h-[500px]", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "assets/assets3.jpg",
              alt: "aman dan nyaman",
              className: "brightness-50 absolute -z-10 object-cover w-full h-full",
              loading: "lazy"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "z-10 p-9 text-white flex flex-col absolute bottom-0", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-3xl font-thin mb-3", children: "Proses Cepat" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg", children: "Pengajuan simpanan dan kredit anda kami proses pada hari yang sama." })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-screen-xl w-full mx-auto py-10 md:py-16", children: /* @__PURE__ */ jsxs("div", { className: "container px-4 md:px-6 mx-auto flex flex-col items-center text-center space-y-4", children: [
      /* @__PURE__ */ jsx(TitleText, { children: "Tim Kami" }),
      /* @__PURE__ */ jsx(SubtitleText, { children: "Kami memiliki tim yang profesional dan berpengalaman." }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 w-full pt-11", children: teams.length > 0 ? teams.map((team) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex flex-col items-center text-center",
          children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: `${route("landing")}/public/storage/${team.image}`,
                alt: "about",
                className: "object-cover rounded-full aspect-square w-40"
              }
            ),
            /* @__PURE__ */ jsx("h3", { className: "mt-4 font-semibold", children: team.name }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: team.position })
          ]
        },
        team.id
      )) : /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-full h-96", children: /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "No data available" }) }) })
    ] }) }),
    /* @__PURE__ */ jsx(SiteContact, { banks: metaInfo }),
    /* @__PURE__ */ jsx("section", { className: "max-w-screen-xl w-full mx-auto py-10 md:py-16", children: /* @__PURE__ */ jsxs("div", { className: "container px-4 md:px-6 mx-auto py-10 md:py-20", children: [
      /* @__PURE__ */ jsx("div", { className: "flex flex-col mb-10", children: /* @__PURE__ */ jsx(TitleText, { children: "Artikel" }) }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8", children: articles.length > 0 ? articles.map((article) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: `${route("landing")}/public/storage/${article.image}`,
            alt: article.title
          }
        ),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "mt-4 font-semibold", children: article.title }),
          /* @__PURE__ */ jsx(
            "p",
            {
              className: "text-sm text-muted-foreground",
              dangerouslySetInnerHTML: {
                __html: article.description
              }
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              className: "mt-2 p-0",
              variant: "link",
              asChild: true,
              children: /* @__PURE__ */ jsx(Link, { href: route("article.page"), children: "Baca selengkapnya" })
            }
          )
        ] })
      ] }, article.id)) : /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-full h-96", children: /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "No data available" }) }) }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center mt-10", children: /* @__PURE__ */ jsx(Link, { href: route("article.page"), children: /* @__PURE__ */ jsx(Button, { children: "Lihat semuanya" }) }) })
    ] }) })
  ] });
}
export {
  Landing as default
};
