import Icon from "@chakra-ui/icon";
import { Box, HStack, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export const ProjectCard = () => {
  return (
    <HStack spacing={10} alignItems="flex-start">
      <Box flexShrink={0} w="312px" h="196px" bg="red.100" borderRadius="lg" />
      <VStack alignItems="flex-start" spacing={3}>
        <Box>
          <Text fontSize="2xl" fontWeight="bold">
            jiralist
          </Text>
          <Text fontSize="xl">issue tracker + checklist via jira</Text>
        </Box>
        <Text color="gray.500">
          helps me manage my jira tickets for the daily standup at work. it lists out todo and in progress issues from jira.
          user can grab an issue and assign a date of when he intends to complete it. grabbed issues are then grouped by
          date assigned.
        </Text>
        <HStack>
          <Text as="span" fontSize="xs" color="gray.500">
            #react
          </Text>
          <Text as="span" fontSize="xs" color="gray.500">
            #typescript
          </Text>
          <Text as="span" fontSize="xs" color="gray.500">
            #jira-api
          </Text>
        </HStack>
        <HStack spacing={3}>
          <Icon as={FiGithub} w={4} h={4} />
          <Icon as={FiLinkedin} w={4} h={4} />
        </HStack>
      </VStack>
    </HStack>
  );
};
