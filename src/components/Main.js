import React from "react";
import styled from "styled-components";
import PicsCarousel from "./MainPageComponents/PicsCarousel";
import MenuBar from "./MainPageComponents/MenuBar";
import Geolocation from "../components/WeatherLocation/Geolocation";

export default function Main() {
  return (
    <LayOut>
      <Title>
        이 <span style={{ color: "#A3AAEA", fontWeight: "bold" }}>여행지</span>
        는 어땠지?
      </Title>
      <RowContainer>
        <PicsCarousel />
        <MenuBar />
      </RowContainer>
      <WeatherRegion>
        <Geolocation />
      </WeatherRegion>
    </LayOut>
  );
}

const LayOut = styled.div`
  display: flex;
  padding: 0px;
  margin: 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  font-size: 128px;
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */
  padding: 50px 0px 0px 0px;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 50px 25px 50px 25px;
`;

const WeatherRegion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 100px;
  border: 0px;
  border-radius: 25px;
`;
