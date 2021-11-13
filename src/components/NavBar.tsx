import React from "react";
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

import logo from "../assets/logo.png";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { FiPrinter, FiMapPin } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <Box
      backgroundColor="primary.500"
      boxShadow="sm"
      padding={3}
      paddingTop={2}
      paddingBottom={0.5}
    >
      <Container maxWidth="container.xl" paddingX={0}>
        <Stack spacing={2}>
          <Stack
            direction="row"
            justifyContent="space-between"
            spacing={5}
            alignItems="center"
          >
            <Stack
              direction="row"
              spacing={{ base: 7, md: 12 }}
              flex={1}
              alignItems={{ base: "center", md: "initial" }}
            >
              <Link to="/">
                <Image width="fit-content" objectFit="contain" src={logo} />
              </Link>
              <Stack
                backgroundColor="white"
                padding={2}
                borderRadius="sm"
                boxShadow="base"
                direction="row"
                alignItems="center"
                divider={<StackDivider />}
                width={{ base: "90%", md: "100%" }}
                maxWidth={600}
                paddingRight={4}
              >
                <Input
                  variant="unstyled"
                  paddingX={2}
                  placeholder="Busca productos, marcas y más..."
                  _placeholder={{
                    color: "gray.300",
                  }}
                  margin={0}
                />
                <Icon
                  as={AiOutlineSearch}
                  width={5}
                  height={5}
                  color="gray.500"
                  cursor="pointer"
                ></Icon>
              </Stack>
            </Stack>

            <Stack
              alignItems="center"
              direction="row"
              spacing={3}
              width="fit-content"
              alignSelf={{ base: "center", md: "initial" }}
              display={{ base: "none", md: "flex" }}
            >
              <Icon
                width={5}
                height={5}
                as={FiPrinter}
                color="blackAlpha.700"
              />
              <Text>Compra tu Point Mini + QR a $249</Text>
            </Stack>
            <Stack direction="row" display={{ base: "flex", md: "none" }}>
              <Icon
                display="flex"
                as={AiOutlineMenu}
                fontWeight="100"
                fontSize={25}
              />
              <Icon
                display="flex"
                as={HiOutlineShoppingCart}
                fontWeight="100"
                fontSize={25}
              />
            </Stack>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
          >
            <Stack direction="row" spacing={16} alignItems="baseline">
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                display={{ base: "none", md: "flex" }}
              >
                <Icon
                  width={5}
                  height={5}
                  color="blackAlpha.700"
                  as={FiMapPin}
                />
                <Stack spacing={0}>
                  <Text
                    lineHeight="normal"
                    fontSize="xs"
                    color="blackAlpha.700"
                  >
                    Enviar a
                  </Text>
                  <Text fontSize="md" lineHeight="normal">
                    Buenos Aires{" "}
                  </Text>
                </Stack>
              </Stack>

              <Stack
                direction="row"
                fontSize="sm"
                color="blackAlpha.600"
                spacing={5}
                display={{ base: "none", md: "flex" }}
              >
                <Text>Categorías</Text>
                <Text>Ofertas</Text>
                <Text>Historial</Text>
                <Text>Supermercado</Text>
                <Text>Moda</Text>
                <Text>Vender</Text>
                <Text>Ayuda</Text>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              spacing={6}
              fontSize="sm"
              display={{ base: "none", md: "flex" }}
            >
              <Text>Creá tu Cuenta</Text>
              <Text>Ingresá</Text>
              <Text>Mis compras</Text>
              <Icon
                display="flex"
                fontSize={20}
                as={HiOutlineShoppingCart}
                fontWeight="100"
              />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default NavBar;
