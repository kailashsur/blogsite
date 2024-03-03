import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={` min-h-screen h-full relative bg-gradient-to-tr from-[#ffe2d3] to-[#bee8ff]
       `}>
         {/* bg-[#f9f7ef] */}
      {/* <NextTopLoader template={'<div className="bar" role="bar"><div className="peg"></div></div> '}/> */}
        <Main />
        {/* <NextTopLoader /> */}

        <NextScript />

        
      </body>
    </Html>
  );
}
