import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";

export default function AddressField(
    { addresses, setAddresses }: 
    { readonly addresses: { id: number; title: string; address: string }[], readonly setAddresses: (addresses: { id: number; title: string; address: string }[]) => void }
) {
    return (
        <>
            {addresses.map((a) => (
                <div
                    key={a.id}
                    className="flex items-center gap-4 justify-center mb-3"
                >
                    <Input
                        placeholder="Nama"
                        value={a.title}
                        onChange={(e) => {
                            setAddresses(
                                addresses.map((item) =>
                                    item.id === a.id
                                        ? {
                                              ...item,
                                              title: e.target.value,
                                          }
                                        : item
                                )
                            );
                        }}
                    />
                    <Input
                        placeholder="Alamat"
                        value={a.address}
                        onChange={(e) => {
                            setAddresses(
                                addresses.map(
                                    (item) =>
                                        item.id ===
                                            a.id
                                            ? {
                                                ...item,
                                                address:
                                                    e
                                                        .target
                                                        .value,
                                            }
                                            : item
                                )
                            );
                        }}
                    />
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                            setAddresses(
                                addresses.filter(
                                    (ad) =>
                                        ad.id !==
                                        a.id
                                )
                            );
                        }}
                    >
                        Hapus
                    </Button>
                </div>
            ))}
        </>
    )
}