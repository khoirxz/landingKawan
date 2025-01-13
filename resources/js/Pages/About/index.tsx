import { Head } from "@inertiajs/react";

import Layout from "@/Layouts/Layout";

import { TitleText, SubtitleText } from "@/Components/typography";
import { bankProps } from "@/types/bank";
import { servicesProps } from "@/types/services";

export default function About({
    banks,
    services,
}: {
    readonly banks: bankProps;
    readonly services: servicesProps[];
}) {
    return (
        <Layout banks={banks} services={services}>
            <Head title="About" />

            <section className="max-w-screen-xl w-full mx-auto py-10 md:py-16">
                <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center space-y-4">
                    <TitleText>About</TitleText>
                    <SubtitleText>
                        About pembiayaan Anda dengan kalkulator simulasi
                        dibawah ini.
                    </SubtitleText>
                </div>
            </section>
        </Layout>
    );
}
