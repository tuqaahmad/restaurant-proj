import React, { Component } from "react";
import "./Components/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Components/HomePage/Home";
import Orders from "./Components/OrdersPage/Orders";
import ResOrder from "./Components/OrdersPage/ReservationOrder";
import Login from "./Components/OrdersPage/Login";
import Register from "./Components/OrdersPage/Register";
import Bookings from "./Components/OrdersPage/Bookings";
import Customers from "./Components/OrdersPage/Customers";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/orders" component={Orders} />
            <Route path="/orders-or-reservation" component={ResOrder} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/AllBookings" component={Bookings} />
            <Route path="/AllCustomers" component={Customers} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
