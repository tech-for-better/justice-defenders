import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { channels } from "../shared/constants";

// components
import YearPage from "../Pages/YearPage/YearPage";
import LandingPage from "../Pages/LandingPage/LandingPage";
import GuidancePage from "../Pages/GuidancePage/GuidancePage";
import HomePage from "../Pages/HomePage/HomePage";
import ModulePage from "../Pages/ModulePage/ModulePage";
import SubtopicPage from "../Pages/SubtopicPage/SubtopicPage";
import ContentPage from "../Pages/ContentPage/ContentPage";

const { ipcRenderer } = window;

function App() {
  const [appName, setAppName] = React.useState("");
  const [appVersion, setAppVersion] = React.useState("");

  ipcRenderer.send(channels.APP_INFO);

  ipcRenderer.on(channels.APP_INFO, (event, arg) => {
    ipcRenderer.removeAllListeners(channels.APP_INFO);
    const { appName, appVersion } = arg;
    setAppName(appName);
    setAppVersion(appVersion);
  });

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <LandingPage 
            appName={appName} 
            appVersion={appVersion} 
            />
          )}
        />
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
        <Route
          exact
          path="/:year/:module/:subtopic/:content"
          component={() => <ContentPage />}
        />
      </Switch>
    </Router>
  );
}

export default App;
