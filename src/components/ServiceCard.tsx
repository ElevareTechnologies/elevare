import React from 'react'
import Image from "next/image";
import web from "../../public/Group.png";
import seo from "../../public/startup.png";
import ar from "../../public/cloud-computing.png";
import mobile from "../../public/coding.png";

export const ServiceCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8 bg-primary-foreground/5 rounded-lg shadow-xl p-6 lg:p-10">
                {/* Web Application */}
                <div className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg">
                  <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                    <Image
                      src={web}
                      alt="Web Application"
                      className="w-6 h-6"
                    />
                  </div>
                  <h3 className="text-base lg:text-lg font-semibold text-purple-900">
                    Web Application
                  </h3>
                </div>

                {/* SEO */}
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                    <Image src={seo} alt="SEO" className="w-6 h-6" />
                  </div>
                  <h3 className="text-base lg:text-lg font-semibold text-purple-900">
                    SEO
                  </h3>
                </div>

                {/* Mobile Applications */}
                <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg">
                  <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                    <Image
                      src={mobile}
                      alt="Mobile Applications"
                      className="w-6 h-6"
                    />
                  </div>
                  <h3 className="text-base lg:text-lg font-semibold text-purple-900">
                    Mobile Applications
                  </h3>
                </div>

                {/* AR/VR */}
                <div className="flex items-center space-x-4 p-4 bg-pink-50 rounded-lg">
                  <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                    <Image src={ar} alt="AR/VR" className="w-6 h-6" />
                  </div>
                  <h3 className="text-base lg:text-lg font-semibold text-purple-900">
                    AR/VR
                  </h3>
                </div>
              </div>
  )
}
