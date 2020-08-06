import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import YearPage from "./Pages/Year/YearPage";
import LandingPage from "./Pages/LandingPage/LandingPage";
import GuidancePage from "./Pages/GuidancePage/GuidancePage";
import HomePage from "./Pages/HomePage/HomePage";
import ModulePage from "./Pages/ModulePage/ModulePage";
import SubtopicPage from "./Pages/SubtopicPage/SubtopicPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <LandingPage />} />
        <Route path="/home" component={() => <HomePage />} />
        <Route
          exact
          path="/extra-guidance"
          component={() => <GuidancePage />}
        />
        <Route exact path="/:year" component={() => <YearPage />} />
        <Route exact path="/:year/:module" component={() => <ModulePage />} />
        <Route
          exact
          path="/:year/:module/:subtopic"
          component={() => <SubtopicPage />}
        />
      </Switch>
    </Router>
  );
}

export default App;
