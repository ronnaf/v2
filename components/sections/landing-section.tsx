import { Box, Center } from "@chakra-ui/layout";
import React from "react";
import { Landing } from "../../lib/models/landing";
import { ContentWrapper } from "../core/content-wrapper";
import { IntroHero } from "../intro-hero";
import Image from "next/image";
import logo from "../../public/logo.webp";
import doodle from "../../public/doodle.webp";
import { FloatingSocialIcons } from "../floating-social-icons";

interface Props {
  landing: Landing;
}

export const LandingSection = (props: Props) => {
  return (
    <Box h="100vh" pos="relative">
      <ContentWrapper>
        <Center pt={24} pb={32}>
          <Image src={logo} alt="Logo" width={60} height={60} />
        </Center>
        <IntroHero {...props.landing} />
      </ContentWrapper>
      <Box pos="absolute" bottom="10%" right="10%" width="30%" minW="512px" maxW="672px" opacity={0.15}>
        <Image src={doodle} alt="Logo" />
      </Box>
      <FloatingSocialIcons />
    </Box>
  );
};
