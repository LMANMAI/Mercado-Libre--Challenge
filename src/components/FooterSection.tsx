import React from "react";

import {
  Stack,
  Link,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const FooterSection = () => {
  return (
    <>
      <Accordion allowToggle>
        <AccordionItem border="none">
          <AccordionButton
            width="fit-content"
            margin="0px auto"
            paddingBottom="0px"
            _focus={{
              border: "transparent",
            }}
            backgroundColor="white"
            _hover={{
              backgroundColor: "white",
            }}
            _expanded={{ bg: "#f7f7f7", color: "#666" }}
            borderRadius="8px 8px 0px 0px"
          >
            <Text margin="0px">
              Mas informacion
              <AccordionIcon />
            </Text>
          </AccordionButton>
          <AccordionPanel
            backgroundColor="#f7f7f7"
            color="#666"
            fontSize="14px"
          >
            <Stack
              direction={{ base: "column", md: "row" }}
              justifyContent="space-between"
              spacing={5}
              p="0 110px"
              maxWidth="container.xl"
              margin="0px auto"
            >
              <Stack my="46px!important">
                <Text fontWeight="bold">Acerca de</Text>
                <Text>Mercado Libre</Text>
                <Text>Investor relations </Text>
                <Text>Tendencias</Text>
                <Text> Sustentabilidad</Text>
              </Stack>
              <Stack my="46px!important">
                <Text fontWeight="bold">Otros sitios</Text>

                <Text> Developers</Text>
                <Text>Mercado Pago</Text>
                <Text>Mercado Shops</Text>
                <Text> Mercado Envíos</Text>
                <Text>Mercado Ads</Text>
                <Text>Mercado Libre Ideas</Text>
              </Stack>
              <Stack my="46px!important">
                <Text fontWeight="bold">Ayuda</Text>

                <Text>Comprar</Text>
                <Text>Vender</Text>
                <Text>Resolución de problemas</Text>
                <Text>Centro de seguridad</Text>
              </Stack>
              <Stack my="46px!important">
                <Text fontWeight="bold">Redes sociales</Text>

                <Text>Twitter</Text>
                <Text>Facebook</Text>
                <Text>Instagram</Text>
                <Text>YouTube</Text>
              </Stack>
              <Stack my="46px!important">
                <Text fontWeight="bold">Mi cuenta</Text>

                <Text>Ingresá</Text>
                <Text>Vender</Text>
              </Stack>
              <Stack my="46px!important">
                <Text fontWeight="bold">Mercado Puntos</Text>

                <Text>Disney+</Text>
                <Text>Star+</Text>
                <Text>HBO MAX</Text>
                <Text>Paramount+</Text>
              </Stack>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Stack
        w="100%"
        px="16px"
        py="10px"
        backgroundColor="#fff"
        marginTop="0px!important"
      >
        <Stack width="80%" alignSelf="center" maxWidth="container.xl">
          <Stack spacing={1} direction="column-reverse">
            <Text fontSize="14px" color="#999">
              Copyright © 1999-2021
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={3}>
              <Link href="" pl="0px" color="#333" fontSize="14px">
                Trabajá con nosotros
              </Link>
              <Link href="" px="8px" color="#333" fontSize="14px">
                Términos y condiciones
              </Link>
              <Link href="" px="8px" color="#333" fontSize="14px">
                Cómo cuidamos tu privacidad
              </Link>
              <Link href="" px="8px" color="#333" fontSize="14px">
                Información al usuario financiero
              </Link>
              <Link href="" px="8px" color="#333" fontSize="14px">
                Ayuda
              </Link>
              <Link href="" px="8px" color="#333" fontSize="14px">
                Defensa del Consumidor
              </Link>
            </Stack>
          </Stack>
          <Text fontSize="14px" color="#999">
            Direccion de Mercado Libre
          </Text>
        </Stack>
      </Stack>
    </>
  );
};

export default FooterSection;
