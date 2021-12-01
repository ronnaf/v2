import { Box, Center } from "@chakra-ui/layout";
import Image from "next/image";
import React from "react";
import { Landing } from "../../lib/models/landing";
import doodle from "../../public/doodle.webp";
import logo from "../../public/logo.webp";
import { ContentWrapper } from "../core/content-wrapper";
import { FloatingArrow } from "../floating-arrow";
import { FloatingSocialIcons } from "../floating-social-icons";
import { FloatingStatusText } from "../floating-status-text";
import { IntroHero } from "../intro-hero";

interface Props {
  landing: Landing;
  onArrowClick?: () => void;
}

export const LandingSection = (props: Props) => {
  return (
    <Box minH="100vh" pos="relative">
      <ContentWrapper>
        <Center pt={{ sm: 12, md: 16 }} pb={{ sm: 12, md: 16, xl: 20 }}>
          <Image src={logo} alt="Logo" width={60} height={60} />
        </Center>
        <IntroHero {...props.landing} />
      </ContentWrapper>
      <Box pos="absolute" bottom="10%" right="10%" width="30%" minW="512px" maxW="672px" opacity={0.05}>
        <Image src={doodle} alt="Logo" />
      </Box>
      <FloatingArrow onClick={props.onArrowClick} />
      {/* Fixed floating elements */}
      <FloatingSocialIcons />
      <FloatingStatusText isWip={props.landing.iswip} />
    </Box>
  );
};
