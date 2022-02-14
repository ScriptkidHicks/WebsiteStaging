import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import HeaderBar from "./components/HeaderBar";
// tbqh not sure I'm going to need a footer bar
import FooterBar from "./components/FooterBar";

import AboutPage from "./Pages/AboutPage";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <Mainbody>
      <HeaderBar />
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/About" element={<AboutPage />} />
      </Routes>
    </Mainbody>
  );
}

export default App;

const Mainbody = styled.div`
  background-color: black;
`;
