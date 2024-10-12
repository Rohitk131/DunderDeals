import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-md mx-auto" // Reduced max-width
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-0">
            <div className="w-full h-[550px] flex items-center justify-center "> {/* Reduced height and added flex */}
              <img
                src={`./image${index + 1}.jpeg`}
                alt={`Image ${index + 1}`}
                className="max-w-full max-h-full object-contain rounded-xl " // Changed to object-contain
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}