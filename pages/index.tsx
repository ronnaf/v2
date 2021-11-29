import { gql } from "graphql-request";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { LandingSection } from "../components/sections/landing-section";
import { request } from "../lib/datocms";
import { Landing } from "../lib/models/landing";

interface Props {
  data: { landing: Landing };
}

const Home: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>Ronna Firmo</title>
        <meta name="description" content="Ronna's online portflio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingSection landing={props.data.landing} />
    </>
  );
};

const LANDING_QUERY = gql`
  query LandingQuery {
    landing {
      greeting
      title
      iswip
      descriptionlevel1
      descriptionlevel2
      descriptionlevel3
      doodleimage {
        url
      }
    }
  }
`;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await request({ query: LANDING_QUERY });
  return { props: { data } };
};

export default Home;
