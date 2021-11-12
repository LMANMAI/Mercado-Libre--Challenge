import React from "react";

import { Product } from "../types";
import mock from "../mock";
import {
  Container,
  Stack,
  Box,
  Image,
  Text,
  Input,
  Icon,
  StackDivider,
} from "@chakra-ui/react";
interface Props {
  product: Product;
}

const DetailsScreen: React.FC<Props> = ({ product = mock.product }) => {
  console.log(product);
  return (
    <Box width="80%" alignSelf="center" minHeight="50%" height="fit-content">
      <Stack margin={4} direction="row" fontSize={13}>
        <Text fontWeight="bold">También puede interesarte microfono </Text>
        <Text>
          - inalambrico karaoke - parlantes portatiles - auriculares vincha
          inalambricos - mavic air 2 - auriculares airpod
        </Text>
      </Stack>
      <Text margin={4} spacing={2}>
        {`Volver al listado | Electrónica, Audio y Video > Televisores > Philips > LED > 50 " > 4K > Es
        smart`}
      </Text>
      <Container
        width="100%"
        height="100vh"
        maxWidth="initial"
        backgroundColor="white"
        marginBottom={5}
      >
        <Stack direction="row" height="100%">
          <Stack flex={2}>
            <p>Imagenes</p>
          </Stack>
          <Stack flex={1}>
            <p>Desc</p>
          </Stack>
          <Stack flex={1}>
            <p>Compra</p>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default DetailsScreen;
