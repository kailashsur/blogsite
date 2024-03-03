import Footer from "@/components/footer";
import NavPage from "@/components/navPage";
import Providers from "@/pages/providers";
import { admin, description, domain, keywords, title } from "@/utils/metadata";
import React from "react";
import Logo from "@/../public/logo.png";
import { NextSeo } from "next-seo";

import { Pathway_Extreme } from "@next/font/google";
import { Nanum_Myeongjo } from "@next/font/google"

const pathway_extreme = Pathway_Extreme({
  subsets: ['latin'],
  weight: ['200', '700']
})

const nanum_myeongjo = Nanum_Myeongjo({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--nanum_myeongjo'

})
/**
 * This layout component should be wraped on every new route of inside of the pages router
 */
const Layout = ({ children }) => {
  return (
    <>
      <Providers>
        <header>
          <NextSeo
            title={`${title}`}
            description={`${description}`}
            openGraph={{
              title: `${title}`,
              description: `${description}`,
              images: [{ url: "/logo.png" }], // Replace with actual image URL
              url: `${domain}`, // Replace with actual domain
            }}
            additionalMetaTags={[
              {
                name: "keywords",
                content: `${keywords}`,
              },
              {
                name: "author",
                content: `${admin}`,
              },
            ]}
          />
        </header>
        <NavPage />
        {/* Render the page content */}

        <main className={`px-4 h-full max-w-7xl flex flex-col items-center mx-auto font-nanum_myeongjo ${pathway_extreme.className} ${nanum_myeongjo.variable}`}>
          {children}
        </main>

        {/* Add your footer component */}
        <Footer />
      </Providers>
    </>
  );
};

export default Layout;
