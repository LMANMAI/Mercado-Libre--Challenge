import React from "react";
import { Link, Text, Stack, Container } from "@chakra-ui/react";

const HomeScreen: React.FC = () => {
  return (
    <Stack height="100vh">
      <Container maxWidth="container.xl" paddingX={0} my={4}>
        <Text>{`<HomeScreen />`}</Text>
        <br />
        <Link href="/product">Ver página de detalle de producto</Link>
      </Container>
    </Stack>
  );
};

export default HomeScreen;
