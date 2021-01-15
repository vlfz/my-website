import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";

const App = () => {
  return (
    <div className="container-grid">
      <Navigation />

      <Switch>
        <Route exact path="/">
          <IndexPage />
        </Route>

        <Route exact path="/contact">
          <ContactPage />
        </Route>

        <Route exact path="/projects">
          <ProjectsPage />
        </Route>

        <Route path="/404">
          <h1>404</h1>
        </Route>

        <Redirect to="/404" />
      </Switch>

      <Footer />
    </div>
  );
};

export default App;
