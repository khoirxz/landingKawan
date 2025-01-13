import { Link } from "@inertiajs/react";

import { FaFacebook, FaInstagram } from "react-icons/fa6";

import { bankProps } from "@/types/bank";
import { servicesProps } from "@/types/services";

export default function SiteFooter({
    metaInfo,
    servicesMenu,
}: {
    readonly metaInfo: bankProps;
    readonly servicesMenu: servicesProps[];
}) {
    
    return (
        <footer className="border-t border-primary/40">
            <div className="md:py-16">
                <div className="max-w-screen-xl w-full container px-4 md:px-6 py-8 mx-auto gap-5 grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <img
                            src="/assets/logofull.png"
                            alt="logo"
                            className="w-48 object-contain"
                        />
                        <p className="text-gray-600 mt-3">
                            PT. BPR KAWAN Berizin dan Diawasi oleh Otoritas Jasa
                            Keuangan
                        </p>
                        <div className="flex mt-4 space-x-4">
                            <img
                                alt="bpr"
                                src="/assets/bpr.png"
                                className="w-16 h-16 md:w-16 md:h-16 object-contain"
                            />
                            <img
                                alt="lps"
                                src="/assets/lps.png"
                                className="w-16 h-16 md:w-16 md:h-16 object-contain"
                            />
                        </div>
                        <div className="mt-4 space-y-3">
                            <p className="font-semibold">Alamat</p>
                            {JSON.parse(metaInfo.address).map(
                                (addressObj: {
                                    id: number;
                                    title: string;
                                    address: string;
                                }) => (
                                    <div key={addressObj.id}>
                                        <p className="font-semibold">
                                            {addressObj.title}
                                        </p>
                                        <p className="text-gray-600">
                                            {addressObj.address}
                                        </p>
                                    </div>
                                )
                            )}
                        </div>
                        <div className="mt-4 flex flex-col space-y-2">
                            <p className="font-semibold">Kontak</p>
                            {JSON.parse(metaInfo.phone).map(
                                (phoneObj: { id: number; number: string }) => (
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        key={phoneObj.id}
                                        href={`https://api.whatsapp.com/send?phone=${phoneObj.number}`}
                                    >
                                        <span>
                                            {" "}
                                            +{phoneObj.number} (Whatsapp)
                                        </span>
                                    </a>
                                )
                            )}
                            {JSON.parse(metaInfo.email).map(
                                (emailObj: { id: number; email: string }) => (
                                    <a
                                        key={emailObj.id}
                                        href={`mailto:${emailObj.email}`}
                                    >
                                        <span>{emailObj.email}</span>
                                    </a>
                                )
                            )}
                            <a
                                href="https://www.instagram.com/bprkawan/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="flex gap-3 justify-start items-start">
                                    <span className="flex items-center justify-center space-x-2">
                                        <FaInstagram className="h-5 w-5" />
                                    </span>
                                    <span>BPR KAWAN OFFICIAL</span>
                                </div>
                            </a>
                            <a
                                href="https://www.facebook.com/bprkawan"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="flex gap-3 justify-start items-start">
                                    <span className="flex items-center justify-center space-x-2">
                                        <FaFacebook className="h-5 w-5" />
                                    </span>
                                    <span>BPR KAWAN DAU</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="max-w-36">
                            <h2 className="tracking-tighter text-gray-500 font-bold">
                                Produk
                            </h2>
                            <div className="mt-3 space-y-2">
                                {servicesMenu.map((service) => (
                                    <p key={service.id}>
                                        <Link href={`/service/${service.slug}`}>
                                            {service.name}
                                        </Link>
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="max-w-36">
                            <h2 className="tracking-tighter text-gray-500 font-bold">
                                Informasi
                            </h2>
                            <div className="mt-3 space-y-2">
                                <p>Hubungi kami</p>
                                <p>Karir</p>
                                <p>Syarat dan ketentuan</p>
                                <p>Kebijakan Privasi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4 md:px-6 mx-auto py-5 text-center bg-primary text-white text-sm">
                <p>&copy; 2023 PT. BPR KAWAN</p>
            </div>
        </footer>
    );
}
