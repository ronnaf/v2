import { Box } from "@chakra-ui/layout";
import { gql } from "graphql-request";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRef } from "react";
import { LandingSection } from "../components/sections/landing-section";
import { ThingsIveBuiltSection } from "../components/sections/things-ive-built-section";
import { request } from "../lib/datocms";
import { Landing } from "../lib/models/landing";
import { Project } from "../lib/models/project";

interface Props {
  data: { landing: Landing; allProjects: Project[] };
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
      <LandingSection landing={props.data.landing} onArrowClick={scrollToProjects} />
      <ThingsIveBuiltSection ref={projectsRef} projects={props.data.allProjects} />
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
    }
  }
`;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await request({ query: LANDING_QUERY });
  return { props: { data } };
};

export default Home;
