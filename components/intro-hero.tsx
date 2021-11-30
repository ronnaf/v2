import { Box, Button, HStack, Text } from "@chakra-ui/react";
import Emoji from "a11y-react-emoji";
import React, { useState } from "react";
import { Landing } from "../lib/models/landing";
import { Markdown } from "./core/markdown";

interface Props extends Landing {}

export const IntroHero = (props: Props) => {
  const [levelOfInformation, setLevelOfInformation] = useState(0);

  const showMoreInformation = () => {
    setLevelOfInformation((prev) => prev + 1);
  };

  const resetLevelOfInformation = () => {
    setLevelOfInformation(0);
  };

  return (
    <Box pb={16}>
      <Markdown fontSize={{ sm: "xl", md: "2xl" }}>{props.greeting}</Markdown>
      <Box my={4} />
      <Markdown fontSize={{ sm: "3xl", md: "5xl" }}>{props.title}</Markdown>
      <Box my={2} />
      <Markdown fontSize={{ sm: "xl", md: "2xl" }}>{props.subtitle}</Markdown>
      <Box my={{ sm: 6, md: 8 }} />
      <Text w="100%" lineHeight={2}>
        {props.descriptionlevel1}
        {levelOfInformation >= 1 && (
          <>
            <br />
            {props.descriptionlevel2}
          </>
        )}
        {levelOfInformation >= 2 && (
          <>
            <br />
            {props.descriptionlevel3}
          </>
        )}
      </Text>
      <Box my={6} />
      {levelOfInformation === 0 && (
        <Button size="sm" onClick={showMoreInformation}>
          Show more
        </Button>
      )}
      {levelOfInformation === 1 && (
        <Button size="sm" onClick={showMoreInformation}>
          Show too much information...
        </Button>
      )}
      {levelOfInformation === 2 && (
        <HStack alignItems="center">
          <Button size="sm" onClick={resetLevelOfInformation}>
            Show less
          </Button>
          <Emoji symbol="😬" label="wave" />
        </HStack>
      )}
    </Box>
  );
};
