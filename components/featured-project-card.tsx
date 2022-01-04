import Icon from "@chakra-ui/icon";
import { Box, HStack, Text, VStack, Grid } from "@chakra-ui/layout";
import React from "react";
import { FiGithub, FiLink } from "react-icons/fi";
import { Project } from "../lib/models/project";
import Image from "next/image";
import { useToken } from "@chakra-ui/react";

interface Props {
  project: Project;
}

export const FeaturedProjectCard = (props: Props) => {
  const [secondary500] = useToken("colors", ["secondary.500"]);
  return (
    <Grid gap={{ sm: 6, md: 10 }} templateColumns={{ sm: "1fr", md: "1fr 2fr" }}>
      <Box pos="relative" flexShrink={0} h="196px" borderRadius="lg" overflow="hidden">
        <Image src={props.project.thumbnail.url} alt="Rocket" layout="fill" objectFit="cover" />
      </Box>
      <VStack alignItems="flex-start" spacing={4}>
        <Box>
          <Text fontSize="2xl" fontWeight="bold">
            {props.project.title}
          </Text>
          <Text fontSize="xl" color="secondary.500">
            {props.project.subtitle}
          </Text>
        </Box>
        <Text color="subtitle.200" lineHeight={1.65}>
          {props.project.description}
        </Text>
        <HStack>
          {props.project.tags.map((tag) => (
            <Text key={tag} as="span" fontSize="xs" color="subtitle.500">
              #{tag}
            </Text>
          ))}
        </HStack>
        <HStack spacing={3}>
          {props.project.links?.map((link) => (
            <a key={link.link} href={link.link} target="_blank" rel="noreferrer noopener">
              <Icon color={secondary500} as={link.provider === "github" ? FiGithub : FiLink} w={4} h={4} />
            </a>
          ))}
        </HStack>
      </VStack>
    </Grid>
  );
};
