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
import VerClientes from "./pages/admin/VerClientes";
import VerFactibilidadSolicitudes from "./pages/admin/VerFactibilidadSolicitudes";
import VerMensajesContacto from "./pages/admin/VerMensajesContacto";
import VerMensajesRevisados from "./pages/admin/VerMensajesRevisados";

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
            <AdminPanelLayout>
              <Switch>
                <Route
                  path="/admin/clientes"
                  exact
                  component={VerClientes}
                />
                <Route
                  path="/admin/factibilidad/"
                  exact
                  component={VerFactibilidadSolicitudes}
                />

                <Route
                  path="/admin/mensajes/"
                  exact
                  component={VerMensajesContacto}
                />
                <Route
                  path="/admin/mensajes/revisados"
                  exact
                  component={VerMensajesRevisados}
                />
              </Switch>
            </AdminPanelLayout>
          </Route>
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
