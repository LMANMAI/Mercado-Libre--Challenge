import React from "react";
import { TableCaption, Table, Tr, Th, Tbody, Td } from "@chakra-ui/react";
import { Product } from "../product/types";
const Description = (props: { product: Product }) => {
  console.log("attributes", props.product.attributes);
  return (
    <Table>
      <Tbody>
        <Tr width="100%">
          <Td backgroundColor="#ebebeb">MARca</Td>
          <Td width="73%" backgroundColor="#f5f5f5">
            {" "}
            LILO
          </Td>
        </Tr>
        <Tr width="100%">
          <Td backgroundColor="#f5f5f5">MARca</Td>
          <Td width="73%"> LILO</Td>
        </Tr>
        <Tr width="100%">
          <Td backgroundColor="#ebebeb">MARca</Td>
          <Td width="73%" backgroundColor="#f5f5f5">
            {" "}
            LILO
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default Description;
