import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/Styling/GlobalStyles";
import Contacto from "./containers/Clientpanel/Contacto";
import LandingPageLayout from "./containers/Layouts/LandingPageLayout";
import Home from "./pages/Home";
import Factibilidad from "./pages/landing/Factibilidad";
import Nosotros from "./pages/landing/Nosotros";
import servicios from "./pages/landing/Servicios";

/*    <Route path="/admin/:path?" exact>
     <MainAdmin>
       <Switch>
         <Route path="/admin" exact component={Dashboard} />
         <Route path="/admin/setting" component={Setting} />
       </Switch>
     </MainAdmin>
   </Route> */

const theme = {
  colors: {
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
          <Route>
            <LandingPageLayout>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/contacto" exact component={Contacto} />
                <Route path="/contacto/factibilidad" exact component={Factibilidad} />
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
