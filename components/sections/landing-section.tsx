import { Box, Center } from "@chakra-ui/layout";
import Image from "next/image";
import React from "react";
import { LandingDetails } from "../../lib/models/landing-details";
import doodle from "../../public/doodle.webp";
import logo from "../../public/logo.png";
import { ContentWrapper } from "../core/content-wrapper";
import { FloatingArrow } from "../floating-arrow";
import { FloatingSocialIcons } from "../floating-social-icons";
import { FloatingVersionText } from "../floating-version-text";
import { IntroductionTexts } from "../introduction-texts";

interface Props {
  landingDetails: LandingDetails;
  onSeeMoreArrowClick?: () => void;
}

export const LandingSection = (props: Props) => {
  return (
    <Box minH="100vh" pos="relative">
      <ContentWrapper>
        <Center pt={{ sm: 12, md: 16 }}>
          <Image src={logo} alt="Logo" width={60} height={60} />
        </Center>
        <Box my={{ sm: 12, md: 16, xl: 20, xxl: "16%" }} />
        <IntroductionTexts {...props.landingDetails} />
      </ContentWrapper>
      <Box pos="absolute" bottom="10%" right="10%" width="30%" minW="512px" maxW="672px" opacity={0.05}>
        <Image src={doodle} alt="Logo" />
      </Box>
      <FloatingArrow onClick={props.onSeeMoreArrowClick} />
      {/* Fixed floating elements */}
      <FloatingSocialIcons />
      <FloatingVersionText showAsWip={props.landingDetails.iswip} />
    </Box>
  );
};
