import React, { useContext } from "react";
import { Text, Stack, Icon } from "@chakra-ui/react";
import { ContainerBorder } from "./";
import { RiMapPin2Line } from "react-icons/ri";
import { ProductContext } from "../context/ProductContext";

const SellerInfo = () => {
  const productcontext = useContext(ProductContext);
  const { product } = productcontext;
  return (
    <ContainerBorder>
      <Text fontSize="18px" mr="15px">
        Información sobre el vendedor
      </Text>
      <Stack id="ubicacion" direction="row" alignItems="center">
        <Stack width="20px" height="40px" alignItems="center">
          <Icon as={RiMapPin2Line} color="#333" width="100%" />
        </Stack>
        <Stack spacing={0}>
          <Text m="0px!important" fontSize="16px">
            Ubicación
          </Text>
          <Text m="0px!important" fontSize="14px" color="rgba(0,0,0,.55)">
            {product.seller_address.country.name},
            {product.seller_address.city.name}
          </Text>
        </Stack>
      </Stack>
    </ContainerBorder>
  );
};

export default SellerInfo;
