import "./globals.css";

import Theming from "../components/providers/Theme";

import HeaderPage from "./(Header)/Header/Page";
import Footer from "./components/Footer"

export const metadata = {
  title: "Shrinivas Sesadri - Profile Central",
  description: "An CS undergrad aspiring to be a researcher",
};

export default function RootLayout({ children }) {
  return (
    <html className="w-full sm:h-full" lang="en">
      <body className="flex flex-col min-h-screen">
        <Theming>
          <HeaderPage />
          {children}
          <Footer />
        </Theming>
      </body>
    </html>
  );
}
