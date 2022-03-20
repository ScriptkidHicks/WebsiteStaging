import styled from "styled-components";

const NavigationLink = styled.a`
  color: white;
  text-decoration: none;
  padding: 20px;
  transition: ease all 0.6s;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4% / 50%;
  font-size: 1.3em;

  :hover {
    box-shadow: 5px 5px 5px black;
  }
`;

const PageBody = styled.div`
  max-width: 1900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 83vh;
`;

export { NavigationLink, PageBody };
