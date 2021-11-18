import React from "react";
import { Stack, Text, Button, Input } from "@chakra-ui/react";
const QA = () => {
  return (
    <Stack paddingTop="40px">
      <Text fontSize="1.5em">Preguntas y respuestas</Text>
      <Stack>
        <Text>¿Qué querés saber?</Text>
        <Stack direction="row">
          <Button
            mr="12px!important"
            mt="12px!important"
            p="0px 12px"
            borderRadius="5px"
            fontSize="14px"
            color="#3483fa"
            backgroundColor="rgba(65,137,230,.2)"
          >
            Costo y tiempo de envío
          </Button>
          <Button
            mr="12px!important"
            mt="12px!important"
            p="0px 12px"
            borderRadius="5px"
            fontSize="14px"
            color="#3483fa"
            backgroundColor="rgba(65,137,230,.2)"
          >
            Devoluciones gratis{" "}
          </Button>
          <Button
            mr="12px!important"
            mt="12px!important"
            p="0px 12px"
            borderRadius="5px"
            fontSize="14px"
            color="#3483fa"
            backgroundColor="rgba(65,137,230,.2)"
          >
            Medios de pago y promociones
          </Button>
          <Button
            mr="12px!important"
            mt="12px!important"
            p="0px 12px"
            borderRadius="5px"
            fontSize="14px"
            color="#3483fa"
            backgroundColor="rgba(65,137,230,.2)"
          >
            Garantía
          </Button>
        </Stack>
      </Stack>
      <Stack>
        <Stack direction="row" alignItems="center" mt="40px">
          <Input placeholder="Escribe tu pregunta..." height="48px" />
          <Button
            backgroundColor="#3483fa"
            color="#fff"
            p="0px 24px"
            height="48px"
          >
            Preguntar
          </Button>
        </Stack>
      </Stack>
      <Stack mt="40px!important">
        <p>Últimas realizadas</p>
      </Stack>
    </Stack>
  );
};

export default QA;
