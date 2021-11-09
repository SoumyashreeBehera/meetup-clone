import React from "react";
import { Switch, Route } from "react-router-dom";
import GroupCreate6thPage from "../components/GroupCreate6thPage/GroupCreate6thPage";

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <h3>Home page</h3>
        </Route>
        <Route path="/GroupCreate6thPage" exact>
          <GroupCreate6thPage />
        </Route>
      </Switch>
    </div>
  );
}
