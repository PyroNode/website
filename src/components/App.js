import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Minecraft from "../Pages/Minecraft";
import Discord from "../Pages/Discord";
import TS3 from "../Pages/TS3";
import NotFound from "../Pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/minecraft" component={Minecraft} />
        <Route exact path="/discord" component={Discord} />
        <Route exact path="/voice" component={TS3} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
