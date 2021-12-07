import React, { useContext } from "react";
import { Text, Stack, Container, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";

const HomeScreen: React.FC = () => {
  const { product } = useContext(ProductContext);
  const {} = product;
  console.log(product.thumbnail);
  const priceFormater = new Intl.NumberFormat(product.currency_id, {
    style: "currency",
    currency: product.currency_id,
    minimumFractionDigits: 0,
  });
  return (
    <Stack min-height="100vh" height="100%">
      <Container maxWidth="container.xl" paddingX={4} my={4}>
        <br />

        <Stack
          borderRadius="5px"
          border="1px solid #f5f5f5"
          w="250px"
          minHeight="350px"
          height="fit-content"
          backgroundColor="white"
          m="0 4px 16px"
          spacing={0}
        >
          <Link
            to={{
              pathname: `/${product.title}`,
              state: product,
            }}
          >
            <Stack id="iamge" h="224px" p="25px">
              <Image src={product.pictures[0].url} alt={product.id} />
            </Stack>
            <Stack id="desc" minHeight="134px" p="20px 16px">
              <Text fontSize="24px" color="#333">
                {priceFormater.format(product?.price)}
              </Text>
              <Text fontSize="14px">
                en 12x {priceFormater.format(product?.price / 12)}
              </Text>
              <Text fontSize="14px" color="#666">
                {product.title}
              </Text>
            </Stack>
          </Link>
        </Stack>
      </Container>
    </Stack>
  );
};

export default HomeScreen;
