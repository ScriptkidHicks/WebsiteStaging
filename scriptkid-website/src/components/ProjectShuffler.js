import styled from "styled-components";
import ProjectSlide from "./ProjectSlide";
import RightArrow from "../Images/Arrow_Right.png";
import LeftArrow from "../Images/Arrow_Left.png";
import { useEffect, useState } from "react";

function ProjectShuffler(props) {
  const [modalIndex, setModalIndex] = useState(0);
  const [target, setTarget] = useState(props.elements[0].targetPage);
  const [backgroundImage, setBackgroundImage] = useState(
    props.elements[0].backgroundImage
  );
  const [title, setTitle] = useState(props.elements[0].title);
  const listSize = props.elements.length;
  let temp = 0;

  function changePointer(changeAmount) {
    temp = (modalIndex + changeAmount) % listSize;
    if (temp < 0) {
      setModalIndex(listSize + temp);
    } else {
      setModalIndex(temp);
    }
  }

  useEffect(() => {
    setTarget(props.elements[modalIndex].targetPage);
    setBackgroundImage(props.elements[modalIndex].backgroundImage);
    setTitle(props.elements[modalIndex].title);
  }, [modalIndex]);

  return (
    <ProjectRails>
      <GuideArrow src={LeftArrow} onClick={() => changePointer(-1)} />
      <ProjectSlide
        title={title}
        targetPage={target}
        backgroundImage={backgroundImage}
      />
      <GuideArrow src={RightArrow} onClick={() => changePointer(1)} />
    </ProjectRails>
  );
}

const ProjectRails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 600px;
`;

const GuideArrow = styled.img`
  width: 100px;
`;

export default ProjectShuffler;
