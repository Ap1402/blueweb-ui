import React, { useEffect, useState } from "react";
import ClientTopBar from "../../../components/Navbars/AdminPanelTopbar";
import LogoutModal from "../../../components/Modals/LogoutModal";
import ClientPanelSidebar from "../../../components/Navbars/AdminPanelSidebar";
import { Helmet } from "react-helmet";
import Spinner from "../../../components/Spinner/Spinner";
import messagesService from "../../../services/messages.service";
import factibilityService from "../../../services/factibility.service";
import "./css/sb-admin-2.min.css";

const AdminPanelLayout = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  //Checking if user is adming or support
  useEffect(() => {
    const getData = async () => {
      try {
        // Getting pending messages number to show it in sidebar
        const pendingMessages = await messagesService.getPendingMessagesCount();

        // Getting pending requests number to show it in sidebar
        const pendingFactibilityRequests = await factibilityService.pendingFactibilityRequestsCount();

        setData({
          pendingFactibilityRequests: pendingFactibilityRequests || 0,
          pendingMessages: pendingMessages || 0,
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
          <script src="/vendor/jquery-easing/jquery.easing.min.js" />
          <script src="/js/sb-admin-2.min.js" />
          <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js" />
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
          <link rel="icon" href="/favicon.ico" />
        </Helmet>

        <div id="wrapper">
          <ClientPanelSidebar
            pendingMessages={data.pendingMessages}
            pendingRequests={data.pendingFactibilityRequests}
          />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <ClientTopBar userInfo={{ name: "Username" }} />
              <div className="container-fluid mx-auto">{children}</div>
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
