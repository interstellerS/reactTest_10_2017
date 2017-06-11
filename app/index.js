import React from "react";
import ReactDOM from "react-dom";
import { Router, browserHistory } from "react-router";
import { createStore } from "redux";
import { Provider } from "react-redux";
import injectTapEventPlugin from "react-tap-event-plugin";

import reducers from "./reducers";
import routes from "./routes";

import "./styles/main.scss";

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById("render-app")
);
