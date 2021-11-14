import React from "react";
import { Text, Stack, Container } from "@chakra-ui/react";
import DetailsScreen from "./Details";
import { Product } from "../../product/types";
import mock from "../../product/mock";
import { Link } from "react-router-dom";
interface Props {
  product: Product;
}

const HomeScreen: React.FC<Props> = ({ product = mock.product }) => {
  return (
    <Stack min-height="100vh" height="100%">
      <Container maxWidth="container.xl" paddingX={0} my={4}>
        <Text>{`<HomeScreen />`}</Text>
        <br />
        <Link to="/product">Ver página de detalle de producto</Link>
        {/* <DetailsScreen product={product} /> */}
      </Container>
    </Stack>
  );
};

export default HomeScreen;
