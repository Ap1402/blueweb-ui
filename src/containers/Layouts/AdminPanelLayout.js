import React from "react";
import ClientTopBar from '../../components/Navbars/ClientTopBar';
import LogoutModal from "../../components/Modals/LogoutModal";
import ClientPanelSidebar from '../../components/Navbars/ClientPanelSidebar';
import {Helmet} from "react-helmet";

const AdminPanelLayout = ({ children }) => {
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
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
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
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
   integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
   crossorigin=""/>
   <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
   integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
   crossorigin=""></script>

        <link rel="icon" href="/favicon.ico" />
        <link href="/css/sb-admin-2.min.css" rel="stylesheet" />
        <script src="/vendor/jquery/jquery.min.js" />
        <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js" />
        <script src="/vendor/jquery-easing/jquery.easing.min.js" />
        <script src="/js/sb-admin-2.min.js" />
      </Helmet>

      <div id="wrapper">
        <ClientPanelSidebar />
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
};

export default AdminPanelLayout;
