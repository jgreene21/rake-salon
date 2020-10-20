import React, { Fragment } from "react";
import "./App.css";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navbar";
// import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import Register from "./components/Register";
import { Switch, Route } from "react-router-dom";
import FetchAdmin from "./admin/FetchAdmin";
import LargeHeader from "./components/LargeHeader";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Story from "./components/Story";
import Stylists from "./components/Stylists";
import Services from "./components/Services";
import Products from "./components/Products";


const App = () => (
  <Fragment>
    <ScrollToTop>
    <FetchAdmin>
      <LargeHeader />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <ProtectedRoute exact path="/adminpanel" component={AdminPanel} /> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/ourstory" component={Story} />
        <Route exact path="/ourstylists" component={Stylists} />
        <Route exact path="/ourservices" component={Services} />
        <Route exact path="/ourproducts" component={Products} />
        <Route component={NoMatch} />
      </Switch>
      <Footer /> 
    </FetchAdmin>
    </ScrollToTop>
  </Fragment>
);

export default App;