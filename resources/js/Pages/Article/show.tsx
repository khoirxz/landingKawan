import { Head, Link } from "@inertiajs/react";

import Layout from "@/Layouts/Layout";

import bg2 from "@/Assets/bg2.jpg"
import { TitleText, SubtitleText } from "@/Components/typography";
import { bankProps } from "@/types/bank";
import { servicesProps } from "@/types/services";
import { ArticleProps } from "@/types/article";

export default function ArticleShow({
    banks,
    services,
    article,
}: {
    readonly banks: bankProps;
    readonly services: servicesProps[];
    readonly article: ArticleProps;
}) {
    return (
        <Layout banks={banks} services={services}>
            <Head title={article.title} />

            <section className="max-w-screen-xl w-full mx-auto relative">
                <img
                    src={bg2}
                    alt="bpr kawan event"
                    className="max-h-[500px] w-full h-full object-cover"
                />
                <div className="h-full absolute inset-0 bg-black opacity-50"></div>
                <div className="containe px-4 md:px-6 mx-auto flex flex-col items-center text-center space-y-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <TitleText color="text-white">Text title</TitleText>
                    <SubtitleText color="text-white">
                        Berikut produk dan layanan yang kami sediakan.
                    </SubtitleText>
                </div>
            </section>
        </Layout>
    );
}
