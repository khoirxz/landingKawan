import { Head, Link } from "@inertiajs/react";

import Layout from "@/Layouts/Layout";

import { TitleText, SubtitleText } from "@/Components/typography";
import { bankProps } from "@/types/bank";
import { servicesProps } from "@/types/services";
import { productProps } from "@/types/product";

export default function Product({
    banks,
    data,
    services,
}: {
    readonly banks: bankProps;
    readonly data: productProps;
    readonly services: servicesProps[];
}) {
    return (
        <Layout banks={banks} services={services}>
            <Head title={data.name} />

            <section className="max-w-screen-xl w-full mx-auto relative max-h-[500px]">
                <img
                    src={`http://127.0.0.1:8000/storage/${data.image}`}
                    alt="bpr kawan event"
                    className="h-full object-cover max-h-[500px] w-full"
                />
                <div className="h-full absolute inset-0 bg-black opacity-50"></div>
                <div className="containe px-4 md:px-6 mx-auto flex flex-col items-center text-center space-y-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <TitleText color="text-white">{data.name}</TitleText>
                    <SubtitleText color="text-white">
                        {data.description}
                    </SubtitleText>
                </div>
            </section>

            <section
                className="max-w-screen-xl w-full mx-auto relative py-5 px-4 md:px-6 tiptap preview"
                dangerouslySetInnerHTML={{ __html: data.content ?? "" }}
            />
        </Layout>
    );
}
