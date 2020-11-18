import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import isAuthenticated from "../../helpers/isAuthenticated";
import Spinner from "../../components/Spinner/Spinner";

//Component for go to top arrow
const ScrollToTop = () => {
  const [is_visible, setIsVisible] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", function (e) {
      toggleVisibility();
    });
  });

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="scroll-to-top"
      style={{ position: "fixed", bottom: "5%", right: "2%" }}
    >
      {is_visible && (
        <div onClick={() => scrollToTop()}>
          <i
            className="fas fa-arrow-circle-up"
            style={{ fontSize: "40px", zIndex: 1000, color: "#276ef1" }}
          ></i>
        </div>
      )}
    </div>
  );
};

const LandingPageLayout = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  //Checking if user is auth so it can show register or logout button
  useEffect(() => {
    const isUserAuth = async () => {
      const result = await isAuthenticated();
      setIsAuth(result.isAuth);
      setLoading(!loading);
    };
    isUserAuth();
  }, []);

  //Adding live chat script
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

  if (!loading) {
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
        <Header isAuth={isAuth}></Header>
        {children}
        <ScrollToTop></ScrollToTop>
        <Footer></Footer>
      </>
    );
  } else {
    return <Spinner></Spinner>;
  }
};

export default LandingPageLayout;
