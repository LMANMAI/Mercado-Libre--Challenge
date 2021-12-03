import React from "react";
import { Product } from "../../product/types";
import { Container, Stack, Box, Text, Link } from "@chakra-ui/react";
import {
  ProductImageCarrousel,
  SideShop,
  Description,
  QA,
  SellerInfo,
} from "../../components";
import { useLocation } from "react-router-dom";

const DetailsScreen: React.FC = () => {
  const { state } = useLocation<Product>();
  const productQuery = state;
  //console.log(productQuery);
  return (
    <Box
      minWidth={{ base: "fit-content", md: "800px" }}
      width="80%"
      alignSelf="center"
      minHeight="50%"
      height="fit-content"
    >
      <Stack
        margin={4}
        direction={{ base: "column", md: "row" }}
        fontSize={13}
        alignItems={{ base: "center" }}
      >
        <Text fontWeight="bold">También puede interesarte microfono </Text>
        <Text>
          - monopatin - pistolas de agua - traxxas e revo - pizarra blanca
          80x120 - cama elastica usada
        </Text>
      </Stack>
      <Text margin={4} spacing={2} color="primary.200.600">
        {`Volver al listado |Juegos y Juguetes > Peluches`}
      </Text>
      <Container
        width={{ base: "fit-content", xl: "100%" }}
        height="fit-content"
        min-height="100vh"
        maxWidth="initial"
        backgroundColor="white"
        marginBottom={5}
      >
        <Stack
          direction={{ base: "column", lg: "row" }}
          height="100%"
          p={2}
          pb="40px"
        >
          <Stack flex={2} marginLeft="20px">
            <ProductImageCarrousel product={productQuery} />
            <Description />
            <QA />
          </Stack>
          <Stack flex={1} padding={2}>
            <SideShop product={productQuery} />
            <SellerInfo />
          </Stack>
        </Stack>
      </Container>
      <Stack
        my={2}
        direction="row"
        width="100%"
        justifyContent="flex-end"
        mr="4px"
      >
        <Text>Publicación </Text>
        <Text fontWeight="bold">#754048812 </Text>
        <p>|</p>
        <Link color="#3483fa" href="">
          Denunciar
        </Link>
      </Stack>
    </Box>
  );
};

export default DetailsScreen;
