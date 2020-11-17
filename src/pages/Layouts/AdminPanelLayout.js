import React, { useEffect, useState } from "react";
import ClientTopBar from "../../components/Navbars/ClientTopBar";
import LogoutModal from "../../components/Modals/LogoutModal";
import ClientPanelSidebar from "../../components/Navbars/ClientPanelSidebar";
import { Helmet } from "react-helmet";
import Axios from "axios";
import authHeader from "../../helpers/getAuthToken";
import Spinner from "../../components/Spinner/Spinner";

const AdminPanelLayout = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  //Checking if user is adming or support
  useEffect(() => {
    const getData = async () => {
      try {
        // Getting pending messages number to show it in sidebar
        const pendingMessages = await Axios.get(
          "http://localhost:4000/api/clients/messsages/count",
          {
            headers: {
              "x-auth-token": authHeader(),
            },
          }
        ).catch((err) => {
          console.log(err);
          return err;
        });

        // Getting pending requests number to show it in sidebar
        const pendingFactibilityRequests = await Axios.get(
          "http://localhost:4000/api/factibility/count",
          {
            headers: {
              "x-auth-token": authHeader(),
            },
          }
        ).catch((err) => {
          return err;
        });
        console.log(pendingFactibilityRequests.data);
        setData({
          pendingFactibilityRequests: pendingFactibilityRequests.data || 0,
          pendingMessages: pendingMessages.data || 0,
        });
        setLoading(!loading);
      } catch (err) {}
    };
    getData();
  }, []);

  if (!loading) {
    return (
      <>
        <Helmet>
          <title>BlueWeb Admin Panel</title>
          <meta charSet="utf-8" />
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
          <link
            href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
            rel="stylesheet"
          />
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
          <link rel="icon" href="/favicon.ico" />
          <script src="/vendor/jquery-easing/jquery.easing.min.js" />
          <script src="/js/sb-admin-2.min.js" />
          <link href="/css/sb-admin-2.min.css" rel="stylesheet" />.
          <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js" />
        </Helmet>

        <div id="wrapper">
          <ClientPanelSidebar
            pendingMessages={data.pendingMessages}
            pendingRequests={data.pendingFactibilityRequests}
          />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <ClientTopBar userInfo={{ name: "Username" }} />
              {children}
            </div>
          </div>
        </div>
        <LogoutModal></LogoutModal>
      </>
    );
  } else {
    return <Spinner></Spinner>;
  }
};

export default AdminPanelLayout;
