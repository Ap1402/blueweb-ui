import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Helmet } from "react-helmet";
import Spinner from "../../../components/Spinner/Spinner";
import authService from "../../../services/auth.service";
import "./css/main.scss";
import "./css/magnific-popup.scss";
import "./css/nivo-lightbox.scss";
import "./css/animate.scss";
import "./css/responsive.scss";
import messagesService from "../../../services/messages.service";

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
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
    var tawk = document.getElementById("tawkId");

    if (tawk) {
      // Prevent TawkTo to create root script if it already exists
      return window.Tawk_API;
    }

    var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.id = "tawkId";
    s1.src = "https://embed.tawk.to/5fa03ec3520b4b7986a09206/default";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
    s1.onload = () => {
      var Tawk_API = window.Tawk_API || {};

      Tawk_API.onPrechatSubmit = function (data) {
        messagesService.saveChatPreform(data, 1);
      };
      Tawk_API.onOfflineSubmit = function (data) {
        messagesService.saveChatPreform(data, 0);
      };

      /*  Tawk_API.onLoaded = () => {
        if (Tawk_API.isChatMaximized()) {
          console.log("maximizado");
        }
        Tawk_API.onPrechatSubmit = function (data) {
          console.log(data);
        };
      }; */
    };
  }, []);

  if (!loading) {
    return (
      <>
        <Helmet>
          <title>Blueweb</title>

          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="fonts/line-icons.css" />
          <meta charSet="utf-8" />

          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
            integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
            crossorigin=""
          />

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
        <div className="landingPageStyle nivo-lighbox-landing magnific-popup animate-landing landingPage-responsive">
          <Header isAuth={isAuth}></Header>
          {children}
          <ScrollToTop></ScrollToTop>
          <Footer></Footer>
        </div>
      </>
    );
  } else {
    return <Spinner></Spinner>;
  }
};

export default LandingPageLayout;
