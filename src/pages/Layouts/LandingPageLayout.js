import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import Spinner from "../../components/Spinner/Spinner";
import authService from "../../services/auth.service";

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
      const result = await authService.isAuthenticated();
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
    s1.onload = () => {
      var Tawk_API = Tawk_API || {};
      console.log("hola");
      console.log(Tawk_API);
    };
  }, []);

  if (!loading) {
    return (
      <>
        <Helmet>
          <title>Blue Web</title>
          <link rel="stylesheet" href="css/bootstrap.min.css" />
          <link rel="stylesheet" href="fonts/line-icons.css" />

          <link rel="stylesheet" href="css/owl.carousel.min.css" />
          <link rel="stylesheet" href="css/owl.theme.css" />

          <link rel="stylesheet" href="css/magnific-popup.css" />
          <link rel="stylesheet" href="css/nivo-lightbox.css" />

          <link rel="stylesheet" href="css/animate.css" />

          <link rel="stylesheet" href="css/main.css" />

          <link rel="stylesheet" href="css/responsive.css"></link>

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
          <script src="js/jquery-min.js"></script>
          <script src="js/popper.min.js"></script>
          <script src="js/bootstrap.min.js"></script>
          <script src="js/owl.carousel.min.js"></script>
          <script src="js/wow.js"></script>
          <script src="js/jquery.nav.js"></script>
          <script src="js/scrolling-nav.js"></script>
          <script src="js/jquery.easing.min.js"></script>
          <script src="js/jquery.counterup.min.js"></script>
          <script src="js/waypoints.min.js"></script>
          <script src="js/main.js"></script>
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
