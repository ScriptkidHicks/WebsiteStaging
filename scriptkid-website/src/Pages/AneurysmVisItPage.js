import styled from "styled-components";

function AneurysmVisItPage() {
  return (
    <PageBody>
      <IframeAndLinks>
        <AneurysmVid
          src="https://www.youtube.com/embed/rGB3E8xr6Ug"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <Links>
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
            <strong>
              <a
                style={{ textDecoration: "none", color: "#4042bC" }}
                href="https://github.com/ScriptkidHicks/AneurysmRendering"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
            </strong>
            . The project involved some coding, though mostly this was to create
            various scripts to record the movie. The majority of the work
            focused on interpreting the data, and making decisions about how to
            visualize the data. You can view the full movie{" "}
            <strong>
              <a
                style={{ textDecoration: "none", color: "#4042bC" }}
                rel="noreferrer"
                target="_blank"
                href="https://www.youtube.com/watch?v=rGB3E8xr6Ug&t=61s&ab_channel=TammasHicks"
              >
                here
              </a>
            </strong>
            .
          </Description>
          <NavLinks>
            <NavigationLink href="/">Back to the landing page</NavigationLink>
            <NavigationLink href="/about">
              Check out other projects
            </NavigationLink>
          </NavLinks>
        </Links>
      </IframeAndLinks>
    </PageBody>
  );
}

export default AneurysmVisItPage;

const PageBody = styled.div`
  max-width: 1900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
  min-height: 74vh;
`;

const IframeAndLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;

  @media screen and (max-width: 1250px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Links = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1250px) {
    width: 80%;
  }
`;

const AneurysmVid = styled.iframe`
  border: none;
  border-radius: 20px;
  width: 44vw;
  height: 30vw;

  @media screen and (max-width: 1250px) {
    margin-bottom: 40px;
    width: 88vw;
    height: 60vw;
  }
`;

const Description = styled.p`
  font-size: 1.2em;
  line-height: 2;
`;

const NavLinks = styled.div`
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

const NavigationLink = styled.a`
  color: white;
  text-decoration: none;
  padding: 20px;
  transition: ease all 0.6s;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4% / 50%;
  font-size: 1.3em;

  :hover {
    box-shadow: 5px 5px 5px black;
  }
`;
