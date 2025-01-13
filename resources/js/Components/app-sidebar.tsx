import { useState } from "react";
import { Link } from "@inertiajs/react";
import {
    Home,
    ReceiptText,
    User2,
    ChevronUp,
    LucideProps,
    ChevronRight,
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarFooter,
    SidebarMenuSubItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
} from "@/Components/ui/sidebar";
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuContent,
} from "@/Components/ui/dropdown-menu";
import {
    Collapsible,
    CollapsibleTrigger,
    CollapsibleContent,
} from "./ui/collapsible";
import { cn } from "@/lib/utils";

const items = [
    {
        title: "Dashboard",
        url: "dashboard",
        icon: Home,
    },
    {
        title: "Layanan",
        icon: ReceiptText,
        children: [
            {
                title: "Daftar Layanan",
                url: "services.index",
                icon: ReceiptText,
            },
            {
                title: "Form Layanan",
                url: "services.create",
                icon: ReceiptText,
            },
        ],
    },
    {
        title: "Produk",
        icon: ReceiptText,
        children: [
            {
                title: "Daftar Produk",
                url: "products.index",
                icon: ReceiptText,
            },
            {
                title: "Form Produk",
                url: "products.create",
                icon: ReceiptText,
            },
        ],
    },
    {
        title: "Carousel",
        icon: ReceiptText,
        children: [
            {
                title: "Daftar Carousel",
                url: "carousels.index",
                icon: ReceiptText,
            },
            {
                title: "Form Carousel",
                url: "carousels.create",
                icon: ReceiptText,
            },
        ],
    },
    {
        title: "Artikel",
        icon: ReceiptText,
        children: [
            {
                title: "Daftar Artikel",
                url: "articles.index",
                icon: ReceiptText,
            },
            {
                title: "Form Artikel",
                url: "articles.create",
                icon: ReceiptText,
            },
        ],
    },
];

interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export function AppSidebar({ user }: { readonly user: User }) {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarItem item={item} key={item.title} />
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <User2 /> {user.name}
                                    <ChevronUp className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side="top"
                                className="w-[--radix-popper-anchor-width] bg-white"
                            >
                                <DropdownMenuItem>
                                    <Link
                                        href={route("profile.edit")}
                                        className="w-full"
                                    >
                                        <span>Profile</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    asChild
                                    className="text-red-500 focus:bg-red-100 focus:text-red-500"
                                >
                                    <Link
                                        href={route("logout")}
                                        method="post"
                                        className="w-full"
                                    >
                                        <span>Sign out</span>
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}

function SidebarItem({
    item: { title, url, icon: Icon, children },
}: {
    readonly item: {
        title: string;
        url?: string;
        icon?: React.ForwardRefExoticComponent<
            Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
        >;
        children?: {
            title: string;
            url: string;
            icon?: React.ForwardRefExoticComponent<
                Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
            >;
        }[];
    };
}) {
    const routes = url ? route().current(url) : null;
    const [open, setOpen] = useState<boolean>(routes ?? false);

    const toggleOpen = () => {
        setOpen((previousState) => !previousState);
    };

    return (
        <SidebarMenuItem>
            {children ? (
                <Collapsible
                    open={open}
                    onOpenChange={toggleOpen}
                    className="group/collapsible"
                >
                    <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                            <SidebarMenuButton>
                                {Icon ? (
                                    <Icon
                                        className={
                                            routes
                                                ? "text-primary stroke-current"
                                                : ""
                                        }
                                    />
                                ) : null}
                                {title}
                                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                            </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                            {children.map((child) => (
                                <SidebarMenuSub key={child.title}>
                                    <SidebarMenuSubItem>
                                        <SidebarMenuButtonItem {...child} subMenu={true} />
                                    </SidebarMenuSubItem>
                                </SidebarMenuSub>
                            ))}
                        </CollapsibleContent>
                    </SidebarMenuItem>
                </Collapsible>
            ) : (
                <SidebarMenuButtonItem title={title} url={url} icon={Icon} />
            )}
        </SidebarMenuItem>
    );
}

function SidebarMenuButtonItem({
    title,
    url,
    icon: Icon,
    routes,
    subMenu = false,
}: {
    readonly title: string;
    readonly url?: string;
    readonly icon?: React.ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
    readonly routes?: boolean;
    readonly subMenu?: boolean;
}) {
    const iconEl = Icon ? (
        <Icon className={routes ? "text-primary stroke-current" : ""} />
    ) : null;

    return subMenu ? (
        <SidebarMenuSubButtonContent
            url={url}
            iconEl={iconEl}
            title={title}
            routes={routes}
        />
    ) : (
        <SidebarMenuButtonContent
            url={url}
            iconEl={iconEl}
            title={title}
            routes={routes}
        />
    );
}

function SidebarMenuSubButtonContent({
    url,
    iconEl,
    title,
    routes,
}: {
    readonly url?: string;
    readonly iconEl: JSX.Element | null;
    readonly title: string;
    readonly routes?: boolean;
}) {
    return (
        <SidebarMenuSubButton
            asChild
            className={cn(routes ? "bg-primary/10" : "")}
        >
            {url ? (
                <Link href={route(url)}>
                    {iconEl}
                    <span className={routes ? "text-primary font-medium" : ""}>
                        {title}
                    </span>
                </Link>
            ) : (
                <span>
                    {iconEl}
                    <span className={routes ? "text-primary font-medium" : ""}>
                        {title}
                    </span>
                </span>
            )}
        </SidebarMenuSubButton>
    );
}

function SidebarMenuButtonContent({
    url,
    iconEl,
    title,
    routes,
}: {
    readonly url?: string;
    readonly iconEl: JSX.Element | null;
    readonly title: string;
    readonly routes?: boolean;
}) {
    return (
        <SidebarMenuButton
            asChild
            className={cn(routes ? "bg-primary/10" : "")}
        >
            {url ? (
                <Link href={route(url)}>
                    {iconEl}
                    <span className={routes ? "text-primary font-medium" : ""}>
                        {title}
                    </span>
                </Link>
            ) : (
                <span>
                    {iconEl}
                    <span className={routes ? "text-primary font-medium" : ""}>
                        {title}
                    </span>
                </span>
            )}
        </SidebarMenuButton>
    );
}
