import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Watched from "./components/Watched";
import Watchlist from "./components/Watchlist";
import Add from "./components/Add";
import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Watchlist />
          </Route>
          <Route path="/watched">
            <Watched />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
        </Switch>
      </BrowserRouter>
    </GlobalProvider>
  );
};

export default App;
