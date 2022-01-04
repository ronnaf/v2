import { gql } from "graphql-request";
import { LandingDetails } from "../../models/landing-details";
import { Project } from "../../models/project";

export interface LandingQueryResponse {
  landing: LandingDetails;
  allProjects: Project[];
}

export const LANDING_QUERY = gql`
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
