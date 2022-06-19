import styled from "styled-components";
import Casual from "../Images/casual.jpg";

import ProjectShuffler from "../components/ProjectShuffler";

import Projects from "../components/Projects";

import {
  MobileProjects,
  MobileOnly,
  DesktopOnly,
  PageBody,
  ProjectColumn,
  ProjectsHeader,
  TextLink,
  NavLinks,
} from "../components/DefaultComponents";

function LandingPage() {
  return (
    <PageBody>
      <PicAndIntro>
        <CasualPic src={Casual} />
        <Intro>
          <IntroParagraph>
            I'm Tammas Hicks, a programmer from Eugene, OR. I'm currently
            working for the University of Oregon as a front end developer. I
            will be graduating school in June of 2022, and will be looking for
            work, either in the Portland area, or remote. I specialize in React,
            and have a solid understanding of web design principals. If you're
            looking for a junior developer for a front end or full stack
            position, check out the projects on my github, give my linkedin a
            look, and reach out to me through email.
            <br />
            <br />
            <em>
              This website was built in React, and if you want to take a look at
              the code, you can check it out{" "}
              <TextLink
                text="here"
                endpoint="https://github.com/ScriptkidHicks/WebsiteStaging"
              />
              .
            </em>
          </IntroParagraph>
        </Intro>
      </PicAndIntro>
      <ProjectColumn>
        <ProjectsHeader>
          <HeaderBar />
          Some of my Projects
          <HeaderBar />
        </ProjectsHeader>
        <DesktopOnly>
          <ProjectShuffler elements={Projects} />
        </DesktopOnly>
        <MobileOnly>
          <MobileProjects elements={Projects} />
        </MobileOnly>
        <DesktopOnly>
          <NavLinks
            elements={[
              { text: "About me", endpoint: "/About" },
              { text: "Check out other projects", endpoint: "/ProjectsPage" },
            ]}
          />
        </DesktopOnly>
        <MobileOnly>
          <NavLinks elements={[{ text: "About me", endpoint: "/About" }]} />
        </MobileOnly>
      </ProjectColumn>
    </PageBody>
  );
}

export default LandingPage;

const PicAndIntro = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 100px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const CasualPic = styled.img`
  border-radius: 20px;
  width: 40%;
  max-width: 600px;
  min-width: 250px;
  box-shadow: 5px 5px 5px black;

  @media screen and (max-width: 900px) {
    width: 60%;
  }
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;

  @media screen and (max-width: 900px) {
    width: 90%;
  }
`;

const HeaderBar = styled.hr`
  margin: 0;
  width: 20%;
  margin-left: 20px;
  margin-right: 20px;
`;

const IntroParagraph = styled.p`
  line-height: 2.3em;
  font-size: 1.4em;

  @media screen and (max-width: 900px) {
    line-height: 1.5em;
    font-size: 1.3em;
    text-aign: center;
  }
`;
