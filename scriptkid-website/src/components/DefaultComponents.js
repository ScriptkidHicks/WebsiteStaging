import styled from "styled-components";

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
      <NavigationLink href="/about">Check out other projects</NavigationLink>
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

export { PageBody, Project, ContentColumn, ContentRow, TextLink, NavLinks };
