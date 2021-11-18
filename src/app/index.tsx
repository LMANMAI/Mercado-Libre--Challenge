import React from "react";
import { Stack } from "@chakra-ui/react";
import Routes from "./routes";
import { NavBar, FooterSection } from "../components";
const App: React.FC = () => {
  return (
    <Stack>
      <NavBar />
      <Stack
        alignSelf="center"
        paddingX={0}
        marginTop="0rem!important"
        backgroundColor="blackAlpha.200"
        min-height="100vh"
        height="fit-content"
        width="100%"
      >
        <Routes />
        <FooterSection />
      </Stack>
    </Stack>
  );
};

export default App;
