
import Footer from "@/components/footer";
import NavPage from "@/components/navPage";
import Providers from "@/pages/providers";
import React from "react";
import { NextSeo } from "next-seo";
import { admin, keywords} from "@/utils/metadata";



/**
 * This layout component should be wraped on every new route of inside of the pages router
 */
const Layout = ({ children, title, description, featureImage, pathUrl } ) => {

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
              images: [{ url: `${featureImage}` }], // Replace with actual image URL
              url: `${pathUrl}`, // Replace with actual domain
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

        <main className=" h-full max-w-7xl flex flex-col items-center mx-auto">
          {children}
        </main>

        {/* Add your footer component */}
        <Footer />
      </Providers>
    </>
  );
};

export default Layout;

