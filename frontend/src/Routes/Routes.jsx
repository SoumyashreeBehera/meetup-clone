import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Mainlanding from "../components/Mainlanding/Mainlanding";
import Navbarwrapper from "../components/Navbar/Navbarwrapper";
import Footerwrapper from "../components/Footer/Footerwrapper";
import Afterloginnavbar from "../components/Navbar/Afterloginnavbar";
import GroupAndEvent from "../components/groupsandevents/GroupAndEvent";

import { EventC1 } from "../components/Pages/EventCreation/EventPage1";
import { EventC2 } from "../components/Pages/EventCreation/EventPage2";
import { EventC3 } from "../components/Pages/EventCreation/EventPage3";
import { EventC4 } from "../components/Pages/EventCreation/EventPage4";
import { EventC5 } from "../components/Pages/EventCreation/EventPage5";
import EventC6 from "../components/Pages/EventCreation/EventPage6";
import PaymentPage from "../components/Pages/EventCreation/PaymentPage";
import { Login } from "../components/Pages/Login/Login";
import { Signup } from "../components/Pages/SignUp/Signup";
import { SignupFill } from "../components/Pages/SignUp/SignupFill";
import MyProfile from "../components/profile/MyProfile";
import { AuthContext } from "../Context/AuthContextProvider";
import DetailsPage from "../components/DescriptonPage/DetailsPage";

export default function Routes() {
  const { token } = useContext(AuthContext);

  return (
    <div>
      <Switch>
        <Route path="/" exact>
          {token === "" ? <Navbarwrapper /> : <Afterloginnavbar />}
          <Mainlanding />
          <Footerwrapper />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/signupFill">
          <SignupFill />
        </Route>
        <Route exact path="/start">
          <EventC1 />
        </Route>
        <Route path="/start/topics">
          <EventC2 />
        </Route>
        <Route path="/start/name">
          <EventC3 />
        </Route>
        <Route path="/start/description">
          <EventC4 />
        </Route>
        <Route path="/start/guidelines">
          <EventC5 />
        </Route>
        <Route path="/start/plans">
          <EventC6 />
        </Route>
        <Route path="/start/payment">
          <PaymentPage />
        </Route>
        <Route path="/groupAndEvnet">
          {token === "" ? <Navbarwrapper /> : <Afterloginnavbar />}
          <GroupAndEvent />
          <Footerwrapper />
        </Route>
        <Route path="/detailsPage">
          {token === "" ? <Navbarwrapper /> : <Afterloginnavbar />}
          <DetailsPage />
        </Route>
        <Route path="/profile">
          {token === "" ? <Navbarwrapper /> : <Afterloginnavbar />}
          <MyProfile />
        </Route>
      </Switch>
      {/* <Footerwrapper /> */}
    </div>
  );
}
