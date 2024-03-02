import "@/styles/globals.css";
import NextTopLoader from "nextjs-toploader";


export default function App({ Component, pageProps }) {
  return (
    <>
      <NextTopLoader
      color="#864AF9"
      initialPosition={0.08}
      crawlSpeed={200}
      height={3}
      crawl={true}
      showSpinner={true}
      easing="ease"
      speed={200}
      shadow="0 0 10px #2299DD,0 0 5px #2299DD"
      template='<div class="bar" role="bar"><div class="peg"></div></div>'
      zIndex={1600}
      showAtBottom={false}
       />
      <Component {...pageProps} />
    </>
  );
}



/*
*********** How to add custom fonts in next js 13 *********************

import { Pathway_Extreme } from "@next/font/google"
const pathway_extreme = Pathway_Extreme({
  subsets : ['latin'],
  weight : ['100', '700']
})

export default function App({ Component, pageProps }) {
  return (
    <main className={pathway_extreme.className} >
      <NextTopLoader
      color="#864AF9"
      initialPosition={0.08}
      crawlSpeed={200}
      height={3}
      crawl={true}
      showSpinner={true}
      easing="ease"
      speed={200}
      shadow="0 0 10px #2299DD,0 0 5px #2299DD"
      template='<div class="bar" role="bar"><div class="peg"></div></div>'
      zIndex={1600}
      showAtBottom={false}
       />
      <Component {...pageProps} />
    </main>
  );
}

*/