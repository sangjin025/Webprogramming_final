import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import SeoulPage from "./components/pages/SeoulPage";
import BusanPage from "./components/pages/BusanPage";
import DaeguPage from "./components/pages/DaeguPage";
import DaejeonPage from "./components/pages/DaejeonPage";
import GangSokPage from "./components/pages/GangSokPage";
import JejuPage from "./components/pages/JejuPage";
import JeonjuPage from "./components/pages/JeonjuPage";
import SuncheonPage from "./components/pages/SuncheonPage";
import SeoulPostDetail from "./components/PostDetail/SeoulPostDetail";
import BusanPostDetail from "./components/PostDetail/BusanPostDetail";
import DaeguPostDetail from "./components/PostDetail/DaeguPostDetail";
import DaejeonPostDetail from "./components/PostDetail/DaejeonPostDetail";
import GangSokPostDetail from "./components/PostDetail/GangSokPostDetail";
import JejuPostDetail from "./components/PostDetail/JejuPostDetail";
import JeonjuPostDetail from "./components/PostDetail/JeonjuPostDetail";
import SuncheonPostDetail from "./components/PostDetail/SuncheonPostDetail";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import DoHyeon from "./fonts/DoHyeon-Regular.ttf";

const GlobalStyles = createGlobalStyle`
    @font-face {
    font-family: "DoHyeon";
    src: url(${DoHyeon}) format("truetype");
  }
  body {
    font-family: "DoHyeon", sans-serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/seoul" element={<SeoulPage />} />
        <Route path="/busan" element={<BusanPage />} />
        <Route path="/daegu" element={<DaeguPage />} />
        <Route path="/daejeon" element={<DaejeonPage />} />
        <Route path="/gangsok" element={<GangSokPage />} />
        <Route path="/jeju" element={<JejuPage />} />
        <Route path="/jeonju" element={<JeonjuPage />} />
        <Route path="/suncheon" element={<SuncheonPage />} />

        <Route path="/seoul/:id" element={<SeoulPostDetail />} />
        <Route path="/busan/:id" element={<BusanPostDetail />} />
        <Route path="/daegu/:id" element={<DaeguPostDetail />} />
        <Route path="/daejeon/:id" element={<DaejeonPostDetail />} />
        <Route path="/gangsok/:id" element={<GangSokPostDetail />} />
        <Route path="/jeju/:id" element={<JejuPostDetail />} />
        <Route path="/jeonju/:id" element={<JeonjuPostDetail />} />
        <Route path="/suncheon/:id" element={<SuncheonPostDetail />} />
      </Routes>
    </>
  );
}

export default App;
