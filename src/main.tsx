import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import Fonts from "./assets/Fonts";
import styled from "@emotion/styled";
import App from "./app";
import theme from "./theme";
const AppContainer = styled.div`
  font-family: "Proxima Nova";
`;
ReactDOM.render(
  <AppContainer>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Fonts />
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </AppContainer>,
  document.getElementById("root")
);
