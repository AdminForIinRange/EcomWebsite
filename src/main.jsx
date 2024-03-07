import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "animate.css";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const breakpoints = {
  base: "0px",
  xsm: "320px",
  ssm: "510px",
  sm: "660px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  xxl: "1536px",
  xxxl: "1950px",
};

import "./styles/styles.css";

import { store } from "./store";
import { Provider } from "react-redux";

const theme = extendTheme({
  breakpoints,
  styles: {
    global: {
      html: {
        height: "100%",
        width: "100%",
        overflowX: "hidden",
      },
      body: {
        height: "100%",
        width: "100%",

        backgroundRepeat: "no-repeat",
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </ChakraProvider>
);
