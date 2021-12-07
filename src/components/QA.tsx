import React, { useState, useContext, FormEvent } from "react";
import { Stack, Text, Button, Input } from "@chakra-ui/react";
import { ProductContext } from "../context/ProductContext";
interface IQa {
  question: string;
  answer: string;
  id: string;
}
const QA = () => {
  //Context
  const productcontext = useContext(ProductContext);
  const { questions, setQuestions } = productcontext;
  const [qa, setQuestion] = useState<IQa>({
    question: "",
    answer: "",
    id: "",
  });
  const { question } = qa;
  const handdleCahnge = (e: any) => {
    // setQuestion({
    //   [e.target.name]: e.target.value,
    // });
    setQuestion({
      ...qa,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setQuestions(question);
    setQuestion({
      question: "",
      answer: "",
      id: "",
    });
  };
  return (
    <Stack paddingTop="40px">
      <Text fontSize="1.5em">Preguntas y respuestas</Text>
      <Stack>
        <Text>¿Qué querés saber?</Text>
        <Stack direction={{ base: "column", md: "row" }}>
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
              value={question}
              name="question"
              onChange={handdleCahnge}
              autoComplete="off"
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
        {questions.length > 0 ? (
          <Text> Ultimas preguntas realizadas</Text>
        ) : (
          <Text>Todavia no se realizaron preguntas</Text>
        )}
        {questions.map((question: string, index) => {
          if (question.length > 0) {
            return (
              <Stack bg="rgba(0,0,0,.04)" borderRadius="6px" p="1rem" mt="25px">
                <Text fontSize="16px" key={index}>
                  <Stack direction="row">
                    <Text>{question}</Text>
                    <Text fontSize="12px">Responder</Text>
                  </Stack>
                </Text>
                <Stack></Stack>
                <Text>{"  "}└ Respuesta</Text>
              </Stack>
            );
          }
        })}
      </Stack>
    </Stack>
  );
};

export default QA;
