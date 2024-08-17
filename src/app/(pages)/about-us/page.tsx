// pages/index.js
import Image from "next/image";
import "./about-page.css";
import IMG1 from "./IMAGES/IMG1.png";
import IMG2 from "./IMAGES/IMG2.png";
import IMG3 from "./IMAGES/IMG3.png";
import IMG4 from "./IMAGES/IMG4.png";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12 py-8">
        <div className="w-full lg:w-1/2 flex flex-col sm:flex-row gap-4 lg:gap-8">
          <div className="flex justify-end flex-col">
            <Image src={IMG1} alt="Team brainstorming" className="img1 w-full h-auto" />
          </div>
          <Image src={IMG2} alt="Person writing" className="img2 w-full h-auto" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-4 lg:p-5 max-w-2xl">
          <h2 className="text-blue-500 text-lg mb-2">About us</h2>
          <h1 className="text-2xl lg:text-3xl font-bold mb-4">
            Lorem Ipsum is simply dummy text of the printing.
          </h1>
          <p className="text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 lg:gap-12 py-4">
        <Image src={IMG3} alt="Team working on laptops" className="w-full sm:w-1/2 lg:w-auto h-auto" />
        <Image src={IMG4} alt="Two people with laptop outdoors" className="w-full sm:w-1/2 lg:w-auto h-auto" />
      </div>
    </div>
  );
}