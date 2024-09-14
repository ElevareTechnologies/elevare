import { Button } from "@/components/ui/button";
import hero from "../../public/Hero.png";
import web from "../../public/svg/web.svg";
import seo from "../../public/svg/seo.svg";
import vr from "../../public/svg/vr.svg";
import mobile from "../../public/svg/mobile.svg";
import recents from "../../public/recents.png";
import mockup from "../../public/mockup.png";
import focus from "../../public/focus.png";
import Image from "next/image";
import FeatureSection from "@/components/feature";
import SubscribeForm from "@/components/SubscribeForm";
import CompanyLogos from "@/components/CompanySection";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <div className="flex flex-col-reverse p-8 lg:p-16 lg:flex-row md:flex-row items-center justify-around bg-primary/10">
        {/* Hero text */}
        <div className="max-w-2xl mb-8 lg:mb-0">
          <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl mb-6">
            Experienced <span className="text-primary">mobile and web</span>{" "}
            applications and website builders measuring.
          </h1>
          <h2 className=" font-normal text-sm mb-8 md:text-base lg:text-lg text-muted-foreground">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects. We build and develop mobile applications for several top
            platforms, including Android & IOS.{" "}
          </h2>
          <div className="space-x-4">
            <Button size="lg"> Contact us </Button>
            <Button variant="outline" size="lg">
              {" "}
              View more{" "}
            </Button>
          </div>
        </div>
        {/* Hero image with svg */}
        <div className="relative w-full max-w-md lg:max-w-lg">
          {/* SVG Background */}
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

          {/* Hero Image */}
          <Image
            src={hero}
            alt="Hero image"
            width={500}
            height={500}
            className="rounded-lg relative z-10"
          />
        </div>
      </div>

      {/* Services section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 lg:p-12 place-items-center border-b border-t">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <Image src={web} alt="web-applications" width={48} height={48} />
          </div>
          <div>
            <h3 className="font-semibold text-sm lg:text-base">
              Web Application
            </h3>
            <h4 className="text-xs lg:text-sm text-muted-foreground">
              Lorem Ipsum is simply
            </h4>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <Image src={seo} alt="seo-services" width={48} height={48} />
          </div>
          <div>
            <h3 className="font-semibold text-sm lg:text-base">SEO</h3>
            <h4 className="text-xs lg:text-sm text-muted-foreground">
              Lorem Ipsum is simply
            </h4>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <Image src={vr} alt="vr-services" width={48} height={48} />
          </div>
          <div>
            <h3 className="font-semibold text-sm lg:text-base">
              AR/VR Solutions
            </h3>
            <h4 className="text-xs lg:text-sm text-muted-foreground">
              Lorem Ipsum is simply
            </h4>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <Image
              src={mobile}
              alt="mobile-applications"
              width={48}
              height={48}
            />
          </div>
          <div>
            <h3 className="font-semibold text-sm lg:text-base">
              Mobile Applications
            </h3>
            <h4 className="text-xs lg:text-sm text-muted-foreground">
              Lorem Ipsum is simply
            </h4>
          </div>
        </div>
      </div>

      {/* Text section */}
      <section className="flex flex-col items-center justify-center text-center py-12">
        <h1 className=" text-base md:text-2xl font-semibold lg:text-3xl">
          Lorem Ipsum is simply dummy text of the printing.
        </h1>
        <p className="mt-4 text-muted-foreground text-xs md:text-sm lg:text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <p className="mt-1 text-muted-foreground text-xs md:text-sm lg:text-lg">
          Lorem Ipsum has been the industry's
        </p>
      </section>

      {/* text and image sections */}
      <FeatureSection
        iconBgColor="bg-teal-400"
        topTitle="Lorem Ipsum is simply dummy text"
        topSubtitle="Lorem ipsum is simply dummy text"
        mainTitle="is simply dummy text of the printing."
        highlightedText="Lorem Ipsum"
        description="KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & iOS."
        imageSrc={recents}
        imageAlt="Mobile App Showcase"
      />
      {/* reversed */}
      <FeatureSection
        iconBgColor="bg-primary"
        topTitle="Lorem Ipsum is simply dummy text"
        topSubtitle="Lorem ipsum is simply dummy text"
        mainTitle="is simply dummy text of the printing."
        highlightedText="Lorem Ipsum"
        description="KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & iOS."
        imageSrc={mockup}
        imageAlt="Mobile App Showcase"
        reversed={true}
      />

      <FeatureSection
        iconBgColor="bg-purple-600"
        topTitle="Lorem Ipsum is simply dummy text"
        topSubtitle="Lorem ipsum is simply dummy text"
        mainTitle="is simply dummy text of the printing."
        highlightedText="Lorem Ipsum"
        description="KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & iOS."
        imageSrc={focus}
        imageAlt="Mobile App Showcase"
      />
      <CompanyLogos />
      <SubscribeForm />
    </>
  );
}
