import { Head, Link } from "@inertiajs/react";

import Layout from "@/Layouts/Layout";

import { TitleText, SubtitleText } from "@/Components/typography";
import { bankProps } from "@/types/bank";
import { servicesProps } from "@/types/services";
import { productProps } from "@/types/product";

export default function Service({
    banks,
    metainfo,
    services,
    products,
}: {
    readonly banks: bankProps;
    readonly metainfo: servicesProps;
    readonly services: servicesProps[];
    readonly products: productProps[];
}) {

    return (
        <Layout banks={banks} services={services}>
            <Head title={metainfo.name} />

            <section className="max-w-screen-xl w-full mx-auto relative">
                <img
                    src={`http://127.0.0.1:8000/storage/${metainfo.image}`}
                    alt="bpr kawan event"
                    className="max-h-[500px] w-full h-full object-cover"
                />
                <div className="h-full absolute inset-0 bg-black opacity-50"></div>
                <div className="containe px-4 md:px-6 mx-auto flex flex-col items-center text-center space-y-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <TitleText color="text-white">{metainfo.name}</TitleText>
                    <SubtitleText color="text-white">
                        Berikut produk dan layanan yang kami sediakan.
                    </SubtitleText>
                </div>
            </section>

            <section className="max-w-screen-xl w-full my-12 mx-auto relative">
                <div className="grid grid-cols-1">
                    {products.length === 0 ? (
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-3xl">Tidak ada produk</h1>
                        </div>
                    ) : (
                        products.map((item, index) => (
                            <div
                                key={item.id}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-5 ${
                                    index % 2 === 0
                                        ? "lg:grid-cols-2-reverse"
                                        : ""
                                }`}
                            >
                                <img
                                    className="h-72 p-3 lg:p-0 w-full object-cover"
                                    alt={item.name}
                                    src={`http://127.0.0.1:8000/storage/${item.image}`}
                                />
                                <div className="flex flex-col justify-center space-y-2 p-3 lg:p-0">
                                    <h2 className="text-3xl font-semibold">
                                        {item.name}
                                    </h2>
                                    <p className="text-gray-500">
                                        {item.description}
                                    </p>
                                    <Link
                                        href={route("product.page", item.slug)}
                                        className="text-primary hover:underline"
                                    >
                                        Baca selengkapnya...
                                    </Link>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </section>
        </Layout>
    );
}
