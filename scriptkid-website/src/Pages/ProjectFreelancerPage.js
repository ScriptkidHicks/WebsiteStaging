import styled from "styled-components";

import IntroPic from "../Images/IntroFreelancer.png";
import FreelancerExtra from "../Images/FreelancerExtraExtra.png";
import Whale from "../Images/Whale.png";

import {
  PageBody,
  ContentColumn,
  ContentRow,
  Descriptor,
  TextLink,
  NavLinks,
} from "../components/DefaultComponents";

function ProjectFreelancerPage() {
  return (
    <PageBody>
      <IntroTitle>
        P R O J E C T<br />
        <br />F R E E L A N C E R
      </IntroTitle>
      <ContentRow MobileOrder="column">
        <IntroImage src={IntroPic} alt="Project Freelancer Intro" />
        <ContentColumn>
          <Descriptor>
            <strong>Project Freelancer</strong> was a game that a few friends
            and I built for our 410 game programming class at the U of O. We
            felt that there weren't enough games out there which involved
            gameplay focused on non-combat core mechanics, and were inspired by
            the recent release of Pokemon Snap. We decided to make a game about
            being a freelance photographer in space. The game came together
            around the relaxing experience of wandering through large sectors of
            space, beautiful ambiance, and stopping to photograph space whales.
          </Descriptor>
        </ContentColumn>
      </ContentRow>
      <ContentRow MobileOrder="column-reverse">
        <ContentColumn>
          <Descriptor>
            I'm grateful for the fantastic team I had to work with on this
            project.{" "}
            <TextLink text="Ash Chin" endpoint="https://github.com/ash-chin" />{" "}
            was responsible for programming the essential architecture of the
            game, managing the way we approached problems, and
            compressing/hosting the game. You can find her other game work at
            the github linked in her name.{" "}
            <TextLink
              text="Zac Carol"
              endpoint="https://github.com/zcarrol?tab=repositories"
            />{" "}
            Was responsible for creating the shaders we used, as well as
            programming the inregration of music into our game. You can find his
            other work at the github linked in his name. He has a special
            interest in parallel programming. I was respnsible for programming
            the movement in the game, inlcuding the player's ship, astral
            bodies, and the design of the AI in the game.
          </Descriptor>
        </ContentColumn>
        <IntroImage src={Whale} />
      </ContentRow>
      <ContentRow MobileOrder="column">
        <ContentColumn>
          <Descriptor>
            We built the game in unity, and it was good opportunity to engage
            both with a game development engine that didn't take an excessive
            amount of training to us, and also with the C# language. I'm
            particularly happy with the way that we handled the manner in which
            entities in this game detected the player. It was also a fantastic
            opportunity to practice working on a medium scope project with a
            team of other programmers. I'm glad I made friends out of the
            process.
          </Descriptor>
        </ContentColumn>
        <ContentColumn>
          <Descriptor>
            If you want to play the game you can find a link to it{" "}
            <TextLink
              text="here"
              endpoint="https://communistelk.itch.io/freelancer-beta"
            />
            , and if you want to look at the uncompiled code, you can check it
            out in the{" "}
            <TextLink
              endpoint="https://github.com/ash-chin/project-freelancer"
              text="github repo"
            />
            .
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

export default ProjectFreelancerPage;

const IntroTitle = styled.h1`
  text-align: center;
  margin-top: 100px;
`;

const IntroImage = styled.img`
  box-shadow: -10px 10px 10px black;
  border-radius: 20px;
  margin-bottom: 30px;
  width: 40%;

  @media screen and (max-width: 1200px) {
    width: 80%;
  }
`;
