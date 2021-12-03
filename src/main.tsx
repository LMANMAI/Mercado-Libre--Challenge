import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "./assets/Fonts";
import App from "./app";
import theme from "./theme";
import ProductState from "./context/ProductState";

ReactDOM.render(
  <ProductState>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Fonts />
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </ProductState>,
  document.getElementById("root")
);
