"use client";
import React from "react";
import { InstagramLogoIcon, TwitterLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const Footer: React.FC = () => {

    return (
        <>
            <div className="bg-background py-4">
                <div className="w-full flex md:flex-row flex-col justify-around items-start">
                    <div className="p-5">
                        <ul>
                            <p className="font-semibold text-2xl pb-5">Elevare</p>
                            <p className="text-start text-base md:text-left mb-6">
                                Crafting Your Digital <br />
                                Presence with Precision <br />
                                and Creativity.

                            </p>
                            <div className="flex gap-6 pb-5">
                                <a
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <InstagramLogoIcon className="text-2xl cursor-pointer hover:scale-125" />
                                </a>
                                <a
                                    href="https://www.x.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <TwitterLogoIcon className="text-2xl cursor-pointer hover:scale-125" />
                                </a>
                                <a
                                    href="https://www.linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <LinkedInLogoIcon className="text-2xl cursor-pointer hover:scale-125" />
                                </a>
                            </div>
                        </ul>
                    </div>

                    <div className="p-5">
                        <ul>
                            <p className="font-semibold text-2xl mb-5">Quick Links</p>
                            <li
                                className="text-md pb-2 mb-2 font-light hover:underline cursor-pointer"
                            >
                                Home
                            </li>
                            <li
                                className="text-md mb-2 pb-2 font-light hover:underline cursor-pointer"
                            >
                                About Us
                            </li>
                            <li
                                className="text-md mb-2 pb-2 font-light hover:underline cursor-pointer"
                            >
                                Services
                            </li>
                            <li
                                className="text-md mb-2 pb-2 font-light hover:underline cursor-pointer"
                            >
                                Contact Us
                            </li>
                        </ul>
                    </div>

                    <div className="p-5">
                        <p className="font-semibold text-2xl mb-5">Our Services</p>
                        <p className="text-base pb-2 mb-2 font-light hover:underline">
                            <a href="">Web Applications</a>
                        </p>
                        <p className="text-base pb-2 mb-2 font-light hover:underline">
                            <a href="">Digital Marketing</a>
                        </p>
                        <p className="text-base pb-2 mb-2 font-light hover:underline">
                            <a href="">Mobile Applications</a>
                        </p>
                        <p className="text-base pb-2 mb-2 font-light hover:underline">
                            <a href=""> SEO </a>
                        </p>
                    </div>

                    <div className="p-5">
                        <p className="font-semibold text-2xl mb-2">Contact Us</p>
                        <p className="text-md pb-2 font-light">
                            <span className="font-medium">Phone :</span>{" "}
                            <a href="tel:+919884814786" className="hover:underline">
                                +91 9876543210
                            </a>
                            <span> | </span>
                            <a href="tel:+919884814060" className="hover:underline">
                                +91 9887654321
                            </a>
                        </p>
                        <p className="text-md pb-2 font-light">
                            <span className="font-medium">Email :</span>{" "}
                            <a
                                href="mailto:brinterior.in@gmail.com"
                                className="hover:underline"
                            >
                                contact@elevare.co.in
                            </a>
                        </p>
                        <p className="font-semibold text-2xl mb-2 mt-2">Office</p>
                        <p className="text-base pb-2 font-light">
                            952, New Street, George Town,
                            <br />
                            Paris, London SW36 9YU.
                        </p>
                    </div>
                </div>
                <div className="text-center font-normal text-sm">
                    <p>
                        Copyright © 2024 Elevare Technologies . All Rights Reserved
                    </p>
                </div>
            </div>
        </>
    );
};

export default Footer;
