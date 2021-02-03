import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Minecraft from "../Pages/Minecraft"
import NotFound from "../Pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/minecraft" component={Minecraft} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
