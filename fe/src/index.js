import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import "./styles/icons/icons.css";
import "./styles/dark.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import { worker } from "./mocks/browser";
const store = createStore(rootReducer, composeWithDevTools());
// if (process.env.NODE_ENV === 'development') {
  worker.start()
// }
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
