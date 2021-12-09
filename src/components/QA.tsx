import React, { useState, useContext, FormEvent } from "react";
import {
  Stack,
  Text,
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { ProductContext } from "../context/ProductContext";
import { useDisclosure } from "@chakra-ui/react";
import "./styles.css";

interface IQa {
  question: string;
  answer: string;
}
const QA = () => {
  //Context
  const productcontext = useContext(ProductContext);
  const { questions, setQuestions } = productcontext;
  const { isOpen, onOpen, onClose } = useDisclosure();
  //states
  const [modalResponse, setModalResponse] = useState<boolean>(false);
  const [questionActive, setQuestionActive] = useState<IQa>({
    question: "",
    answer: "",
  });
  const [qa, setQuestion] = useState<IQa>({
    question: "",
    answer: "",
  });
  const { question, answer } = qa;
  const handdleCahnge = (e: any) => {
    setQuestion({
      ...qa,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setQuestions(qa);
    setQuestion({
      question: "",
      answer: "",
    });
  };
  const handleResponse = () => {
    questionActive.answer = answer;
    console.log("Desde el modal de la respuesta ,esta es la respuesta");
  };
  const handleModalResponse = (question: IQa) => {
    //tengo que capturar el objeto al que estoy queriendi editar
    //editarlo con la respuesta
    setQuestionActive(question);
    if (!modalResponse) {
      onOpen();
    } else {
      onClose();
      setModalResponse(!modalResponse);
    }
  };
  const handleSubmitResponse = (e: FormEvent) => {
    console.log(questions);
    e.preventDefault();
    onClose();
    setQuestion({
      question: "",
      answer: "",
    });
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Responder</ModalHeader>
          <ModalCloseButton />
          <ModalBody marginBottom="15px">
            <Text>{questionActive.question}</Text>
            <form onSubmit={(e) => handleSubmitResponse(e)}>
              <Stack mt="10px">
                <Stack direction="row" alignItems="center" mt="40px">
                  <Input
                    placeholder="Escribe tu respuesta"
                    height="48px"
                    type="text"
                    value={answer}
                    name="answer"
                    onChange={handdleCahnge}
                    autoComplete="off"
                  />
                  <Button
                    onClick={() => handleResponse()}
                    backgroundColor="#3483fa"
                    color="#fff"
                    p="0px 24px"
                    height="48px"
                    type="submit"
                  >
                    Responder
                  </Button>
                </Stack>
              </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Stack paddingTop="40px">
        <Text fontSize="1.5em">Preguntas y respuestas</Text>
        <Stack>
          <Text>¿Qué querés saber?</Text>
          <Stack direction={{ base: "column", md: "row" }} h="150%">
            <Button
              width="fit-content"
              mr="12px!important"
              mt="12px!important"
              p="0px 12px"
              borderRadius="5px"
              fontSize="75%"
              color="#3483fa"
              backgroundColor="rgba(65,137,230,.2)"
            >
              Costo y tiempo de envío
            </Button>
            <Button
              width="fit-content"
              mr="12px!important"
              mt="12px!important"
              p="0px 12px"
              borderRadius="5px"
              fontSize="75%"
              color="#3483fa"
              backgroundColor="rgba(65,137,230,.2)"
            >
              Devoluciones gratis{" "}
            </Button>
            <Button
              width="fit-content"
              mr="12px!important"
              mt="12px!important"
              p="0px 12px"
              borderRadius="5px"
              fontSize="75%"
              color="#3483fa"
              backgroundColor="rgba(65,137,230,.2)"
            >
              Medios de pago y promociones
            </Button>
            <Button
              width="fit-content"
              mr="12px!important"
              mt="12px!important"
              p="0px 12px"
              borderRadius="5px"
              fontSize="75%"
              color="#3483fa"
              backgroundColor="rgba(65,137,230,.2)"
            >
              Garantía
            </Button>
          </Stack>
        </Stack>
        <Stack>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Stack mt="10px">
              <Text fontSize="18px" fontWeight="bold">
                Preguntale al vendedor
              </Text>
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
            </Stack>
          </form>
        </Stack>
        <Stack mt="40px!important">
          {questions.length > 0 ? (
            <Text> Últimas realizadas</Text>
          ) : (
            <Text>Todavia no se realizaron preguntas</Text>
          )}
          {questions.map((questionobject: any, index) => {
            return (
              <Stack
                bg={questionobject.answer ? "white" : "rgba(0,0,0,.04)"}
                borderRadius="6px"
                p="1rem"
                mt="25px"
                key={index}
              >
                <Stack fontSize="17.58px">
                  <Stack direction="row" className="responseContainer">
                    <Text>{questionobject.question}</Text>
                    <Text
                      fontSize="12px"
                      className="response"
                      visibility="hidden"
                      cursor="pointer"
                      m="5px"
                      p="2px"
                      color="#3483fa"
                      onClick={() => handleModalResponse(questionobject)}
                    >
                      Responder
                    </Text>
                  </Stack>
                </Stack>
                {questionobject.answer && (
                  <Text fontSize="17.58px" color="rgba(0,0,0,.55)">
                    └ {questionobject.answer}
                  </Text>
                )}
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </>
  );
};

export default QA;
