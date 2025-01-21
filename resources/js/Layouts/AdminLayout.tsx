import { PropsWithChildren } from "react";
import { usePage } from "@inertiajs/react";

import {
    SidebarProvider,
    SidebarTrigger,
    SidebarInset,
} from "@/Components/ui/sidebar";
import {
    Breadcrumb,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbSeparator,
    BreadcrumbPage,
} from "@/Components/ui/breadcrumb";
import { Separator } from "@/Components/ui/separator";
import { AppSidebar } from "@/Components/app-sidebar";

export default function AdminLayout({
    headerEl,
    children,
}: PropsWithChildren<{ headerEl?: React.ReactNode }>) {
    const user = usePage().props.auth.user;

    return (
        <SidebarProvider className="font-main">
            <AppSidebar user={user} />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem className="hidden md:block">
                                <BreadcrumbLink href="#">
                                    Building Your Application
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="hidden md:block" />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </header>
                <main>
                    <div className="p-4">
                        {headerEl && (
                            <div className="mb-4">{headerEl}</div>
                        )}
                        {children}
                    </div>
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}
