"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div className=" text-cream max-w-8xl mx-auto z-20">
      <nav className="flex max-sm:flex-col sm:gap-y-3 justify-between items-center w-full pt-3 pb-5 max-w-full mx-auto px-20">
        <div className="flex gap-x-3 items-center">
          {/* Logo */}
          <Image
            width={200}
            height={200}
            className="w-20 h-20 max-sm:w-10 max-sm:h-10 rounded-lg object-cover"
            src="/portrait-1.png"
            alt=""
          />
          {/* Header */}
          <div>
            <h4 className="text-4xl font-playfair">Shrinivas Sesadri</h4>
            {/* <p className="text-accent text-md">Multi-Disciplinary</p> */}
          </div>
        </div>
        <div>
            <span className="max-sm:pt-4 max-sm:pb-4 flex text-xl text-center justify-center px-5">&ldquo;Exploring the algorithmic symphony of life through code, color, and creativity.&rdquo;</span>
          {/* </button> */}
        </div>
        <div className="lg:pl-5">
            <Link
              href="mailto:shrini1908@gmail.com"
              target="_blank"
              aria-label="Send me an email"
              className="mt-1 w-[167px] flex-1 underline underline-offset-2 hover:no-underline sm:mt-2 md:mt-3 md:w-[170px] lg:mt-4 lg:w-full hover:text-accent"
              >
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-cream hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-accent">
                  Contact Me
                </button>
            </Link>
        </div>
      </nav>

      {/* <div className="mx-auto w-full max-w-[1120px] mt-4 flex justify-center relative">
        <div className="w-full h-[0.4px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
      </div> */}
    </div>
  );
}

export default Header;
