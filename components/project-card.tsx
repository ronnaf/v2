import { Box, Flex, Heading, HStack, Spacer, Text, VStack } from "@chakra-ui/layout";
import { Icon, useToken } from "@chakra-ui/react";
import _ from "lodash";
import Image from "next/image";
import React from "react";
import { FiGithub, FiLink } from "react-icons/fi";
import { Project } from "../lib/models/project";
import crossPlatformIcon from "../public/cross_platform_logo.png";
import desktopIcon from "../public/desktop_logo.png";
import mobileIcon from "../public/mobile_logo.png";
import webIcon from "../public/web_logo.png";

type Props = {
  project: Project;
};

export const ProjectCard = ({ project }: Props) => {
  const [secondary500] = useToken("colors", ["secondary.500"]);

  return (
    <Box minH={72} bg="clay.500" p={6} borderRadius="sm" shadow="md">
      <VStack h="full" align="start">
        <HStack width="full" mb={1}>
          {project.projectType === "mobile" && <Image src={mobileIcon} alt="Thumbnail" width={45} height={45} />}
          {project.projectType === "web" && <Image src={webIcon} alt="Thumbnail" width={45} height={45} />}
          {project.projectType === "desktop" && <Image src={desktopIcon} alt="Thumbnail" width={45} height={45} />}
          {project.projectType === "cross-platform" && (
            <Image src={crossPlatformIcon} alt="Thumbnail" width={45} height={45} />
          )}
          <Spacer />
          <HStack spacing={3}>
            {project.links?.map((link) => (
              <a key={link.link} href={link.link} target="_blank" rel="noreferrer noopener">
                <Icon color={secondary500} as={link.provider === "github" ? FiGithub : FiLink} w={4} h={4} />
              </a>
            ))}
          </HStack>
        </HStack>
        <HStack h="full" spacing={4} alignItems="flex-end" w="full">
          <Flex h="full" direction="column" flex={1}>
            <VStack alignSelf="flex-start" alignItems="flex-start">
              <Heading as="h1" size="md" fontWeight="700">
                {project.title}
              </Heading>
              <Heading as="h2" size="sm" fontWeight="600" color="secondary.500" lineHeight={1.65}>
                {_.upperFirst(project.subtitle.trim())}
              </Heading>
            </VStack>
            <Spacer />
            <VStack spacing={1} alignSelf="flex-start" alignItems="flex-start">
              <Flex alignSelf="flex-start" flexWrap="wrap">
                {project.tags.map((tag) => (
                  <Text
                    key={tag}
                    as="span"
                    fontSize="xs"
                    color="subtitle.500"
                    whiteSpace="nowrap"
                    _notLast={{ marginRight: 2 }}
                  >
                    #{tag}
                  </Text>
                ))}
              </Flex>
            </VStack>
          </Flex>
          {project.builtAt && (
            <Box>
              <Text fontSize={8} color="subtitle.600" whiteSpace="nowrap" sx={{ writingMode: "vertical-rl" }}>
                Built at {project.builtAt}
              </Text>
            </Box>
          )}
        </HStack>
      </VStack>
    </Box>
  );
};
