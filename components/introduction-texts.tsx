import { Box, Button, HStack, Text } from "@chakra-ui/react";
import Emoji from "a11y-react-emoji";
import React, { useState } from "react";
import { LandingDetails } from "../lib/models/landing-details";
import { Markdown } from "./core/markdown";

interface Props extends LandingDetails {
  // more properties if necessary
}

export const IntroductionTexts = (props: Props) => {
  const [levelOfInformation, setLevelOfInformation] = useState(0);

  const handleShowMoreClick = () => {
    setLevelOfInformation((prev) => prev + 1);
  };

  const handleShowLessClick = () => {
    setLevelOfInformation(0);
  };

  return (
    <Box pb={16}>
      <Markdown fontSize={{ sm: "xl", md: "2xl" }} color="subtitle.200">
        {props.greeting}
      </Markdown>
      <Box my={4} />
      <Markdown fontSize={{ sm: "3xl", md: "5xl" }}>{props.title}</Markdown>
      <Box my={2} />
      <Markdown fontSize={{ sm: "xl", md: "2xl" }} color="secondary.500">
        {props.subtitle}
      </Markdown>
      <Box my={{ sm: 6, md: 8 }} />
      <Text w="100%" lineHeight={2} color="subtitle.200">
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
        <Button size="sm" onClick={handleShowMoreClick}>
          Show more
        </Button>
      )}
      {levelOfInformation === 1 && (
        <Button size="sm" onClick={handleShowMoreClick}>
          Show too much information...
        </Button>
      )}
      {levelOfInformation === 2 && (
        <HStack alignItems="center">
          <Button size="sm" onClick={handleShowLessClick}>
            Show less
          </Button>
          <Emoji symbol="😬" label="wave" />
        </HStack>
      )}
    </Box>
  );
};
