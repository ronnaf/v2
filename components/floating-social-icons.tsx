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

const bottomAndLeft = { sm: 8, md: 10, xl: 12 };

interface Props {}

export const FloatingSocialIcons = (props: Props) => {
  return (
    <Box pos="fixed" bottom={bottomAndLeft} left={bottomAndLeft} display={{ sm: "none", md: "block" }}>
      <VStack spacing={5}>
        {socialLinks.map((link) => (
          <a key={link.id} href={link.link} target="_blank" rel="noreferrer noopener">
            <Icon as={link.icon} w={5} h={5} />
          </a>
        ))}
      </VStack>
    </Box>
  );
};
