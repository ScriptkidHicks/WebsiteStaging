import styled from "styled-components";

import IntroPic from "../Images/IntroFreelancer.png";

import {
  PageBody,
  ContentColumn,
  ContentRow,
} from "../components/DefaultComponents";

function ProjectsPage() {
  return (
    <PageBody>
      <img src={IntroPic} />
    </PageBody>
  );
}

export default ProjectsPage;
