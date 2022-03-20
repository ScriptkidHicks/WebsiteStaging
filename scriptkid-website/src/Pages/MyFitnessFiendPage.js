import styled from "styled-components";

import KettleHell from "../Images/KettleHell.png";
import Diagram from "../Images/diagram.png";
import Database from "../Images/Database.png";

function MyFitnessFiendPage() {
  return (
    <PageBody>
      <ContentRow MobileOrder="column">
        <ContentImage src={KettleHell} />
        <ContentColumn>
          <Title>My Fitness Fiend</Title>
          <Descriptor>
            My Fitness Fiend is a project I worked on with some friends of mine
            for CIS 422, intermediate software development. We were given free
            range to determine what kind of product we wanted to prototype, and
            we came up with an app to help with motivation in the gym. In our
            first meeting we came together around the idea of something similar
            to Tamagotchi, but for workouts. Having a habit of going to the gym
            can get you into a healthier lifestyle, but forming that habit can
            be difficult, and occassionally a skinner box can be used for good.
            <br />
            <br />
            <em>
              By the way, that little guy is named 'Kettle Hell', and he was the
              star of the show
            </em>
          </Descriptor>
        </ContentColumn>
      </ContentRow>
      <ContentRow MobileOrder="column-reverse">
        <ContentColumn>
          <Descriptor>
            We were given the choice about what platform to develop this
            software on, and we ended up deciding on a web app. We wanted users
            to be able to view the content either on their computers or their
            phone, and the app needed to be able to communicate with our server
            regularly, meaning that a phone based app was impracticle.
            <br />
            <br />
            This was the diagram I developed to illustrate the basic software
            arhitecture, and user flow through the website. By the end of the
            time we were allotted to develop the project we had deviated away
            from this design some, moving towards integrating a RESTful api in
            the backend. We used React to built the frontend, Flask for the
            backend, and a Mysql database hosted on Amazon for our information
            storage needs.
          </Descriptor>
        </ContentColumn>
        <ContentImage src={Diagram} />
      </ContentRow>
      <ContentRow MobileOrder="column">
        <ContentImage src={Database} />
        <ContentColumn>
          <Descriptor>
            <em>This is the database that Jordan Developed for us.</em>
            <Title>Technical Features</Title>
            <ul>
              <li>Session authentication with expiration</li>
              <li>RESTful API</li>
              <li>Flexible, mobile-first, interface design</li>
              <li>Email system for mailing users their daily workout</li>
              <li>
                Engine that generates custom workouts based on user needs and
                tools
              </li>
            </ul>
          </Descriptor>
        </ContentColumn>
      </ContentRow>
      <ContentRow>
        <ContentColumn></ContentColumn>
        <ContentColumn></ContentColumn>
      </ContentRow>
    </PageBody>
  );
}

export default MyFitnessFiendPage;

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

const ContentRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-bottom: 100px;

  @media screen and (max-width: 900px) {
    flex-direction: ${(props) => props.MobileOrder};
  }
`;

const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;

  @media screen and (max-width: 900px) {
    width: 90%;
  }
`;

const Title = styled.h2``;

const Descriptor = styled.p`
  font-size: 1.2em;
  line-height: 1.5;
`;

const ContentImage = styled.img`
  width: 40%;

  @media screen and (max-width: 900px) {
    width: 90%;
  }
`;
