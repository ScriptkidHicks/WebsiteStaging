import styled from "styled-components";
import Casual from "../Images/casual.jpg";
import Coleville from "../Images/ColevilleCover.png";
import Reddit from "../Images/RedditSearch.png";
import FitnessFiend from "../Images/FitnessFiendIntro.png";
import NewSite from "../Images/NewSite.png";
import Aneurysm from "../Images/Streamline0008.png";
import { useNavigate } from "react-router-dom";

import { PageBody } from "../components/DefaultComponents";

function LandingPage() {
  const navigate = useNavigate();

  function LoadPage(targetPage) {
    navigate(targetPage);
  }

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
          </IntroParagraph>
        </Intro>
      </PicAndIntro>
      <ProjectColumn>
        <ProjectsHeader>
          <HeaderBar />
          Some of my Projects
          <HeaderBar />
        </ProjectsHeader>
        <ProjectRow>
          <ProjectWrapper>
            <Project background={Coleville}>
              <ProjectTitle>Coleville Bot</ProjectTitle>
            </Project>
          </ProjectWrapper>
          <ProjectWrapper onClick={() => LoadPage("/MyFitnessFiend")}>
            <Project background={FitnessFiend}>
              <ProjectTitle>My Fitness Fiend</ProjectTitle>
            </Project>
          </ProjectWrapper>
          <ProjectWrapper>
            <Project background={NewSite}>
              <ProjectTitle>This Site</ProjectTitle>
            </Project>
          </ProjectWrapper>
        </ProjectRow>
        <ProjectRow>
          <ProjectWrapper onClick={() => LoadPage("/AneurysmVisIt")}>
            <Project
              background={Aneurysm}
              style={{ backgroundSize: "100% 100%" }}
            >
              <ProjectTitle>Aneurysm Visualization</ProjectTitle>
            </Project>
          </ProjectWrapper>
        </ProjectRow>
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

const ProjectColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
  width: 100%;

  @media screen and (max-width: 900px) {
    margin-top: 60px;
    display: none;
  }
`;

const ProjectRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProjectsHeader = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  text-justify: center;
  text-align: center;
  width: 100%;
  margin-bottom: 100px;
`;

const Project = styled.div`
  background: url(${(props) => props.background});
  width: 150px;
  max-width: 100vw;
  height: 150px;
  max-height: 100vw;
  margin-bottom: 50px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  transition: ease all 1s;

  :hover {
    width: 300px;
    height: 300px;
    border-radius: 10%;
    box-shadow: 10px 10px 10px black;
  }

  @media screen and (max-width: 900px) {
    width: 200px;
    height: 200px;
    border-radius: 10%;
    box-shadow: 10px 10px 10px black;
  }
`;

const ProjectWrapper = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    width: 200px;
  }
`;

const ProjectTitle = styled.h3`
  background-color: rgba(255, 255, 255, 0.7);
  text-align: center;
  color: black;
  border-radius: 20px;
  padding: 5px;
`;
