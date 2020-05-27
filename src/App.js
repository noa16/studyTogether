import React from "react";
import ComponentBuilder from "./component/componentBuilder";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import moreInfo from "./component/MoreInfo";
import componentBuilder from "./component/componentBuilder";
import Chat from "./component/Chat";
import Join from "../src/component/Join";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/moreInfo" component={moreInfo} />
        <Route path="/chat" component={Chat} />
        <Route path="/join" component={Join} />
      </Switch>
      <ComponentBuilder />
    </div>
  );
}

export default App;
