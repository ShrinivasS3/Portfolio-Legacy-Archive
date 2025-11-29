"use client";

import React from "react";

import { ThemeToggle } from "/app/components/theme-toggle"

import Image from "next/image";

function HeaderPage() {
  return (
    <div className="">
      <nav className="flex max-sm:flex-col justify-between items-center w-full  px-4 pt-10 max-w-6xl mx-auto">
        <div className="flex gap-x-3 items-center">
          {/* Logo */}
          <Image
            width={200}
            height={200}
            className="w-20 h-20 max-sm:w-10 max-sm:h-10 rounded-lg object-cover"
            src="/profile.jpeg"
            alt=""
          />
          {/* Header */}
          <div>
            <h4 className="text-md ">Shrinivas Sesadri</h4>
            <p className="text-[#828282] text-md">Multi-Disciplinary</p>
          </div>
          <div className="pl-5">
            <ThemeToggle />
          </div>
        </div>
          <div>
            <span className="max-sm:pt-4 flex text-base text-center justify-center">"Exploring the algorithmic symphony of life through code, color, and creativity."</span>
          {/* </button> */}
        </div>
      </nav>

      <div className="mx-auto w-full max-w-[1120px] mt-4 flex justify-center relative">
        <div className="w-full h-[0.4px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
      </div>
    </div>
  );
}

export default HeaderPage;
