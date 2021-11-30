import { Container, ContainerProps } from "@chakra-ui/layout";
import React from "react";

interface Props extends ContainerProps {
  children: React.ReactNode;
}

export const ContentWrapper = ({ children, ...rest }: Props) => {
  return (
    <Container maxW="container.xl" px={{ sm: 12, md: 24, xl: 40 }} {...rest}>
      {children}
    </Container>
  );
};
