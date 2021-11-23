import React from "react";
import { Stack } from "@chakra-ui/react";

interface LayoutProps {
  children: React.ReactNode;
}
const ContainerBorder: React.FC<LayoutProps> = (props: LayoutProps) => {
  return (
    <Stack
      height="fit-content"
      padding="24px 16px"
      py={4}
      px={2}
      position="sticky"
    >
      <Stack
        border="1px solid rgba(0,0,0,.1)"
        borderRadius="8px"
        height="100%"
        direction="column"
        p={4}
        spacing={4}
        position="relative"
        zIndex="5"
      >
        {props.children}
      </Stack>
    </Stack>
  );
};

export default ContainerBorder;
