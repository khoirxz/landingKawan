import { Button } from "@/components/ui/button";
import { Separator } from "@/Components/ui/separator";
import {
    FaWhatsapp,
    FaFacebook,
    FaInstagram,
    FaLocationDot,
} from "react-icons/fa6";

import { bankProps } from "@/types/bank";

export default function SiteContact({ banks }: { readonly banks: bankProps }) {
    return (
        <section className="max-w-screen-xl w-full mx-auto py-10 md:py-16 relative bg-[url('/assets/contact.png')] bg-cover bg-center">
            <div className="relative z-10 container px-4 md:px-6 mx-auto text-white flex flex-col md:flex-row gap-4">
                <div className="mb-5 md:mb-0 flex-1">
                    <h1 className="text-4xl font-thin">Hubungi kami</h1>
                    <p className="text-lg mt-3">
                        Pelayanan 24 jam dan siap membantu kapanpun anda butuh.
                    </p>
                    <Button className="mt-5">Hubungi Kami</Button>
                </div>
                <Separator
                    orientation="vertical"
                    className="h-40 mx-auto hidden md:block"
                />
                <div className="flex flex-col gap-3 w- md:w-2/4">
                    <div className="flex gap-3 justify-start">
                        <div className="h-5 w-5">
                            <FaInstagram className="h-5 w-5" />
                        </div>
                        <span>@bprkawan</span>
                    </div>
                    <div className="flex gap-3 justify-start">
                        <div className="h-5 w-5">
                            <FaFacebook className="h-5 w-5" />
                        </div>
                        <span>BPR KAWAN DAU</span>
                    </div>
                    <div className="flex gap-3 justify-start">
                        {JSON.parse(banks.phone).map(
                            (phoneObj: { id: number; number: string }) => (
                                <a
                                    className="flex gap-3 items-center"
                                    target="_blank"
                                    rel="noreferrer"
                                    key={phoneObj.id}
                                    href={`https://api.whatsapp.com/send?phone=${phoneObj.number}`}
                                >
                                    <div className="h-5 w-5">
                                        <FaWhatsapp className="h-5 w-5" />
                                    </div>
                                    <span> +{phoneObj.number} (Whatsapp)</span>
                                </a>
                            )
                        )}
                    </div>
                    {JSON.parse(banks.address).map(
                        (addressObj: {
                            id: number;
                            title: string;
                            address: string;
                        }) => (
                            <div
                                key={addressObj.id}
                                className="flex gap-3 justify-start"
                            >
                                <div className="h-5 w-5">
                                    <FaLocationDot className="h-5 w-5" />
                                </div>
                                <span>
                                    {addressObj.title} {addressObj.address}
                                </span>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}
