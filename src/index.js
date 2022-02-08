import { StrictMode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./reducers/store";

import App from "./App";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);