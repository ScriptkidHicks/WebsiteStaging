import styled from "styled-components";

import {
  PageBody,
  TextLink,
  ContentRow,
  ContentColumn,
  NavLinks,
} from "../components/DefaultComponents";

function AneurysmVisItPage() {
  return (
    <PageBody>
      <ContentRow MobileOrder="column">
        <AneurysmVid
          src="https://www.youtube.com/embed/rGB3E8xr6Ug"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <ContentColumn>
          <h2 style={{ textAlign: "center" }}>
            Visualizing an Aneurysm in VisIt
          </h2>
          <Description>
            This is a project I worked on for my scientific Visualization class
            recently. It involved using the Visit Tool kit, along with vtk, to
            visualize pressure and velocity movement through the body of an
            aneurysm over the course of about 8 seconds. You can find a writeup
            I did on my methods, along with some more still images I captured
            from the process{" "}
            <TextLink
              endpoint="https://github.com/ScriptkidHicks/AneurysmRendering"
              text="here"
            />
            . The project involved some coding, though mostly this was to create
            various scripts to record the movie. The majority of the work
            focused on interpreting the data, and making decisions about how to
            visualize the data. You can view the full movie{" "}
            <TextLink
              endpoint="https://www.youtube.com/watch?v=rGB3E8xr6Ug&t=61s&ab_channel=TammasHicks"
              text="here"
            />
            .
          </Description>
          <NavLinks
            elements={[
              { text: "Back to the landing page", endpoint: "/" },
              { text: "Check out other projects", endpoint: "/ProjectsPage" },
            ]}
          />
        </ContentColumn>
      </ContentRow>
    </PageBody>
  );
}

export default AneurysmVisItPage;

const AneurysmVid = styled.iframe`
  border: none;
  border-radius: 20px;
  width: 44vw;
  height: 30vw;

  @media screen and (max-width: 1200px) {
    margin-bottom: 40px;
    width: 88vw;
    height: 60vw;
  }
`;

const Description = styled.p`
  font-size: 1.2em;
  line-height: 2;
`;
