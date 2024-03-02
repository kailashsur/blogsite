/*
 Background color  : bg-[#f5ede9]
*/


import Footer from "@/components/footer";
import NavPage from "@/components/navPage";
import Providers from "@/pages/providers";
import React from "react";
import { NextSeo } from "next-seo";
import { admin, keywords } from "@/utils/metadata";

/**
 * This layout component should be wraped on every new route of inside of the pages router
 */
const Layout = ({ children, title, description, featureImage, pathUrl}) => {

  return (
    <>
      <Providers>
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

          <NavPage />

        {/* <div className=" sticky top-0 ">Body sidebar</div> */}

 
        <main className=" bg-[#f5ede9] flex flex-row justify-center ">

{/* This is for Left Side bar */}
          <div className="sticky top-0 left-0 h-screen  z-30 min-w-fit pt-40 justify-center px-6 hidden md:flex  "></div>


          <section className="  h-full w-full max-w-3xl flex flex-col items-center ">

            {children}
          </section>

{/* This is for Right Sidebar */}
          <div className="sticky top-0 left-0 h-screen z-30 min-w-fit pt-40  justify-center px-6 hidden md:flex  "></div>


        </main>

        {/* Add your footer component */}
        <Footer />
      </Providers>
    </>
  );
};

export default Layout;

