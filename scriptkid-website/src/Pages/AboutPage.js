import styled from "styled-components";

function AboutPage() {
  return (
    <PageBody>
      <TitleAndBar>
        <PageTitle>About Me</PageTitle>
      </TitleAndBar>
      <AboutParagraph>
        Currently I work for the University of Oregon Continuing Education
        department as a front end development with a secondary role as a
        designer. I'm finishing my degree in Computer Information Science this
        coming Spring (June 2022), after which I'll be looking for work that
        allows me to live in portland Oregon. I'm open to companies based out of
        Portland, or remote work.
        <br />
        <br />
        If you're looking for someone to do frontend development for you,
        especially someone who has experience with react, and someone
        comfortable working on back end projects, then I think I have something
        to offer your company. I have a good eye for design and user interface,
        as well as a solid understanding of software structure.
        <br />
        <br />
        Check out my projects on here, and if you like what you see, reach out
        through my email for a resume or interview.
      </AboutParagraph>
    </PageBody>
  );
}

export default AboutPage;

const PageBody = styled.div`
  min-height: 83vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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

const HeaderBar = styled.hr`
  margin: 0;
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;
`;

const AboutParagraph = styled.p`
  width: 80%;
  line-height: 2;
  font-size: 1.2em;
  margin-bottom: 60px;
`;
