import { Button } from "@/Components/ui/button";
import { MessageCircle } from "lucide-react";

export default function FloatButton({ number }: { readonly number: string }) {
    return (
        <Button
            className="fixed bottom-4 right-4 rounded-full shadow-lg bg-green-700 hover:bg-green-900"
            size="lg"
            onClick={() => {
                window.open(`https://wa.me/${number}`, "_blank");
            }}
        >
            <MessageCircle className="mr-2 h-4 w-4" />
            Hubungi Kami
        </Button>
    );
}
