import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NavigationLink = styled.a`
  color: white;
  text-decoration: none;
  padding: 20px;
  transition: ease all 0.6s;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4% / 50%;
  font-size: 1.3em;
  margin-bottom: 100px;

  :hover {
    box-shadow: 5px 5px 5px black;
  }
`;

const NavLinksStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-top: 40px;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

function NavLinks() {
  return (
    <NavLinksStyled>
      <NavigationLink href="/">Back to the landing page</NavigationLink>
      <NavigationLink href="/ProjectsPage">
        Check out other projects
      </NavigationLink>
    </NavLinksStyled>
  );
}

const PageBody = styled.div`
  max-width: 1900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 83vh;
`;

const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;

  @media screen and (max-width: 1200px) {
    width: 90%;
  }
`;

const ContentRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-bottom: 50px;
  margin-top: 50px;

  @media screen and (max-width: 1200px) {
    flex-direction: ${(props) => props.MobileOrder};
  }
`;

const ContentImage = styled.img`
  width: 40%;

  @media screen and (max-width: 1200px) {
    width: 90%;
  }
`;

const Descriptor = styled.p`
  font-size: 1.2em;
  line-height: 1.5;
`;

const TextLinkStyles = styled.a`
  text-decoration: none;
  color: #4042bc;
`;

function TextLink(props) {
  return (
    <strong>
      <TextLinkStyles rel="noreferrer" target="_blank" href={props.endpoint}>
        {`${props.text}`}
      </TextLinkStyles>
    </strong>
  );
}

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

const ProjectWrapperStyle = styled.div`
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

function ProjectWrapper(props) {
  const Navigate = useNavigate();
  function LoadPage(targetPage) {
    Navigate(targetPage);
  }
  if (props.Cover) {
    return (
      <ProjectWrapperStyle onClick={() => LoadPage(props.Destination)}>
        <Project
          background={props.BackgroundSource}
          style={{ backgroundSize: "100% 100%" }}
        >
          <ProjectTitle>{`${props.Title}`}</ProjectTitle>
        </Project>
      </ProjectWrapperStyle>
    );
  } else {
    return (
      <ProjectWrapperStyle onClick={() => LoadPage(props.Destination)}>
        <Project background={props.BackgroundSource} style>
          <ProjectTitle>{`${props.Title}`}</ProjectTitle>
        </Project>
      </ProjectWrapperStyle>
    );
  }
}

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

const HeaderImage = styled.div`
  background: url(${(props) => props.background});
  background-size: 100%;
  width: 100%;
  height: 400px;
  align-self: flex-start;
  justify-self: flex-start;
`;

export {
  PageBody,
  ContentColumn,
  ContentRow,
  ContentImage,
  TextLink,
  NavLinks,
  Descriptor,
  ProjectWrapper,
  ProjectsHeader,
  ProjectRow,
  ProjectColumn,
  HeaderImage,
};
