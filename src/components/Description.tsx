import React, { useContext } from "react";
import { Table, Tr, Tbody, Td, Box, Th } from "@chakra-ui/react";
import { ProductContext } from "../context/ProductContext";

const Description = () => {
  const productcontext = useContext(ProductContext);
  const { product } = productcontext;
  return (
    <Table w="100%">
      <Tbody>
        {product.attributes.map((atribute: any, index: number) => {
          if (
            atribute.id === "BRAND" ||
            atribute.id === "MODEL" ||
            atribute.id === "FRANCHISE" ||
            atribute.id === "ANIMAL" ||
            atribute.id === "CHARACTER"
          ) {
            return (
              <Tr key={index}>
                <Td padding="0px!important">
                  <Box
                    backgroundColor="#ebebeb"
                    fontWeight="bold"
                    height="60px!important"
                    textAlign="start"
                    justifyContent="center"
                    p="15px 16px"
                  >
                    {atribute.name}
                  </Box>
                </Td>
                <Th width="73%" backgroundColor="#f5f5f5">
                  <Box>{atribute.value_name}</Box>
                </Th>
              </Tr>
            );
          }
        })}
      </Tbody>
    </Table>
  );
};

export default Description;
