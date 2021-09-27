import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { getAllHotelDestinationList } from "./api/api";

import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import DestinationDetail from "./components/DestinationDetail";
import PageNotFound from "./components/PageNotFound";
import Footer from "./components/Footer";

function App() {
  const [allHotelDestinations, setAllHotelDestinations] = useState([]);

  useEffect(() => {
    getAllHotelDestinationList()
      .then((result) => {
        setAllHotelDestinations(result);
      })
      .catch((error) => {
        console.log("Error getting fake data: " + error);
      });
  }, []);

  return (
    <div className="app">
      <Router>
        <Header data={allHotelDestinations} />
        <div className="container h-100">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/destination/:country/:destination"
              component={DestinationDetail}
            />
            <Route component={PageNotFound} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
