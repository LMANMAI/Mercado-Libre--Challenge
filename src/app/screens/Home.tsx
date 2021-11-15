import React from "react";
import { Text, Stack, Container } from "@chakra-ui/react";
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
        <Link
          to={{
            pathname: `/${product.title}`,
            state: product,
          }}
        >
          Ver página de detalle de producto
        </Link>
      </Container>
    </Stack>
  );
};

export default HomeScreen;
