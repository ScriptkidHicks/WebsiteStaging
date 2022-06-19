import styled from "styled-components";

import {
  MobileProjects,
  NavLinks,
  PageBody,
} from "../components/DefaultComponents";

import Projects from "../components/Projects";

function ProjectsPage() {
  return (
    <PageBody>
      <PageTitle>
        <h3 style={{ textAlign: "center", marginTop: "50px" }}>
          Some of My Projects
        </h3>
      </PageTitle>
      <MobileProjects elements={Projects} />
      <NavLinks
        elements={[
          { text: "Back to the landing page", endpoint: "/" },
          { text: "About me", endpoint: "/About" },
        ]}
      />
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
