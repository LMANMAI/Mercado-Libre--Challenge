import React, { useContext } from "react";
import { Product } from "../../product/types";
import {
  Container,
  Stack,
  Box,
  Text,
  Link,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import {
  ProductImageCarrousel,
  SideShop,
  Description,
  QA,
} from "../../components";
import ProductContext from "../../context/ProductContext";

const DetailsScreen: React.FC = () => {
  const productContext = useContext(ProductContext);
  const { productActive } = productContext;
  return (
    <Box
      minWidth={{ base: "fit-content", md: "800px" }}
      width="80%"
      alignSelf="center"
      minHeight="50%"
      height="fit-content"
      maxWidth="container.xl"
    >
      <Stack
        margin={4}
        direction={{ base: "column", md: "row" }}
        fontSize={13}
        alignItems={{ base: "center" }}
        w="80%"
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
          <Grid
            templateRows={{ base: "repeat(4, 1fr)", md: "1fr" }}
            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            h="fit-content"
            w="100%"
          >
            <GridItem
              colSpan={{ base: 1, md: 2 }}
              colStart={1}
              colEnd={3}
              rowStart={1}
              rowEnd={2}
            >
              <ProductImageCarrousel />
            </GridItem>
            <GridItem colSpan={1}>
              <SideShop />
            </GridItem>
            <GridItem colSpan={2} colStart={1} colEnd={3}>
              <Description />
              <QA />
            </GridItem>
          </Grid>
        </Stack>
      </Container>
      <Stack
        my={2}
        direction="row"
        width="100%"
        justifyContent={{ base: "center", md: "flex-end" }}
        mr="4px"
      >
        <Text>Publicación </Text>
        <Text fontWeight="bold"># {productActive?.id?.substring(3, 12)} </Text>
        <p>|</p>
        <Link color="#3483fa" href="">
          Denunciar
        </Link>
      </Stack>
    </Box>
  );
};

export default DetailsScreen;
