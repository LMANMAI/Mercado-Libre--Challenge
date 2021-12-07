import React, { useContext, useState } from "react";
import { Stack, Text, Icon, Button } from "@chakra-ui/react";
import { FiHeart } from "react-icons/fi";
import { HiOutlineTruck } from "react-icons/hi";
import { IoReturnDownBack } from "react-icons/io5";
import { ContainerBorder } from "./";
import { ProductContext } from "../context/ProductContext";
const SideShop = () => {
  const productcontext = useContext(ProductContext);
  const { product, setCart } = productcontext;
  const priceFormater = new Intl.NumberFormat(product.currency_id, {
    style: "currency",
    currency: product.currency_id,
    minimumFractionDigits: 0,
  });
  return (
    <ContainerBorder>
      <Stack>
        <Text>
          {` ${product.condition === "new" ? "Nuevo" : "Usado"} | 
           ${product.sold_quantity} vendidos`}
        </Text>
      </Stack>
      <Stack direction="row" id="titulo">
        <Text
          fontWeight="bolder"
          fontSize="22px"
          lineHeight="1.18"
          mb="8px"
          mr="15px"
        >
          {product.title}
        </Text>
        <Icon
          as={FiHeart}
          color="#3483fa"
          height="24px"
          width="24px"
          fontWeight="100"
          cursor="pointer"
        />
      </Stack>

      <Stack id="pagos">
        <Text fontSize="36px" lineHeight="1em">
          {priceFormater.format(product?.price)}
        </Text>
        <Text fontSize="16px">
          en 12x {priceFormater.format(product?.price / 12)}
        </Text>

        <Text color="#3483fa" cursor="pointer" fontSize="14px">
          Ver los medios de pago
        </Text>
      </Stack>

      <Stack direction="row" alignItems="center" id="envio">
        <Stack height="30px" width="30px">
          <Icon
            as={HiOutlineTruck}
            mr="16px"
            width="100%"
            height="100%"
            justifyContent="flex-start"
            mt="5px"
          />
        </Stack>

        <Stack direction="column" lineHeight="1.35" spacing={1}>
          <Text fontSize="16px" lineHeight="1.3" marginBottom="2px!important">
            Envío a todo el país
          </Text>
          <Text fontSize="14px" lineHeight="1.29" color="rgba(0,0,0,.55)">
            Conocé los tiempos y las formas de envío.
          </Text>
          <Text color="#3483fa" fontSize="14px">
            Calcular cuándo llega
          </Text>
        </Stack>
      </Stack>
      <Stack direction="row" alignItems="center" id="devolucion">
        <Stack height="30px" width="30px">
          <Icon
            as={IoReturnDownBack}
            color="#00a650"
            mr="16px"
            width="100%"
            height="100%"
            justifyContent="flex-start"
            mt="5px"
          />
        </Stack>

        <Stack direction="column" lineHeight="1.35" spacing={1}>
          <Text
            color="#00a650"
            fontSize="16px"
            lineHeight="1.3"
            marginBottom="2px!important"
          >
            Devolución gratis
          </Text>
          <Text fontSize="14px" lineHeight="1.29" color="rgba(0,0,0,.55)">
            Tenés 30 días desde que lo recibís.
          </Text>
          <Text color="#3483fa" fontSize="14px">
            Conocer más
          </Text>
        </Stack>
      </Stack>
      <Text fontWeight="bold" fontSize="20px" mt="20px">
        {product.available_quantity === 1
          ? "¡Última disponible!"
          : `${product.available_quantity} unidades disponibles`}
      </Text>
      <Stack id="botones">
        <Button
          backgroundColor="#3483fa"
          color="#fff"
          fontSize="16px"
          height="48px"
          borderRadius="8px"
          textAlign="center"
          fontWeight="600"
          padding="0px 24px"
          transition="background 550ms ease-in-out"
          _hover={{
            backgroundColor: "#2968c8",
          }}
        >
          Comprar ahora
        </Button>
        <Button
          backgroundColor="rgba(65,137,230,.2)"
          color="#3483fa"
          height="48px"
          borderRadius="8px"
          textAlign="center"
          fontWeight="600"
          padding="0px 24px"
          _hover={{
            backgroundColor: "rgba(65,137,230,.2)",
          }}
          onClick={() => setCart()}
        >
          Agregar al carrito
        </Button>
      </Stack>
    </ContainerBorder>
  );
};

export default SideShop;
