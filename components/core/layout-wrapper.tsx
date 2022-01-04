import { Container, ContainerProps } from "@chakra-ui/layout";
import React, { forwardRef } from "react";

interface Props extends ContainerProps {
  children: React.ReactNode;
}

export const LayoutWrapper = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <Container ref={ref} maxW="container.xl" px={{ sm: 12, md: 24, xl: 40 }} {...rest}>
      {children}
    </Container>
  );
});

LayoutWrapper.displayName = "LayoutWrapper";
