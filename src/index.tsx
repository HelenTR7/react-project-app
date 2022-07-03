import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import Layout from "@components/layout";
import store from "@store/index";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <Layout />
          </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
