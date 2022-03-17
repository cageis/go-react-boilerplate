import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App";
import {BrowserRouter} from "react-router-dom";

const root = (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

ReactDOM.render(root, document.getElementById('root'))
