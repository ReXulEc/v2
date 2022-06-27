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
        <meta name="title" content="Revolicon - Beautifully Crafted Open Source Icons" />
        <meta name="description" content="Revolicon is an open-source icon library. It is designed for consistency and accessibility. The icons are carefully crafted for you to work seamlessly." />
        <meta name="keywords" content="Revolicon, Font Icon, Web Icon, Icons, Icon, SVG Icon, SVG, Font, Revolution" />

        <meta property="og:site_name" content="Revolicon" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://revolicon.com/" />
        <meta property="og:title" content="Revolicon - Beautifully Crafted Open Source Icons" />
        <meta property="og:description" content="Revolicon is an open-source icon library. It is designed for consistency and accessibility. The icons are carefully crafted for you to work seamlessly." />
        <meta property="og:image" content="/thumbnail.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://revolicon.com/" />
        <meta property="twitter:title" content="Revolicon - Beautifully Crafted Open Source Icons" />
        <meta property="twitter:description" content="Revolicon is an open-source icon library. It is designed for consistency and accessibility. The icons are carefully crafted for you to work seamlessly." />
        <meta property="twitter:image" content="/thumbnail.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default App