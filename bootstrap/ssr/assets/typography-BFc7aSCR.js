import { jsxs, jsx } from "react/jsx-runtime";
import * as React from "react";
import React__default from "react";
import { Link } from "@inertiajs/react";
import { c as cn, B as Button } from "./button-CjC9Szlf.js";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDown, MessageCircle } from "lucide-react";
import { S as Sheet, b as SheetTrigger, a as SheetContent } from "./sheet-D96Gr-EJ.js";
import { S as ScrollArea } from "./scroll-area-DwbBZHxM.js";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { FaInstagram, FaFacebook } from "react-icons/fa6";
const NavigationMenu = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  NavigationMenuPrimitive.Root,
  {
    ref,
    className: cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(NavigationMenuViewport, {})
    ]
  }
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
const NavigationMenuList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.List,
  {
    ref,
    className: cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    ),
    ...props
  }
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
const NavigationMenuItem = NavigationMenuPrimitive.Item;
const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
);
const NavigationMenuTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  NavigationMenuPrimitive.Trigger,
  {
    ref,
    className: cn(navigationMenuTriggerStyle(), "group", className),
    ...props,
    children: [
      children,
      " ",
      /* @__PURE__ */ jsx(
        ChevronDown,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
const NavigationMenuContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.Content,
  {
    ref,
    className: cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    ),
    ...props
  }
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
const NavigationMenuLink = NavigationMenuPrimitive.Link;
const NavigationMenuViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { className: cn("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.Viewport,
  {
    className: cn(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      className
    ),
    ref,
    ...props
  }
) }));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;
const NavigationMenuIndicator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.Indicator,
  {
    ref,
    className: cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;
const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Item,
  {
    ref,
    className: cn("border-b", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
function MobileNav({
  services
}) {
  return /* @__PURE__ */ jsx(ScrollArea, { className: "h-full", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-4 px-5 py-10 z-0", children: [
    /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "w-full", children: /* @__PURE__ */ jsxs(AccordionItem, { value: "products", children: [
      /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-base font-medium", children: "Produk" }),
      /* @__PURE__ */ jsx(AccordionContent, { children: /* @__PURE__ */ jsx("div", { className: "flex flex-col space-y-2", children: services.map((service) => /* @__PURE__ */ jsxs(
        Link,
        {
          href: service.slug,
          className: "block space-y-1 p-2 hover:bg-muted",
          children: [
            /* @__PURE__ */ jsx("div", { className: "font-medium text-primary", children: service.name }),
            /* @__PURE__ */ jsx("div", { className: "line-clamp-2 text-sm text-muted-foreground", children: service.description })
          ]
        },
        service.id
      )) }) })
    ] }) }),
    /* @__PURE__ */ jsx(
      Link,
      {
        href: route("simulation.page"),
        className: "text-base font-medium p-1 hover:text-primary",
        children: "Simulasi"
      }
    ),
    /* @__PURE__ */ jsx(
      Link,
      {
        href: route("career.page"),
        className: "text-base font-medium p-1 hover:text-primary",
        children: "Karir"
      }
    ),
    /* @__PURE__ */ jsx(
      Link,
      {
        href: route("about.page"),
        className: "text-base font-medium p-1 hover:text-primary",
        children: "Tentang"
      }
    )
  ] }) });
}
function SiteHeader({
  services
}) {
  const [isScrolled, setIsScrolled] = React__default.useState(false);
  React__default.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsx(
    "header",
    {
      className: cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        isScrolled ? "border-border shadow-sm" : "border-transparent"
      ),
      children: /* @__PURE__ */ jsxs("div", { className: "container flex h-16 items-center mx-auto px-0 lg:px-5", children: [
        /* @__PURE__ */ jsxs(Sheet, { children: [
          /* @__PURE__ */ jsx(SheetTrigger, { className: "lg:hidden", asChild: true, children: /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "ghost",
              size: "icon",
              className: "mr-6 lg:hidden",
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle navigation menu" }),
                /* @__PURE__ */ jsxs(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    className: "h-6 w-6",
                    children: [
                      /* @__PURE__ */ jsx("line", { x1: "4", x2: "20", y1: "12", y2: "12" }),
                      /* @__PURE__ */ jsx("line", { x1: "4", x2: "20", y1: "6", y2: "6" }),
                      /* @__PURE__ */ jsx("line", { x1: "4", x2: "20", y1: "18", y2: "18" })
                    ]
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(
            SheetContent,
            {
              side: "left",
              className: "w-screen sm:w-[540px] p-0",
              children: /* @__PURE__ */ jsx(MobileNav, { services })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(Link, { href: route("landing"), className: "mr-6 flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "assets/logo.png",
              alt: "logo",
              className: "w-8 h-8 object-contain md:hidden"
            }
          ),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "assets/logofull.png",
              alt: "logo",
              className: "w-28 object-contain hidden md:block"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(NavigationMenu, { className: "hidden lg:flex", children: /* @__PURE__ */ jsxs(NavigationMenuList, { children: [
          /* @__PURE__ */ jsxs(NavigationMenuItem, { children: [
            /* @__PURE__ */ jsx(NavigationMenuTrigger, { className: "bg-transparent text-base font-medium", children: "Layanan" }),
            /* @__PURE__ */ jsx(NavigationMenuContent, { children: /* @__PURE__ */ jsx("div", { className: "w-[540px] bg-white shadow-lg", children: /* @__PURE__ */ jsx("div", { className: "grid gap-6 p-3 md:grid-cols-3", children: services.map((service) => /* @__PURE__ */ jsxs(
              Link,
              {
                href: route(
                  "service.page",
                  service.slug
                ),
                className: "group block space-y-2 p-4 transition-colors hover:bg-muted",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "text-lg font-semibold leading-none group-hover:text-primary", children: service.name }),
                  /* @__PURE__ */ jsxs("div", { className: "line-clamp-2 text-sm text-muted-foreground group-hover:text-primary/90", children: [
                    service.description.slice(
                      0,
                      32
                    ),
                    "..."
                  ] })
                ]
              },
              service.id
            )) }) }) })
          ] }),
          /* @__PURE__ */ jsx(NavigationMenuItem, { children: /* @__PURE__ */ jsx(
            NavigationMenuLink,
            {
              className: cn(
                navigationMenuTriggerStyle(),
                "text-base font-medium bg-transparent cursor-pointer"
              ),
              asChild: true,
              children: /* @__PURE__ */ jsx(Link, { href: route("simulation.page"), children: "Simulasi" })
            }
          ) }),
          /* @__PURE__ */ jsx(NavigationMenuItem, { children: /* @__PURE__ */ jsx(
            NavigationMenuLink,
            {
              className: cn(
                navigationMenuTriggerStyle(),
                "text-base font-medium bg-transparent cursor-pointer"
              ),
              asChild: true,
              children: /* @__PURE__ */ jsx(Link, { href: route("career.page"), children: "Karir" })
            }
          ) }),
          /* @__PURE__ */ jsx(NavigationMenuItem, { children: /* @__PURE__ */ jsx(
            NavigationMenuLink,
            {
              className: cn(
                navigationMenuTriggerStyle(),
                "text-base font-medium bg-transparent cursor-pointer"
              ),
              asChild: true,
              children: /* @__PURE__ */ jsx(Link, { href: route("about.page"), children: "Tentang" })
            }
          ) })
        ] }) })
      ] })
    }
  );
}
function SiteFooter({
  metaInfo,
  servicesMenu
}) {
  return /* @__PURE__ */ jsxs("footer", { className: "border-t border-primary/40", children: [
    /* @__PURE__ */ jsx("div", { className: "md:py-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-screen-xl w-full container px-4 md:px-6 py-8 mx-auto gap-5 grid grid-cols-1 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: `${route("landing")}/home/public/assets/logofull.png`,
            alt: "logo",
            className: "w-48 object-contain"
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-3", children: "PT. BPR KAWAN Berizin dan Diawasi oleh Otoritas Jasa Keuangan" }),
        /* @__PURE__ */ jsxs("div", { className: "flex mt-4 space-x-4", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              alt: "bpr",
              src: `${route("landing")}/home/public/assets/bpr.png`,
              className: "w-16 h-16 md:w-16 md:h-16 object-contain"
            }
          ),
          /* @__PURE__ */ jsx(
            "img",
            {
              alt: "lps",
              src: `${route("landing")}/home/assets/lps.png`,
              className: "w-16 h-16 md:w-16 md:h-16 object-contain"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-3", children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "Alamat" }),
          JSON.parse(metaInfo.address).map(
            (addressObj) => /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-semibold", children: addressObj.title }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: addressObj.address })
            ] }, addressObj.id)
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 flex flex-col space-y-2", children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "Kontak" }),
          JSON.parse(metaInfo.phone).map(
            (phoneObj) => /* @__PURE__ */ jsx(
              "a",
              {
                target: "_blank",
                rel: "noreferrer",
                href: `https://api.whatsapp.com/send?phone=${phoneObj.number}`,
                children: /* @__PURE__ */ jsxs("span", { children: [
                  " ",
                  "+",
                  phoneObj.number,
                  " (Whatsapp)"
                ] })
              },
              phoneObj.id
            )
          ),
          JSON.parse(metaInfo.email).map(
            (emailObj) => /* @__PURE__ */ jsx(
              "a",
              {
                href: `mailto:${emailObj.email}`,
                children: /* @__PURE__ */ jsx("span", { children: emailObj.email })
              },
              emailObj.id
            )
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://www.instagram.com/bprkawan/",
              target: "_blank",
              rel: "noreferrer",
              children: /* @__PURE__ */ jsxs("div", { className: "flex gap-3 justify-start items-start", children: [
                /* @__PURE__ */ jsx("span", { className: "flex items-center justify-center space-x-2", children: /* @__PURE__ */ jsx(FaInstagram, { className: "h-5 w-5" }) }),
                /* @__PURE__ */ jsx("span", { children: "BPR KAWAN OFFICIAL" })
              ] })
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://www.facebook.com/bprkawan",
              target: "_blank",
              rel: "noreferrer",
              children: /* @__PURE__ */ jsxs("div", { className: "flex gap-3 justify-start items-start", children: [
                /* @__PURE__ */ jsx("span", { className: "flex items-center justify-center space-x-2", children: /* @__PURE__ */ jsx(FaFacebook, { className: "h-5 w-5" }) }),
                /* @__PURE__ */ jsx("span", { children: "BPR KAWAN DAU" })
              ] })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-36", children: [
          /* @__PURE__ */ jsx("h2", { className: "tracking-tighter text-gray-500 font-bold", children: "Produk" }),
          /* @__PURE__ */ jsx("div", { className: "mt-3 space-y-2", children: servicesMenu.map((service) => /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(Link, { href: `/service/${service.slug}`, children: service.name }) }, service.id)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "max-w-36", children: [
          /* @__PURE__ */ jsx("h2", { className: "tracking-tighter text-gray-500 font-bold", children: "Informasi" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-3 space-y-2", children: [
            /* @__PURE__ */ jsx("p", { children: "Hubungi kami" }),
            /* @__PURE__ */ jsx("p", { children: "Karir" }),
            /* @__PURE__ */ jsx("p", { children: "Syarat dan ketentuan" }),
            /* @__PURE__ */ jsx("p", { children: "Kebijakan Privasi" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "px-4 md:px-6 mx-auto py-5 text-center bg-primary text-white text-sm", children: /* @__PURE__ */ jsx("p", { children: "© 2023 PT. BPR KAWAN" }) })
  ] });
}
function FloatButton({ number }) {
  return /* @__PURE__ */ jsxs(
    Button,
    {
      className: "fixed bottom-4 right-4 rounded-full shadow-lg bg-green-700 hover:bg-green-900",
      size: "lg",
      onClick: () => {
        window.open(`https://wa.me/${number}`, "_blank");
      },
      children: [
        /* @__PURE__ */ jsx(MessageCircle, { className: "mr-2 h-4 w-4" }),
        "Hubungi Kami"
      ]
    }
  );
}
function Layout({
  children,
  banks: metaInfo,
  services
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(SiteHeader, { services }),
    children,
    /* @__PURE__ */ jsx(FloatButton, { number: JSON.parse(metaInfo.phone)[0]["number"] }),
    /* @__PURE__ */ jsx(SiteFooter, { metaInfo, servicesMenu: services })
  ] });
}
const TitleText = ({ children, color = "text-[#0a0633]" }) => {
  return /* @__PURE__ */ jsx("h2", { className: `text-3xl font-thin tracking-tighter sm:text-4xl md:text-5xl ${color}`, children });
};
const SubtitleText = ({ children, color = "text-gray-600" }) => {
  return /* @__PURE__ */ jsx("p", { className: `max-w-[700px] md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed ${color}`, children });
};
export {
  Layout as L,
  SubtitleText as S,
  TitleText as T
};
