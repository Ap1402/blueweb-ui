import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/Styling/GlobalStyles";
import Contacto from "./pages/landing/Contacto";
import LandingPageLayout from "./pages/Layouts/LandingPageLayout";
import Home from "./pages/Home";
import Factibilidad from "./pages/landing/Factibilidad";
import Nosotros from "./pages/landing/Nosotros";
import servicios from "./pages/landing/Servicios";
import AdminPanelLayout from "./pages/Layouts/AdminPanelLayout";
import ClientPanelLayout from "./pages/Layouts/ClientPanelLayout";

import VerClientes from "./pages/admin/VerClientes";
import VerFactibilidadSolicitudes from "./pages/admin/VerFactibilidadSolicitudes";
import VerMensajesContacto from "./pages/admin/VerMensajesContacto";
import VerMensajesRevisados from "./pages/admin/VerMensajesRevisados";
import HistorialPago from "./containers/Clientpanel/HistorialPago";
import PerfilCliente from "./containers/Clientpanel/PerfilCliente";
import CrearCliente from "./pages/admin/CrearCliente";
import PrivateRoute from "./helpers/PrivateRoute";
import ActualizarDatos from "./containers/Clientpanel/ActualizarDatos";
import PrivateSupportRoute from "./helpers/PrivateSupportRoute";

const theme = {
  colors: {
    primaryBackground: "#276ef1",
    secondaryBackgrund: "white",
    primary: "#0070f3",
    blue: "#276ef1",
  },
};

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <Switch>
          <Route path="/admin/:path?">
            <Switch>
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
                path="/admin/mensajes/revisados"
                exact
                component={VerMensajesRevisados}
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
      </ThemeProvider>
    </Router>
  );
}

export default App;
