import { Box, Text } from "@chakra-ui/layout";
import Image from "next/image";
import React from "react";
import arrowDown from "../public/arrow_down.webp";

export const FloatingArrow = () => {
  return (
    <Box
      pos="absolute"
      role="group"
      textAlign="center"
      bottom={8}
      left="50%"
      transform="translateX(-50%)"
      _hover={{ cursor: "pointer" }}
      display={{ sm: "none", md: "block" }}
    >
      <Text _groupHover={{ bg: "yellow.300", color: "gray.900", px: 2 }}>see my stuff</Text>
      <Box my={4} />
      <Image src={arrowDown} alt="Arrow down" />
    </Box>
  );
};
