import styled from "styled-components";

import KettleHell from "../Images/KettleHell.png";
import Diagram from "../Images/diagram.png";
import Database from "../Images/Database.png";

import {
  PageBody,
  ContentColumn,
  ContentRow,
  TextLink,
  NavLinks,
  Descriptor,
  ContentImage,
} from "../components/DefaultComponents";

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
            <em>This is the database that Jordan developed for us.</em>
            <Title>Technical Features</Title>
            <ul>
              <li>
                Session authentication with expiration
                <br />
                <ul>
                  <li>Used JWT to determine login</li>
                </ul>
              </li>
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
      <ContentRow MobileOrder="column">
        <ContentColumn>
          <Descriptor>
            I can't emphasize enough how grateful I am for the amazing team I
            had on this project.{" "}
            <TextLink
              endpoint="https://github.com/jssmith9876"
              text="Jordan Smith"
            />{" "}
            was responsible for creating the database manager, the API, and
            managing the backend.{" "}
            <TextLink
              endpoint="https://github.com/doughnut187"
              text="Thomas Joyce"
            />{" "}
            was responsible for developing the email manager, the engine which
            created workouts for users, and the content of the workouts
            themselves.{" "}
            <TextLink endpoint="https://github.com/ncotta" text="Nik Cotta" />{" "}
            was responsible for creating the python implementation of the
            fitness fiends themselves.{" "}
            <TextLink text="Ash Chin" endpoint="https://github.com/ash-chin" />{" "}
            was our incredible project manager who kept us all on task,
            contributed to UI design, and gave a lot of thought to the way we
            structured the software. I was responsible for the development of
            the frontend, and contributed to the UI design.
            <br />
            <br />
            <em>
              Special thanks go to artists{" "}
              <TextLink
                endpoint="https://www.kristelbugayong.com/"
                text="Krystal Bugayong"
              />{" "}
              and{" "}
              <TextLink
                text="Pencil Equiped"
                endpoint="https://pencilequipped.artstation.com/"
              />{" "}
              for their creation of the fitness fiends that we all loved.
            </em>
          </Descriptor>
        </ContentColumn>
        <ContentColumn>
          <Descriptor>
            You can find the github repo of our work on the project{" "}
            <TextLink
              text="here"
              endpoint="https://github.com/ScriptkidHicks/My_Fitness_Fiend"
            />
            . The 'Deployment' branch contains our most recent work on the
            project.
          </Descriptor>
          <NavLinks
            elements={[
              { text: "Back to the landing page", endpoint: "/" },
              { text: "Check out other projects", endpoint: "/ProjectsPage" },
            ]}
          />
        </ContentColumn>
      </ContentRow>
    </PageBody>
  );
}

export default MyFitnessFiendPage;

const Title = styled.h2``;
