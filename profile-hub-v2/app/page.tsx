"use client"
import Main from "@/components/Profile";


export default function Home() {
  return (
    // <div className="">
      // {isLargeScreen && <Boxes className="absolute inset-0" />}
      // <div className="absolute inset-0 w-full h-full bg-cream/75 z-0 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <div className="w-full h-full">
          {/* <Header /> */}
          <Main />
          {/* <Footer /> */}
      </div>
      // </div>
  );
}
