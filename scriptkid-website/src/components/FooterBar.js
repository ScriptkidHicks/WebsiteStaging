import styled from "styled-components";

import EmailIcon from "../Images/EmailIcon.png";
import GitIcon from "../Images/GitIcon.png";
import LinkedIn from "../Images/LinkedIn.png";

function FooterBar() {
  return (
    <Footer>
      <Invitation>
        If you're looking for a front end developer, or someone to work on AI,
        please check out my Github, and reach out through my email
      </Invitation>
      <IconLinks>
        <a>
          <Icon src={EmailIcon} alt="email icon" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/ScriptkidHicks"
          >
          <Icon src={GitIcon} alt="git icon" />
        </a>
        <a 
          href="https://www.linkedin.com/in/tammas-hicks/"
          target="_blank"
          rel="noreferrer"
            >
          <Icon src={LinkedIn} alt="linkedin icon" />
        </a>
      </IconLinks>
      <EmailTitle>TammasHicks@gmail.com</EmailTitle>
    </Footer>
  );
}

export default FooterBar;

const Footer = styled.div`
  background-color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  min-height: 60px;
`;

const IconLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 30%;

  @media screen and (max-width: 500px) {
    width: 70%;
  }
`;

const Invitation = styled.h4`
  width: 30%;
  margin-left: 20px;
  text-align: center;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const EmailTitle = styled.h2`
  width: 30%;
  display: flex;
  justify-content: center;
  margin-right: 20px;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Icon = styled.img`
  height: 30px;
`;
