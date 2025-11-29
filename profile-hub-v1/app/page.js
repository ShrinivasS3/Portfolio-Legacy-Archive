"use client";
import React, { useState } from "react";

import {
  PiLinkedinLogoThin,
  PiBehanceLogoThin,
  PiArrowBendRightUpLight,
  PiInstagramLogoThin,
} from "react-icons/pi";

import { useTheme } from "next-themes";

import { Tooltip } from "@nextui-org/react";

import Link from "next/link";
import Image from "next/image";

function Homepage() {
  const { theme } = useTheme();

  return (
    <div className="w-full px-4 pt-8 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-5 grid-flow-row-dense">
        <div className="border cursor-pointer col-span-1 z-20 dark:border-neutral-600 border-neutral-400/60 overflow-hidden relative shadow-xl rounded-lg">
          <div className=" absolute w-full p-2 z-10">
            <div className="flex justify-between items-center ">
              <p className="text-xs text-neutral-500">Location</p>
              <p className="text-neutral-500 text-xs ">Tamil Nadu</p>
            </div>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>
          <Image
            width={300}
            height={300}
            className="h-full w-full duration-300 transition-all ease-in-out object-cover"
            src={theme == "dark" ? "/lightm.bmp" : "/map.webp"}
            alt="Map"
          />
        </div>
        <div className="dark:bg-backgrounddark bg-backgroundlight border dark:border-neutral-600 border-neutral-400/60 shadow-xl relative rounded-lg ">
          <div className=" absolute w-full p-2">
            <div className="flex justify-between items-center ">
              <p className="text-xs">Currently Working On</p>
              <div>
                <span>
                  <span className="mr-1.5 flex justify-center h-2 w-2 items-center ">
                    <span
                      className={`absolute flex  w-2 h-2 rounded-full  opacity-75 animation-delay-4000 animate-ping dark:bg-lime-500 bg-yellow-400`}
                    ></span>
                    <span
                      className={`relative inline-flex w-1 h-1 rounded-full dark:bg-lime-500 g-yellow-400`}
                    ></span>
                  </span>
                </span>
              </div>
            </div>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
            <div className="">
              <p className="text-xs font-semibold max-sm:mt-6 sm:mt-4  ">
                Building an end-to-end LLM Based Application.<br /><br/>And on personal brand developement...
              </p>
            </div>
          </div>
        </div>
        <div className="dark:bg-backgrounddark bg-backgroundlight  border dark:border-neutral-600 border-neutral-400/60  z-20 cursor-pointer relative shadow-xl rounded-lg  col-span-2 ">
          <div className=" absolute w-full p-2 z-10">
            <div className="flex justify-between items-center ">
              <p className="text-xs">About</p>
              <p className="text-neutral-500 text-xs ">Shrinivas Sesadri</p>
            </div>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          <div className="mt-10 px-4 pb-0 max-sm:mb-4">
            <p className="text-xs font-semibold leading-5 align-center">
            My interest in computers evolved into a passion for the fields of AR/VR, Cybersecurity, and AI.
            As I dwelled deeper into these domains, I realized the transformative potential of AI.
            I want to explore AI further and leverage its capabilities to impact these fields significantly.
            </p>
          </div>
        </div>

          <div className="dark:bg-backgrounddark bg-backgroundlight  border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg col-span-2 row-span-2 relative  overflow-hidden  ">
            <div className=" absolute w-full p-2 z-20">
              <p className="text-xs">My Portfolio</p>
              <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
            </div>
            <Link href="https://portfolio.shrinivassesadri.in/" rel="noopener noreferrer" target="_blank">
            <div className="h-[340px] overflow-hidden scrollbar-hide scroll-smooth relative ">
              {/* Starts */}
              <div className="flex flex-col items-center gap-x-3 mt-10 px-5  ">
                <div className="w-full p-3 pb-6 z-10">
                  <div className="flex justify-between z-20">
                    <p className="text-xs">Get To Know Me</p>
                  </div>
                </div>
                <Image
                  width={200}
                  height={200}
                  className="sm:hover:animate-pulse z-10 rounded-lg sm:hover:pt-0 opacity-20 sm:hover:opacity-75 sm:pt-14 max-sm:pt-0 duration-300 max-sm:opacity-75 max-sm:scale-100 sm:scale-80 sm:hover:scale-100 transition-all ease-in-out object-cover"
                  src={"/logo.png"}
                  alt=""
                />
              </div>
            </div>
            </Link>
          </div>
        {/* Projects */}
        <div className=" dark:bg-backgrounddark bg-backgroundlight  border dark:border-neutral-600 border-neutral-400/60  shadow-xl rounded-lg min-h-[50px] col-span-2 row-span-2 relative ">
          <div className=" absolute w-full p-2 z-20">
            <p className="text-xs">GitHub</p>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>
            <Link href="https://github.com/ShrinivasS3" rel="noopener noreferrer" target="_blank">
              <div className="h-[340px] overflow-hidden scrollbar-hide scroll-smooth relative ">
              {/* Starts */}
              <div className="flex flex-col items-center gap-x-3 mt-10 px-5  ">
                <div className="w-full p-3 pb-6 z-10">
                  <div className="flex justify-between z-20">
                    <p className="text-xs">Immersed in the world of algorithms and passionately journeying through the vast landscape of research.</p>
                  </div>
                </div>
                <Image
                  width={200}
                  height={200}
                  className="sm:hover:animate-pulse z-10 rounded-lg sm:hover:pt-0 opacity-20 sm:hover:opacity-100 sm:pt-14 max-sm:pt-0 duration-300 max-sm:opacity-75 max-sm:scale-100 sm:scale-80 sm:hover:scale-100 transition-all ease-in-out object-cover"
                  src={"/github.jpg"}
                  alt=""
                />
              </div>
            </div></Link>
        </div>
        <div className="dark:bg-backgrounddark bg-backgroundlight  border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg min-h-[50px] col-span-2  relative">
          <div className=" absolute w-full p-2 z-20">
            <p className="text-xs">Instagram</p>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          <div className="mt-14 mb-4">
            <div className="flex justify-evenly gap-x-2 px-2">
              <div>
              <Tooltip showArrow={true} content="Shrinivass3" color="#161616">
                <Link href={"https://www.instagram.com/Shrinivass3/"} rel="noopener noreferrer" target="_blank" className="rounded-lg border dark:border-neutral-600 cursor-pointer border-neutral-400/60 p-2 w-16 h-16 flex items-center justify-center" >
                  <PiInstagramLogoThin className="text-6xl" />
                </Link>
              </Tooltip>
              <div className="text-center pt-2 text-sm sm:hidden">Shrinivass3</div>
              </div>
              <div>
              <Tooltip showArrow={true} content="ss3_art" color="#161616">
                <Link href={"https://www.instagram.com/ss3_art/"} rel="noopener noreferrer" target="_blank" className="rounded-lg border dark:border-neutral-600 cursor-pointer border-neutral-400/60 p-2 w-16 h-16 flex items-center justify-center">
                  <PiInstagramLogoThin className="text-6xl" />
                </Link>
              </Tooltip>
              <div className="text-center pt-2 text-sm sm:hidden">ss3_art</div>
              </div>
            </div>
          </div>
        </div>
        <div className="dark:bg-backgrounddark bg-backgroundlight  border dark:border-neutral-600 border-neutral-400/60 overflow-hidden relative shadow-xl rounded-lg min-h-[50px] col-span-2 row-span-3 md:row-span-2 ">
          <div className=" absolute w-full p-2 z-20">
              <p className="text-xs">ArtStation</p>
              <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
            </div>
            <div className="h-[340px] overflow-hidden scrollbar-hide scroll-smooth relative ">
              {/* Starts */}
              <Link href="https://www.artstation.com/shrinivassesadri" rel="noopener noreferrer" target="_blank">
              <div className="flex flex-col items-center gap-x-3 mt-10 px-5  ">
                <div className="w-full p-3 pb-6 z-10">
                  <div className="flex justify-between z-20">
                    <p className="text-xs">My playgrounds are Blender and Unreal Engine, where I create interactive experiences and bring futuristic concepts to life.</p>
                  </div>
                </div>
                <Image
                  width={200}
                  height={200}
                  className="sm:hover:animate-pulse z-10 rounded-lg sm:hover:pt-0 opacity-20 sm:hover:opacity-75 sm:pt-14 max-sm:pt-0 duration-300 max-sm:opacity-75 max-sm:scale-100 sm:scale-80 sm:hover:scale-100 transition-all ease-in-out object-cover"
                  src={"/3d-world.jpg"}
                  alt=""
                />
              </div></Link>
            </div>

        </div>
        <div className="dark:bg-backgrounddark bg-backgroundlight  border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg col-span-2  relative  overflow-hidden  ">
          <div className=" absolute w-full p-2 z-20">
            <p className="text-xs">DevianArt</p>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>
          <div className="h-[180px] overflow-hidden scrollbar-hide scroll-smooth relative ">
            {/* Starts */}
            <Link href="https://www.deviantart.com/3ss123" rel="noopener noreferrer" target="_blank">
            <div className="flex flex-row items-center gap-x-3 mt-10 px-5  ">
                <div className="w-full p-3 pb-6 z-10">
                  <div className="flex justify-between z-20">
                    <p className="text-xs">
                    My preferred tools are pencil, brushes and computer tools.
                    They help me create an imaginative and passionate world out of blank canvases.
                      </p>
                  </div>
                </div>
                <Image
                  width={100}
                  height={100}
                  className="sm:hover:animate-pulse z-10 rounded-lg sm:hover:pt-0 opacity-20 sm:hover:opacity-75 max-sm:pt-0 duration-300 max-sm:opacity-75 max-sm:scale-100 sm:scale-80 sm:hover:scale-100 transition-all ease-in-out object-cover"
                  src={"/art.jpg"}
                  alt=""
                />
              </div></Link>
            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>
          </div>
        </div>
        <div className="dark:bg-backgrounddark bg-backgroundlight  border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg z-20 h-44 relative">
          <div className=" absolute w-full p-2 z-20">
            <p className="text-xs">Reach Me</p>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>
          <div className="mt-16 flex flex-col items-center justify-center w-full px-2 ">
            <input className=" w-full h-full align-center rounded-full text-sm px-3 max-sm:px-3  dark:placeholder:text-neutral-700 placeholder:text-neutral-700/50 outline-none border dark:border-neutral-600 border-neutral-400/60 pl-6 dark:bg-neutral-900" type="email" placeholder="name@email.com"/>
            <a href="mailto:thetechfront@shrinivas.tech">
            <button className="text-xs  w-full  border dark:border-neutral-600 border-neutral-400/60  mt-7 rounded-full p-1 px-2 dark:bg-neutral-700/40">
              <span>Contact me</span>
            </button></a>
          </div>
        </div>
        <div className="dark:bg-backgrounddark bg-backgroundlight  border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg  h-44 relative ">
          <div className="absolute w-full p-2 z-20">
            <p className="text-xs">LinkedIn</p>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>
          <div>
            <p className="mt-10 text-xs px-2">
            Know something about everything and everything about something 😁.
            </p>
            <div className="flex justify-center pt-3">
            <Tooltip showArrow={true} content="Shrinivas Sesadri" color="#161616">
                <Link
                  href={"https://www.linkedin.com/in/shrinivassesadri/"} rel="noopener noreferrer" target="_blank"
                  className="rounded-lg border dark:border-neutral-600 cursor-pointer border-neutral-400/60 p-2 w-16 h-16 flex items-center justify-center"
                >
                  <PiLinkedinLogoThin className="text-6xl" />
                </Link>
            </Tooltip>
            </div>
          </div>
        </div>
        <div className="rounded-lg grid grid-cols-2 gap-x-5 col-span-2 row-span-2 z-40">
          <div className="dark:bg-backgrounddark bg-backgroundlight  border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg  h-44 relative ">
            <div>
              <div className=" absolute w-full p-2 z-20">
                <p className="text-xs">Behance</p>
                <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
              </div>
            </div>
            <div>
            <p className="mt-10 text-xs px-2">
            Capturing the world’s magic..
            </p>
            <div className="flex justify-center pt-3">
            <Tooltip showArrow={true} content="Shrinivas Sesadri" color="#161616">
                <Link
                  href={"https://www.behance.net/shrinivassesadri"} rel="noopener noreferrer" target="_blank"
                  className="rounded-lg border dark:border-neutral-600 cursor-pointer border-neutral-400/60 p-2 w-16 h-16 flex items-center justify-center"
                >
                  <PiBehanceLogoThin className="text-6xl" />
                </Link>
            </Tooltip>
            </div>
            <div className="flex items-center gap-x-3 mt-7">
            </div>
          </div>
          </div>
          <div className="dark:bg-backgrounddark bg-backgroundlight  border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg h-44 relative z-40">
            <div>
              <div className=" absolute w-full p-2 z-20">
                <p className="text-xs">Blog</p>
                <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
              </div>
            </div>
            <div className="px-2 mt-16 w-full">
              <span>The Tech Front</span>
              <Link href="https://shrinivassesadri.in" rel="noopener noreferrer" target="_blank">
              <button className="text-xs flex w-full mt-2 items-center justify-between border dark:border-neutral-600 border-neutral-400/60   rounded-full p-1 px-2 dark:bg-neutral-700/40">
                <span>View Blog</span>
                <PiArrowBendRightUpLight />
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
