import Footer from "@/components/footer";
import NavPage from "@/components/navPage";
import Providers from "@/pages/providers";
import { admin, description, domain, keywords, title } from "@/utils/metadata";
import React from "react";
import Logo from "@/../public/logo.png"

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
          <title> Kailashsur </title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={admin} />

          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={Logo} />
          <meta property="og:url" content={domain} />
          {/* <meta name="twitter:card" content="summary_large_image" /> */}
        </header>
        {/* Render the page content */}

        <main className=" px-4 h-full max-w-7xl flex flex-col items-center mx-auto">
          {children}
        </main>

        {/* Add your footer component */}
        <Footer />
      </Providers>
    </>
  );
};

export default Layout;
