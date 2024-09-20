import Image from "next/image";
import service from "../../../../public/service.png";
import product from "../../../../public/Product.png";
import "./service-page.css";
import { ServiceCard } from "@/components/ServiceCard";
import FeatureSection from "@/components/feature";

export default function Service() {
  return (
    <>
      <div className="flex flex-col justify-start items-center gap-4 bg-primary/10 p-8 h-[500px]">
        <Image src={service} alt="service-icon" width={135} height={135} />
        <h1 className="text-3xl font-semibold">
          Our <span className="text-primary">Services</span>
        </h1>
        <p className="text-muted-foreground text-center">
          Lorem Ipsum is simply dummy text of the <br /> printing and
          typesetting industry. Lorem Ipsum <br /> has been the industry's
        </p>
      </div>
      <div className="">
      <FeatureSection
        mainTitle="is simply dummy text of the printing."
        highlightedText="Lorem Ipsum"
        description="KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & iOS. KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & iOS."
        imageSrc={product}
        imageAlt="Mobile App Showcase"
        buttonVisibility={true}
        buttonText="Contact us"
      />
      </div>
    </>
  );
}
