import Icon from "@chakra-ui/icon";
import { Box, VStack } from "@chakra-ui/layout";
import React from "react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const socialLinks = [
  {
    id: "github",
    icon: FiGithub,
    link: "https://github.com/ronnaf",
  },
  {
    id: "linkedin",
    icon: FiLinkedin,
    link: "https://www.linkedin.com/in/ronnafx/",
  },
  {
    id: "twitter",
    icon: FiTwitter,
    link: "https://twitter.com/ronnaf_",
  },
];

interface Props {}

export const FloatingSocialIcons = (props: Props) => {
  return (
    <Box pos="fixed" bottom={{ sm: 8, lg: 16 }} left={{ sm: 8, lg: 16 }}>
      <VStack spacing={5}>
        {socialLinks.map((link) => (
          <Icon key={link.id} as={link.icon} w={5} h={5} />
        ))}
      </VStack>
    </Box>
  );
};
