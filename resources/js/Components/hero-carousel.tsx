import React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/Components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/Components/ui/carousel";
import { Skeleton } from "@/Components/ui/skeleton";
import { carouselProps } from "@/types/carousel";

export default function HeroCarousel({
    data,
    loading,
}: {
    readonly data: carouselProps[];
    readonly loading: boolean;
}) {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <>
            {!loading ? (
                <Carousel
                    setApi={setApi}
                    className="relative w-full max-w-screen-2xl mx-auto"
                    plugins={[
                        Autoplay({
                            delay: 6000,
                        }),
                    ]}
                    opts={{
                        loop: true,
                    }}
                >
                    <CarouselContent>
                        {data.map((slide) => (
                            <CarouselItem key={slide.id} className="relative">
                                <div className="relative aspect-[6/6] md:aspect-[16/6] w-full overflow-hidden">
                                    <img
                                        src={`http://127.0.0.1:8000/storage/${slide.image}`}
                                        alt={slide.title}
                                        className="object-cover h-full w-full"
                                    />
                                    <div className="absolute inset-0 bg-black/20" />
                                    <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-12">
                                        <h1 className="max-w-2xl text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                                            {slide.title}
                                        </h1>
                                        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
                                            <div className="flex items-center gap-2 text-white">
                                                <span className="text-base font-medium sm:text-lg">
                                                    {String(
                                                        current + 1
                                                    ).padStart(2, "0")}
                                                </span>
                                                <div className="h-px w-8 sm:w-12 bg-white/50" />
                                                <span className="text-sm text-white/50 sm:text-base">
                                                    {String(count).padStart(
                                                        2,
                                                        "0"
                                                    )}
                                                </span>
                                            </div>
                                            <Card className="w-full sm:w-auto bg-primary text-white relative border-none rounded-none">
                                                <CardContent className="flex items-center justify-between p-0">
                                                    <div className="space-y-1 sm:space-y-2 flex-1">
                                                        <div className="text-sm font-semibold sm:text-base md:text-lg px-4 pb-4 pt-4 sm:px-6">
                                                            {slide.description}
                                                        </div>
                                                        <div className="flex gap-2 sm:gap-4 relative h-10">
                                                            <CarouselPrevious className="left-0 rounded-none bg-white/20 w-2/4 h-full border-none" />
                                                            <CarouselNext className="right-0 rounded-none bg-white/20 w-2/4 h-full border-none" />
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            ) : (
                <Skeleton className="w-full aspect-[6/6] md:aspect-[16/6]" />
            )}
        </>
    );
}
