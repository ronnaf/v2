import Icon from "@chakra-ui/icon";
import { Box, HStack, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import { FiGithub, FiLink } from "react-icons/fi";
import { Project } from "../lib/models/project";
import Image from "next/image";

interface Props {
  project: Project;
}

export const ProjectCard = (props: Props) => {
  return (
    <HStack spacing={10} alignItems="flex-start">
      <Box pos="relative" flexShrink={0} w="312px" h="196px" borderRadius="lg" overflow="hidden">
        <Image src={props.project.thumbnail.url} alt="Rocket" layout="fill" objectFit="cover" />
      </Box>
      <VStack alignItems="flex-start" spacing={3}>
        <Box>
          <Text fontSize="2xl" fontWeight="bold">
            {props.project.title}
          </Text>
          <Text fontSize="xl">{props.project.subtitle}</Text>
        </Box>
        <Text color="gray.500">{props.project.description}</Text>
        <HStack>
          {props.project.tags.map((tag) => (
            <Text key={tag} as="span" fontSize="xs" color="gray.500">
              #{tag}
            </Text>
          ))}
        </HStack>
        <HStack spacing={3}>
          {props.project.links.map((link) => (
            <a key={link.link} href={link.link} target="_blank" rel="noreferrer noopener">
              <Icon as={link.provider === "github" ? FiGithub : FiLink} w={4} h={4} />
            </a>
          ))}
        </HStack>
      </VStack>
    </HStack>
  );
};
