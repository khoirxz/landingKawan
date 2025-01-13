import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";

export default function PhoneField({
    phones,
    setPhones,
}: {
    readonly phones: { id: number; number: string }[];
    readonly setPhones: (phones: { id: number; number: string }[]) => void;
}) {
    return (
        <>
            {phones.map((phone) => (
                <div
                    key={phone.id}
                    className="flex items-center gap-4 justify-center mb-3"
                >
                    <Input
                        placeholder="Gunakan Kode Negara (contoh: +62)"
                        value={phone.number}
                        onChange={(e) => {
                            setPhones(
                                phones.map((item) =>
                                    item.id === phone.id
                                        ? {
                                              ...item,
                                              number: e.target.value,
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
                            setPhones(
                                phones.filter(
                                    (item) => item.id !== phone.id
                                )
                            );
                        }}
                    >
                        Hapus
                    </Button>
                </div>
            ))}
        </>
    );
}
