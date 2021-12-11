import { Landing } from "./landing";
import { Project } from "./project";

export interface LandingQueryResponse {
  landing: Landing;
  allProjects: Project[];
}
