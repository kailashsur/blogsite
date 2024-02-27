import { Inter } from "next/font/google";
import "@/app/globals.css";

import NextTopLoader from 'nextjs-toploader';

import { Providers } from "./providers";
import NavPage from "@/components/navPage";
import Footer from "@/components/footer";
import Background from "@/components/sections/background";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kailash Sur",
  description: "Here learn that you think",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NavPage />
        <NextTopLoader template={'<div class="bar" role="bar"><div class="peg"></div></div> '}/>
          <Background />

          <main className="  mx-auto max-w-7xl px-6 lg:px-8">
            {children}
          </main>

          {/* <Background /> */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
