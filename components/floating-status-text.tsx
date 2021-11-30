import { Badge, Box, Text } from "@chakra-ui/layout";
import React from "react";
import config from "../package.json";

const bottomAndRight = { sm: 8, md: 10, xl: 12 };

interface Props {
  isWip: boolean;
}

export const FloatingStatusText = (props: Props) => {
  return (
    <Box pos="fixed" bottom={bottomAndRight} right={bottomAndRight} display={{ sm: "none", md: "block" }}>
      <Text sx={{ writingMode: "vertical-rl" }} color="gray.700" fontSize="xs" fontWeight="bold">
        v{config.version}
        {props.isWip && ` | wip`}
      </Text>
    </Box>
  );
};
