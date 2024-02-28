
import Footer from "@/components/footer";
import NavPage from "@/components/navPage";
import { Providers } from "@/app/providers";
import React from "react";

/**
 * This layout component should be wraped on every new route of inside of the pages router
 */
const Layout = ({ children }) => {

  return (
    <>
    <Providers>
        <NavPage /> 
      <header>
        {/* fix the no scrool blocked by the NavPage */}
      </header>
      {/* Render the page content */}
      <main className=" h-full max-w-[680px]  mx-auto">
        {children}
      </main>

      {/* Add your footer component */}
      <Footer />
    </Providers>
    </>
  );
};

export default Layout;
