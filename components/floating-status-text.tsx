import { Badge, Box, Text } from "@chakra-ui/layout";
import React from "react";
import config from "../package.json";

interface Props {
  isWip: boolean;
}

export const FloatingStatusText = (props: Props) => {
  return (
    <Box pos="fixed" bottom={12} right={12}>
      <Text color="gray.600">
        v{config.version}
        {props.isWip && ` | wip`}
      </Text>
    </Box>
  );
};
