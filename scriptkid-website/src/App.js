import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import HeaderBar from "./components/HeaderBar";
import FooterBar from "./components/FooterBar";

import AboutPage from "./Pages/AboutPage";
import LandingPage from "./Pages/LandingPage";
import AneurysmVisItPage from "./Pages/AneurysmVisItPage";
import MyFitnessFiendPage from "./Pages/MyFitnessFiendPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ProjectFreelancerPage from "./Pages/ProjectFreelancerPage";
import TravelerPage from "./Pages/TravelerPage";

function App() {
  return (
    <Mainbody>
      <HeaderBar />
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/AneurysmVisIt" element={<AneurysmVisItPage />} />
        <Route path="/MyFitnessFiend" element={<MyFitnessFiendPage />} />
        <Route path="/ProjectsPage" element={<ProjectsPage />} />
        <Route path="/ProjectFreelancer" element={<ProjectFreelancerPage />} />
        <Route path="/Traveler" element={<TravelerPage />} />
      </Routes>
      <FooterBar />
    </Mainbody>
  );
}

export default App;

const Mainbody = styled.div``;
