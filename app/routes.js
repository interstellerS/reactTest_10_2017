import React from "react";
import { Route, IndexRoute } from "react-router";

import { ListPersonnagePage, EditPersonnagePage, App } from "pages";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ListPersonnagePage} />
    <Route path="/listPersonnage" component={ListPersonnagePage} />
    <Route path="/editPersonnage" component={EditPersonnagePage} />
  </Route>
);
