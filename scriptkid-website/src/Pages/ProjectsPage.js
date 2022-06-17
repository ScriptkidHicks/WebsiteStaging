import styled from "styled-components";

import ProjectShuffler from "../components/ProjectShuffler";

import Projects from "../components/Projects";

import { PageBody, ProjectColumn } from "../components/DefaultComponents";

function ProjectsPage() {
  return (
    <PageBody>
      <PageTitle>
        <h3 style={{ textAlign: "center" }}>Some of My Projects</h3>
      </PageTitle>
      <ProjectColumn style={{ display: "flex" }}>
        <ProjectShuffler elements={Projects} />
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
