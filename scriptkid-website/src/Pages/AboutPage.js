import { Link } from "react-router-dom";
import styled from "styled-components";

import { PageBody, NavLinks, TextLink } from "../components/DefaultComponents";

function AboutPage() {
  return (
    <PageBody>
      <TitleAndBar>
        <PageTitle>About Me</PageTitle>
      </TitleAndBar>
      <AboutParagraph>
        Till recently I worked for the University of Oregon Continuing Education
        department as a front end development with some additional work doing
        design. I completed my degree in computer information science with the
        University of Oregon early June 2022, and am now in the search for work
        either remote, or near Portland oregon.
        <br />
        <br />
        If you're looking for someone to do frontend development for you,
        especially someone who has experience with react, then I think I have
        something to offer your company. I have a good eye for design and user
        interface, as well as a solid understanding of software structure.
        Additionally, I have a experience working in backend, and in developing
        an API.
        <br />
        <br />
        If you are a company that creates or aides in the playing of tabletop
        roleplaying games, or if you create software that improves the quality
        of patient care in the medical field, then I would love to hear from
        you.
        <br />
        <br />
        Check out my projects on{" "}
        <TextLink text="here" endpoint="/ProjectsPage" />, and if you like what
        you see, reach out through my email for an interview.
      </AboutParagraph>
      <NavLinks
        elements={[
          { text: "Back to the landing page", endpoint: "/" },
          { text: "Check out other projects", endpoint: "/ProjectsPage" },
        ]}
      />
    </PageBody>
  );
}

export default AboutPage;

const PageTitle = styled.h2`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 900px) {
    align-items: center;
    margin-top: 60px;
  }
`;

const TitleAndBar = styled.div`
  width: 60%;
  margin-bottom: 20px;
`;

const AboutParagraph = styled.p`
  width: 80%;
  line-height: 2;
  font-size: 1.2em;
  margin-bottom: 60px;
`;
