import styled from "styled-components";
import TravlerHeader from "../Images/TravlerHeader.png";
import Draggable from "react-draggable";
import TravlerIntro from "../Images/TravlerIntro.png";

import {
  PageBody,
  HeaderImage,
  ContentRow,
  ContentColumn,
  Descriptor,
  ContentImage,
  TextLink,
  NavLinks,
} from "../components/DefaultComponents";

function TravelerPage() {
  return (
    <div>
      <HeaderImage
        id="DragableHeader"
        background={TravlerHeader}
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
        }}
      >
        <Draggable>
          <HeaderWrapper>
            <Headertitle>Traveler</Headertitle>
          </HeaderWrapper>
        </Draggable>
      </HeaderImage>
      <PageBody>
        <ContentRow>
          <ContentColumn>
            <Descriptor>
              &emsp;Traveler was a project that several friends and I worked on
              for a software methodology class. The goal of the project was
              simple: use the google maps api to provide a solution to the
              traveling salesman problem. I worked with{" "}
              <TextLink
                endpoint="https://github.com/jssmith9876"
                text="Jordan Smith"
              />{" "}
              and{" "}
              <TextLink
                endpoint="https://github.com/doughnut187"
                text="Thomas Joyce"
              />{" "}
              to come up with a smooth, easy to interface app, meant to provide
              a service to companies organizing delivery routes. <br />
              &emsp;This project was a great trial run in developing
              backend-frontend communicataion, and integrating a third party AI
              into our app. It was also a fantastic opportunity to hone team
              work skills. You can find the code from the project{" "}
              <TextLink
                endpoint="https://github.com/ScriptkidHicks/Traveler"
                text="here"
              />
            </Descriptor>
            <NavLinks
              elements={[
                { text: "Back to the landing page", endpoint: "/" },
                { text: "Check out other projects", endpoint: "/ProjectsPage" },
              ]}
            />
          </ContentColumn>
          <ContentImage
            src={TravlerIntro}
            style={{
              borderRadius: "40px",
            }}
          />
        </ContentRow>
      </PageBody>
    </div>
  );
}

export default TravelerPage;

const Headertitle = styled.h1`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  padding: 30px;
  cursor: move;
  color: #0d1117;
  font-size: 4em;
  transition: ease-in 0.4s;
  :hover {
    background-color: rgba(255, 255, 255, 0.3);
    color: white;
  }
`;

const HeaderWrapper = styled.div`
  margin-right: 200px;

  @media screen and (max-width: 500px) {
    margin-right: 50px;
  }
`;
