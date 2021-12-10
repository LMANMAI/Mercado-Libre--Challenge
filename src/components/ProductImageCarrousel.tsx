import React, { useState, useContext } from "react";
import { Stack, Image } from "@chakra-ui/react";
import { ProductPicture } from "../product/types";
import ProductContext from "../context/ProductContext";

const ProductImageCarrousel = () => {
  const [image, setImage] = useState<ProductPicture>();
  const [border, setBorder] = useState<boolean>(false);
  const productContext = useContext(ProductContext);
  const { productActive } = productContext;
  if (image === undefined) {
    setImage(productActive?.pictures[0]);
  }

  const handleHover = (picture: any) => {
    setImage(picture);
  };
  const handleChange = (id: string) => {
    setBorder(!border);
  };
  return (
    <Stack
      direction={{ base: "column-reverse", md: "row" }}
      spacing={0}
      marginTop={4}
      height="100%"
    >
      <Stack
        direction={{ base: "row", md: "column" }}
        m={2}
        justifyContent={{ base: "center", md: "normal" }}
      >
        {productActive?.pictures?.map((picture) => (
          <Stack
            w="48px"
            h="48px"
            p={1}
            border={border ? "2px solid #3483fa" : "2px solid rgba(0,0,0,.25)"}
            borderRadius="6px"
            cursor="pointer"
            _hover={{
              border: `2px solid #3483fa`,
            }}
            onClick={() => handleHover(picture)}
            key={picture.id}
          >
            <Image
              src={picture.secure_url}
              height="100%"
              width="100%"
              objectFit="cover"
              //   onClick={() => handleChange(picture.id)}
            />
          </Stack>
        ))}
      </Stack>
      <Stack flex={1} my={3} alignSelf="center" p={4}>
        <Stack
          borderRadius="6px"
          cursor="zoom-in"
          min-width="410px"
          height="500px"
          p={4}
        >
          <Image
            src={image?.url}
            height="100%"
            width="100%"
            objectFit="contain"
          />
        </Stack>
        <hr />
      </Stack>
    </Stack>
  );
};

export default ProductImageCarrousel;
