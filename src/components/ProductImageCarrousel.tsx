import React, { useState, useEffect } from "react";
import { Stack, Image } from "@chakra-ui/react";
import { Product, ProductPicture } from "../product/types";
interface IProductImage {
  id: string;
  max_size: string;
  quality: string;
  secure_url: string;
  size: string;
  url: string;
}
const ProductImageCarrousel = (props: { product: Product }) => {
  const [image, setImage] = useState<IProductImage | ProductPicture>();
  const [border, setBorder] = useState<boolean>(false);

  if (image === undefined) {
    setImage(props?.product?.pictures[0]);
  }

  const handleHover = (picture: any) => {
    setImage(picture);
  };
  const handleChange = (id: string) => {
    setBorder(!border);
  };
  // useEffect(() => {
  //   console.log("valor del border", border);
  // }, [border]);
  return (
    <Stack
      direction={{ base: "column-reverse", md: "row" }}
      spacing={0}
      marginTop={4}
      min-height="100%"
      height="fit-content"
    >
      <Stack
        direction={{ base: "row", md: "column" }}
        m={2}
        justifyContent={{ base: "center", md: "normal" }}
      >
        {props.product.pictures.map((picture) => (
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
            onMouseOver={() => handleHover(picture)}
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
