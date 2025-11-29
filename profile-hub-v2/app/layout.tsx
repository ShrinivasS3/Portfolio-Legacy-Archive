import type { Metadata } from "next";
import "./globals.css";
import ContactBackground from "@/components/ui/ContactBackground";

export const metadata: Metadata = {
  title: "Shrinivas Sesadri - Profile Hub",
  description: "An CS undergrad aspiring to be a researcher",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="flex flex-col items-center h-full w-full justify-center bg-primary"
      >
        {/* <ContactBackground /> */}
        {/* <Boxes /> */}
        {/* <Boxes className="h-full w-full"/> */}
        <ContactBackground />
        {children}
      </body>
    </html>
  );
}
