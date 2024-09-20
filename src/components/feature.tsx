import Image from "next/image";
import { StaticImageData } from "next/image";
import { Button } from "./ui/button";

interface FeatureSectionProps {
  iconBgColor?: string;
  topTitle?: string;
  topSubtitle?: string;
  mainTitle: string;
  highlightedText: string;
  description: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  reversed?: boolean;
  buttonVisibility?: boolean;
  buttonText?: string;
}

export default function FeatureSection({
  iconBgColor = "",
  topTitle,
  topSubtitle,
  mainTitle,
  highlightedText,
  description,
  imageSrc,
  imageAlt,
  reversed = false,
  buttonVisibility = false,
  buttonText,
}: FeatureSectionProps) {
  const contentOrder = reversed ? "md:order-last" : "";

  return (
    <div className="container mx-auto px-8 md:px-12 lg:px-16 lg:py-4 md:py-8 py-12">
      <div
        className={`flex flex-col md:flex-row lg:flex-row items-center justify-between lg:gap-4 md:gap-4`}
      >
        {/* Content Column */}
        <div
          className={`w-full md:w-1/2 lg:w-1/2 mb-8 md:mb-0 md:pr-8 ${contentOrder}`}
        >
          {/* Icon with text */}
          <div className="flex items-center mb-8">
            <div className={`w-12 h-12 ${iconBgColor} rounded-full mr-4`}></div>
            <div>
              <p className="font-semibold">{topTitle}</p>
              <p className="text-sm text-muted-foreground">{topSubtitle}</p>
            </div>
          </div>

          {/* Main heading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-justify">
            <span className="text-primary">{highlightedText}</span> {mainTitle}
          </h2>

          {/* Description */}
          <p className="text-muted-foreground mb-8 text-justify">{description}</p>

          {/* Button */}
          { buttonVisibility && (<Button size="lg" variant="outline">{buttonText}</Button>)}
         
        </div>

        {/* Image Column */}
        <div className="w-full md:w-1/2">
        
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={500}
            className="w-auto h-full"
          />
        </div>
      </div>
    </div>
  );
}
