import styled from "styled-components";

import EmailIcon from "../Images/EmailIcon.png";
import GitIcon from "../Images/GitIcon.png";
import MenuIcon from "../Images/MenuIcon.png";
import LinkedIn from "../Images/LinkedIn.png";
import { useState } from "react";

function HeaderBar() {
  const [menuShown, setMenuShown] = useState(false);

  function MenuToggle() {
    console.log("testy");
    console.log(menuShown);
    setMenuShown(!menuShown);
  }
  return (
    <Header>
      <NameTitle href="/">Programming Work by Tammas Hicks</NameTitle>
      <IconsDiv>
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
      </IconsDiv>
      <BurgerMenuButton
        src={MenuIcon}
        alt="burger menu icon"
        onClick={MenuToggle}
      />
      {menuShown && (
        <BurgerMenu>
          <BurgerItem
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ScriptkidHicks"
          >
            My Github
          </BurgerItem>
          <BurgerItem href="mailto: Tammashicks@gmail.com">Email Me</BurgerItem>
          <BurgerItem
            href="https://www.linkedin.com/in/tammas-hicks/"
            target="_blank"
            rel="noreferrer"
          >
            My Linkedin
          </BurgerItem>
          <BurgerItem href="./ProjectsPage">My Projects</BurgerItem>
          <BurgerItem href="./About">About Me</BurgerItem>
          <BurgerItem href="./">Main Page</BurgerItem>
        </BurgerMenu>
      )}
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
  box-shadow: -5px 0px 10px black;

  @media screen and (max-width: 460px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

const NameTitle = styled.a`
  margin-left: 20px;
  font-size: min(2em, 7vw);
  font-weight: bold;
  color: white;
  text-decoration: none;
`;

const HeaderIcon = styled.img`
  max-height: 60px;
  margin-right: 20px;

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

const BurgerMenu = styled.div`
  position: absolute;
  right: 0px;
  z-index: 99;
  top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #3e3e3e;
  height: 500px;
  width: 45vw;
  max-width: 100vw;
  min-width: 300px;
  border: 2px solid black;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: -1px 1px 5px black;

  @media screen and (min-width: 800px) {
    display: none !important;
  }
`;

const BurgerItem = styled.a`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: ease all 0.5s;
  font-size: 25px;
  text-decoration: none;
  color: white;

  :hover {
    background-color: black;
  }
`;

const IconsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  width: 30%;
  margin-left: 20px;
`;
