import 'aos/dist/aos.css';
import '../styles/globals.scss'
import Head from "next/head";
import { useState, useEffect } from 'react';


import AOS from "aos";

function App({ Component, pageProps }) {
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });

        document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`)
        document.documentElement.style.setProperty('--app-width', `${window.innerWidth}px`)
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowSize;
}
  const { height, width } = useWindowSize();
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "smooth",
      once: true,
      mirror: true
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover" />

        <title>Mert Doğu.</title>
        <meta name="title" content="Mert Doğu" />
        <meta name="description" content="Front-end developer and loves writing shitcode." />
        <meta name="keywords" content="rexulec, mert, dogu, mert dogu, front-end, frontend" />

        <meta property="og:site_name" content="rexulec" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rexulec.com/" />
        <meta property="og:title" content="Mert Doğu" />
        <meta property="og:description" content="Front-end developer and loves writing shitcode." />

        <meta property="twitter:title" content="Mert Doğu" />
        <meta property="twitter:description" content="Front-end developer and loves writing shitcode." />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default App