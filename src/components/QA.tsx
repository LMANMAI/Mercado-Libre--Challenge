import React, { useState, useContext, FormEvent } from "react";
import { Stack, Text, Button, Input } from "@chakra-ui/react";
import { ProductContext } from "../context/ProductContext";
interface IQa {
  qa: string;
}
const QA = () => {
  //Context
  const productcontext = useContext(ProductContext);
  const { questions, setQuestions } = productcontext;
  const [question, setQuestion] = useState<IQa>({
    qa: "",
  });
  const { qa } = question;
  const handdleCahnge = (e: any) => {
    // setQuestion({
    //   [e.target.name]: e.target.value,
    // });
    setQuestion({
      ...question,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setQuestions(qa);
  };
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
        <form onSubmit={(e) => handleSubmit(e)}>
          <Stack direction="row" alignItems="center" mt="40px">
            <Input
              placeholder="Escribe tu pregunta..."
              height="48px"
              type="text"
              value={qa}
              name="qa"
              onChange={handdleCahnge}
            />
            <Button
              backgroundColor="#3483fa"
              color="#fff"
              p="0px 24px"
              height="48px"
              type="submit"
            >
              Preguntar
            </Button>
          </Stack>
        </form>
      </Stack>
      <Stack mt="40px!important">
        {questions.length !== 1 ? (
          <Text fontSize="18px" fontWeight="600" lineHeight="1.25">
            Todavia no se realizaron preguntas
          </Text>
        ) : (
          <Stack color="rgba(0,0,0,.9)">
            <Text fontSize="18px" fontWeight="600" lineHeight="1.25">
              Últimas realizadas
            </Text>
            {questions.map((question: string, index) => (
              <Text fontSize="16px" key={index}>
                {question}
              </Text>
            ))}
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default QA;
