import styled from "styled-components";

import FitnessFiend from "../Images/FitnessFiendIntro.png";
import NewSite from "../Images/NewSite.png";
import Aneurysm from "../Images/Streamline0008.png";
import FreelancerIntro from "../Images/FreelancerIntro.png";

import {
  PageBody,
  ProjectWrapper,
  ContentColumn,
  ContentRow,
  ProjectColumn,
  ProjectRow,
} from "../components/DefaultComponents";

function ProjectsPage() {
  return (
    <PageBody>
      <PageTitle>
        <h3 style={{ textAlign: "center" }}>Some of My Projects</h3>
      </PageTitle>
      <ProjectColumn style={{ display: "flex" }}>
        <ProjectRow>
          <ProjectWrapper
            BackgroundSource={FreelancerIntro}
            Title="Project Freelancer"
            Destination="/ProjectFreelancer"
            Cover={true}
          />
          <ProjectWrapper
            BackgroundSource={FitnessFiend}
            Title="My Fitness Fiend"
            Destination="/MyFitnessFiend"
          />
          <ProjectWrapper
            BackgroundSource={NewSite}
            Title="This Site"
            Destination="/"
          />
        </ProjectRow>
        <ProjectRow>
          <ProjectWrapper
            BackgroundSource={Aneurysm}
            Title="Aneurysm Visiualization"
            Destination="/AneurysmVisIt"
            Cover={true}
          />
        </ProjectRow>
      </ProjectColumn>
    </PageBody>
  );
}

export default ProjectsPage;

const PageTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
