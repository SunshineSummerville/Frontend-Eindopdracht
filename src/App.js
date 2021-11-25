import React from "react";
import './App.module.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import Services from "./pages/Services";
import Handymen from "./pages/Handymen";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Navbar from "./components/Navbar/Navbar";
import ReservationHistory from "./pages/ReservationHistory";
import ShoppingCart from "./pages/ShoppingCart";
import ReservationDetails from "./pages/ReservationDetails";
import MyServices from "./pages/MyServices";


export default function App() {


  return (
        <div>
          <Navbar/>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/Handymen">
              <Handymen />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/categories/:categoryId/handymen/:handymanId/reservation">
              <ShoppingCart />
            </Route>
            <Route path="/reservationhistory">
              <ReservationHistory />
            </Route>
            <Route path="/reservations/:reservationId" >
              <ReservationDetails />
            </Route>
            <Route path="/myservices" >
              <MyServices />
            </Route>
            <Route path="/">
              <h1>404 not found</h1>
            </Route>

          </Switch>
        </div>
  );
}


