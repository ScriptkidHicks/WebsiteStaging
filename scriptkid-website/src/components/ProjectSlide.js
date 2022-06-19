import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function ProjectSlide(props) {
  const Navigate = useNavigate();

  function LoadTarget(targetPage) {
    console.log(targetPage);
    Navigate(targetPage);
  }

  return (
    <Slide
      backgroundImage={props.backgroundImage}
      onClick={() => LoadTarget(props.targetPage)}
    >
      <h1>{props.title}</h1>
    </Slide>
  );
}

export default ProjectSlide;

const Slide = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  transition: ease-in-out all 0.6s;
  box-shadow: 5px 5px 10px black;

  :hover {
    width: 450px;
    height: 450px;
    border-radius: 10%;
    box-shadow: 10px 10px 20px black;
  }

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0);
    background: rgba(0, 0, 0, 0);
    border-radius: 40px;
    transition: ease-in-out all 0.6s;
    padding: 30px;
    width: 60%;
    text-align: center;
  }
  :hover :first-child {
    color: rgba(255, 255, 255, 1);
    background: rgba(0, 0, 0, 0.4);
    border-radius: 40px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.8);
  }
`;
