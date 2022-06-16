import styled from "styled-components";
import TravlerHeader from "../Images/TravlerHeader.png";
import Draggable from "react-draggable";
import TravlerIntro from "../Images/TravlerIntro.png";

import {
  PageBody,
  HeaderImage,
  ContentRow,
  ContentColumn,
  Descriptor,
  ContentImage,
} from "../components/DefaultComponents";

function TravelerPage() {
  return (
    <div>
      <HeaderImage
        id="DragableHeader"
        background={TravlerHeader}
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
        }}
      >
        <Draggable>
          <HeaderWrapper>
            <Headertitle>Traveler</Headertitle>
          </HeaderWrapper>
        </Draggable>
      </HeaderImage>
      <PageBody>
        <ContentRow>
          <ContentColumn>
            <Descriptor>weeeee</Descriptor>
          </ContentColumn>
          <ContentImage
            src={TravlerIntro}
            style={{
              borderRadius: "40px",
            }}
          />
        </ContentRow>
      </PageBody>
    </div>
  );
}

export default TravelerPage;

const Headertitle = styled.h1`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  padding: 30px;
  cursor: move;
  color: #0d1117;
  font-size: 4em;
  transition: ease-in 0.4s;
  :hover {
    background-color: rgba(255, 255, 255, 0.3);
    color: white;
  }
`;

const HeaderWrapper = styled.div`
  margin-right: 200px;

  @media screen and (max-width: 500px) {
    margin-right: 50px;
  }
`;
