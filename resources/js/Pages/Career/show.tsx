import { Head } from "@inertiajs/react";
import dayjs from "dayjs";

import { Button } from "@/Components/ui/button";
import { TitleText, SubtitleText } from "@/Components/typography";
import Layout from "@/Layouts/Layout";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    BreadcrumbPage,
    BreadcrumbList,
} from "@/Components/ui/breadcrumb";

import { bankProps } from "@/types/bank";
import { servicesProps } from "@/types/services";
import { careerProps } from "@/types/career";

export default function CareerShow({
    banks,
    services,
    career,
}: {
    readonly banks: bankProps;
    readonly services: servicesProps[];
    readonly career: careerProps;
}) {
    
    return (
        <Layout banks={banks} services={services}>
            <Head title={`Karir ${career.title}`} />

            <section className="max-w-screen-xl w-full mx-auto py-10 md:py-16">
                <div className="container px-4 md:px-6 mx-auto flex flex-col space-y-4">
                    <Breadcrumb className="mb-4">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href={route("landing")}>
                                    Home
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href={route("career.page")}>
                                    Karir
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>{career.title}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <TitleText>{career.title}</TitleText>
                    <div>
                        <span className="text-gray-600 bg-gray-300 px-2 py-1">
                            {dayjs(career.created_at).format("DD MMMM YYYY")}
                        </span>
                    </div>
                    <SubtitleText>{career.description}</SubtitleText>
                </div>
            </section>

            <section className="max-w-screen-md w-full mx-auto relative py-5 px-4 md:px-6">
                <h1 className="font-semibold text-lg md:text-2xl">
                    Detail Pekerjaan
                </h1>
                <div
                    className="tiptap preview"
                    dangerouslySetInnerHTML={{ __html: career.content ?? "" }}
                />

                <Button>
                    <a
                        href={`https://wa.me/${
                            JSON.parse(banks.phone)[0].number
                        }`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Lamar sekarang
                    </a>
                </Button>
            </section>
        </Layout>
    );
}
