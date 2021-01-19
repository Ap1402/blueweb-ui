import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/Styling/GlobalStyles";
import Contacto from "./pages/Landing/Contact";
import LandingPageLayout from "./pages/Layouts/LandingPageLayout/LandingPageLayout";
import Home from "./pages/Home";
import Factibilidad from "./pages/Landing/Factibility";
import Nosotros from "./pages/Landing/AboutUs";
import servicios from "./pages/Landing/Services";
import AdminPanelLayout from "./pages/Layouts/AdminPanelLayout/AdminPanelLayout";
import ClientPanelLayout from "./pages/Layouts/ClientPanelLayout";

import VerClientes from "./pages/admin/ShowClients";
import VerTodosLosReportes from "./pages/admin/ShowReports";

import VerFactibilidadSolicitudes from "./pages/admin/ShowFactilityRequests";
import VerMensajesContacto from "./pages/admin/ShowContactMessages";
import VerPagos from "./pages/admin/ShowPayouts";
import CrearCliente from "./pages/admin/CreateClient";
import PrivateRoute from "./helpers/PrivateRoute";
import PrivateSupportRoute from "./helpers/PrivateSupportRoute";
import CrearUsuario from "./pages/admin/CreateUser";
import ScrollToTop from "./helpers/ScrollToTop";
import CrearReporteCliente from "./pages/client/CreatReportPage";
import MisReportes from "./pages/client/ShowMyReports";
import VerReportesPago from "./pages/client/ShowPayoutReports";
import PerfilCliente from "./pages/client/ClientProfile";
import ActualizarDatos from "./pages/client/UpdateData";
import HistorialPago from "./pages/client/PayoutHistory";
import CreateStatus from "./pages/admin/Configuration/CreateStatusAndCategories";
import VerUsuarios from "./pages/admin/ShowUsers";
import EditarClienteInfo from "./pages/admin/EditClientInfo";
import CrearReportePago from "./pages/client/CreatePayoutReportForClient";
import MisPagos from "./pages/client/ShowMyPayouts";
import AddBankAccountsPage from "./pages/admin/Configuration/AddBankAccounts";
import ShowChatForms from "./pages/admin/ShowChatForms";
import "./bootstrap.min.css";
import "jquery/dist/jquery.min.js";

const theme = {
  colors: {
    primaryBackground: "#276ef1",
    secondaryBackgrund: "white",
    primary: "#0070f3",
    blue: "#276ef1",
    lightBlue: "#5799fb",
    darkBlue: "#111D7D",
    darkerBlue: "#000036",
  },
};

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ScrollToTop>
          <Switch>
            <Route path="/admin/:path?">
              <Switch>
                <PrivateSupportRoute
                  layout={AdminPanelLayout}
                  path="/admin/reportes"
                  exact
                  component={VerTodosLosReportes}
                />
                <PrivateSupportRoute
                  layout={AdminPanelLayout}
                  path="/admin/clientes"
                  component={VerClientes}
                  exact
                />
                <PrivateSupportRoute
                  layout={AdminPanelLayout}
                  path="/admin/clientes/crear"
                  exact
                  component={CrearCliente}
                />

                <PrivateSupportRoute
                  layout={AdminPanelLayout}
                  path="/admin/clientes/:id"
                  exact
                  component={EditarClienteInfo}
                />
                <PrivateSupportRoute
                  layout={AdminPanelLayout}
                  path="/admin/factibilidad/"
                  exact
                  component={VerFactibilidadSolicitudes}
                />
                <PrivateSupportRoute
                  layout={AdminPanelLayout}
                  path="/admin/mensajes/"
                  exact
                  component={VerMensajesContacto}
                />
                <PrivateSupportRoute
                  layout={AdminPanelLayout}
                  path="/admin/reportes/categorias"
                  exact
                  component={CreateStatus}
                />
                <PrivateSupportRoute
                  layout={AdminPanelLayout}
                  path="/admin/usuarios/crear/"
                  exact
                  component={CrearUsuario}
                />
                <PrivateSupportRoute
                  layout={AdminPanelLayout}
                  path="/admin/formularios-chat/"
                  exact
                  component={ShowChatForms}
                />
                <PrivateSupportRoute
                  layout={AdminPanelLayout}
                  path="/admin/usuarios/"
                  exact
                  component={VerUsuarios}
                />
                <PrivateSupportRoute
                  layout={AdminPanelLayout}
                  path="/admin/pagos/"
                  exact
                  component={VerPagos}
                />
                <PrivateSupportRoute
                  layout={AdminPanelLayout}
                  path="/admin/pagos/cuentas"
                  exact
                  component={AddBankAccountsPage}
                />
              </Switch>
            </Route>
            <PrivateRoute
              layout={ClientPanelLayout}
              path="/clients/historial"
              component={HistorialPago}
              exact
            />

            <PrivateRoute
              layout={ClientPanelLayout}
              path="/clients/perfil"
              component={PerfilCliente}
              exact
            />
            <PrivateRoute
              layout={ClientPanelLayout}
              path="/clients/actualizar"
              component={ActualizarDatos}
              exact
            />
            <PrivateRoute
              layout={ClientPanelLayout}
              path="/clients/reportar"
              component={CrearReporteCliente}
              exact
            />
            <PrivateRoute
              layout={ClientPanelLayout}
              path="/clients/misReportes"
              component={MisReportes}
              exact
            />
            <PrivateRoute
              layout={ClientPanelLayout}
              path="/clients/reportar-pago"
              component={CrearReportePago}
              exact
            />
            <PrivateRoute
              layout={ClientPanelLayout}
              path="/clients/mis-reportes-pago"
              component={VerReportesPago}
              exact
            />

            <PrivateRoute
              layout={ClientPanelLayout}
              path="/clients/mis-pagos"
              component={MisPagos}
              exact
            />

            <Route>
              <LandingPageLayout>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/contacto" exact component={Contacto} />
                  <Route
                    path="/contacto/factibilidad"
                    exact
                    component={Factibilidad}
                  />

                  <Route path="/nosotros" exact component={Nosotros} />
                  <Route path="/servicios" exact component={servicios} />
                </Switch>
              </LandingPageLayout>
            </Route>
          </Switch>
        </ScrollToTop>
      </ThemeProvider>
    </Router>
  );
}

export default App;
