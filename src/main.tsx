import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import Fonts from "./assets/Fonts";
import App from "./app";
import theme from "./theme";
import ProductProvider from "./context/ProductContext";

ReactDOM.render(
  <ProductProvider>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Fonts />
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </ProductProvider>,
  document.getElementById("root")
);
