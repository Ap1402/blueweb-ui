import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

/* function importExternal(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    script.onload = () => resolve(window["external_global_component"]);
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

export const FetchedComponent = dynamic(
  () =>
    importExternal("https://embed.tawk.to/5fa03ec3520b4b7986a09206/default"),
  {
    loading: () => "Loading...",
    ssr: false,
  }
); */

const LandingPageLayout = ({ children }) => {
  useEffect(() => {
  
    var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/5fa03ec3520b4b7986a09206/default";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
    var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date();
  }, []);
  return (
    <>
      <Helmet>
        <title>Blue Web</title>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossorigin=""
        />
        <script
          src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
          integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
          crossorigin=""
        ></script>
      </Helmet>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
};

export default LandingPageLayout;
