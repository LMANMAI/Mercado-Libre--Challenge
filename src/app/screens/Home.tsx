import React, { useContext } from "react";
import { Text, Stack, Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";

const HomeScreen: React.FC = () => {
  const { product } = useContext(ProductContext);
  console.log("Producto desde el context", product);
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
