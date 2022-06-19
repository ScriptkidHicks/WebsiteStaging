import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const DesktopOnly = styled.div`
  display: inherit;
  width: 100%;
  height: auto;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const MobileOnly = styled.div`
  width: 100%;
  height: auto;
  display: none;

  @media screen and (max-width: 900px) {
    display: inherit;
  }
`;

const NavigationLink = styled.a`
  color: white;
  text-decoration: none;
  padding: 20px;
  transition: ease all 0.6s;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4% / 50%;
  font-size: 1.3em;
  margin-bottom: 100px;

  @media screen and (max-width: 900px) {
    margin-bottom: 40px;
  }

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
    flex-direction: column;
  }
`;

function NavLinks(props) {
  return (
    <NavLinksStyled>
      {props.elements.map((element) => (
        <NavigationLink href={element.endpoint}>{element.text}</NavigationLink>
      ))}
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
`;

const HeaderImage = styled.div`
  background: url(${(props) => props.background});
  background-size: 100%;
  width: 100%;
  height: 400px;
  align-self: flex-start;
  justify-self: flex-start;
`;

const MobileProjectSlide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  width: 400px;
  height: 400px;
  border-radius: 30px;
  margin: 20px;
  transition: ease-in-out box-shadow 0.4s;
  box-shadow: 5px 5px 5px black;

  :hover {
    box-shadow: 10px 10px 10px black;
  }

  @media screen and (max-width: 500px) {
    width: 250px;
    height: 250px;
  }
`;

const MobileProjectTitle = styled.h3`
  color: white;
  padding: 20px 10px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.8);
  align-items: center;
  justify-content: center;
  text-align: center;
  display: flex;
  width: 60%;
`;

const MobileProjectFlow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1300px;
  justify-content: space-evenly;
  margin-bottom: 50px;
`;

function MobileProjectCard(props) {
  const Navigate = useNavigate();
  return (
    <MobileProjectSlide
      backgroundImage={props.backgroundImage}
      onClick={() => Navigate(props.targetPage)}
    >
      <MobileProjectTitle>{props.title}</MobileProjectTitle>
    </MobileProjectSlide>
  );
}

function MobileProjectsGenerator(props) {
  return props.elements.map((project) => (
    <MobileProjectCard
      targetPage={project.targetPage}
      backgroundImage={project.backgroundImage}
      title={project.title}
    />
  ));
}

function MobileProjects(props) {
  return (
    <MobileProjectFlow>
      <MobileProjectsGenerator elements={props.elements} />
    </MobileProjectFlow>
  );
}

export {
  DesktopOnly,
  MobileOnly,
  PageBody,
  ContentColumn,
  ContentRow,
  ContentImage,
  TextLink,
  NavLinks,
  Descriptor,
  ProjectsHeader,
  ProjectRow,
  ProjectColumn,
  HeaderImage,
  MobileProjects,
};
