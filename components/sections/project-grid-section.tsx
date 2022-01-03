import { Button } from "@chakra-ui/button";
import { Box, Grid, Text, VStack } from "@chakra-ui/layout";
import Image from "next/image";
import React, { forwardRef } from "react";
import { Project } from "../../lib/models/project";
import { inPx } from "../../lib/utils/in-px";
import build from "../../public/build.png";
import { ContentWrapper } from "../core/content-wrapper";
import { ProjectCard } from "../project-card";

const ICON_SIZE = inPx(60);

interface Props {
  projects: Project[];
}

export const ProjectGridSection = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <ContentWrapper ref={ref} py={16} minH="100vh">
      <VStack spacing={6}>
        <Box pos="relative">
          <Image src={build} alt="Build" width={ICON_SIZE} height={ICON_SIZE} />
        </Box>
        <Text fontSize="2xl" fontWeight="bold">
          more projects i&apos;ve worked on
        </Text>
      </VStack>
      <Box my={20} />
      <Grid
        templateColumns={{
          sm: "minmax(272px, 1fr)",
          md: "repeat(3, minmax(272px, 1fr))",
        }}
        gap={5}
      >
        {props.projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </Grid>
    </ContentWrapper>
  );
});

ProjectGridSection.displayName = "ProjectGridSection";
