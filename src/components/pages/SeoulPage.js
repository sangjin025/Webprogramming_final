import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MenuBar from "../MainPageComponents/MenuBar";
import { data } from "./../datas/SeoulData";

export default function SeoulPage() {
  return (
    <LayOut>
      <RightWrapper>
        <RegionName> 서울 </RegionName>
        <MenuBar />
      </RightWrapper>
      <LeftWrapper>
        {data.map((item) => (
          <Link to={`/seoul/${item.id}`} key={item.id}>
            <Item key={item.id}>
              <img src={item.imgSrc} alt={item.name} />
              <p>{item.name}</p>
            </Item>
          </Link>
        ))}
      </LeftWrapper>
    </LayOut>
  );
}

const LayOut = styled.div`
  display: flex;
  padding: 100px;
  justify-content: center;
  align-items: flex-start;
  /* align-items: center; */ // 서울, 카테고리는 위에 있게

  a {
    text-decoration: none;
    border: 0px;
    color: black;
  }
`;

const RightWrapper = styled.div`
  padding: 0px 200px 0px 0px;
`;
const RegionName = styled.div`
  font-size: 128px;
  padding: 0px 0px 50px 0px;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 48%; /* 한 줄에 2개씩 배치하기 위해 50%로 설정 */
  padding: 10px;
  text-align: center;

  img {
    width: 400px;
    height: 300px;
    object-fit: cover;
    margin-bottom: 10px;
    border-radius: 20px;
  }

  p {
    margin: 0;
    font-size: 28px;
  }

  @media (max-width: 1600px) {
    width: 100%; /* 화면이 작아지면 1개씩 배치 */
  }
`;

// const data = [
//   { id: 1, name: "북촌한옥마을", imgSrc: bukchonImg },
//   { id: 2, name: "창덕궁", imgSrc: changdukgungImg },
//   { id: 3, name: "경복궁", imgSrc: gyengbokgungImg },
//   { id: 4, name: "남대문시장", imgSrc: namdaemoonImg },
// ];
