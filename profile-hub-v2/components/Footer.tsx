"use client"

import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { Tooltip } from "@nextui-org/react";

export const socialMedia = [
  {
      id: 1,
      name: "ShrinivasS3",
      icon: <FaInstagram className="text-dark hover:text-accent"/>,
      link: "https://www.instagram.com/Shrinivass3/",
  },
  {
      id: 2,
      name: "ss3_art",
      icon: <FaInstagram className="text-dark hover:text-accent" />,
      link: "https://www.instagram.com/ss3_art/",
  },
  {
      id: 3,
      name: "ShrinivasSesa3",
      icon: <BsTwitterX className="text-dark hover:text-accent" />,
      link: "https://x.com/ShrinivasSesa3",
  },
];

function Footer() {
  return (
    // <div className="z-50 text-inter md:absolute w-full px-10 lg:px-20 max-w-8xl mx-auto relative">
    // <div>
        // <div className="border border-cream/75" />
        <div className="flex justify-evenly text-cream text-sm lg:text-lg w-full z-50">
          <div className="">
            2025 © Shrinivas Sesadri
          </div>
          {/* <p>Created by Shrinivas</p> */}
          <div className="flex items-center md:gap-x-10 gap-6">
                {socialMedia.map((info) => (
                    <div
                        key={info.id}
                        className="lg:w-10 lg:h-10 w-7 h-7 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-cream/75 rounded-lg border border-dark"
                    >
                        <Tooltip showArrow={true} content={info.name} className="text-accent">
                          <a href={info.link} target="_blank">
                            {info.icon}
                          </a>
                        </Tooltip>
                    </div>
                ))}
          </div>
        </div>
      // </div>
    // </div>
  );
}

export default Footer;
