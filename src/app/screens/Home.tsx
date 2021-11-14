import React from "react";
import { Link, Text, Stack, Container } from "@chakra-ui/react";
import DetailsScreen from "./Details";
import { Product } from "../../product/types";
import mock from "../../product/mock";

interface Props {
  product: Product;
}

const HomeScreen: React.FC<Props> = ({ product = mock.product }) => {
  return (
    <Stack height="100vh">
      <Container maxWidth="container.xl" paddingX={0} my={4}>
        <Text>{`<HomeScreen />`}</Text>
        <br />
        <Link href="/product">Ver página de detalle de producto</Link>
        <DetailsScreen product={product} />
      </Container>
    </Stack>
  );
};

export default HomeScreen;
