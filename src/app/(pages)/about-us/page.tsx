// pages/index.js
import Image from "next/image";
import "./about-page.css";

import IMG1 from "./images/img1.png";
import IMG2 from "./images/img2.png";
import IMG3 from "./images/img3.png";
import IMG4 from "./images/img4.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SubscribeForm from "@/components/SubscribeForm";
import { ServiceCard } from "@/components/ServiceCard";
export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4">
        <section className="first-section  lg:my-16">
          <div className="flex flex-col lg:flex-row justify-center items-center  py-8">
            <div className="w-full lg:w-1/2 flex flex-col justify-center sm:flex-row gap-4 lg:gap-8">
              <div className="flex justify-end flex-col">
                <Image
                  src={IMG1}
                  alt="Team brainstorming"
                  className="img1 w-full h-auto"
                />
              </div>
              <Image
                src={IMG2}
                alt="Person writing"
                className="img2 w-full h-auto"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center p-4 lg:p-5 max-w-2xl">
              <h2 className="text-primary  mb-2 text-2xl p-5 px-0">About us</h2>
              <h1 className="text-2xl lg:text-4xl font-semibold mb-4  p-5 px-0">
                Lorem Ipsum is simply dummy text of the printing.
              </h1>
              <p className="text-muted-foreground text-lg  p-5 px-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 lg:gap-12 py-4">
            <Image
              src={IMG3}
              alt="Team working on laptops"
              className="w-full sm:w-1/2 lg:w-auto h-auto"
            />
            <Image
              src={IMG4}
              alt="Two people with laptop outdoors"
              className="w-full sm:w-1/2 lg:w-auto h-auto"
            />
          </div>
        </section>
        <div className="lg:container p-4">
          <div className="lg:w-10/12 lg:my-16 lg:mx-10">
            <div className="lg:w-4/6">
              <h2 className="text-primary tracking-wide lg:text-4xl text-2xl font-semibold mb-4 py-6">
                Lorem Ipsum is simply dummy text of the printing.{" "}
              </h2>
            </div>
            <p className="text-muted-foreground text-xl">
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
              weblications and website builders measuring dozens of completed
              projects. We build and develop mobile weblications for several top
              platforms, including Android & IOS. We build and develop mobile
              weblications for several top platforms, including Android & IOS.{" "}
            </p>
          </div>
        </div>

        <div className="container py-10 px-4 lg:px-0">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <div className="w-full lg:w-3/4">
                <h3 className="text-2xl lg:text-3xl font-semibold mb-4">
                  Lorem Ipsum is simply dummy text of the printing.
                </h3>
                <p className="text-sm text-muted-foreground py-4">
                  KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and
                  web applications and website builders measuring dozens of
                  completed projects.
                </p>
                <Link href="/contact-us">
                  <Button variant={"outline"} size={"lg"} className="border-2">
                    Contact us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <ServiceCard />
            </div>
          </div>
        </div>
      </div>
      <SubscribeForm />
    </>
  );
}
