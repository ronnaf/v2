import { Box, Center, Flex, Heading, HStack, Spacer, Stack, Text, VStack } from "@chakra-ui/layout";
import React, { forwardRef } from "react";
import { ContentWrapper } from "../core/content-wrapper";
import Image from "next/image";
import rocket from "../../public/rocket.webp";
import { ProjectCard } from "../project-card";
import { Project } from "../../lib/models/project";

// All these values are in pixels
const ROCKET_ICON_SIZE = 60;
const ROCKET_LINE_HEIGHT = 100;
const LINE_GROUND_GAP = 6;

const inPx = (value: number) => `${value}px`;

interface Props {
  projects: Project[];
}

export const ThingsIveBuiltSection = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <ContentWrapper ref={ref} py={16} minH="100vh">
      <VStack w="75%" spacing={6}>
        <Text fontSize="2xl" fontWeight="bold">
          things i&apos;ve built
        </Text>
        <Box pos="relative">
          <Image src={rocket} alt="Rocket" width={inPx(ROCKET_ICON_SIZE)} height={inPx(ROCKET_ICON_SIZE)} />
          <Box
            pos="absolute"
            left="50%"
            transform="translateX(-50%)"
            top={inPx(ROCKET_ICON_SIZE / 2)}
            w="1px"
            h={inPx(ROCKET_LINE_HEIGHT)}
            bg="#6B7280"
            zIndex={-1}
          />
          <Box
            pos="absolute"
            left="50%"
            transform="translateX(-50%)"
            top={inPx(ROCKET_LINE_HEIGHT + ROCKET_ICON_SIZE / 2)}
            w={6}
            h="1px"
            bg="#6B7280"
            zIndex={-1}
          />
          <Box
            pos="absolute"
            left="50%"
            transform="translateX(-50%)"
            top={inPx(ROCKET_LINE_HEIGHT + ROCKET_ICON_SIZE / 2 + LINE_GROUND_GAP)}
            w={4}
            h="1px"
            bg="#6B7280"
            zIndex={-1}
          />
        </Box>
      </VStack>
      <VStack mt={inPx(ROCKET_LINE_HEIGHT + 24)} alignItems="flex-start" spacing={12}>
        {props.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </VStack>
    </ContentWrapper>
  );
});

ThingsIveBuiltSection.displayName = "ProjectSection";
