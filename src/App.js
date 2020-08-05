import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import YearOne from "./Pages/Year/YearOne";
import LandingPage from "./Pages/LandingPage/LandingPage";
import GuidancePage from "./Pages/GuidancePage/GuidancePage";
import HomePage from "./Pages/HomePage/HomePage";
import ModulePage from "./Pages/ModulePage/ModulePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <LandingPage />} />
        <Route path="/home" component={() => <HomePage />} />
        <Route exact path="/year1" component={() => <YearOne />} />
        <Route path="/year1/:module" component={() => <ModulePage />} />
        <Route path="/extraguidance" component={() => <GuidancePage />} />
      </Switch>
    </Router>
  );
}

export default App;
