import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  Stack,
  Box,
  Text,
  Input,
  Icon,
  StackDivider,
  Image,
  Button,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { FiPrinter, FiMapPin } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import ProductContext from "../context/ProductContext";
import { Product } from "../product/types";

const BasketWraper = styled.button`
  position: relative;
  outline: none;
  span {
    position: absolute;
    top: 0px;
    right: 6px;
    background: #fff519;
    width: 10px;
    height: 10px;
    color: black;
    display: flex;
    justify-content: center;
    text-align: center;
    border-radius: 100%;
    font-size: 12px;
    align-items: center;
  }
`;
const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [basketproducts, setBasketProducts] = useState<Product[]>([]);
  const productContext = useContext(ProductContext);
  const {
    productActive,
    basket,
    basketvalue,
    removeProduct,
    setProductActive,
    buyIT,
  } = productContext;
  let priceFormater: any;
  if (productActive) {
    priceFormater = new Intl.NumberFormat(productActive?.currency_id, {
      style: "currency",
      currency: productActive?.currency_id,
      minimumFractionDigits: 0,
    });
  }
  const handleModal = () => {
    onOpen();
  };
  const handdleRemove = (producto: Product) => {
    removeProduct(producto);
  };
  useEffect(() => {
    setBasketProducts(basket);
  }, [basket]);
  const handleBuy = () => {
    let newQuantity = productActive.available_quantity - 1;
    productActive.available_quantity = newQuantity;
    setProductActive(productActive);
    buyIT();
  };
  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size={basketvalue !== 0 ? "full" : "sm"}
        isCentered
      >
        <ModalOverlay />
        <ModalContent backgroundColor="#e6e6e6">
          <ModalCloseButton />
          <ModalHeader>{""}</ModalHeader>
          <ModalBody pb={6} mt="15px">
            {basketvalue === 0 ? (
              <p>Todavia no agregaste ningun producto al carrito</p>
            ) : (
              <Stack
                p="40px"
                h="100%"
                minHeight="400px"
                backgroundColor="white"
              >
                <ModalHeader borderBottom="1px solid #e6e6e6" fontSize="17px">
                  Carrito({basket.length})
                </ModalHeader>
                {basketproducts.map((producto: Product, index: number) => (
                  <Stack
                    p="47px 0 48px"
                    borderBottom="1px solid #e6e6e6"
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    key={index}
                  >
                    <Image
                      w="50px"
                      h="50px"
                      borderRadius="100%"
                      src={producto.thumbnail}
                      alt={producto.title}
                    />
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      w="90%"
                      p="10px"
                    >
                      <Stack>
                        <Text fontSize="22px" fontWeight="bold">
                          {producto.title}
                        </Text>
                        <Text
                          color="#3483fa"
                          cursor="pointer"
                          onClick={() => handdleRemove(producto)}
                        >
                          Eliminar
                        </Text>
                      </Stack>
                      <Text fontSize="20px" fontWeight="bold">
                        {priceFormater.format(producto.price)}
                      </Text>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            )}
          </ModalBody>
          {basketvalue !== 0 ? (
            <ModalFooter
              bg="white"
              boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
            >
              <Text m="20px">Total : {priceFormater?.format(basketvalue)}</Text>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Continuar compra
              </Button>
            </ModalFooter>
          ) : null}
        </ModalContent>
      </Modal>
      <Stack
        backgroundColor="white"
        margin="0px!important"
        textAlign="center"
        p={1}
      >
        <p>This is a study case project , is not the original page.</p>
      </Stack>
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
                alignItems="center"
                justifyContent="center"
              >
                <Link to="/">
                  <Text fontWeight="bolder" color="#002660">
                    ML LOGO
                  </Text>
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
                <Button
                  cursor="pointer"
                  zIndex="99"
                  bg="transparent"
                  outline="none"
                  onClick={() => handleModal()}
                >
                  <Icon
                    display="flex"
                    as={HiOutlineShoppingCart}
                    fontWeight="100"
                    fontSize={25}
                  />
                </Button>
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
                <BasketWraper>
                  <Icon
                    display="flex"
                    fontSize={25}
                    as={HiOutlineShoppingCart}
                    fontWeight="100"
                    onClick={() => handleModal()}
                  />
                  {basket.length === 0 ? null : <span>{basket.length}</span>}
                </BasketWraper>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
      {basket.length !== 0 ? (
        <Stack
          maxWidth="container.xl"
          paddingX={0}
          margin="15px auto!important"
          justifySelf="center"
        >
          <Stack
            justifyContent="space-between"
            alignItems="center"
            direction={{ base: "column", md: "row" }}
          >
            <Stack
              direction="row"
              borderRight="1px solid #E2E8F0"
              p="10px"
              m="10px"
            >
              <Image
                src={basket[basket.length - 1]?.thumbnail}
                w="64px "
                h="64px"
                borderRadius="100%"
              />
              <Stack justifySelf="end">
                <Text
                  color="#00a650"
                  fontSize="20px"
                  fontWeight="bold"
                  lineHeight="1.25"
                >
                  Agregaste a tu carrito
                </Text>
                <Text>{basket[basket.length - 1]?.title}</Text>
              </Stack>
            </Stack>

            <Stack direction="row">
              <Stack direction="row" justifyContent="space-evenly">
                <Text>{basket.length} productos en tu carrito:</Text>
                {priceFormater != undefined && (
                  <Text>{priceFormater.format(basketvalue)}</Text>
                )}
              </Stack>
              <Image
                src={basket[basket.length - 1].thumbnail}
                w="40px "
                h="40px"
                borderRadius="100%"
              />
            </Stack>
            <Stack direction="row" alignItems="center">
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
                onClick={() => handleModal()}
              >
                Ver Carrito
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
                onClick={() => handleBuy()}
                disabled={productActive?.available_quantity <= 0}
              >
                Comprar carrito
              </Button>
            </Stack>
          </Stack>
        </Stack>
      ) : null}
    </>
  );
};

export default NavBar;
