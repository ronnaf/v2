import { Box, Button, HStack, Text } from "@chakra-ui/react";
import Emoji from "a11y-react-emoji";
import React, { useState } from "react";
import { Landing } from "../lib/models/landing";
import ReactMarkdown from "react-markdown";

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
    <Box>
      <Text fontSize="2xl">
        <ReactMarkdown>{props.greeting}</ReactMarkdown>
      </Text>
      <Box my={4} />
      <Text fontSize="4xl">
        <ReactMarkdown>{props.title}</ReactMarkdown>
      </Text>
      <Box my={8} />
      <Text w={{ lg: "100%", xl: "75%" }} lineHeight={2}>
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
