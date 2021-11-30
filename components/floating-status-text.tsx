import { Badge, Box, Text } from "@chakra-ui/layout";
import React from "react";
import config from "../package.json";

const bottomAndRight = { sm: 8, md: 10, xl: 16 };

interface Props {
  isWip: boolean;
}

export const FloatingStatusText = (props: Props) => {
  return (
    <Box pos="fixed" bottom={bottomAndRight} right={bottomAndRight} display={{ sm: "none", md: "block" }}>
      <Text color="gray.700" fontSize="xs" fontWeight="bold">
        v{config.version}
        {props.isWip && ` | wip`}
      </Text>
    </Box>
  );
};
