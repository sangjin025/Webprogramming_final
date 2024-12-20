import React from "react";
import { Carousel } from "antd";
import "antd/dist/reset.css";
import styled from "styled-components";
import bukchonImg from "../../assets/images/bukchon.png";
import changdukgungImg from "../../assets/images/changdukgung.png";
import gyengbokgungImg from "../../assets/images/gyengbokgung.png";
import namdaemoonImg from "../../assets/images/namdaemoon.png";

const contentStyle = {
  height: "600px",
  width: "800px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  border: "1px solid blue",
  borderRadius: "25px",
};

const PicsCarousel = () => {
  return (
    <LayOut>
      <CarouselWrapper>
        <Carousel autoplay>
          <div>
            <img src={bukchonImg} alt="Bukchon" style={contentStyle} />
          </div>
          <div>
            <img
              src={changdukgungImg}
              alt="changdukgung"
              style={contentStyle}
            />
          </div>
          <div>
            <img
              src={gyengbokgungImg}
              alt="gyengbokgung"
              style={contentStyle}
            />
          </div>
          <div>
            <img src={namdaemoonImg} alt="namdaemoon" style={contentStyle} />
          </div>
        </Carousel>
      </CarouselWrapper>
    </LayOut>
  );
};

export default PicsCarousel;

const CarouselWrapper = styled.div`
  width: 800px;
  height: 600px;
`;

const LayOut = styled.div`
  display: flex;
  padding: 0px 100px;
`;
