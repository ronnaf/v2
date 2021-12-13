import { Box } from "@chakra-ui/layout";
import { gql } from "graphql-request";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRef } from "react";
import { FeaturedProjectsSection } from "../components/sections/featured-projects-section";
import { LandingSection } from "../components/sections/landing-section";
import { ProjectGridSection } from "../components/sections/project-grid-section";
import { request } from "../lib/datocms";
import { LandingQueryResponse } from "../lib/models/landing-query-response";
import { Project } from "../lib/models/project";

interface Props extends LandingQueryResponse {
  featuredProjects: Project[];
  regularProjects: Project[];
}

const Home: NextPage<Props> = (props) => {
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView();
  };

  return (
    <Box>
      <Head>
        <title>Ronna Firmo</title>
        <meta name="description" content="Ronna's online portflio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingSection landing={props.landing} onArrowClick={scrollToProjects} />
      <FeaturedProjectsSection ref={projectsRef} projects={props.featuredProjects} />
      <ProjectGridSection projects={props.regularProjects} />
    </Box>
  );
};

const LANDING_QUERY = gql`
  query LandingQuery {
    landing {
      greeting
      title
      subtitle
      iswip
      descriptionlevel1
      descriptionlevel2
      descriptionlevel3
      doodleimage {
        url
      }
    }
    allProjects(orderBy: dateStarted_DESC) {
      id
      title
      subtitle
      description
      thumbnail {
        url
      }
      tags
      links
      isMine
      builtAt
      featured
      projectType
      screenshots {
        url
      }
    }
  }
`;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const result: LandingQueryResponse = await request({ query: LANDING_QUERY, isPreview: true });
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
