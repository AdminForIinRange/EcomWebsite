import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "animate.css";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// import { store } from "./store";
// import { Provider } from "react-redux";


const theme = extendTheme({

  styles: {
    global: {
      html: {
        height: "100%",
        width: "100%",
        overflowX: "hidden",
        overflowY: "auto",

      },
      body: {
       
        height: "100%",
        width: "100%",
        overflowX: "hidden", // Hide horizontal scrollbar
        overflowY: "auto",   // Show vertical scrollbar when needed
      },
    },
  },
   fontSizes: {
    responsiveHeading: ['sm', 'sm', 'sm', 'md', 'lg'],
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ChakraProvider>
)


{/* <Provider store={store}>
<App />
</Provider> */}