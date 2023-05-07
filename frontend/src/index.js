import React from "react";
import ReactDOM from "react-dom/client";

import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import store from "./redux/store";
import { Provider } from "react-redux";

import Mens from "./pages/mProduct/Mens";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  {/* <div> */}
    <ChakraProvider >
    <Provider store={store}>
      <App />
      </Provider>
    </ChakraProvider>
  {/* </div> */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
