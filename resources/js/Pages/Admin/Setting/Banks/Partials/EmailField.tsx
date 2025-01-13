import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";

export default function EmailField({ emails, setEmails }: { readonly emails: { id: number; email: string }[], readonly setEmails: (emails: { id: number; email: string }[]) => void }) {
    return (<>
        {emails.map((email) => (
            <div
                key={email.id}
                className="flex items-center gap-4 justify-center mb-3"
            >
                <Input
                    placeholder="Email"
                    value={email.email}
                    onChange={(e) => {
                        setEmails(
                            emails.map((item) =>
                                item.id === email.id
                                    ? {
                                          ...item,
                                          email: e.target.value,
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
                        setEmails(
                            emails.filter(
                                (item) => item.id !== email.id
                            )
                        );
                    }}
                >
                    Hapus
                </Button>
            </div>
        ))}
    </>)
}