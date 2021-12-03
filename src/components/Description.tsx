import React, { useContext } from "react";
import { TableCaption, Table, Tr, Th, Tbody, Td } from "@chakra-ui/react";
import { Product } from "../product/types";
import { ProductContext } from "../context/ProductContext";
const Description = () => {
  const productcontext = useContext(ProductContext);
  const { product } = productcontext;
  // console.log(product.attributes);
  return (
    <Table>
      <Tbody>
        {/* <Tr width="100%" id="fila1">
          <Td backgroundColor="#ebebeb">MARca</Td>
          <Td width="73%" backgroundColor="#f5f5f5">
            LILO
          </Td>
        </Tr>
        <Tr width="100%" id="fila2">
          <Td backgroundColor="#f5f5f5">MARca</Td>
          <Td width="73%"> LILO</Td>
        </Tr>
        <Tr width="100%" id="fila3">
          <Td backgroundColor="#ebebeb">MARca</Td>
          <Td width="73%" backgroundColor="#f5f5f5">
            LILO
          </Td>
        </Tr>
        <Tr width="100%" id="fila4">
          <Td backgroundColor="#f5f5f5">MARca</Td>
          <Td width="73%"> LILO</Td>
        </Tr>
        <Tr width="100%" id="fila5">
          <Td backgroundColor="#ebebeb">MARca</Td>
          <Td width="73%" backgroundColor="#f5f5f5">
            LILO
          </Td>
        </Tr> */}
        {product.attributes.map((atribute: any, index: number) => {
          if (
            atribute.id === "BRAND" ||
            atribute.id === "MODEL" ||
            atribute.id === "FRANCHISE" ||
            atribute.id === "ANIMAL" ||
            atribute.id === "CHARACTER"
          ) {
            <Tr width="100%" id="fila5" key={index} _nt>
              <Td backgroundColor="#ebebeb">{atribute.name}</Td>
              <Td width="73%" backgroundColor="#f5f5f5">
                {atribute.value_name}
              </Td>
            </Tr>;
          }
        })}
      </Tbody>
    </Table>
  );
};

export default Description;
