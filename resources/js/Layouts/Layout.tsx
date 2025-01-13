import { PropsWithChildren } from "react";

import { SiteHeader } from "@/Components/site-header";
import SiteFooter from "@/Components/site-footer";

import { bankProps } from "@/types/bank";
import { servicesProps } from "@/types/services";

interface LayoutProps extends PropsWithChildren {
    banks: bankProps;
    services: servicesProps[];
}

export default function Layout({
    children,
    banks: metaInfo,
    services,
}: Readonly<LayoutProps>) {
    return (
        <div>
            <SiteHeader services={services} />
            {children}
            <SiteFooter metaInfo={metaInfo} servicesMenu={services} />
        </div>
    );
}
