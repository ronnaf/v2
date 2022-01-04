import { Box } from "@chakra-ui/layout";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRef } from "react";
import { FeaturedProjectsSection } from "../components/sections/featured-projects-section";
import { LandingSection } from "../components/sections/landing-section";
import { ProjectGridSection } from "../components/sections/project-grid-section";
import { api } from "../lib/api/api";
import { LandingQueryResponse } from "../lib/api/queries/landing-query";
import { request } from "../lib/datocms";
import { Project } from "../lib/models/project";

interface Props extends LandingQueryResponse {
  featuredProjects: Project[];
  regularProjects: Project[];
}

const Home: NextPage<Props> = (props) => {
  const featuredProjectsRef = useRef<HTMLDivElement>(null);

  const handleSeeMoreArrowClick = () => {
    featuredProjectsRef.current?.scrollIntoView();
  };

  return (
    <Box>
      <Head>
        <title>Ronna Firmo</title>
        <meta name="description" content="Ronna's online portflio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingSection landingDetails={props.landing} onSeeMoreArrowClick={handleSeeMoreArrowClick} />
      <FeaturedProjectsSection ref={featuredProjectsRef} projects={props.featuredProjects} />
      <ProjectGridSection projects={props.regularProjects} />
    </Box>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const result: LandingQueryResponse = await request({
    query: api.LANDING_QUERY,
    isPreview: true,
  });

  const featuredProjects = result.allProjects.filter((project) => project.featured);
  const regularProjects = result.allProjects.filter((project) => !project.featured);

  return {
    props: {
      ...result,
      featuredProjects,
      regularProjects,
    },
    revalidate: 60, // seconds
  };
};

export default Home;
