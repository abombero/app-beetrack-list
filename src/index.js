import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import App from "./components/App";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import GlobalStyle from "./globalStyles";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <GlobalStyle/>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  rootElement
);
