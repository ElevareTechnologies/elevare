import Image from "next/image";
import { StaticImageData } from "next/image";

interface FeatureSectionProps {
  iconBgColor?: string;
  topTitle: string;
  topSubtitle: string;
  mainTitle: string;
  highlightedText: string;
  description: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  reversed?: boolean;
}

export default function FeatureSection({
  iconBgColor = "bg-teal-400",
  topTitle,
  topSubtitle,
  mainTitle,
  highlightedText,
  description,
  imageSrc,
  imageAlt,
  reversed = false,
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
        </div>

        {/* Image Column */}
        <div className=" relative w-full md:w-1/2">
        <svg
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full"
            viewBox="0 0 496 504"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="248"
              cy="252"
              rx="248"
              ry="252"
              fill="url(#paint0_radial_1_6)"
            />
            <defs>
              <radialGradient
                id="paint0_radial_1_6"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(248 252) rotate(90) scale(252 248)"
              >
                <stop stopColor="#FDFFEA" />
                <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={500}
            className="w-auto h-full relative z-10"
          />
        </div>
      </div>
    </div>
  );
}
