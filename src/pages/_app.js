import "@/app/globals.css";
import NextTopLoader from "nextjs-toploader";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextTopLoader
        template={'<div class="bar" role="bar"><div class="peg"></div></div> '}
      />
      <Component {...pageProps} />
    </>
  );
}
