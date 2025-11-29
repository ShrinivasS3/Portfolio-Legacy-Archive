import Footer from "@/components/footer";
import LeftPanel from "@/components/left-panel";
import RightPanel from "@/components/right-panel";

export default function Home() {
  return (
    <main className="flex flex-col items-center flex-1 w-full h-full justify-center">
      {/* Pattern */}
      <div className="relative align-middle justify-center inset-0 z-0 bg-lightpattern dark:bg-darkpattern bg-verySmall" />
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-backgroundlight via-backgroundlight/30 to-backgroundlight dark:from-backgrounddark dark:via-backgrounddark/30 dark:to-backgrounddark" />
      <div className="container relative z-20 flex flex-col w-full h-full px-6 gap:6 xl:gap-10 xl:flex-row">
        {/* Left Panel */}
        <LeftPanel />
        {/* Right Panel */}
        <RightPanel />
        {/* Footer for Mobile */}
        <div className="flex pb-6 xl:hidden">
          <Footer />
        </div>
      </div>
    </main>
  );
}
