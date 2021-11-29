import { Container, ContainerProps } from "@chakra-ui/layout";
import React from "react";

interface Props extends ContainerProps {
  children: React.ReactNode;
}

export const ContentWrapper = ({ children, ...rest }: Props) => {
  return (
    <Container maxW="container.xl" px={16} {...rest}>
      {children}
    </Container>
  );
};
