import { Head, Link } from "@inertiajs/react";

import Layout from "@/Layouts/Layout";

import { TitleText, SubtitleText } from "@/Components/typography";
import { bankProps } from "@/types/bank";
import { servicesProps } from "@/types/services";
import { ArticleProps } from "@/types/article";

export default function Article({
    banks,
    services,
    articles,
}: {
    readonly banks: bankProps;
    readonly services: servicesProps[];
    readonly articles: ReadonlyArray<ArticleProps>;
}) {
    return (
        <Layout banks={banks} services={services}>
            <Head title="Artikel dan Berita" />

            <section className="max-w-screen-xl w-full mx-auto py-10 md:py-16">
                <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center space-y-4">
                    <TitleText>Artikel dan Berita</TitleText>
                    <SubtitleText>
                        Temukan informasi terbaru tentang BPR KAWAN
                    </SubtitleText>
                </div>
            </section>

            <section className="max-w-screen-xl w-full mx-auto py-10 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
                    {articles.map((item) => (
                        <Link
                            key={item.id}
                            href={route("article.show", item.slug)}
                            className="flex flex-col items-center space-y-4"
                        >
                            <img
                                src={`http://127.0.0.1:8000/storage/${item.image}`}
                                alt={item.title}
                                className="w-full h-48 bg-gray-200"
                            />
                            <div className="flex flex-col items-center space-y-2">
                                <h3 className="text-xl font-semibold">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600">
                                    {item.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </Layout>
    );
}
