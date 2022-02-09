import styled from "styled-components";

import InstaIcon from "../Images/InstaIcon.png";
import EmailIcon from "../Images/EmailIcon.png";
import GitIcon from "../Images/GitIcon.png";
import MenuIcon from "../Images/MenuIcon.png";
import LinkedIn from "../Images/LinkedIn.png";

function HeaderBar() {
  return (
    <Header>
      <NameTitle>Programming Work by Tammas Hicks</NameTitle>
      <a
        href="https://www.linkedin.com/in/tammas-hicks/"
        target="_blank"
        rel="noreferrer"
      >
        <HeaderIcon src={LinkedIn} alt="Linked In Icon" />
      </a>
      <a href="mailto: Tammashicks@gmail.com">
        <HeaderIcon src={EmailIcon} alt="emailIcon" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/ScriptkidHicks"
      >
        <HeaderIcon src={GitIcon} alt="git icon" />
      </a>
      <BurgerMenuButton src={MenuIcon} alt="burger menu icon" />
    </Header>
  );
}

export default HeaderBar;

const Header = styled.div`
  background-color: black;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 100px;
  align-items: center;
  justify-content: space-around;
`;

const NameTitle = styled.h2`
  margin-left: 20px;
  font-size: min(2em, 7vw);
`;

const HeaderIcon = styled.img`
  max-height: 60px;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const BurgerMenuButton = styled.img`
  max-height: 50%;
  margin-right: 20px;
  @media screen and (min-width: 800px) {
    display: none;
  }
`;

const BurgerMenuIcon = styled.img``;
