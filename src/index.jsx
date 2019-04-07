import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { App } from "./containers/app";

import store from "~src/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("herebeapps")
);
